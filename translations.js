/**
 * Kingu Ramen - Comprehensive Bilingual Dictionary (Bahasa Melayu & English)
 */
const KINGU_TRANSLATIONS = {
    bm: {
        // Navigation
        nav_bestseller: "Best Seller",
        nav_menu: "Menu",
        nav_vip: "VIP",
        nav_contact: "Hubungi Kami",
        nav_reserve: "Tempah Meja",

        // Hero Section
        hero_status: "BUKA HARI INI • 11:30 AM - 10:00 PM • THE CAMPUS AMPANG",
        hero_halal_badge: "100% Sumber Halal",
        hero_rating_badge: "★ 4.7 Penilaian Google (86+ Ulasan)",
        hero_lot_badge: "Lot G-07 Tingkat Bawah",
        hero_eyebrow: "Pengalaman ramen baharu oleh Kingu Kongu",
        hero_title_1: "No Ramen",
        hero_title_2: "No Life",
        hero_desc: "Kuah pekat beraroma, mee kenyal dan keselesaan sejati — disajikan halal di tengah-tengah The Campus Ampang.",
        hero_cta_menu: "Terokai Menu",
        hero_cta_directions: "Petunjuk Arah",
        hero_metric_price: "Harga Mangkuk Utama",
        hero_metric_simmer: "Rendihan Sup Kolagen",
        hero_simmer_val: "12 Jam",
        hero_metric_reviews: "Ulasan Pelanggan Google",
        hero_cam_hero: "45° Hero",
        hero_cam_topdown: "Top-Down",
        hero_cam_zoom: "Zoom Dekat",
        hero_cam_steam: "Stim Broth",
        hero_cam_spin: "Putaran Auto",
        hero_hotspot: "Daging Rebus & Onsen Tamago",
        hero_hint: "Seret untuk pusing 360° atau pilih sudut kamera di bawah",

        // Best Seller
        bestseller_eyebrow: "Pilihan Utama Pelanggan",
        bestseller_title: "Best Seller Ramen",
        bestseller_desc: "Sama ada anda gemarkan aroma truffle mewah, kesegaran buah sitrus yuzu, kemanisan sup ketam atau kepedasan mala yang membara — setiap mangkuk disediakan dengan teliti dan penuh rasa.",
        bestseller_1_desc: "Bestseller nombor satu kegemaran ramai. Gabungan mewah hirisan itik lembut, black truffle wangi, cendawan shiitake, dan onsen tamago berkilau.",
        bestseller_2_desc: "Sensasi sitrus yuzu yang terang dan menyegarkan! Kuah ayam jernih berperisa dipadankan dengan hirisan buah yuzu, isi ayam empuk dan telur ramen.",
        bestseller_3_desc: "Untuk penggemar pedas sejati! Daging lembu braised yang kaya rasa dalam sup lada mala Szechuan berapi dengan bijan panggang dan sayur segar.",
        bestseller_1_tag: "Best Seller #1",
        bestseller_2_tag: "Sitrus Segar",
        bestseller_3_tag: "Szechuan Berapi",
        btn_view_details: "Lihat Perincian & Ramuan",

        // Full Menu
        menu_eyebrow: "Senarai Penuh & Telus",
        menu_title: "Menu Kingu Ramen",
        menu_desc: "",
        menu_tab_all: "Semua ({count})",
        menu_tab_ramen: "Ramen ({count})",
        menu_tab_snacks: "Snek & Gyoza ({count})",
        menu_tab_rice: "Hidangan Nasi ({count})",
        menu_tab_drinks: "Teh Buah & Minuman ({count})",
        menu_search_placeholder: "Cari hidangan (cth: Gyoza, Yuzu, Truffle)...",
        menu_badge_spicy: "Pedas",
        menu_badge_mild: "Sederhana",

        // VIP Pass
        vip_ribbon: "Eksklusif Komuniti Kingu Kongu",
        vip_title: "Dapatkan Pas VIP “Kong-panions”",
        vip_desc: "Sebagai penghargaan kepada komuniti “Kong-panions” yang menamakan Kingu Ramen, daftarkan nama anda untuk menuntut 3 Ketul Gyoza Rangup Percuma bersama pesanan ramen pertama anda di outlet The Campus Ampang.",
        vip_name_placeholder: "Nama Anda (cth: Aiman Hakimi)",
        vip_phone_placeholder: "Nombor WhatsApp (cth: 012-3456789)",
        vip_btn_generate: "Jana Pas VIP Digital Saya",
        vip_status_label: "Status Pas:",
        vip_status_member: "Ahli Kong-panion",
        vip_sub_display: "Masukkan nama di sebelah untuk mengaktifkan pas peribadi.",
        vip_perk_title: "3 Ketul Gyoza Percuma",
        vip_perk_desc: "Ditebus semasa menikmati semangkuk ramen di The Campus Ampang (Lot G-07).",
        vip_btn_copy: "Salin Kod Pas",
        vip_btn_share: "Kongsi ke WhatsApp",

        // Halal & Brand Story
        halal_eyebrow: "Jaminan Integriti Bahan",
        halal_title: "Janji Halal & Mesra Muslim",
        halal_intro: "Kingu Ramen komited menyediakan hidangan Jepun yang suci, bersih, dan mematuhi standard pemakanan Muslim di Malaysia:",
        halal_p1_title: "100% Bebas Daging & Lemak Khinzir",
        halal_p1_desc: "Disediakan dalam persekitaran dapur khas tanpa sebarang elemen porcine.",
        halal_p2_title: "Sifar Alkohol & Mirin Terlarang",
        halal_p2_desc: "Kuah ramen kami dirumus khas menggunakan bahan masakan halal yang disahkan.",
        halal_p3_title: "Pembekal Daging Ayam & Lembu Halal Sah",
        halal_p3_desc: "Semua bekalan protein utama diperoleh daripada pembekal berlesen di Malaysia.",
        halal_badge_text: "100% Halal",
        story_eyebrow: "Dilahirkan Bersama Komuniti",
        story_title: "Kisah Kingu Ramen",
        story_quote: "\"Jenama ini tidak sekadar dilancarkan kepada pelanggan, ia dibina bersama komuniti.\"",
        story_p1: "Diasaskan oleh pasukan di sebalik jenama izakaya terkenal Kingu Kongu, konsep ramen ini dilahirkan daripada jemputan terbuka kepada komuniti setia \"Kong-panions\" untuk memilih nama dan mengundi logo rasmi.",
        story_p2: "Pilihan komuniti jatuh pada maskot Kingu Ramen — melambangkan keakraban keluarga, keselesaan mangkuk ramen panas, dan kualiti yang sentiasa dipercayai.",
        story_logo_caption: "Maskot Rasmi Kingu Ramen",

        // Experience & Gallery
        exp_eyebrow: "Ruang & Pengalaman",
        exp_title: "Suasana Izakaya Ampang",
        exp_desc: "Nikmati mangkuk ramen panas anda di kaunter terbuka bersama chef, ruang makan selesa dalaman atau bersantai di bawah bintang di ruang legar luar The Campus Ampang.",
        gallery_4_title: "Kaunter Retro & Storefront Kingu",
        gallery_4_desc: "Lot G-07, Ground Floor, The Campus Ampang",
        gallery_5_title: "Ramen First, Think Later.",
        gallery_5_desc: "Ramen panas & teh buah segar di bawah neon kami",

        // Reviews
        reviews_eyebrow: "Kepuasan Pelanggan",
        reviews_title: "Apa Kata Mereka di Google",
        reviews_desc: "Dinilai 4.7 daripada 5.0 bintang oleh lebih 86 penggemar ramen di Google Reviews.",
        review_filter_all: "Semua Ulasan (86+)",
        review_filter_truffle: "Truffle & Kuah",
        review_filter_halal: "100% Halal",
        review_filter_vibe: "Suasana & Luaran",
        verified_review: "Ulasan Google Sah",

        // FAQ
        faq_eyebrow: "Soalan Lazim",
        faq_title: "Pertanyaan Kerap Ditanya",
        faq_desc: "Semua maklumat penting mengenai status halal, waktu operasi, dan panduan lawatan ke Kingu Ramen.",
        faq_q1: "Adakah Kingu Ramen Halal & Mesra Muslim?",
        faq_a1: "Ya! Kingu Ramen dibangunkan sebagai konsep ramen mesra Muslim sepenuhnya (Muslim-friendly). Semua bekalan ayam dan daging lembu diperoleh daripada pembekal berlesen halal sah, tanpa sebarang daging/lemak khinzir (pork-free/lard-free), dan tanpa alkohol atau mirin terlarang.",
        faq_q2: "Adakah perlu membuat tempahan meja terlebih dahulu?",
        faq_a2: "Kami menerima kedua-dua walk-in dan tempahan meja awal. Pada waktu puncak makan malam (7:00 PM - 9:00 PM) dan hujung minggu, kami mengesyorkan anda membuat tempahan meja awal melalui butang \"Tempah Meja\" untuk memastikan tempat duduk anda disediakan.",
        faq_q3: "Bagaimana dengan tempat letak kenderaan di The Campus Ampang?",
        faq_a3: "The Campus Ampang mempunyai kawasan parkir kereta bertingkat dan terbuka yang sangat luas, selesa, serta selamat dengan kawalan keselamatan 24 jam. Kedai kami terletak tepat di Ground Floor (Lot G-07), berhampiran pintu masuk utama.",
        faq_q4: "Adakah pilihan menu mesra kanak-kanak?",
        faq_a4: "Ya, kami mempunyai menu kanak-kanak yang mesra selera (tidak pedas) seperti Special Prawn Egg Rice, Shoyu Ramen, dan Gyoza Ayam lembut yang digemari seisi keluarga.",

        // Location & Contact
        loc_eyebrow: "Kunjungi Kami Hari Ini",
        loc_title: "Lokasi & Waktu Operasi",
        loc_desc: "Terletak di Ground Floor The Campus Ampang dengan kemudahan tempat letak kenderaan yang luas dan zon mesra pejalan kaki.",
        loc_address_label: "Alamat Outlet:",
        loc_hours_label: "Waktu Operasi:",
        loc_hours_val: "Setiap Hari (Isnin - Ahad): 11:30 AM - 10:00 PM (Pesanan Terakhir: 9:30 PM)",
        loc_contact_label: "Nombor Telefon & WhatsApp:",
        loc_parking_label: "Kemudahan Parkir:",
        loc_parking_val: "Kawasan letak kenderaan bertingkat The Campus Ampang (Kadar berpatutan, kawalan keselamatan 24 jam).",
        loc_waze: "Pandu Arah (Waze)",
        loc_gmaps: "Buka Google Maps",
        loc_crowd_title: "Status Kepadatan Terkini:",

        // Reservation Modal
        res_modal_title: "Tempah Meja Anda di Kingu Ramen",
        res_modal_desc: "The Campus Ampang · Lot G-07 (Ground Floor)",
        res_label_name: "Nama Penuh:",
        res_placeholder_name: "Aiman Hakimi",
        res_label_phone: "Nombor Telefon / WhatsApp:",
        res_placeholder_phone: "012-3456789",
        res_label_date: "Tarikh Tempahan:",
        res_label_time: "Masa Tempahan:",
        res_label_zone: "Pilihan Zon Tempat Duduk:",
        res_zone_counter: "Kaunter Chef Izakaya (Paling Popular)",
        res_zone_indoor: "Ruang Makan Selesa Dalaman",
        res_zone_outdoor: "Ruang Legar Luar Berangin (Outdoor)",
        res_label_pax: "Bilangan Tetamu (Pax):",
        res_pax_12: "1 - 2 Orang",
        res_pax_34: "3 - 4 Orang",
        res_pax_56: "5 - 6 Orang",
        res_pax_7plus: "7+ Orang (Keluarga)",
        res_time_lunch_1: "12:00 PM (Makan Tengahari)",
        res_time_lunch_2: "01:30 PM (Makan Tengahari)",
        res_time_dinner_1: "06:30 PM (Makan Malam)",
        res_time_dinner_2: "07:30 PM (Puncak Malam)",
        res_time_dinner_3: "08:45 PM (Makan Malam)",
        res_label_notes: "Nota Khas (Contoh: Baby chair, sambutan hari lahir):",
        res_placeholder_notes: "Tinggalkan pesanan ringkas jika ada...",
        res_btn_submit: "Hantar Tempahan ke WhatsApp Rasmi",

        // Dish Quick View Modal
        dish_modal_ingredients: "Bahan Utama & Alergen:",
        dish_modal_close: "Tutup Perincian",

        // Halal Modal
        halal_modal_title: "Integriti & Jaminan Halal",
        halal_modal_desc: "Komitmen penuh Kingu Ramen by Kingu Kongu terhadap penyediaan makanan Jepun yang bersih, suci & mesra Muslim di Malaysia.",
        halal_g1_title: "100% Pork-Free & Lard-Free",
        halal_g1_desc: "Dapur dan semua peralatan memasak kami beroperasi dalam persekitaran yang bebas sepenuhnya daripada sebarang bahan berkaitan khinzir.",
        halal_g2_title: "Sifar Alkohol & Mirin Terlarang",
        halal_g2_desc: "Kuah ramen kami dirumus secara saintifik tanpa setitis pun alkohol masakan atau mirin konvensional, menggantikannya dengan ekstrak buah & gula semulajadi.",
        halal_g3_title: "Pembekal Sah Berlesen JAKIM",
        halal_g3_desc: "Semua bekalan ayam dan daging lembu diperoleh daripada pembekal utama tempatan yang memegang sijil Halal JAKIM sah yang diperakui.",
        halal_g4_title: "Latihan Pengendalian Makanan & Kebersihan",
        halal_g4_desc: "Krew dapur mematuhi amalan kebersihan ketat (Good Hygiene Practices) dan menerima suntikan serta latihan keselamatan makanan berkanun.",
        halal_modal_btn: "Faham & Kembali Menjamu Selera",

        // Review Quotes
        review_1_quote: "Truffle ramen dia memang padu teruk! Bau truffle semerbak, kuah rich dan tak muak langsung. Senang hati makan sebab Halal dan bersih. Staff pun sangat friendly.",
        review_2_quote: "Yuzu Lover Ramen sangat refreshing. Jarang jumpa ramen halal dengan balance rasa citrus macam ni dekat KL. Gyoza rangup dan Salmon Mentai Ball wajib order!",
        review_3_quote: "Suka vibe kedai dekat The Campus Ampang, outdoor seating dia tenang waktu malam. Mala beef ramen cukup kick pedas dia. Harga sangat berbaloi untuk kualiti ni.",

        // Best Seller Ingredient Pills
        tag_black_truffle: "Black Truffle",
        tag_smoked_duck: "Itik Salai",
        tag_shiitake: "Cendawan Shiitake",
        tag_onsen_egg: "Onsen Tamago",
        tag_fresh_yuzu: "Hirisan Yuzu Segar",
        tag_tender_chicken: "Ayam Lembut",
        tag_tamago: "Ajitsuke Tamago",
        tag_greens: "Sayur Hijau Segar",
        tag_braised_beef: "Daging Rebus Lembut",
        tag_mala_oil: "Minyak Mala Szechuan",
        tag_bok_choy: "Bok Choy",
        tag_ramen_egg: "Telur Ramen",

        // Slide Navigation Tooltips
        dot_hero: "Utama",
        dot_signature: "Best Seller",
        dot_menu: "Menu",
        dot_vip: "VIP Pas",
        dot_halal: "Janji Halal",
        dot_experience: "Suasana",
        dot_reviews: "Ulasan",
        dot_faq: "FAQ",
        dot_location: "Lokasi",

        // Reservation Seating Zones
        res_zone_chef: "Kaunter Chef",
        res_zone_chef_sub: "Melihat ramen dimasak",
        res_zone_booth: "Cozy Booth",
        res_zone_booth_sub: "Selesa & berhawa dingin",
        res_zone_patio: "Patio Luar",
        res_zone_patio_sub: "Angin malam santai",

        // Footer Additions
        footer_phone: "Telefon: 018-287 5277",
        footer_wa: "WhatsApp Rasmi",
        footer_quote: "“No ramen no life!”",
        footer_lot: "Lot G-07 Level G, Ampang",
        footer_bottom_lot: "The Campus Ampang · Lot G-07",

        // Footer
        footer_desc: "Konsep ramen halal premium oleh Kingu Kongu di The Campus Ampang. Mengutamakan bahan berkualiti tinggi, sup autentik yang berkhasiat, dan rasa yang memikat setiap hati.",
        footer_quick_links: "Pautan Pantas",
        footer_contact: "Hubungan",
        footer_brand_family: "Keluarga Jenama",
        footer_brand_family_desc: "Dibina dengan bangga bersama komuniti Kong-panions Kingu Kongu.",
        footer_copyright: "© 2026 Kingu Ramen by Kingu Kongu. Hak Cipta Terpelihara."
    },

    en: {
        // Navigation
        nav_bestseller: "Best Seller",
        nav_menu: "Menu",
        nav_vip: "VIP",
        nav_contact: "Contact Us",
        nav_reserve: "Book a Table",

        // Hero Section
        hero_status: "OPEN TODAY • 11:30 AM - 10:00 PM • THE CAMPUS AMPANG",
        hero_halal_badge: "100% Halal Sourced",
        hero_rating_badge: "★ 4.7 Google Rating (86+ Reviews)",
        hero_lot_badge: "Lot G-07 Ground Floor",
        hero_eyebrow: "A new ramen experience by Kingu Kongu",
        hero_title_1: "No Ramen",
        hero_title_2: "No Life",
        hero_desc: "Bold broth, springy noodles and big comfort — served halal in the heart of The Campus Ampang.",
        hero_cta_menu: "View The Menu",
        hero_cta_directions: "Get Directions",
        hero_metric_price: "Main Bowl Pricing",
        hero_metric_simmer: "Collagen Broth Simmer",
        hero_simmer_val: "12 Hours",
        hero_metric_reviews: "Google Diner Reviews",
        hero_cam_hero: "45° Hero",
        hero_cam_topdown: "Top-Down",
        hero_cam_zoom: "Zoom In",
        hero_cam_steam: "Broth Steam",
        hero_cam_spin: "Auto Rotate",
        hero_hotspot: "Braised Beef & Onsen Tamago",
        hero_hint: "Drag to rotate 360° or pick camera angles below",

        // Best Seller
        bestseller_eyebrow: "Customer Favourites",
        bestseller_title: "Best Seller Ramen",
        bestseller_desc: "Whether you crave rich artisanal truffle aroma, refreshing yuzu citrus, savory crab sweetness or fiery mala heat — every bowl is crafted with passion and precision.",
        bestseller_1_desc: "Number one crowd-favourite bestseller! Luxurious combination of tender duck slices, fragrant black truffle, shiitake mushrooms, and glistening onsen egg.",
        bestseller_2_desc: "Bright and zesty yuzu citrus sensation! Flavorful clear chicken broth paired with fresh yuzu slices, tender chicken and ramen egg.",
        bestseller_3_desc: "For true spice enthusiasts! Rich slow-braised beef in fiery Szechuan mala broth with toasted sesame and fresh greens.",
        bestseller_1_tag: "Best Seller #1",
        bestseller_2_tag: "Citrus Refreshing",
        bestseller_3_tag: "Fiery Szechuan",
        btn_view_details: "View Details & Ingredients",

        // Full Menu
        menu_eyebrow: "Complete & Transparent",
        menu_title: "Kingu Ramen Menu",
        menu_desc: "",
        menu_tab_all: "All ({count})",
        menu_tab_ramen: "Ramen ({count})",
        menu_tab_snacks: "Snacks & Gyoza ({count})",
        menu_tab_rice: "Rice Dishes ({count})",
        menu_tab_drinks: "Fruit Tea & Drinks ({count})",
        menu_search_placeholder: "Search dishes (e.g. Gyoza, Yuzu, Truffle)...",
        menu_badge_spicy: "Spicy",
        menu_badge_mild: "Mild",

        // VIP Pass
        vip_ribbon: "Exclusive Kingu Kongu Community",
        vip_title: "Get Your “Kong-panions” VIP Pass",
        vip_desc: "As a token of appreciation to the “Kong-panions” community who named Kingu Ramen, register your name to claim 3 Free Crispy Gyozas with your first ramen bowl at The Campus Ampang.",
        vip_name_placeholder: "Your Name (e.g. Aiman Hakimi)",
        vip_phone_placeholder: "WhatsApp Number (e.g. 012-3456789)",
        vip_btn_generate: "Generate My Digital VIP Pass",
        vip_status_label: "Pass Status:",
        vip_status_member: "Kong-panion Member",
        vip_sub_display: "Enter your name on the left to activate your personal pass.",
        vip_perk_title: "3 Free Pieces of Gyoza",
        vip_perk_desc: "Redeemable when dining in for any ramen bowl at The Campus Ampang (Lot G-07).",
        vip_btn_copy: "Copy Pass Code",
        vip_btn_share: "Share to WhatsApp",

        // Halal & Brand Story
        halal_eyebrow: "Ingredient Integrity Guarantee",
        halal_title: "Halal & Muslim-Friendly Promise",
        halal_intro: "Kingu Ramen is committed to serving pure, clean Japanese dishes compliant with Muslim dietary standards in Malaysia:",
        halal_p1_title: "100% Pork-Free & Lard-Free",
        halal_p1_desc: "Prepared in a dedicated kitchen environment with zero porcine elements.",
        halal_p2_title: "Zero Alcohol & Forbidden Mirin",
        halal_p2_desc: "Our ramen broth is formulated exclusively with certified halal culinary ingredients.",
        halal_p3_title: "Certified Halal Chicken & Beef Suppliers",
        halal_p3_desc: "All core meat supplies are sourced from licensed certified suppliers in Malaysia.",
        halal_badge_text: "100% Halal",
        story_eyebrow: "Born With The Community",
        story_title: "The Story of Kingu Ramen",
        story_quote: "\"This brand wasn't just launched to customers, it was built together with the community.\"",
        story_p1: "Founded by the team behind renowned izakaya Kingu Kongu, this ramen concept was born from an open invitation to the loyal \"Kong-panions\" community to vote on the official name and mascot logo.",
        story_p2: "The community chose the Kingu Ramen mascot — symbolizing family warmth, hot comforting bowls of ramen, and quality you can always trust.",
        story_logo_caption: "Official Kingu Ramen Mascot",

        // Experience & Gallery
        exp_eyebrow: "Spaces & Experience",
        exp_title: "Ampang Izakaya Ambiance",
        exp_desc: "Enjoy your piping-hot ramen at the open chef counter, cozy indoor dining, or unwind under the stars in the outdoor seating area at The Campus Ampang.",
        gallery_4_title: "Retro Counter & Kingu Storefront",
        gallery_4_desc: "Lot G-07, Ground Floor, The Campus Ampang",
        gallery_5_title: "Ramen First, Think Later.",
        gallery_5_desc: "Hot ramen & fresh fruit tea under our neon glow",

        // Reviews
        reviews_eyebrow: "Guest Satisfaction",
        reviews_title: "What Guests Say on Google",
        reviews_desc: "Rated 4.7 out of 5.0 stars by over 86 ramen enthusiasts on Google Reviews.",
        review_filter_all: "All Reviews (86+)",
        review_filter_truffle: "Truffle & Broth",
        review_filter_halal: "100% Halal",
        review_filter_vibe: "Vibe & Outdoor",
        verified_review: "Verified Google Review",

        // FAQ
        faq_eyebrow: "Frequently Asked Questions",
        faq_title: "Common Inquiries",
        faq_desc: "All essential info regarding halal status, operating hours, and visitor guides for Kingu Ramen.",
        faq_q1: "Is Kingu Ramen Halal & Muslim-Friendly?",
        faq_a1: "Yes! Kingu Ramen is developed as a 100% Muslim-friendly ramen concept. All chicken and beef supplies are sourced from licensed halal-certified suppliers, strictly pork-free and lard-free, with zero cooking alcohol or forbidden mirin.",
        faq_q2: "Do I need to make a table reservation in advance?",
        faq_a2: "We welcome both walk-ins and advance table reservations. During peak dinner hours (7:00 PM - 9:00 PM) and weekends, we recommend reserving early via the \"Book a Table\" button to secure your seating.",
        faq_q3: "How is the parking situation at The Campus Ampang?",
        faq_a3: "The Campus Ampang provides ample multi-level and open parking that is spacious, convenient, and safe with 24-hour security. Our restaurant is right on the Ground Floor (Lot G-07), near the main entrance.",
        faq_q4: "Are there kid-friendly menu options?",
        faq_a4: "Yes! We offer non-spicy kid-friendly options such as Special Prawn Egg Rice, Shoyu Ramen, and tender Chicken Gyoza loved by families.",

        // Location & Contact
        loc_eyebrow: "Visit Us Today",
        loc_title: "Location & Operating Hours",
        loc_desc: "Located on Ground Floor The Campus Ampang with abundant parking and a pedestrian-friendly promenade.",
        loc_address_label: "Outlet Address:",
        loc_hours_label: "Operating Hours:",
        loc_hours_val: "Daily (Mon - Sun): 11:30 AM - 10:00 PM (Last Order: 9:30 PM)",
        loc_contact_label: "Phone & WhatsApp:",
        loc_parking_label: "Parking Facilities:",
        loc_parking_val: "The Campus Ampang multi-level parking (Reasonable rates, 24-hour security surveillance).",
        loc_waze: "Navigate via Waze",
        loc_gmaps: "Open Google Maps",
        loc_crowd_title: "Current Crowd Status:",

        // Reservation Modal
        res_modal_title: "Reserve Your Table at Kingu Ramen",
        res_modal_desc: "The Campus Ampang · Lot G-07 (Ground Floor)",
        res_label_name: "Full Name:",
        res_placeholder_name: "Aiman Hakimi",
        res_label_phone: "Phone / WhatsApp Number:",
        res_placeholder_phone: "012-3456789",
        res_label_date: "Reservation Date:",
        res_label_time: "Reservation Time:",
        res_label_zone: "Seating Zone Preference:",
        res_zone_counter: "Izakaya Chef Counter (Most Popular)",
        res_zone_indoor: "Cozy Indoor Dining",
        res_zone_outdoor: "Breezy Outdoor Promenade (Outdoor)",
        res_label_pax: "Number of Guests (Pax):",
        res_pax_12: "1 - 2 Guests",
        res_pax_34: "3 - 4 Guests",
        res_pax_56: "5 - 6 Guests",
        res_pax_7plus: "7+ Guests (Family)",
        res_time_lunch_1: "12:00 PM (Lunch)",
        res_time_lunch_2: "01:30 PM (Lunch)",
        res_time_dinner_1: "06:30 PM (Dinner)",
        res_time_dinner_2: "07:30 PM (Dinner Peak)",
        res_time_dinner_3: "08:45 PM (Dinner)",
        res_label_notes: "Special Requests (e.g. Baby chair, birthday celebration):",
        res_placeholder_notes: "Leave a short request if any...",
        res_btn_submit: "Send Reservation to Official WhatsApp",

        // Dish Quick View Modal
        dish_modal_ingredients: "Main Ingredients & Allergens:",
        dish_modal_close: "Close Details",

        // Halal Modal
        halal_modal_title: "Halal Integrity & Assurance",
        halal_modal_desc: "Kingu Ramen by Kingu Kongu's complete commitment to clean, wholesome & Muslim-friendly Japanese dining in Malaysia.",
        halal_g1_title: "100% Pork-Free & Lard-Free",
        halal_g1_desc: "Our kitchen and all cookware operate in an environment entirely free from any porcine-derived materials.",
        halal_g2_title: "Zero Alcohol & Forbidden Mirin",
        halal_g2_desc: "Our broth is formulated scientifically without a drop of cooking sake or conventional mirin, utilizing fruit extracts and natural sugar balance.",
        halal_g3_title: "Licensed JAKIM Halal Suppliers",
        halal_g3_desc: "All poultry and beef are sourced from major local suppliers holding certified valid JAKIM Halal accreditation.",
        halal_g4_title: "Food Handling Training & Hygiene",
        halal_g4_desc: "Kitchen crew adheres to Good Hygiene Practices and completes certified statutory food safety vaccinations and training.",
        halal_modal_btn: "Understood & Back to Dining",

        // Review Quotes
        review_1_quote: "Their Truffle Ramen is absolutely extraordinary! Fragrant truffle aroma, rich comforting broth that never feels cloying. Complete peace of mind with 100% Halal integrity and clean space. Staff are super friendly too.",
        review_2_quote: "The Yuzu Lover Ramen is amazingly refreshing! It is rare to find halal ramen with such an exquisite citrus balance in KL. Crispy Gyoza and Salmon Mentai are must-orders!",
        review_3_quote: "Love the atmosphere at The Campus Ampang, outdoor seating is so serene at night. Mala beef ramen has that fiery authentic kick. Exceptional value for this high culinary quality.",

        // Best Seller Ingredient Pills
        tag_black_truffle: "Black Truffle",
        tag_smoked_duck: "Smoked Duck",
        tag_shiitake: "Shiitake",
        tag_onsen_egg: "Onsen Tamago",
        tag_fresh_yuzu: "Fresh Yuzu Slices",
        tag_tender_chicken: "Tender Chicken",
        tag_tamago: "Ajitsuke Tamago",
        tag_greens: "Spring Greens",
        tag_braised_beef: "Braised Beef",
        tag_mala_oil: "Szechuan Mala Oil",
        tag_bok_choy: "Bok Choy",
        tag_ramen_egg: "Ramen Egg",

        // Slide Navigation Tooltips
        dot_hero: "Home",
        dot_signature: "Best Seller",
        dot_menu: "Menu",
        dot_vip: "VIP Pass",
        dot_halal: "Halal Promise",
        dot_experience: "Ambience",
        dot_reviews: "Reviews",
        dot_faq: "FAQ",
        dot_location: "Location",

        // Reservation Seating Zones
        res_zone_chef: "Chef Counter",
        res_zone_chef_sub: "Watch ramen craft live",
        res_zone_booth: "Cozy Booth",
        res_zone_booth_sub: "Comfortable & air-conditioned",
        res_zone_patio: "Outdoor Patio",
        res_zone_patio_sub: "Breezy al-fresco seating",

        // Footer Additions
        footer_phone: "Phone: 018-287 5277",
        footer_wa: "Official WhatsApp",
        footer_quote: "“No ramen no life!”",
        footer_lot: "Lot G-07 Level G, Ampang",
        footer_bottom_lot: "The Campus Ampang · Lot G-07",

        // Footer
        footer_desc: "Premium halal ramen concept by Kingu Kongu at The Campus Ampang. Prioritizing high quality ingredients, nourishing authentic broth, and heartwarming taste.",
        footer_quick_links: "Quick Links",
        footer_contact: "Contact",
        footer_brand_family: "Brand Family",
        footer_brand_family_desc: "Proudly built together with the Kong-panions community of Kingu Kongu.",
        footer_copyright: "© 2026 Kingu Ramen by Kingu Kongu. All Rights Reserved."
    }
};

