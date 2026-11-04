/**
 * Kingu Ramen - Interactive Application Logic & State Engine 2.5
 * Includes Anatomy Layer Inspector, Table Reservation Dispatcher, Kong-panions VIP Generator & Crowd Predictor
 */

// 1. Comprehensive Menu Database (Official Research Document Verified)
const MENU_DATA = [
    // RAMEN
    {
        id: 'yummy_truffle',
        name: 'Yummy Truffle Ramen',
        jpName: 'トリュフ ラーメン',
        category: 'ramen',
        price: 30.00,
        desc: 'Bestseller nombor satu! Dihidangkan dengan hirisan itik empuk, black truffle segar, cendawan shiitake, onsen tamago & kek ikan Jepun dalam sup umami beraroma.',
        tag: 'Bestseller',
        flavourProfile: 'rich',
        spiceLevel: 0,
        img: 'assets/images/kingu_shoyu_truffle_real.jpg',
        ingredients: ['Black Truffle Itali', 'Smoked Duck Breast', 'Cendawan Shiitake', 'Onsen Tamago Cair', 'Narutomaki Fish Cake'],
        allergens: ['Gluten', 'Telur', 'Kacang Soya']
    },
    {
        id: 'yuzu_lover',
        name: 'Yuzu Lover Ramen',
        jpName: '柚子 ラーメン',
        category: 'ramen',
        price: 28.00,
        desc: 'Sensasi sitrus yuzu yang sangat segar dan harum, dipadukan bersama ayam lembut, telur ramen separuh masak berkilat, sayuran hijau dan sup ayam jernih.',
        tag: 'Refreshing',
        flavourProfile: 'refreshing',
        spiceLevel: 0,
        img: 'assets/images/kingu_yuzu_lover_real.jpg',
        ingredients: ['Pati Yuzu Asli Jepun', 'Dada Ayam Lembut', 'Ajitsuke Tamago', 'Sayur Segar', 'Daun Bawang'],
        allergens: ['Gluten', 'Telur']
    },
    {
        id: 'kingu_shoyu',
        name: 'Kingu Shoyu Ramen',
        jpName: 'キング 醤油 ラーメン',
        category: 'ramen',
        price: 25.00,
        desc: 'Profil ramen klasik Jepun yang abadi. Kuah kicap shoyu diperam dengan rasa umami mendalam, chashu ayam empuk, rebung menma dan rumpai laut nori.',
        tag: 'Classic',
        flavourProfile: 'classic',
        spiceLevel: 0,
        img: 'assets/images/kingu_shoyu_truffle_real.jpg',
        ingredients: ['Artisanal Shoyu Brew', 'Chashu Ayam', 'Rebung Menma', 'Nori Rangup', 'Mee Springy'],
        allergens: ['Gluten', 'Kacang Soya']
    },
    {
        id: 'chili_crab',
        name: 'Chili Chili Crab Ramen',
        jpName: 'チリクラブ ラーメン',
        category: 'ramen',
        price: 28.00,
        desc: 'Eksplorasi makanan laut berkarakter pedas manis! Kuah ketam kaya rasa dengan kepedasan seimbang yang membangkitkan selera penggemar seafood.',
        tag: 'Seafood',
        flavourProfile: 'seafood',
        spiceLevel: 2,
        img: 'assets/images/mala_beef_ramen.jpg',
        ingredients: ['Pati Ketam Laut Segar', 'Sos Cili Pedas Manis', 'Mee Ramen Kenyal', 'Telur Rebus', 'Kucai'],
        allergens: ['Krustasea', 'Gluten', 'Telur']
    },
    {
        id: 'rich_soup_chicken',
        name: 'Rich Soup Chicken Ramen',
        jpName: '濃厚 鶏白湯 ラーメン',
        category: 'ramen',
        price: 28.00,
        desc: 'Kuah paitan ayam yang direndih selama 12 jam sehingga menghasilkan tekstur pekat, berkrim, dan penuh kolagen semula jadi yang berkhasiat.',
        tag: 'Creamy',
        flavourProfile: 'rich',
        spiceLevel: 0,
        img: 'assets/images/kingu_ramen_counter_trio.jpg',
        ingredients: ['12 Jam Rendihan Paitan', 'Dada Ayam Sous-Vide', 'Daun Bawang', 'Ajitsuke Tamago'],
        allergens: ['Gluten', 'Telur']
    },
    {
        id: 'mala_chicken',
        name: 'Mala Chicken Ramen',
        jpName: '麻辣 鶏 ラーメン',
        category: 'ramen',
        price: 27.00,
        desc: 'Gabungan mantap lada Szechuan mala dan sup ramen Jepun! Pedas bergetar dengan hirisan ayam rempah yang memikat.',
        tag: 'Spicy',
        flavourProfile: 'spicy',
        spiceLevel: 3,
        img: 'assets/images/mala_beef_ramen.jpg',
        ingredients: ['Minyak Mala Szechuan', 'Ayam Rempah', 'Bok Choy', 'Cili Kering', 'Telur Ramen'],
        allergens: ['Gluten', 'Telur', 'Bijan']
    },
    {
        id: 'mala_beef',
        name: 'Mala Beef Ramen',
        jpName: '麻辣 牛肉 ラーメン',
        category: 'ramen',
        price: 30.00,
        desc: 'Ramen pedas mewah untuk pencinta daging! Dihidangkan dengan hirisan daging lembu empuk, minyak cili wangi dan sup mala yang berapi.',
        tag: 'Fiery Beef',
        flavourProfile: 'spicy',
        spiceLevel: 3,
        img: 'assets/images/mala_beef_ramen.jpg?v=real-mala-beef',
        ingredients: ['Daging Lembu Braised', 'Sup Mala Pekat Berempah', 'Biji Bijan Panggang', 'Bok Choy', 'Telur'],
        allergens: ['Gluten', 'Telur', 'Bijan']
    },

    // SNACKS & SIDES
    {
        id: 'salmon_mentai_ball',
        name: 'Salmon Mentai Ball',
        jpName: 'サーモン 明太 ボール',
        category: 'snacks',
        price: 18.00,
        desc: 'Bebola salmon segar yang dibakar api (flame-torched) dengan limpahan sos mentaiko berkrim dan telur ikan tobiko rangup.',
        tag: 'Must Try',
        spiceLevel: 0,
        img: 'assets/images/kingu_salmon_mentai_real.jpg',
        ingredients: ['Ikan Salmon Segar', 'Sos Mentaiko Salai', 'Telur Ikan Tobiko', 'Kaviar Hitam']
    },
    {
        id: 'chicken_gyoza',
        name: 'Chicken Gyoza',
        jpName: '鶏 餃子',
        category: 'snacks',
        price: 13.80,
        desc: 'Gyoza Jepun rangup di luar dan berjus di dalam, berintikan ayam cincang berperisa dan daun kucai.',
        tag: 'Sharing',
        spiceLevel: 0
    },
    {
        id: 'prawn_gyoza',
        name: 'Prawn Gyoza',
        jpName: '海老 餃子',
        category: 'snacks',
        price: 14.80,
        desc: 'Gyoza goreng kuali istimewa dipadatkan dengan udang segar manis dan rempah asli.',
        tag: 'Seafood',
        spiceLevel: 0
    },
    {
        id: 'beef_gyoza',
        name: 'Beef Gyoza',
        jpName: '牛肉 餃子',
        category: 'snacks',
        price: 14.80,
        desc: 'Gyoza daging lembu berperisa tegap dan beraroma bawang putih serta halia segar.',
        tag: 'Popular',
        spiceLevel: 0
    },
    {
        id: 'ori_fried_chicken_3',
        name: 'Ori Fried Chicken (3 pcs)',
        jpName: '唐揚げ (3個)',
        category: 'snacks',
        price: 12.80,
        desc: 'Ayam goreng karaage klasik keemasan dengan perapan kicap Jepun dan halia, disajikan bersama lemon.',
        tag: 'Crispy',
        spiceLevel: 0,
        img: 'assets/images/kingu_karaage_chicken_real.jpg'
    },
    {
        id: 'ori_fried_chicken_5',
        name: 'Ori Fried Chicken (5 pcs)',
        jpName: '唐揚げ (5個)',
        category: 'snacks',
        price: 17.80,
        desc: 'Porsi lebih besar 5 ketul ayam goreng karaage rangup untuk dikongsi bersama rakan atau keluarga.',
        tag: 'Sharing',
        spiceLevel: 0,
        img: 'assets/images/kingu_karaage_chicken_real.jpg'
    },
    {
        id: 'mentai_fried_chicken_3',
        name: 'Mentaiko Mayo Fried Chicken (3 pcs)',
        jpName: '明太マヨ 唐揚げ (3個)',
        category: 'snacks',
        price: 13.80,
        desc: 'Ayam goreng rangup disiram sos mentaiko mayo berkrim yang disalai lembut.',
        tag: 'Special',
        spiceLevel: 0,
        img: 'assets/images/kingu_karaage_chicken_real.jpg'
    },
    {
        id: 'mentai_fried_chicken_5',
        name: 'Mentaiko Mayo Fried Chicken (5 pcs)',
        jpName: '明太マヨ 唐揚げ (5個)',
        category: 'snacks',
        price: 18.80,
        desc: 'Porsi berkongsi 5 ketul ayam goreng mentaiko mayo yang memikat selera.',
        tag: 'Special',
        spiceLevel: 0,
        img: 'assets/images/kingu_karaage_chicken_real.jpg'
    },
    {
        id: 'spicy_korean_chicken_3',
        name: 'Spicy Korean Fried Chicken (3 pcs)',
        jpName: 'ヤンニョム チキン (3個)',
        category: 'snacks',
        price: 13.80,
        desc: 'Ayam goreng bersalut sos pedas manis gochujang pekat ditaburi bijan panggang harum.',
        tag: 'Spicy',
        spiceLevel: 2,
        img: 'assets/images/kingu_karaage_chicken_real.jpg'
    },
    {
        id: 'spicy_korean_chicken_5',
        name: 'Spicy Korean Fried Chicken (5 pcs)',
        jpName: 'ヤンニョム チキン (5個)',
        category: 'snacks',
        price: 18.80,
        desc: 'Porsi 5 ketul ayam goreng pedas manis untuk kepuasan maksimum.',
        tag: 'Spicy',
        spiceLevel: 2,
        img: 'assets/images/kingu_karaage_chicken_real.jpg'
    },

    // RICE DISHES
    {
        id: 'special_prawn_egg_rice',
        name: 'Special Prawn Egg Rice',
        jpName: '海老玉子 ご飯',
        category: 'rice',
        price: 16.00,
        desc: 'Nasi Jepun wangi ditutupi telur hancur gebu lembut, udang bersaiz besar dan sos istimewa Kingu.',
        tag: 'Comfort Food',
        spiceLevel: 0
    },
    {
        id: 'steamed_rice',
        name: 'Steamed Rice',
        jpName: 'ご飯',
        category: 'rice',
        price: 4.00,
        desc: 'Semangkuk nasi beras Jepun gred premium yang gebu dan panas.',
        tag: 'Side',
        spiceLevel: 0
    },

    // COLD OOLONG TEAS & BEVERAGES
    {
        id: 'oolong_strawberry',
        name: 'Cold Oolong Tea - Strawberry Lover',
        jpName: 'ストロベリー 烏龍茶',
        category: 'drinks',
        price: 6.80,
        desc: 'Teh Oolong sejuk segar dibancuh dengan hirisan buah strawberi manis dan perahan sitrus melegakan.',
        tag: 'Signature Drink',
        img: 'assets/images/cold_oolong_drinks.jpg'
    },
    {
        id: 'oolong_peach',
        name: 'Cold Oolong Tea - Peach Blossom',
        jpName: 'ピーチ 烏龍茶',
        category: 'drinks',
        price: 6.80,
        desc: 'Haruman manis buah pic yang lembut menyatu sempurna dengan kelazatan teh oolong sejuk.',
        tag: 'Refreshing',
        img: 'assets/images/cold_oolong_drinks.jpg'
    },
    {
        id: 'oolong_orange',
        name: 'Cold Oolong Tea - Orange Sunset',
        jpName: 'オレンジ 烏龍茶',
        category: 'drinks',
        price: 6.80,
        desc: 'Kesejukan teh oolong dengan ekstrak oren sitrus yang menyerlahkan keceriaan petang.',
        tag: 'Citrus',
        img: 'assets/images/cold_oolong_drinks.jpg'
    },
    {
        id: 'oolong_blackcurrant',
        name: 'Cold Oolong Tea - Blackcurrant Kiss',
        jpName: 'カシス 烏龍茶',
        category: 'drinks',
        price: 6.80,
        desc: 'Rasa beri blackcurrant gelap dengan sedikit rasa masam manis berkarakter.',
        tag: 'Berries',
        img: 'assets/images/cold_oolong_drinks.jpg'
    },
    {
        id: 'green_tea',
        name: 'Green Tea (Cold or Hot)',
        jpName: '緑茶 (冷/温)',
        category: 'drinks',
        price: 5.00,
        desc: 'Teh hijau Jepun autentik dengan rasa herba segar yang menenangkan jiwa.',
        tag: 'Traditional'
    },
    {
        id: 'mineral_water',
        name: 'Mineral Water',
        jpName: 'ミネラルウォーター',
        category: 'drinks',
        price: 3.00,
        desc: 'Air mineral tulen sejuk botol.',
        tag: 'Hydration'
    },
    {
        id: 'coke_sprite',
        name: 'Coke / Sprite',
        jpName: 'コーラ / スプライト',
        category: 'drinks',
        price: 6.00,
        desc: 'Minuman berkarbonat sejuk dihidangkan dengan ais kiub.',
        tag: 'Chilled'
    }
];

