/**
 * ============================================================================
 * KINGU RAMEN — HERO DARUMA MASCOT RIG & GSAP ROLLING ENTRANCE COMPONENT
 * ============================================================================
 * Assembles the supplied transparent raster PNG cutouts from:
 *   assets/mascot/kingu-mascot-asset-kit/parts/
 * into the rounded Daruma silhouette (no legs, no feet, no waving action;
 * arms tucked close to the body) on a shared 320x290 coordinate system.
 *
 * Container Hierarchy:
 *   .mascot-root (horizontal travel x)
 *     ├── .mascot-part--shadow (ground-shadow.png — stays flat on ground outside rotating group)
 *     └── .mascot-settle-pivot (Daruma rounded-base pivot for peek lean & 3–4s settling wobble)
 *           └── .mascot-roll-group (geometric center pivot for 1.5–3s -360deg CCW roll)
 *                 ├── .mascot-torso-rig (body.png + tucked arm-left-rest.png / arm-right-rest.png)
 *                 └── .mascot-head-rig (head-base.png + clipped eye sockets, irises & closed-eye blinks)
 * ============================================================================
 */

(function () {
    'use strict';

    const ASSET_BASE = 'assets/mascot/kingu-mascot-asset-kit/parts';

    // Scale from 1017x1078 reference space to 320x290 rig canvas
    const S_BODY = 0.226;
    const S_HEAD = 2.75 * S_BODY; // 0.6215
    const S_ARM = 1.94 * S_BODY;  // 0.43844

    const BODY_W = 1003 * S_BODY; // 226.68
    const BODY_H = 1058 * S_BODY; // 239.11
    const HEAD_W = 284 * S_HEAD;  // 176.51
    const HEAD_H = 257 * S_HEAD;  // 159.73

    const ARM_LEFT_CLIP_POLYGON = [
        '42% 2%', '98% 2%', '98% 99%', '4% 99%', '4% 62%', '18% 32%'
    ].join(', ');

    const ARM_RIGHT_CLIP_POLYGON = [
        '2% 2%', '58% 2%', '82% 32%', '96% 62%', '96% 99%', '2% 99%'
    ].join(', ');

    // 26-point clip polygon tracing through the solid yellow band around the face's
    // black outline in head-base.png so it blends seamlessly onto body.png's yellow front
    // while allowing independent head tilts and nods without any neck or crown seam.
    const HEAD_FACE_CLIP_POLYGON = [
        '25% 21.5%', '34% 19.5%', '43% 21.5%', '50% 23.5%',
        '57% 21.5%', '66% 19.5%', '75% 21.5%', '82.2% 29%',
        '88.2% 40%', '91.8% 51%', '87.5% 60%', '81.5% 66%',
        '83.5% 78%', '80% 86.5%', '74% 91.5%', '64% 95.5%',
        '50% 96.8%', '36% 95.5%', '26% 91.5%', '20% 86.5%',
        '16.5% 78%', '18.5% 66%', '12.5% 60%', '8.2% 51%',
        '11.8% 40%', '17.8% 29%'
    ].join(', ');

    /**
     * Canonical Daruma rig configuration on a shared 320 x 290 coordinate canvas.
     * Every part preserves its exact exported PNG aspect ratio.
     * "left" and "right" always refer to the viewer's perspective.
     */
    const KINGU_MASCOT_RIG = {
        canvas: {
            width: 320,
            height: 290,
            centerX: 160
        },
        rollGroup: {
            x: 160 - BODY_W / 2, // 46.66
            y: 16,
            width: BODY_W,       // 226.68
            height: BODY_H,      // 239.11
            origin: '50% 50%'    // Exact geometric center for 1.5–3s -360deg CCW roll
        },
        settlePivot: {
            origin: '160px 248px' // Bottom-center Daruma base pivot for 3–4s left-right wobble
        },
        parts: {
            groundShadow: {
                file: `${ASSET_BASE}/ground-shadow.png`,
                naturalWidth: 262,
                naturalHeight: 76,
                x: 160 - 212 / 2,        // 54
                y: 223,
                width: 212,
                height: 212 * (76 / 262), // 61.50
                origin: '50% 50%',
                zIndex: 1
            },
            body: {
                file: `${ASSET_BASE}/body.png`,
                naturalWidth: 1003,
                naturalHeight: 1058,
                x: 0,
                y: 0,
                width: BODY_W,  // 226.68
                height: BODY_H, // 239.11
                origin: '50% 88%',
                zIndex: 2
            },
            headGroup: {
                x: (BODY_W - HEAD_W) / 2, // 25.09 inside rollGroup
                y: 1.5,                   // 1.5 inside rollGroup
                width: HEAD_W,            // 176.51
                height: HEAD_H,           // 159.73
                origin: '50% 78%',        // Lower-face pivot for curious tilt, nod & look
                zIndex: 4
            },
            headBase: {
                file: `${ASSET_BASE}/head-base.png`,
                naturalWidth: 284,
                naturalHeight: 257,
                x: 0,
                y: 0,
                width: HEAD_W,
                height: HEAD_H
            },
            // Eye openings inside headGroup coordinate space (head-base scaled by S_HEAD = 0.6215):
            // In head-base.png (284x257):
            //   left eye white interior:  cx=90.5, cy=129.0, rx=29.5, ry=23.5
            //   right eye white interior: cx=195.5, cy=129.0, rx=28.5, ry=23.5
            eyeSocketLeft: {
                cx: 90.5 * S_HEAD,  // 56.25
                cy: 129.0 * S_HEAD, // 80.17
                rx: 29.5 * S_HEAD,  // 18.33
                ry: 23.5 * S_HEAD   // 14.61
            },
            eyeSocketRight: {
                cx: 195.5 * S_HEAD, // 121.50
                cy: 129.0 * S_HEAD, // 80.17
                rx: 28.5 * S_HEAD,  // 17.71
                ry: 23.5 * S_HEAD   // 14.61
            },
            eyeLeftOpen: {
                file: `${ASSET_BASE}/eye-left-open.png`,
                naturalWidth: 230,
                naturalHeight: 166,
                width: 230 * 0.37 * S_HEAD,  // 52.89
                height: 166 * 0.37 * S_HEAD  // 38.17
            },
            eyeRightOpen: {
                file: `${ASSET_BASE}/eye-right-open.png`,
                naturalWidth: 233,
                naturalHeight: 165,
                width: 233 * 0.37 * S_HEAD,  // 53.58
                height: 165 * 0.37 * S_HEAD  // 37.94
            },
            irisLeft: {
                file: `${ASSET_BASE}/iris-left.png`,
                naturalWidth: 155,
                naturalHeight: 155,
                width: 155 * 0.485 * S_HEAD, // 46.72
                height: 155 * 0.485 * S_HEAD,// 46.72
                restOffsetX: -1.8,
                restOffsetY: 0.9
            },
            irisRight: {
                file: `${ASSET_BASE}/iris-right.png`,
                naturalWidth: 153,
                naturalHeight: 153,
                width: 153 * 0.485 * S_HEAD, // 46.12
                height: 153 * 0.485 * S_HEAD,// 46.12
                restOffsetX: -1.8,
                restOffsetY: 0.9
            },
            eyeLeftClosed: {
                file: `${ASSET_BASE}/eye-left-closed.png`,
                naturalWidth: 228,
                naturalHeight: 163,
                width: 228 * 0.37 * S_HEAD,  // 52.43
                height: 163 * 0.37 * S_HEAD  // 37.48
            },
            eyeRightClosed: {
                file: `${ASSET_BASE}/eye-right-closed.png`,
                naturalWidth: 230,
                naturalHeight: 164,
                width: 230 * 0.37 * S_HEAD,  // 52.89
                height: 164 * 0.37 * S_HEAD  // 37.71
            },
            // Tucked resting arms positioned close to the lower Daruma body (hands resting on front lower belly)
            armLeftRest: {
                file: `${ASSET_BASE}/arm-left-rest.png`,
                naturalWidth: 176,
                naturalHeight: 256,
                x: (BODY_W / 2 - 74.5) - (176 * S_ARM) / 2, // 0.27 inside rollGroup
                y: 172 - (256 * S_ARM) / 2,                 // 115.88 inside rollGroup
                width: 176 * S_ARM,                         // 77.17
                height: 256 * S_ARM,                        // 112.24
                baseRotation: -38,                          // Tucked inward onto lower-left belly
                origin: '50% 50%',
                zIndex: 5
            },
            armRightRest: {
                file: `${ASSET_BASE}/arm-right-rest.png`,
                naturalWidth: 172,
                naturalHeight: 258,
                x: (BODY_W / 2 + 74.5) - (172 * S_ARM) / 2, // 150.13 inside rollGroup
                y: 172 - (258 * S_ARM) / 2,                 // 115.44 inside rollGroup
                width: 172 * S_ARM,                         // 75.41
                height: 258 * S_ARM,                        // 113.12
                baseRotation: 38,                           // Tucked inward onto lower-right belly
                origin: '50% 50%',
                zIndex: 5
            }
        }
    };

    class KinguMascotHero {
        constructor(mountSelector = '#kingu-mascot-rig') {
            this.mount = document.querySelector(mountSelector);
            if (!this.mount) return;

            this.heroSection = document.getElementById('hero');
            this.clipStage = document.getElementById('mascot-entrance-clip');
            this.rigConfig = KINGU_MASCOT_RIG;
            this.els = {};

            this.hasPlayedIntro = false;
            this.isIntroRunning = false;
            this.isIdleActive = false;
            this.isHeroVisible = true;
            this.isDocumentVisible = !document.hidden;

            this.reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
            this.prefersReducedMotion = this.reduceMotionQuery.matches;

            this.introTl = null;
            this.breathingTl = null;
            this.blinkCall = null;
            this.headTiltCall = null;
            this.activeBlinkTl = null;
            this.activeTiltTl = null;

            this.init();
        }

        async init() {
            this.buildDOM();
            this.updateResponsiveScale();
            await this.preloadImages();

            // Set initial state based on reduced-motion preference
            if (this.prefersReducedMotion) {
                this.setRestingPoseImmediate();
            } else {
                this.setPrePeekPoseImmediate();
            }

            this.mount.classList.add('is-ready');
            this.bindEvents();
            this.setupVisibilityObserver();
        }

        buildDOM() {
            const p = this.rigConfig.parts;
            const c = this.rigConfig.canvas;
            const rg = this.rigConfig.rollGroup;
            const sp = this.rigConfig.settlePivot;

            this.mount.innerHTML = '';
            this.mount.style.width = `${c.width}px`;
            this.mount.style.height = `${c.height}px`;

            const el = (tag, className, styles = {}, attrs = {}) => {
                const node = document.createElement(tag);
                if (className) node.className = className;
                Object.assign(node.style, styles);
                for (const [k, v] of Object.entries(attrs)) {
                    node.setAttribute(k, v);
                }
                return node;
            };

            const partImg = (className, spec, extraStyles = {}) => {
                return el('img', `mascot-part ${className}`, {
                    left: `${spec.x ?? 0}px`,
                    top: `${spec.y ?? 0}px`,
                    width: `${spec.width}px`,
                    height: `${spec.height}px`,
                    transformOrigin: spec.origin || '50% 50%',
                    zIndex: spec.zIndex ?? 1,
                    ...extraStyles
                }, {
                    src: spec.file,
                    alt: '',
                    draggable: 'false',
                    decoding: 'async'
                });
            };

            // 1. Whole-character horizontal travel container (.mascot-root)
            const root = el('div', 'mascot-root', {
                width: `${c.width}px`,
                height: `${c.height}px`
            });

            // Ground shadow — stays OUTSIDE the rotating group inside .mascot-root
            // so it follows the mascot horizontally while remaining flat on the ground.
            const shadow = partImg('mascot-part--shadow', p.groundShadow);

            // 2. Settle pivot container (.mascot-settle-pivot: pivots at rounded bottom base
            //    for 0–1.5s peek lean and 3–4s left-right settling wobble without jumping)
            const settlePivot = el('div', 'mascot-settle-pivot', {
                width: `${c.width}px`,
                height: `${c.height}px`,
                transformOrigin: sp.origin,
                zIndex: 2
            });

            // 3. Roll group (.mascot-roll-group: rotates the entire assembled mascot
            //    as one group around its geometric center during the 1.5–3s -360deg CCW roll)
            const rollGroup = el('div', 'mascot-roll-group', {
                left: `${rg.x}px`,
                top: `${rg.y}px`,
                width: `${rg.width}px`,
                height: `${rg.height}px`,
                transformOrigin: rg.origin,
                zIndex: 3
            });

            // 4. Torso rig (.mascot-torso-rig: holds rounded Daruma body.png + tucked arms)
            const torsoRig = el('div', 'mascot-torso-rig', {
                left: '0px',
                top: '0px',
                width: `${rg.width}px`,
                height: `${rg.height}px`,
                transformOrigin: p.body.origin,
                zIndex: 2
            });
            const bodyImg = partImg('mascot-part--body', p.body);

            // Tucked arms layer (arms close to lower Daruma body, no waving arms)
            const armsLayer = el('div', 'mascot-arms-layer', {
                width: `${rg.width}px`,
                height: `${rg.height}px`,
                zIndex: 5
            });
            const armLeftRest = partImg('mascot-part--arm-left-rest', p.armLeftRest, {
                clipPath: `polygon(${ARM_LEFT_CLIP_POLYGON})`
            });
            const armRightRest = partImg('mascot-part--arm-right-rest', p.armRightRest, {
                clipPath: `polygon(${ARM_RIGHT_CLIP_POLYGON})`
            });
            armsLayer.append(armLeftRest, armRightRest);

            torsoRig.append(bodyImg, armsLayer);

            // 5. Head rig (.mascot-head-rig: groups face + clipped eye sockets, irises & closed-eyes)
            const headRig = el('div', 'mascot-head-rig', {
                left: `${p.headGroup.x}px`,
                top: `${p.headGroup.y}px`,
                width: `${p.headGroup.width}px`,
                height: `${p.headGroup.height}px`,
                transformOrigin: p.headGroup.origin,
                zIndex: 4
            });
            const headBase = partImg('mascot-part--head-base', p.headBase, {
                zIndex: 1,
                clipPath: `polygon(${HEAD_FACE_CLIP_POLYGON})`
            });

            // Left Eye Socket (clipped to exact left eye white interior in head-base)
            const sl = p.eyeSocketLeft;
            const eyeSocketLeft = el('div', 'mascot-eye-socket mascot-eye-socket--left', {
                left: `${sl.cx - sl.rx}px`,
                top: `${sl.cy - sl.ry}px`,
                width: `${sl.rx * 2}px`,
                height: `${sl.ry * 2}px`,
                zIndex: 2
            });
            const eyeLeftOpen = partImg('mascot-part--eye-left-open', {
                ...p.eyeLeftOpen,
                x: sl.rx - p.eyeLeftOpen.width / 2,
                y: sl.ry - p.eyeLeftOpen.height / 2
            }, { zIndex: 1 });
            const irisLeft = partImg('mascot-part--iris-left', {
                ...p.irisLeft,
                x: sl.rx + p.irisLeft.restOffsetX - p.irisLeft.width / 2,
                y: sl.ry + p.irisLeft.restOffsetY - p.irisLeft.height / 2
            }, {
                zIndex: 2,
                clipPath: 'circle(39.5% at 50% 50%)'
            });
            const eyeLeftClosed = partImg('mascot-part--eye-left-closed', {
                ...p.eyeLeftClosed,
                x: sl.rx - p.eyeLeftClosed.width / 2,
                y: sl.ry - p.eyeLeftClosed.height / 2
            }, {
                zIndex: 3,
                opacity: '0'
            });
            eyeSocketLeft.append(eyeLeftOpen, irisLeft, eyeLeftClosed);

            // Right Eye Socket (clipped to exact right eye white interior in head-base)
            const sr = p.eyeSocketRight;
            const eyeSocketRight = el('div', 'mascot-eye-socket mascot-eye-socket--right', {
                left: `${sr.cx - sr.rx}px`,
                top: `${sr.cy - sr.ry}px`,
                width: `${sr.rx * 2}px`,
                height: `${sr.ry * 2}px`,
                zIndex: 2
            });
            const eyeRightOpen = partImg('mascot-part--eye-right-open', {
                ...p.eyeRightOpen,
                x: sr.rx - p.eyeRightOpen.width / 2,
                y: sr.ry - p.eyeRightOpen.height / 2
            }, { zIndex: 1 });
            const irisRight = partImg('mascot-part--iris-right', {
                ...p.irisRight,
                x: sr.rx + p.irisRight.restOffsetX - p.irisRight.width / 2,
                y: sr.ry + p.irisRight.restOffsetY - p.irisRight.height / 2
            }, {
                zIndex: 2,
                clipPath: 'circle(39.5% at 50% 50%)'
            });
            const eyeRightClosed = partImg('mascot-part--eye-right-closed', {
                ...p.eyeRightClosed,
                x: sr.rx - p.eyeRightClosed.width / 2,
                y: sr.ry - p.eyeRightClosed.height / 2
            }, {
                zIndex: 3,
                opacity: '0'
            });
            eyeSocketRight.append(eyeRightOpen, irisRight, eyeRightClosed);

            headRig.append(headBase, eyeSocketLeft, eyeSocketRight);

            rollGroup.append(torsoRig, headRig);
            settlePivot.appendChild(rollGroup);
            root.append(shadow, settlePivot);
            this.mount.appendChild(root);

            this.els = {
                root,
                shadow,
                settlePivot,
                rollGroup,
                torsoRig,
                bodyImg,
                headRig,
                headBase,
                eyeSocketLeft,
                eyeSocketRight,
                eyeLeftOpen,
                eyeRightOpen,
                irisLeft,
                irisRight,
                eyeLeftClosed,
                eyeRightClosed,
                armsLayer,
                armLeftRest,
                armRightRest
            };
        }

        async preloadImages() {
            const imgs = Array.from(this.mount.querySelectorAll('img'));
            await Promise.all(
                imgs.map((img) => {
                    if (img.complete && img.naturalWidth > 0) {
                        return img.decode ? img.decode().catch(() => {}) : Promise.resolve();
                    }
                    return new Promise((resolve) => {
                        img.addEventListener('load', () => resolve(), { once: true });
                        img.addEventListener('error', () => resolve(), { once: true });
                    });
                })
            );
        }

        updateResponsiveScale() {
            if (!this.clipStage || !this.mount) return;
            const stageRect = this.clipStage.getBoundingClientRect();
            if (!stageRect.width || !stageRect.height) return;
            const scaleX = stageRect.width / this.rigConfig.canvas.width;
            const scaleY = stageRect.height / this.rigConfig.canvas.height;
            const scale = Math.min(scaleX, scaleY);
            this.mount.style.setProperty('--mascot-scale', scale.toFixed(4));
        }

        setPrePeekPoseImmediate() {
            if (!window.gsap) return;
            const p = this.rigConfig.parts;
            const {
                root, shadow, settlePivot, rollGroup, torsoRig, headRig,
                irisLeft, irisRight, eyeLeftClosed, eyeRightClosed,
                armLeftRest, armRightRest
            } = this.els;

            // Start beyond the right edge of the entrance clip stage
            gsap.set(root, { x: 266, y: 0 });
            gsap.set(shadow, { x: 0, y: 0, scaleX: 0.86, scaleY: 0.86, opacity: 0.28, rotation: 0 });
            gsap.set(settlePivot, { x: 0, y: 2, rotation: -14 });
            gsap.set(rollGroup, { x: 0, y: 0, rotation: 0 });
            gsap.set(torsoRig, { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0 });
            gsap.set(headRig, { x: -3.5, y: 1.5, rotation: -5.5 });
            gsap.set([irisLeft, irisRight], { x: -3.2, y: 0.6, opacity: 1 });
            gsap.set([eyeLeftClosed, eyeRightClosed], { opacity: 0 });
            gsap.set(armLeftRest, { x: 0, y: 0, rotation: p.armLeftRest.baseRotation, opacity: 1 });
            gsap.set(armRightRest, { x: 0, y: 0, rotation: p.armRightRest.baseRotation, opacity: 1 });
        }

        setRestingPoseImmediate() {
            if (!window.gsap) return;
            const p = this.rigConfig.parts;
            const {
                root, shadow, settlePivot, rollGroup, torsoRig, headRig,
                irisLeft, irisRight, eyeLeftClosed, eyeRightClosed,
                armLeftRest, armRightRest
            } = this.els;

            gsap.set(root, { x: 0, y: 0 });
            gsap.set(shadow, { x: 0, y: 0, scaleX: 1, scaleY: 1, opacity: 0.85, rotation: 0 });
            gsap.set(settlePivot, { x: 0, y: 0, rotation: 0 });
            gsap.set(rollGroup, { x: 0, y: 0, rotation: 0 });
            gsap.set(torsoRig, { x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0 });
            gsap.set(headRig, { x: 0, y: 0, rotation: 0 });
            gsap.set([irisLeft, irisRight], { x: 0, y: 0, opacity: 1 });
            gsap.set([eyeLeftClosed, eyeRightClosed], { opacity: 0 });
            gsap.set(armLeftRest, { x: 0, y: 0, rotation: p.armLeftRest.baseRotation, opacity: 1 });
            gsap.set(armRightRest, { x: 0, y: 0, rotation: p.armRightRest.baseRotation, opacity: 1 });
        }

        /**
         * Computes the direction vector from the mascot's head/eyes to the actual
         * "View The Menu" button (#hero-view-menu-btn) in the hero so the 4–6s look
         * gesture turns toward the real button position on both desktop and mobile.
         */
        computeLookAtMenuButtonOffsets() {
            const btn = document.getElementById('hero-view-menu-btn') ||
                        document.querySelector('#hero .hero-cta-group .btn-primary');
            const headEl = this.els.headRig;
            if (!btn || !headEl) {
                return { irisX: -3.2, irisY: 1.2, headRot: -4.2, headX: -2.0, headY: 1.2, bodyRot: -1.8 };
            }

            const btnRect = btn.getBoundingClientRect();
            const headRect = headEl.getBoundingClientRect();

            const btnCx = btnRect.left + btnRect.width / 2;
            const btnCy = btnRect.top + btnRect.height / 2;
            const headCx = headRect.left + headRect.width / 2;
            const headCy = headRect.top + headRect.height * 0.48;

            const dx = btnCx - headCx;
            const dy = btnCy - headCy;
            const dist = Math.hypot(dx, dy) || 1;
            const nx = dx / dist;
            const ny = dy / dist;

            // Clamp within safe eye opening bounds so pupils never touch/escape eye outlines
            const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
            return {
                irisX: clamp(nx * 4.0 + 1.2, -3.8, 4.2),
                irisY: clamp(ny * 2.8, -2.6, 2.5),
                headRot: clamp(nx * 5.0, -5.0, 5.0),
                headX: clamp(nx * 2.6, -2.6, 2.6),
                headY: clamp(ny * 2.0, -1.8, 2.2),
                bodyRot: clamp(nx * 2.2, -2.2, 2.2)
            };
        }

        playIntroOnce() {
            if (this.hasPlayedIntro || this.prefersReducedMotion || !window.gsap) return;
            this.hasPlayedIntro = true;
            this.isIntroRunning = true;

            const p = this.rigConfig.parts;
            const {
                root, shadow, settlePivot, rollGroup, torsoRig, headRig,
                irisLeft, irisRight, eyeLeftClosed, eyeRightClosed,
                armLeftRest, armRightRest
            } = this.els;

            this.setPrePeekPoseImmediate();

            const tl = gsap.timeline({
                paused: !this.shouldAnimate(),
                onComplete: () => {
                    this.isIntroRunning = false;
                    this.startIdleLoop();
                }
            });

            this.introTl = tl;

            // =================================================================
            // PHASE 1: 0.0s – 1.5s — PEEK FROM THE RIGHT WITH CURIOUS HEAD TILT
            // =================================================================
            // Slide in from beyond right edge so left half of Daruma body & face peek in
            tl.to(root, {
                x: 182,
                duration: 0.64,
                ease: 'power2.out'
            }, 0.0);

            tl.to(shadow, {
                scaleX: 0.92,
                scaleY: 0.92,
                opacity: 0.62,
                duration: 0.64,
                ease: 'power2.out'
            }, 0.0);

            tl.to(settlePivot, {
                y: 2,
                rotation: -17,
                duration: 0.64,
                ease: 'power2.out'
            }, 0.0);

            // Curious head tilt & eye glance (0.50s – 1.12s)
            tl.to(headRig, {
                rotation: -8.5,
                x: -4.8,
                y: 2.0,
                duration: 0.48,
                ease: 'sine.inOut'
            }, 0.50);

            tl.to(settlePivot, {
                rotation: -19.5,
                duration: 0.48,
                ease: 'sine.inOut'
            }, 0.50);

            tl.to([irisLeft, irisRight], {
                x: -3.8,
                y: 0.8,
                duration: 0.45,
                ease: 'sine.inOut'
            }, 0.50);

            // Smoothly align into upright start of roll (1.12s – 1.50s)
            tl.to(settlePivot, {
                y: 0,
                rotation: 0,
                duration: 0.38,
                ease: 'sine.inOut'
            }, 1.12);

            tl.to(headRig, {
                rotation: 0,
                x: 0,
                y: 0,
                duration: 0.38,
                ease: 'sine.inOut'
            }, 1.12);

            tl.to([irisLeft, irisRight], {
                x: -1.8,
                y: 0.2,
                duration: 0.36,
                ease: 'sine.inOut'
            }, 1.12);

            // Keep arms tucked close to the body for the roll
            tl.to(armLeftRest, {
                rotation: p.armLeftRest.baseRotation - 3,
                duration: 0.36,
                ease: 'sine.inOut'
            }, 1.12);
            tl.to(armRightRest, {
                rotation: p.armRightRest.baseRotation + 3,
                duration: 0.36,
                ease: 'sine.inOut'
            }, 1.12);

            // =================================================================
            // PHASE 2: 1.5s – 3.0s — PLAYFUL ROLL INTO POSITION (1 CCW ROTATION)
            // =================================================================
            // Coordinate horizontal travel (root.x: 182 -> 0) with ONE complete
            // counterclockwise rotation (rollGroup.rotation: 0 -> -360) using the
            // exact same duration (1.50s) and easing ('sine.inOut') so dx/dt and
            // dθ/dt stay locked together like a real rolling Daruma on the ground.
            tl.to(root, {
                x: 0,
                duration: 1.50,
                ease: 'sine.inOut'
            }, 1.50);

            tl.to(rollGroup, {
                rotation: -360,
                duration: 1.50,
                ease: 'sine.inOut'
            }, 1.50);

            // Vertical ground-contact compensation during the 360° roll:
            // Because the Daruma is slightly taller (239px) than wide (227px),
            // dipping rollGroup.y by +5.5px when passing through -90° and -270°
            // keeps the rolling perimeter in continuous contact with the ground shadow.
            tl.to(rollGroup, { y: 5.5, duration: 0.42, ease: 'sine.inOut' }, 1.50);
            tl.to(rollGroup, { y: 0.5, duration: 0.33, ease: 'sine.inOut' }, 1.92);
            tl.to(rollGroup, { y: 5.5, duration: 0.33, ease: 'sine.inOut' }, 2.25);
            tl.to(rollGroup, { y: 0.0, duration: 0.42, ease: 'sine.inOut' }, 2.58);

            // Ground shadow remains flat on the ground outside the rotating group,
            // subtly breathing in width as the mascot rolls over its side and crown.
            tl.to(shadow, { scaleX: 0.95, scaleY: 0.96, opacity: 0.80, duration: 0.42, ease: 'sine.inOut' }, 1.50);
            tl.to(shadow, { scaleX: 1.04, scaleY: 1.00, opacity: 0.88, duration: 0.33, ease: 'sine.inOut' }, 1.92);
            tl.to(shadow, { scaleX: 0.95, scaleY: 0.96, opacity: 0.80, duration: 0.33, ease: 'sine.inOut' }, 2.25);
            tl.to(shadow, { scaleX: 1.00, scaleY: 1.00, opacity: 0.85, duration: 0.42, ease: 'sine.inOut' }, 2.58);

            // Normalize -360deg -> 0deg at 3.00s (mathematically identical, zero visual snap)
            tl.set(rollGroup, { rotation: 0 }, 3.00);

            // =================================================================
            // PHASE 3: 3.0s – 4.0s — DECELERATE & LEFT-RIGHT SETTLING WOBBLE
            // =================================================================
            // Smoothly decelerate angular momentum from the leftward roll into a
            // damped Daruma left-right rocking wobble around the rounded base,
            // with ZERO vertical jumping (y stays 0).
            // Wobble 1: rock left (3.00s – 3.24s)
            tl.to(settlePivot, {
                rotation: -7.5,
                x: -5.2,
                y: 0,
                duration: 0.24,
                ease: 'power2.out'
            }, 3.00);
            tl.to(headRig, {
                rotation: -2.0,
                x: -1.2,
                duration: 0.24,
                ease: 'power2.out'
            }, 3.00);
            tl.to(shadow, {
                x: -3.5,
                scaleX: 1.03,
                duration: 0.24,
                ease: 'power2.out'
            }, 3.00);

            // Wobble 2: rock right (3.24s – 3.52s)
            tl.to(settlePivot, {
                rotation: 4.8,
                x: 3.4,
                y: 0,
                duration: 0.28,
                ease: 'sine.inOut'
            }, 3.24);
            tl.to(headRig, {
                rotation: 1.5,
                x: 0.9,
                duration: 0.28,
                ease: 'sine.inOut'
            }, 3.24);
            tl.to(shadow, {
                x: 2.4,
                scaleX: 1.01,
                duration: 0.28,
                ease: 'sine.inOut'
            }, 3.24);

            // Wobble 3: small rock left (3.52s – 3.78s)
            tl.to(settlePivot, {
                rotation: -2.0,
                x: -1.4,
                y: 0,
                duration: 0.26,
                ease: 'sine.inOut'
            }, 3.52);
            tl.to(headRig, {
                rotation: -0.6,
                x: -0.4,
                duration: 0.26,
                ease: 'sine.inOut'
            }, 3.52);
            tl.to(shadow, {
                x: -1.0,
                scaleX: 1.00,
                duration: 0.26,
                ease: 'sine.inOut'
            }, 3.52);

            // Settle upright (3.78s – 4.00s)
            tl.to(settlePivot, {
                rotation: 0,
                x: 0,
                y: 0,
                duration: 0.22,
                ease: 'sine.inOut'
            }, 3.78);
            tl.to(headRig, {
                rotation: 0,
                x: 0,
                y: 0,
                duration: 0.22,
                ease: 'sine.inOut'
            }, 3.78);
            tl.to(shadow, {
                x: 0,
                scaleX: 1,
                scaleY: 1,
                opacity: 0.85,
                duration: 0.22,
                ease: 'sine.inOut'
            }, 3.78);
            tl.to(armLeftRest, {
                rotation: p.armLeftRest.baseRotation,
                duration: 0.22,
                ease: 'sine.inOut'
            }, 3.78);
            tl.to(armRightRest, {
                rotation: p.armRightRest.baseRotation,
                duration: 0.22,
                ease: 'sine.inOut'
            }, 3.78);

            // =================================================================
            // PHASE 4: 4.0s – 6.0s — TILT HEAD SLIGHTLY, NOD ONCE, LOOK AT MENU
            // =================================================================
            // 4.00s – 4.46s: Tilt the head slightly
            tl.to(headRig, {
                rotation: -4.5,
                x: -2.0,
                y: 0.8,
                duration: 0.44,
                ease: 'sine.inOut'
            }, 4.00);
            tl.to(settlePivot, {
                rotation: -1.6,
                duration: 0.44,
                ease: 'sine.inOut'
            }, 4.00);
            tl.to([irisLeft, irisRight], {
                x: -1.4,
                y: 0.5,
                duration: 0.42,
                ease: 'sine.inOut'
            }, 4.00);

            // 4.46s – 5.04s: Nod once (downward nod 4.46–4.74s, upward recovery 4.74–5.04s)
            tl.to(headRig, {
                y: 5.8,
                rotation: -1.5,
                x: -0.8,
                duration: 0.28,
                ease: 'power2.inOut'
            }, 4.46);
            tl.to(torsoRig, {
                scaleY: 0.988,
                scaleX: 1.008,
                y: 1.4,
                duration: 0.28,
                ease: 'power2.inOut'
            }, 4.46);
            tl.to(settlePivot, {
                rotation: 0,
                duration: 0.28,
                ease: 'sine.inOut'
            }, 4.46);
            tl.to([irisLeft, irisRight], {
                y: 2.3,
                duration: 0.26,
                ease: 'sine.inOut'
            }, 4.46);

            // Natural blink during the nod (4.54s – 4.68s)
            tl.to([eyeLeftClosed, eyeRightClosed], { opacity: 1, duration: 0.04, ease: 'none' }, 4.54);
            tl.to([irisLeft, irisRight], { opacity: 0, duration: 0.04, ease: 'none' }, 4.54);
            tl.to([eyeLeftClosed, eyeRightClosed], { opacity: 0, duration: 0.05, ease: 'none' }, 4.64);
            tl.to([irisLeft, irisRight], { opacity: 1, duration: 0.05, ease: 'none' }, 4.64);

            // Nod recovery (4.74s – 5.04s)
            tl.to(headRig, {
                y: 0,
                rotation: 0,
                x: 0,
                duration: 0.30,
                ease: 'power2.out'
            }, 4.74);
            tl.to(torsoRig, {
                scaleY: 1,
                scaleX: 1,
                y: 0,
                duration: 0.30,
                ease: 'power2.out'
            }, 4.74);
            tl.to([irisLeft, irisRight], {
                y: 0.5,
                duration: 0.28,
                ease: 'power2.out'
            }, 4.74);

            // 5.04s – 6.00s: Look toward the actual "View The Menu" button
            tl.call(() => {
                const look = this.computeLookAtMenuButtonOffsets();
                gsap.to(headRig, {
                    rotation: look.headRot,
                    x: look.headX,
                    y: look.headY,
                    duration: 0.44,
                    ease: 'power2.out',
                    overwrite: 'auto'
                });
                gsap.to(settlePivot, {
                    rotation: look.bodyRot,
                    duration: 0.46,
                    ease: 'power2.out',
                    overwrite: 'auto'
                });
                gsap.to([irisLeft, irisRight], {
                    x: look.irisX,
                    y: look.irisY,
                    duration: 0.40,
                    ease: 'power2.out',
                    overwrite: 'auto'
                });
            }, null, 5.04);

            // Soften slightly into the idle pose at 5.72s – 6.00s so transition is seamless
            tl.to(settlePivot, {
                rotation: 0,
                duration: 0.28,
                ease: 'sine.inOut'
            }, 5.72);
        }

        // =====================================================================
        // PHASE 5: SEPARATE IDLE ANIMATION (SUBTLE BREATHING, BLINK, HEAD TILT)
        // =====================================================================
        startIdleLoop() {
            if (this.prefersReducedMotion || !window.gsap) return;
            this.isIdleActive = true;

            const p = this.rigConfig.parts;
            const {
                torsoRig, headRig, armLeftRest, armRightRest, shadow
            } = this.els;

            // 1. Continuous gentle breathing loop
            this.breathingTl = gsap.timeline({
                repeat: -1,
                yoyo: true,
                paused: !this.shouldAnimate()
            });

            this.breathingTl.to(torsoRig, {
                y: -1.8,
                scaleY: 1.014,
                scaleX: 1.008,
                duration: 2.5,
                ease: 'sine.inOut'
            }, 0);

            this.breathingTl.to(headRig, {
                y: -2.0,
                duration: 2.5,
                ease: 'sine.inOut'
            }, 0);

            this.breathingTl.to(armLeftRest, {
                rotation: p.armLeftRest.baseRotation + 1.2,
                duration: 2.5,
                ease: 'sine.inOut'
            }, 0);

            this.breathingTl.to(armRightRest, {
                rotation: p.armRightRest.baseRotation - 1.2,
                duration: 2.5,
                ease: 'sine.inOut'
            }, 0);

            this.breathingTl.to(shadow, {
                scaleX: 0.97,
                scaleY: 0.97,
                opacity: 0.78,
                duration: 2.5,
                ease: 'sine.inOut'
            }, 0);

            // 2. Schedule occasional natural blinking
            this.scheduleNextBlink();

            // 3. Schedule infrequent gentle head movements
            this.scheduleNextHeadTilt();
        }

        scheduleNextBlink() {
            if (!this.isIdleActive || this.prefersReducedMotion || !window.gsap) return;
            if (this.blinkCall) this.blinkCall.kill();

            const delay = 2.6 + Math.random() * 2.6; // 2.6s – 5.2s
            this.blinkCall = gsap.delayedCall(delay, () => {
                if (this.shouldAnimate()) {
                    this.triggerBlink();
                }
                this.scheduleNextBlink();
            });
            if (!this.shouldAnimate()) {
                this.blinkCall.pause();
            }
        }

        triggerBlink() {
            if (!window.gsap) return;
            const { eyeLeftClosed, eyeRightClosed, irisLeft, irisRight } = this.els;
            if (this.activeBlinkTl) this.activeBlinkTl.kill();

            const isDouble = Math.random() < 0.18;
            const btl = gsap.timeline();
            this.activeBlinkTl = btl;

            btl.to([eyeLeftClosed, eyeRightClosed], { opacity: 1, duration: 0.04, ease: 'none' }, 0);
            btl.to([irisLeft, irisRight], { opacity: 0, duration: 0.04, ease: 'none' }, 0);
            btl.to([eyeLeftClosed, eyeRightClosed], { opacity: 0, duration: 0.05, ease: 'none' }, 0.11);
            btl.to([irisLeft, irisRight], { opacity: 1, duration: 0.05, ease: 'none' }, 0.11);

            if (isDouble) {
                btl.to([eyeLeftClosed, eyeRightClosed], { opacity: 1, duration: 0.04, ease: 'none' }, 0.24);
                btl.to([irisLeft, irisRight], { opacity: 0, duration: 0.04, ease: 'none' }, 0.24);
                btl.to([eyeLeftClosed, eyeRightClosed], { opacity: 0, duration: 0.05, ease: 'none' }, 0.34);
                btl.to([irisLeft, irisRight], { opacity: 1, duration: 0.05, ease: 'none' }, 0.34);
            }
        }

        scheduleNextHeadTilt() {
            if (!this.isIdleActive || this.prefersReducedMotion || !window.gsap) return;
            if (this.headTiltCall) this.headTiltCall.kill();

            const delay = 4.2 + Math.random() * 3.2; // 4.2s – 7.4s
            this.headTiltCall = gsap.delayedCall(delay, () => {
                if (this.shouldAnimate()) {
                    this.triggerGentleHeadTilt();
                }
                this.scheduleNextHeadTilt();
            });
            if (!this.shouldAnimate()) {
                this.headTiltCall.pause();
            }
        }

        triggerGentleHeadTilt() {
            if (!window.gsap) return;
            const { headRig, settlePivot, irisLeft, irisRight } = this.els;
            if (this.activeTiltTl) this.activeTiltTl.kill();

            const lookTowardsBtn = Math.random() < 0.55;
            const look = this.computeLookAtMenuButtonOffsets();
            const targetRot = lookTowardsBtn ? look.headRot * 0.45 : (Math.random() > 0.5 ? 2.2 : -2.2);
            const targetBodyRot = targetRot * 0.35;
            const targetIrisX = lookTowardsBtn ? look.irisX * 0.5 : (Math.random() - 0.5) * 2.2;
            const targetIrisY = lookTowardsBtn ? look.irisY * 0.5 : (Math.random() - 0.5) * 1.4;

            const ttl = gsap.timeline();
            this.activeTiltTl = ttl;

            ttl.to(headRig, {
                rotation: targetRot,
                x: targetRot * 0.3,
                duration: 1.1,
                ease: 'sine.inOut'
            }, 0);
            ttl.to(settlePivot, {
                rotation: targetBodyRot,
                duration: 1.1,
                ease: 'sine.inOut'
            }, 0);
            ttl.to([irisLeft, irisRight], {
                x: targetIrisX,
                y: targetIrisY,
                duration: 0.9,
                ease: 'sine.inOut'
            }, 0);

            ttl.to(headRig, {
                rotation: 0,
                x: 0,
                duration: 1.2,
                ease: 'sine.inOut'
            }, 2.2);
            ttl.to(settlePivot, {
                rotation: 0,
                duration: 1.2,
                ease: 'sine.inOut'
            }, 2.2);
            ttl.to([irisLeft, irisRight], {
                x: 0,
                y: 0,
                duration: 1.1,
                ease: 'sine.inOut'
            }, 2.2);
        }

        shouldAnimate() {
            return !this.prefersReducedMotion && this.isHeroVisible && this.isDocumentVisible;
        }

        syncPlaybackState() {
            if (this.prefersReducedMotion) {
                this.pauseAll();
                this.setRestingPoseImmediate();
                return;
            }

            if (this.shouldAnimate()) {
                if (!this.hasPlayedIntro) {
                    this.playIntroOnce();
                } else if (this.isIntroRunning && this.introTl) {
                    this.introTl.play();
                } else if (this.isIdleActive) {
                    if (this.breathingTl) this.breathingTl.play();
                    if (this.blinkCall) this.blinkCall.resume();
                    if (this.headTiltCall) this.headTiltCall.resume();
                    if (this.activeBlinkTl) this.activeBlinkTl.play();
                    if (this.activeTiltTl) this.activeTiltTl.play();
                }
            } else {
                this.pauseAll();
            }
        }

        pauseAll() {
            if (this.introTl && this.isIntroRunning) this.introTl.pause();
            if (this.breathingTl) this.breathingTl.pause();
            if (this.blinkCall) this.blinkCall.pause();
            if (this.headTiltCall) this.headTiltCall.pause();
            if (this.activeBlinkTl) this.activeBlinkTl.pause();
            if (this.activeTiltTl) this.activeTiltTl.pause();
        }

        setupVisibilityObserver() {
            const target = this.heroSection || this.mount;
            if ('IntersectionObserver' in window && target) {
                this.observer = new IntersectionObserver(
                    (entries) => {
                        for (const entry of entries) {
                            this.isHeroVisible = entry.isIntersecting && entry.intersectionRatio > 0.08;
                            this.syncPlaybackState();
                        }
                    },
                    { threshold: [0, 0.08, 0.25] }
                );
                this.observer.observe(target);
            } else {
                this.isHeroVisible = true;
                this.syncPlaybackState();
            }
        }

        bindEvents() {
            this.onResize = () => {
                this.updateResponsiveScale();
            };
            window.addEventListener('resize', this.onResize, { passive: true });

            this.onVisibilityChange = () => {
                this.isDocumentVisible = !document.hidden;
                this.syncPlaybackState();
            };
            document.addEventListener('visibilitychange', this.onVisibilityChange);

            this.onReducedMotionChange = (e) => {
                this.prefersReducedMotion = e.matches;
                if (this.prefersReducedMotion) {
                    if (this.introTl) this.introTl.kill();
                    if (this.breathingTl) this.breathingTl.kill();
                    if (this.blinkCall) this.blinkCall.kill();
                    if (this.headTiltCall) this.headTiltCall.kill();
                    this.isIntroRunning = false;
                    this.isIdleActive = false;
                    this.setRestingPoseImmediate();
                } else {
                    this.syncPlaybackState();
                }
            };
            if (this.reduceMotionQuery.addEventListener) {
                this.reduceMotionQuery.addEventListener('change', this.onReducedMotionChange);
            }
        }

        destroy() {
            this.pauseAll();
            if (this.introTl) this.introTl.kill();
            if (this.breathingTl) this.breathingTl.kill();
            if (this.blinkCall) this.blinkCall.kill();
            if (this.headTiltCall) this.headTiltCall.kill();
            if (this.observer) this.observer.disconnect();
            window.removeEventListener('resize', this.onResize);
            document.removeEventListener('visibilitychange', this.onVisibilityChange);
            if (this.reduceMotionQuery.removeEventListener) {
                this.reduceMotionQuery.removeEventListener('change', this.onReducedMotionChange);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.kinguMascot = new KinguMascotHero('#kingu-mascot-rig');
        });
    } else {
        window.kinguMascot = new KinguMascotHero('#kingu-mascot-rig');
    }
})();