// Bilingual English Menu Attributes (all items matching app.js MENU_DATA)
const MENU_EN_DATA = {
    // RAMEN
    yummy_truffle: {
        desc: "Number one bestseller! Served with tender duck slices, fresh black truffle aroma, shiitake mushrooms, molten onsen tamago & Japanese fish cake in rich umami broth.",
        tag: "Bestseller",
        ingredients: ["Italian Black Truffle", "Smoked Duck Breast", "Shiitake Mushrooms", "Molten Onsen Tamago", "Narutomaki Fish Cake"],
        allergens: ["Gluten", "Egg", "Soybeans"]
    },
    yuzu_lover: {
        desc: "Refreshing citrus sensation! Authentic Japanese yuzu citrus paired with tender chicken slices, half-boiled ramen egg, vibrant greens and clear chicken broth.",
        tag: "Refreshing",
        ingredients: ["Pure Japanese Yuzu Extract", "Tender Chicken Breast", "Ajitsuke Tamago", "Fresh Greens", "Spring Onions"],
        allergens: ["Gluten", "Egg"]
    },
    kingu_shoyu: {
        desc: "Timeless classic Japanese ramen profile. Naturally brewed shoyu soy broth with deep umami, tender chicken chashu, menma bamboo shoots and crisp nori.",
        tag: "Classic",
        ingredients: ["Artisanal Shoyu Brew", "Chicken Chashu", "Menma Bamboo", "Crispy Nori", "Springy Noodles"],
        allergens: ["Gluten", "Soybeans"]
    },
    chili_crab: {
        desc: "Bold sweet-spicy seafood exploration! Rich crab broth with balanced spicy notes that ignite the palate for seafood lovers.",
        tag: "Seafood",
        ingredients: ["Crab Seafood Broth", "Sweet Chili Paste", "Chicken Chashu", "Narutomaki", "Spring Onions"],
        allergens: ["Gluten", "Crustaceans"]
    },
    rich_soup_chicken: {
        desc: "Chicken paitan collagen broth simmered for 12 hours to achieve a thick, velvety creaminess packed with natural nourishment.",
        tag: "Creamy",
        ingredients: ["12h Simmered Paitan Broth", "Sous-Vide Chicken Breast", "Spring Onions", "Ajitsuke Tamago"],
        allergens: ["Gluten", "Egg"]
    },
    mala_chicken: {
        desc: "Electrifying harmony of Szechuan mala peppercorns and rich Japanese ramen broth! Fiery tingling heat paired with spiced tender chicken slices.",
        tag: "Spicy",
        ingredients: ["Szechuan Mala Oil", "Spiced Chicken Slices", "Bok Choy", "Dried Chili", "Ramen Egg"],
        allergens: ["Gluten", "Egg", "Sesame"]
    },
    mala_beef: {
        desc: "Fiery Szechuan mala numbing sensation combined with rich bone broth, tender slow-braised beef slices, and lava onsen egg.",
        tag: "Fiery Beef",
        ingredients: ["Slow-Braised Beef", "Rich Spiced Mala Broth", "Toasted Sesame Seeds", "Bok Choy", "Ramen Egg"],
        allergens: ["Gluten", "Beef", "Egg", "Sesame"]
    },

    // SNACKS & SIDES
    salmon_mentai_ball: {
        desc: "Torched savory salmon meatballs glazed in creamy savory mentaiko mayo sauce and topped with crunchy tobiko roe.",
        tag: "Must Try",
        ingredients: ["Fresh Salmon", "Smoked Mentaiko Mayo", "Tobiko Fish Roe", "Black Caviar"],
        allergens: ["Fish", "Egg"]
    },
    chicken_gyoza: {
        desc: "Crispy pan-fried Japanese dumplings with a juicy minced chicken and garlic chive filling.",
        tag: "Sharing",
        ingredients: ["Minced Chicken", "Garlic Chives", "Crisp Gyoza Skin", "Soy Dipping Tare"],
        allergens: ["Gluten", "Soybeans"]
    },
    prawn_gyoza: {
        desc: "Pan-seared artisanal gyozas packed with sweet whole minced sea prawns and aromatic seasonings.",
        tag: "Seafood",
        ingredients: ["Fresh Sea Prawns", "Spring Onions", "Handmade Gyoza Skin"],
        allergens: ["Gluten", "Crustaceans"]
    },
    beef_gyoza: {
        desc: "Savory pan-fried gyozas packed with hearty minced beef, minced ginger and fresh scallions.",
        tag: "Popular",
        ingredients: ["Prime Minced Beef", "Fresh Ginger", "Garlic", "Gyoza Skin"],
        allergens: ["Gluten", "Beef"]
    },
    ori_fried_chicken_3: {
        desc: "Golden crisp Japanese karaage chicken (3 pcs) marinated in artisanal shoyu and fresh ginger, served with lemon.",
        tag: "Crispy",
        ingredients: ["Marinated Chicken Thigh", "Ginger Garlic Shoyu", "Crisp Starch Coating"],
        allergens: ["Gluten"]
    },
    ori_fried_chicken_5: {
        desc: "Generous sharing portion of golden crispy karaage chicken (5 pcs) for family and friends.",
        tag: "Sharing",
        ingredients: ["Marinated Chicken Thigh", "Ginger Garlic Shoyu", "Crisp Starch Coating"],
        allergens: ["Gluten"]
    },
    mentai_fried_chicken_3: {
        desc: "Crispy fried chicken karaage (3 pcs) drizzled with rich flame-torched mentaiko mayo.",
        tag: "Special",
        ingredients: ["Crispy Chicken", "Torched Mentai Mayo", "Seaweed Furikake"],
        allergens: ["Gluten", "Egg", "Fish"]
    },
    mentai_fried_chicken_5: {
        desc: "Sharing portion of 5 crispy fried chicken pieces generously draped with flame-torched mentaiko mayo.",
        tag: "Special",
        ingredients: ["Crispy Chicken", "Torched Mentai Mayo", "Seaweed Furikake"],
        allergens: ["Gluten", "Egg", "Fish"]
    },
    spicy_korean_chicken_3: {
        desc: "Crispy fried chicken (3 pcs) glazed in sweet spicy Korean gochujang sauce and sprinkled with toasted sesame.",
        tag: "Spicy",
        ingredients: ["Crispy Chicken Thigh", "Spicy Gochujang Glaze", "Toasted Sesame"],
        allergens: ["Gluten", "Sesame"]
    },
    spicy_korean_chicken_5: {
        desc: "Generous 5-piece serving of sweet spicy Korean glazed fried chicken for ultimate satisfaction.",
        tag: "Spicy",
        ingredients: ["Crispy Chicken Thigh", "Spicy Gochujang Glaze", "Toasted Sesame"],
        allergens: ["Gluten", "Sesame"]
    },

    // RICE DISHES
    special_prawn_egg_rice: {
        desc: "Fragrant Japanese rice topped with silken fluffy scrambled eggs, plump jumbo prawns and Kingu specialty savory tare glaze.",
        tag: "Comfort Food",
        ingredients: ["Japanese Pearl Rice", "Silken Eggs", "Jumbo Prawns", "Sweet Dashi Glaze"],
        allergens: ["Egg", "Crustaceans", "Soybeans"]
    },
    steamed_rice: {
        desc: "A steaming bowl of premium fluffy Japanese pearl rice.",
        tag: "Side",
        ingredients: ["Premium Japanese Pearl Rice"],
        allergens: []
    },

    // COLD OOLONG TEAS & BEVERAGES
    oolong_strawberry: {
        desc: "Refreshing iced oolong tea infused with ripe sweet strawberries and a soothing splash of citrus.",
        tag: "Signature Drink",
        ingredients: ["Brewed Oolong Tea", "Fresh Strawberry Puree", "Ice"],
        allergens: []
    },
    oolong_peach: {
        desc: "Aromatic white peach essence harmoniously blended with chilled brewed golden oolong tea.",
        tag: "Refreshing",
        ingredients: ["Brewed Oolong Tea", "White Peach Nectar", "Ice"],
        allergens: []
    },
    oolong_orange: {
        desc: "Chilled oolong tea elevated with vibrant citrus orange extract for an uplifting, sunny refresher.",
        tag: "Citrus",
        ingredients: ["Brewed Oolong Tea", "Citrus Orange Extract", "Ice"],
        allergens: []
    },
    oolong_blackcurrant: {
        desc: "Crisp cold oolong tea infused with tart and sweet dark blackcurrant berry notes.",
        tag: "Berries",
        ingredients: ["Brewed Oolong Tea", "Blackcurrant Nectar", "Ice"],
        allergens: []
    },
    green_tea: {
        desc: "Authentic Japanese green tea brewed from premium tea leaves with refreshing herbal clarity (Cold or Hot).",
        tag: "Traditional",
        ingredients: ["Japanese Green Tea Leaves", "Pure Spring Water"],
        allergens: []
    },
    mineral_water: {
        desc: "Chilled bottled pure natural mineral water.",
        tag: "Hydration",
        ingredients: ["Natural Mineral Water"],
        allergens: []
    },
    coke_sprite: {
        desc: "Classic chilled carbonated soda served over sparkling crystal ice.",
        tag: "Chilled",
        ingredients: ["Chilled Carbonated Soda", "Ice Cubes"],
        allergens: []
    }
};

if (typeof window !== 'undefined') {
    window.KINGU_TRANSLATIONS = KINGU_TRANSLATIONS;
    window.MENU_EN_DATA = MENU_EN_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { KINGU_TRANSLATIONS, MENU_EN_DATA };
}