// Application State Engine
class KinguApp {
    constructor() {
        this.activeCategory = 'all';
        this.searchQuery = '';
        this.currentLang = 'bm';
        try {
            this.currentLang = localStorage.getItem('kingu_lang') || 'bm';
        } catch (e) {
            this.currentLang = 'bm';
        }

        // Table Reservation State
        this.reservation = {
            zone: 'Kaunter Chef Izakaya'
        };

        this.init();
    }

    init() {
        this.initCustomCursor();
        this.initCardTiltEffects();
        this.initScrollProgressBar();
        this.initScrollChrome();
        this.initRevealOnScroll();
        this.initMobileNav();
        this.setupEventListeners();
        this.setupSmoothScroll();
        this.setupFAQ();
        this.setLanguage(this.currentLang);
        this.updateLiveCrowdStatus();
        this.initBackgroundVideo();
    }

    /* Background Video Auto-playback */
    initBackgroundVideo() {
        const video = document.querySelector('.bestseller-bg-video');
        if (video) {
            video.muted = true;
            const tryPlay = () => {
                const promise = video.play();
                if (promise !== undefined) {
                    promise.catch(() => {});
                }
            };
            tryPlay();
            document.addEventListener('touchstart', tryPlay, { once: true });
            document.addEventListener('click', tryPlay, { once: true });
        }
    }

    /* Bilingual Language Switcher */
    setLanguage(lang) {
        if (!['bm', 'en'].includes(lang)) lang = 'bm';
        this.currentLang = lang;
        try {
            localStorage.setItem('kingu_lang', lang);
        } catch (e) {}

        const dict = (window.KINGU_TRANSLATIONS && window.KINGU_TRANSLATIONS[lang]) || {};

        // Update all text elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerText = dict[key];
            }
        });

        // Fill real dish counts into menu tabs & description ("{count}" in translations)
        this.updateMenuCounts(dict);

        // Update all inputs with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // Update all elements with data-i18n-title (Tooltips & Nav dots)
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (dict[key] !== undefined) {
                el.setAttribute('title', dict[key]);
            }
        });

        // Update active class on language toggle buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Re-render dynamic menu cards
        this.renderFullMenu();

        // Update dynamic crowd status
        this.updateLiveCrowdStatus();
    }

    /* Menu counts are always computed from MENU_DATA so they never go stale */
    updateMenuCounts(dict) {
        const counts = MENU_DATA.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
        }, { all: MENU_DATA.length });

        document.querySelectorAll('.menu-tab[data-category]').forEach(tab => {
            const template = dict[tab.getAttribute('data-i18n')];
            if (template) tab.innerText = template.replace('{count}', counts[tab.dataset.category] || 0);
        });

        const desc = document.querySelector('[data-i18n="menu_desc"]');
        if (desc && dict.menu_desc) desc.innerText = dict.menu_desc.replace('{count}', counts.all);
    }

    /* Scroll Reading Progress Bar */
    initScrollProgressBar() {
        const bar = document.getElementById('scroll-progress-bar');
        if (!bar) return;

        window.addEventListener('scroll', () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / total) * 100;
            bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        });
    }

    initScrollChrome() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        let lastScrollY = window.scrollY;
        const closeMobileDropdown = () => {
            const toggle = document.getElementById('nav-toggle');
            const links = document.getElementById('nav-links');
            if (links && links.classList.contains('is-open')) {
                links.classList.remove('is-open');
                if (toggle) {
                    toggle.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            }
        };

        const onScroll = () => {
            const currentY = Math.max(0, window.scrollY);
            const deltaY = currentY - lastScrollY;

            header.classList.toggle('is-scrolled', currentY > 24);

            if (currentY <= 40) {
                header.classList.remove('is-nav-hidden');
            } else if (deltaY > 4) {
                header.classList.add('is-nav-hidden');
                closeMobileDropdown();
            } else if (deltaY < -6) {
                header.classList.remove('is-nav-hidden');
            }

            lastScrollY = currentY;
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('wheel', (e) => {
            if (window.scrollY > 40 && e.deltaY > 4) {
                header.classList.add('is-nav-hidden');
                closeMobileDropdown();
            }
        }, { passive: true });
    }

    initRevealOnScroll() {
        const nodes = document.querySelectorAll('.section-block, .marquee-strip, .site-footer');
        if (!nodes.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        nodes.forEach((el) => el.classList.add('reveal-up'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        nodes.forEach((el) => observer.observe(el));
    }

    initMobileNav() {
        const toggle = document.getElementById('nav-toggle');
        const links = document.getElementById('nav-links');
        if (!toggle || !links) return;

        const close = () => {
            toggle.classList.remove('is-open');
            links.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', () => {
            const open = !links.classList.contains('is-open');
            toggle.classList.toggle('is-open', open);
            links.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
        });

        links.querySelectorAll('a, button').forEach((link) => link.addEventListener('click', close));
        window.addEventListener('resize', () => {
            // Must match the hamburger breakpoint in styles.css (max-width: 1080px)
            if (window.innerWidth > 1080) close();
        });

        // Close the dropdown when tapping outside it or pressing Escape
        document.addEventListener('click', (e) => {
            if (!links.classList.contains('is-open')) return;
            if (links.contains(e.target) || toggle.contains(e.target)) return;
            close();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close();
        });
    }

    /* Custom Cursor Follower */
    initCustomCursor() {
        const cursor = document.querySelector('.custom-cursor');
        const follower = document.querySelector('.cursor-follower');
        if (!cursor || !follower) return;

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

        const loop = () => {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);

        document.querySelectorAll('button, a, input, select, .ramen-card, .flavour-filter-btn, .addon-card-label, .faq-question, .anatomy-layer-card, .zone-choice-card').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
        });
    }

    /* 3D Card Perspective Tilt Tracking */
    initCardTiltEffects() {
        const cards = document.querySelectorAll('.ramen-card, .review-card-tilt, .vip-pass-ticket');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const rotateX = -(y / (rect.height / 2)) * 4.5;
                const rotateY = (x / (rect.width / 2)) * 4.5;
                card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(1)}deg) rotateY(${rotateY.toFixed(1)}deg) translateY(-4px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    /* Render Menu Items */
    renderFullMenu() {
        const container = document.getElementById('menu-grid');
        if (!container) return;

        const isEn = this.currentLang === 'en';
        const enData = window.MENU_EN_DATA || {};

        const filtered = MENU_DATA.filter(item => {
            const matchesCat = this.activeCategory === 'all' || item.category === this.activeCategory;
            const enItem = enData[item.id] || {};
            const descToSearch = (isEn && (enItem.desc || enItem.desc_en)) ? (enItem.desc || enItem.desc_en) : item.desc;
            const matchesSearch = item.name.toLowerCase().includes(this.searchQuery) ||
                                  descToSearch.toLowerCase().includes(this.searchQuery);
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            const emptyMsg = isEn
                ? `No dishes found for "${this.searchQuery}".`
                : `Tiada hidangan ditemui untuk carian "${this.searchQuery}".`;
            const emptySub = isEn
                ? `Please try another keyword or select a category tab above.`
                : `Sila cuba kata kunci lain atau pilih tab kategori di atas.`;

            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                    <p style="font-size: 1.1rem; margin-bottom: 8px;">${emptyMsg}</p>
                    <p style="font-size: 0.9rem;">${emptySub}</p>
                </div>
            `;
            return;
        }

        const spicyLabel = isEn ? 'Spicy: Level' : 'Pedas: Tahap';

        const catLabels = {
            bm: { ramen: 'Ramen', snacks: 'Snek & Gyoza', rice: 'Hidangan Nasi', drinks: 'Teh Buah & Minuman' },
            en: { ramen: 'Ramen', snacks: 'Snacks & Gyoza', rice: 'Rice Dishes', drinks: 'Fruit Tea & Drinks' }
        };

        container.innerHTML = filtered.map(item => {
            const enItem = enData[item.id] || {};
            const desc = (isEn && (enItem.desc || enItem.desc_en)) ? (enItem.desc || enItem.desc_en) : item.desc;
            const categoryLabel = (catLabels[this.currentLang] && catLabels[this.currentLang][item.category])
                ? catLabels[this.currentLang][item.category].toUpperCase()
                : item.category.toUpperCase();

            // Whole card opens the dish details modal (no separate "View details" button)
            return `
            <div class="menu-item-row-card is-clickable" role="button" tabindex="0"
                 onclick="window.kinguApp.openDishModal('${item.id}')"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.kinguApp.openDishModal('${item.id}');}">
                <div>
                    <div class="item-top-row">
                        <h4 class="item-name">${item.name}</h4>
                        <span class="item-price">RM ${item.price.toFixed(2)}</span>
                    </div>
                    <div class="item-category-label">
                        ${item.jpName ? `<span style="font-family: var(--font-jp); color: var(--accent-gold); margin-right: 8px;">${item.jpName}</span>` : ''}
                        <span>${categoryLabel}</span>
                        ${item.spiceLevel ? ` • ${spicyLabel} ${item.spiceLevel}/3` : ''}
                    </div>
                    <p class="item-desc-text">${desc}</p>
                </div>
            </div>
            `;
        }).join('');
    }


    /* Kong-panions VIP Pass Generator */
    generateKongpanionsPass() {
        const nameInput = document.getElementById('vip-input-name');
        const phoneInput = document.getElementById('vip-input-phone');
        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const isEn = this.currentLang === 'en';

        if (!name) {
            this.showToast(isEn ? 'Please enter your name to generate VIP pass!' : 'Sila masukkan nama untuk menjana pas VIP!');
            return;
        }

        const passCode = `KR-VIP-${Math.floor(1000 + Math.random() * 9000)}`;

        const serialEl = document.getElementById('vip-pass-serial');
        if (serialEl) serialEl.innerText = passCode;

        const nameEl = document.getElementById('vip-ticket-name-display');
        if (nameEl) nameEl.innerText = name;

        const subEl = document.getElementById('vip-ticket-sub-display');
        if (subEl) {
            subEl.innerText = phone
                ? (isEn ? `WhatsApp: ${phone} • Active Member` : `WhatsApp: ${phone} • Ahli Aktif`)
                : (isEn ? 'Verified Kong-panion Member' : 'Kong-panion Member Sah');
        }

        if (window.kinguSound) window.kinguSound.playSuccessFanfare();
        this.showToast(isEn ? `VIP Pass ${passCode} Created for ${name}!` : `Pas VIP ${passCode} Dicipta untuk ${name}!`);
    }

    copyVipCode() {
        const serial = document.getElementById('vip-pass-serial')?.innerText || 'KR-VIP-8892';
        const isEn = this.currentLang === 'en';
        if (navigator.clipboard) {
            navigator.clipboard.writeText(serial).then(() => {
                if (window.kinguSound) window.kinguSound.playToastPop();
                this.showToast(isEn ? `VIP Pass Code ${serial} copied to clipboard!` : `Kod Pas VIP ${serial} disalin ke papan keratan!`);
            }).catch(() => {
                this.showToast(isEn ? `VIP Pass Code: ${serial}` : `Kod Pas VIP: ${serial}`);
            });
        } else {
            this.showToast(isEn ? `VIP Pass Code: ${serial}` : `Kod Pas VIP: ${serial}`);
        }
    }

    shareVipWhatsApp() {
        const serial = document.getElementById('vip-pass-serial')?.innerText || 'KR-VIP-8892';
        const name = document.getElementById('vip-ticket-name-display')?.innerText || 'Kong-panion Member';
        const isEn = this.currentLang === 'en';
        const msg = isEn
            ? `Hello Kingu Ramen! I am a VIP Kong-panion!\nName: ${name}\nVIP Pass Code: ${serial}\nI would like to claim the 3 Free Crispy Gyozas promotion with my ramen order at The Campus Ampang (Lot G-07)!`
            : `Salam Kingu Ramen! Saya ialah Kong-panion VIP!\nNama: ${name}\nKod Pas VIP: ${serial}\nSaya ingin menuntut promosi 3 Ketul Gyoza Percuma semasa berkunjung ke outlet The Campus Ampang (Lot G-07)!`;
        window.open(`https://wa.me/60182875277?text=${encodeURIComponent(msg)}`, '_blank');
        if (window.kinguSound) window.kinguSound.playClick();
    }

    claimVipOnWhatsApp(name, passCode) {
        const isEn = this.currentLang === 'en';
        const msg = isEn
            ? `Hello Kingu Ramen! I am a VIP Kong-panion!\nName: ${name}\nPass Code: ${passCode}\nI would like to claim my Free Gyoza promotion at The Campus Ampang!`
            : `Salam Kingu Ramen! Saya ialah Kong-panion VIP!\nNama: ${name}\nKod Pas: ${passCode}\nSaya ingin menuntut promosi Gyoza Percuma semasa berkunjung ke outlet The Campus Ampang!`;
        window.open(`https://wa.me/60182875277?text=${encodeURIComponent(msg)}`, '_blank');
    }

    /* 3D Camera Controls Toolbar */
    setCameraAngle(preset, btn) {
        if (window.ramenStage && window.ramenStage.setCameraPreset) {
            window.ramenStage.setCameraPreset(preset);
        }
        document.querySelectorAll('.cam-tool-btn[data-cam]').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        this.showToast(`Sudut Kamera: ${preset.toUpperCase()}`);
    }

    toggleSteam(btn) {
        if (window.ramenStage && window.ramenStage.toggleSteam) {
            const enabled = window.ramenStage.toggleSteam();
            if (btn) btn.classList.toggle('active', enabled);
            this.showToast(enabled ? 'Stim Broth Dihidupkan' : 'Stim Broth Dimatikan');
        }
    }

    toggleAutoSpin(btn) {
        if (window.ramenStage && window.ramenStage.toggleAutoSpin) {
            const spinning = window.ramenStage.toggleAutoSpin();
            if (btn) btn.classList.toggle('active', spinning);
            this.showToast(spinning ? 'Putaran Automatik: ON' : 'Putaran Automatik: OFF');
        }
    }

    /* Halal Transparency Modal */
    openHalalModal() {
        const modal = document.getElementById('halal-modal-overlay');
        if (modal) modal.classList.add('open');
        if (window.kinguSound) window.kinguSound.playChime(660, 'sine', 0.25, 0.08);
    }

    closeHalalModal() {
        const modal = document.getElementById('halal-modal-overlay');
        if (modal) modal.classList.remove('open');
        if (window.kinguSound) window.kinguSound.playClick();
    }

    /* Google Reviews Filter */
    filterReviews(category, btn) {
        document.querySelectorAll('.review-filter-pill').forEach(p => p.classList.remove('active'));
        if (btn) btn.classList.add('active');

        const cards = document.querySelectorAll('.review-card-tilt');
        cards.forEach(card => {
            const cardCat = card.dataset.reviewCategory;
            if (category === 'all' || cardCat === category) {
                card.style.display = '';
                card.style.opacity = '0';
                card.style.transform = 'translateY(12px)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = '';
                }, 40);
            } else {
                card.style.display = 'none';
            }
        });

        if (window.kinguSound) window.kinguSound.playClick();
    }

    /* Table Reservation Logic */
    openReservationModal() {
        const modal = document.getElementById('reservation-modal-overlay');
        if (modal) modal.classList.add('open');
        if (window.kinguSound) window.kinguSound.playClick();
    }

    closeReservationModal() {
        const modal = document.getElementById('reservation-modal-overlay');
        if (modal) modal.classList.remove('open');
        if (window.kinguSound) window.kinguSound.playClick();
    }

    setReservationZone(zoneName) {
        this.reservation.zone = zoneName;
        document.querySelectorAll('.zone-choice-card').forEach(card => {
            card.classList.toggle('active', card.dataset.zone === zoneName);
        });
        if (window.kinguSound) window.kinguSound.playClick();
    }

    sendTableReservation(e) {
        if (e) e.preventDefault();
        const name = document.getElementById('res-name').value.trim();
        const phone = document.getElementById('res-phone').value.trim();
        const date = document.getElementById('res-date').value;
        const time = document.getElementById('res-time').value;
        const pax = document.getElementById('res-pax').value;
        const notes = document.getElementById('res-notes').value.trim();
        const isEn = this.currentLang === 'en';

        if (!name || !phone || !date || !time) {
            alert(isEn ? 'Please fill in your name, phone number, date, and reservation time.' : 'Sila lengkapkan nama, nombor telefon, tarikh dan waktu tempahan.');
            return;
        }

        const refCode = `KR-RES-${Math.floor(1000 + Math.random() * 9000)}`;

        const msg = isEn ?
`Hello Kingu Ramen!
I would like to make a TABLE RESERVATION at The Campus Ampang:

*RESERVATION DETAILS:*
• Reference Code: *${refCode}*
• Name: *${name}*
• Phone: *${phone}*
• Date: *${date}*
• Time: *${time}*
• Number of Guests: *${pax} Guests*
• Seating Zone: *${this.reservation.zone}*
${notes ? `• Special Requests: ${notes}\n` : ''}
Please confirm availability. Thank you!`
:
`Salam Kingu Ramen!
Saya ingin membuat TEMPAHAN MEJA di The Campus Ampang:

*BUTIRAN TEMPAHAN:*
• Kod Rujukan: *${refCode}*
• Nama: *${name}*
• Telefon: *${phone}*
• Tarikh: *${date}*
• Waktu: *${time}*
• Bilangan Tetamu: *${pax} Orang*
• Zon Duduk: *${this.reservation.zone}*
${notes ? `• Nota Khas: ${notes}\n` : ''}
Sila sahkan ketersediaan meja kami. Terima kasih!`;

        // Send email notification to allysa.techaf@gmail.com via Resend API
        fetch('/api/reservation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                phone,
                date,
                time,
                pax,
                zone: this.reservation.zone,
                notes,
                refCode
            })
        }).then(res => res.json())
          .then(data => console.log('Resend Email Notification:', data))
          .catch(err => console.warn('Resend notification skipped/offline:', err));

        window.open(`https://wa.me/60182875277?text=${encodeURIComponent(msg)}`, '_blank');
        this.closeReservationModal();
        this.showToast(isEn ? `Reservation ${refCode} confirmed!` : `Tempahan ${refCode} Berjaya Dihantar!`);
    }

    /* Live Crowd Predictor Status */
    updateLiveCrowdStatus() {
        const badge = document.getElementById('live-crowd-badge');
        const desc = document.getElementById('live-crowd-desc');
        if (!badge || !desc) return;

        const now = new Date();
        const hour = now.getHours();
        const isPeak = (hour >= 12 && hour < 14) || (hour >= 19 && hour <= 21);
        const isEn = this.currentLang === 'en';

        if (isPeak) {
            badge.className = 'crowd-badge-status status-busy';
            badge.innerText = isEn ? 'Peak Dinner/Lunch (Busy)' : 'Waktu Puncak (Meriah)';
            desc.innerText = isEn 
                ? 'High table demand right now. Advance reservations or quick walk-ins recommended!'
                : 'Permintaan meja tinggi sekarang. Tempahan awal atau walk-in pantas disyorkan!';
        } else {
            badge.className = 'crowd-badge-status status-comfortable';
            badge.innerText = isEn ? 'Comfortable & Relaxed' : 'Suasana Santai (Selesa)';
            desc.innerText = isEn
                ? 'Comfortable hours! Immediate seating available for walk-ins without long waits.'
                : 'Waktu santai! Tempat duduk sedia ada untuk walk-in tanpa perlu menunggu lama.';
        }
    }

    /* Dish Quick View Modal */
    openDishModal(id) {
        const item = MENU_DATA.find(i => i.id === id);
        if (!item) return;

        const isEn = this.currentLang === 'en';
        const enItem = (window.MENU_EN_DATA && window.MENU_EN_DATA[id]) || {};

        const overlay = document.getElementById('dish-modal-overlay');
        const img = document.getElementById('modal-dish-img');
        const title = document.getElementById('modal-dish-title');
        const jpTitle = document.getElementById('modal-dish-jp');
        const price = document.getElementById('modal-dish-price');
        const desc = document.getElementById('modal-dish-desc');
        const ingList = document.getElementById('modal-dish-ingredients');

        if (!overlay) return;

        if (img) img.src = item.img || 'assets/images/kingu_shoyu_truffle_real.jpg';
        if (title) title.innerText = item.name;
        if (jpTitle) jpTitle.innerText = item.jpName || '';
        if (price) price.innerText = `RM ${item.price.toFixed(2)}`;
        if (desc) desc.innerText = (isEn && (enItem.desc || enItem.desc_en)) ? (enItem.desc || enItem.desc_en) : item.desc;

        if (ingList) {
            const defaultIngs = isEn ? ['Fresh Halal-Grade Ingredients'] : ['Bahan-bahan segar gred Halal'];
            const ings = (isEn && (enItem.ingredients || enItem.ingredients_en)) ? (enItem.ingredients || enItem.ingredients_en) : (item.ingredients || defaultIngs);
            ingList.innerHTML = ings.map(ing => `<span class="ing-pill">${ing}</span>`).join('');
        }

        overlay.classList.add('open');
        if (window.kinguSound) window.kinguSound.playClick();
    }

    closeDishModal() {
        const overlay = document.getElementById('dish-modal-overlay');
        if (overlay) overlay.classList.remove('open');
        if (window.kinguSound) window.kinguSound.playClick();
    }

    /* FAQ Handler */
    setupFAQ() {
        document.querySelectorAll('.faq-question').forEach(q => {
            q.addEventListener('click', () => {
                const item = q.closest('.faq-item');
                if (!item) return;
                const isOpen = item.classList.contains('open');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
                if (!isOpen) item.classList.add('open');
                if (window.kinguSound) window.kinguSound.playClick();
            });
        });
    }

    showToast(msg, icon = '') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'toast-item';
        toast.innerHTML = `
            ${icon ? `<span class="toast-icon">${icon}</span>` : ''}
            <div class="toast-content">
                <strong>Kingu Ramen:</strong><br>${msg}
            </div>
        `;
        container.appendChild(toast);

        if (window.kinguSound) window.kinguSound.playToastPop();

        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 400);
        }, 3200);
    }

    setupEventListeners() {
        // Tabs
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.activeCategory = tab.dataset.category;
                if (window.kinguSound) window.kinguSound.playClick();
                this.renderFullMenu();
            });
        });

        // Search
        const searchInput = document.getElementById('menu-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase().trim();
                this.renderFullMenu();
            });
        }

        // Reservation Modal
        const reserveNavBtn = document.getElementById('btn-reserve-nav');
        if (reserveNavBtn) reserveNavBtn.addEventListener('click', (e) => {
            e.preventDefault(); // it's an <a href="#reservation"> inside the nav menu
            this.openReservationModal();
        });

        const closeResBtn = document.getElementById('reservation-modal-close');
        if (closeResBtn) closeResBtn.addEventListener('click', () => this.closeReservationModal());

        const resOverlay = document.getElementById('reservation-modal-overlay');
        if (resOverlay) {
            resOverlay.addEventListener('click', (e) => {
                if (e.target === resOverlay) this.closeReservationModal();
            });
        }

        // Reservation Zones
        document.querySelectorAll('.zone-choice-card').forEach(card => {
            card.addEventListener('click', () => {
                this.setReservationZone(card.dataset.zone);
            });
        });

        // Reservation Form submit
        const resForm = document.getElementById('table-reservation-form');
        if (resForm) {
            resForm.addEventListener('submit', (e) => this.sendTableReservation(e));
        }

        // Language Switcher Buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetLang = btn.dataset.lang;
                if (targetLang && targetLang !== this.currentLang) {
                    this.setLanguage(targetLang);
                    if (window.kinguSound) window.kinguSound.playClick();
                    this.showToast(targetLang === 'en' ? 'Switched to English' : 'Ditukar ke Bahasa Melayu');
                }
            });
        });
    }

    setupSmoothScroll() {
        const slideSections = Array.from(document.querySelectorAll('section[id]'));
        const dots = document.querySelectorAll('.viewport-dot');
        const navLinks = document.querySelectorAll('.nav-link');

        // Scroll listener for syncing active slide dot and header nav link
        let ticking = false;
        const updateActiveSlide = () => {
            const viewportCenter = window.scrollY + window.innerHeight / 2;
            let currentActiveId = '';
            let minDistance = Infinity;

            slideSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const sectionCenter = window.scrollY + rect.top + rect.height / 2;
                const dist = Math.abs(viewportCenter - sectionCenter);
                if (dist < minDistance) {
                    minDistance = dist;
                    currentActiveId = section.getAttribute('id');
                }
            });

            if (currentActiveId) {
                dots.forEach(dot => {
                    dot.classList.toggle('active', dot.getAttribute('data-target') === currentActiveId);
                });

                navLinks.forEach(link => {
                    const href = link.getAttribute('href') || '';
                    link.classList.toggle('active', href.includes(currentActiveId));
                });
            }
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveSlide);
                ticking = true;
            }
        }, { passive: true });

        // Initial sync
        updateActiveSlide();

        // Smooth scroll for dots navigation
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const targetId = dot.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                    if (window.kinguSound) window.kinguSound.playClick();
                }
            });
        });

        // Keyboard arrow navigation between 1-viewport slides
        window.addEventListener('keydown', (e) => {
            const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
            if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;
            // Slide-by-slide jumps only in desktop slide mode; on phone/tablet the
            // page scrolls naturally (see "Natural-flow mode" in styles.css).
            const isSlideMode = getComputedStyle(document.documentElement).scrollSnapType !== 'none';
            if (!isSlideMode) return;

            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                const viewportCenter = window.scrollY + window.innerHeight / 2;
                let currentIndex = 0;
                let minDistance = Infinity;

                slideSections.forEach((section, idx) => {
                    const rect = section.getBoundingClientRect();
                    const sectionCenter = window.scrollY + rect.top + rect.height / 2;
                    const dist = Math.abs(viewportCenter - sectionCenter);
                    if (dist < minDistance) {
                        minDistance = dist;
                        currentIndex = idx;
                    }
                });

                if (currentIndex < slideSections.length - 1) {
                    e.preventDefault();
                    slideSections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
                }
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                const viewportCenter = window.scrollY + window.innerHeight / 2;
                let currentIndex = 0;
                let minDistance = Infinity;

                slideSections.forEach((section, idx) => {
                    const rect = section.getBoundingClientRect();
                    const sectionCenter = window.scrollY + rect.top + rect.height / 2;
                    const dist = Math.abs(viewportCenter - sectionCenter);
                    if (dist < minDistance) {
                        minDistance = dist;
                        currentIndex = idx;
                    }
                });

                if (currentIndex > 0) {
                    e.preventDefault();
                    slideSections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.kinguApp = new KinguApp();
});
