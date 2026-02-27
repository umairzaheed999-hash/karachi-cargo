/**
 * Karachi Cargo - Interactive JS
 * Handles Custom Mouse Overlay, scroll animations, and i18n Translations.
 */

const translations = {
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_branches: "Branches",
        nav_book: "Book",
        nav_track: "Track",
        nav_contact: "Contact",
        nav_book_pickup: "Book Pickup",
        hero_title: "Seamless Door-to-Door Cargo",
        hero_desc: "Fast, secure, and reliable shipping from UAE (Dubai & Ajman) to Pakistan. We collect from your door and deliver straight to your destination.",
        btn_request_quote: "Request Quote",
        btn_track_shipment: "Track Shipment",
        stat_packages: "Packages Delivered",
        stat_safe: "Safe & Secure",
        services_title: "Our Services",
        service_1_title: "Door-to-Door Collection",
        service_1_desc: "We pick up from any address in the UAE and deliver directly to your destination in Pakistan.",
        service_2_title: "Secure Packaging",
        service_2_desc: "Professional packing standards to protect your valuables during international transit.",
        service_3_title: "Fast Transit Times",
        service_3_desc: "Optimized logistics network ensuring reliable and expedited delivery schedules.",
        service_4_title: "Air Cargo",
        service_4_desc: "Fast and reliable air freight from UAE to Pakistan for urgent shipments.",
        service_5_title: "Karachi Customs Clearance",
        service_5_desc: "Complete customs clearance services in Karachi for containers arriving from any country worldwide.",
        branches_title: "Our Branches",
        branch_1_title: "Main Branch",
        branch_1_p1: "Deira Dubai",
        branch_1_p2: "Hor Al Anz",
        branch_2_title: "Branch 2",
        branch_2_p1: "Al Satwa",
        branch_2_p2: "Dubai",
        branch_3_title: "Branch 3",
        branch_3_p1: "Al Ain",
        branch_3_p2: "Industrial Area",
        book_title: "Book a Shipment",
        book_desc: "Fill out the form below to schedule a pickup or request a quote.",
        label_name: "Full Name",
        label_email: "Email Address",
        label_service: "Service Type",
        option_door: "Door-to-Door Collection",
        option_air: "Air Cargo",
        option_customs: "Customs Clearance",
        label_details: "Shipment Details",
        btn_submit: "Submit Booking",
        track_title: "Track Your Shipment",
        track_desc: "Enter your Tracking ID to view real-time status updates.",
        btn_track: "Track",
        status_picked: "Picked Up",
        status_loc_dubai: "Dubai, UAE",
        status_transit: "In Transit",
        status_loc_port: "Port Departure",
        status_customs: "Customs",
        status_loc_khi: "Karachi, PK",
        status_out: "Out for Delivery",
        status_loc_final: "Final Destination",
        footer_desc: "Your trusted logistics bridge between UAE and Pakistan.",
        footer_contact_1: "📍 Main Hub: Ajman & Dubai, UAE",
        footer_copy: "© 2026 Karachi Cargo. Providing modern cargo solutions."
    },
    ur: {
        nav_home: "ہوم",
        nav_services: "خدمات",
        nav_branches: "شاخیں",
        nav_book: "بکنگ",
        nav_track: "ٹریکنگ",
        nav_contact: "رابطہ",
        nav_book_pickup: "پک اپ بک کریں",
        hero_title: "ہموار ڈور ٹو ڈور کارگو",
        hero_desc: "متحدہ عرب امارات (دبئی اور عجمان) سے پاکستان کے لیے تیز، محفوظ اور قابل اعتماد شپنگ۔ ہم آپ کے دروازے سے سامان وصول کرتے ہیں اور سیدھے آپ کی منزل تک پہنچاتے ہیں۔",
        btn_request_quote: "کوٹیشن طلب کریں",
        btn_track_shipment: "شپمنٹ ٹریک کریں",
        stat_packages: "پیکیجز پہنچائے گئے",
        stat_safe: "محفوظ اور قابل اعتماد",
        services_title: "ہماری خدمات",
        service_1_title: "ڈور ٹو ڈور کلیکشن",
        service_1_desc: "ہم متحدہ عرب امارات میں کسی بھی پتے سے آپ کا سامان وصول کرتے ہیں اور براہ راست پاکستان میں آپ کی منزل تک پہنچاتے ہیں۔",
        service_2_title: "محفوظ پیکیجنگ",
        service_2_desc: "بین الاقوامی ترسیل کے دوران آپ کے قیمتی سامان کی حفاظت کے لیے پیشہ ورانہ پیکنگ کے معیارات۔",
        service_3_title: "تیز ترسیل کے اوقات",
        service_3_desc: "قابل اعتماد اور تیز ترسیل کے نظام الاوقات کو یقینی بنانے والا بہترین لاجسٹکس نیٹ ورک۔",
        service_4_title: "ایئر کارگو",
        service_4_desc: "فوری ترسیل کے لیے متحدہ عرب امارات سے پاکستان کے لیے تیز اور قابل اعتماد ہوائی جہاز کی مال برداری۔",
        service_5_title: "کراچی کسٹمز کلیئرنس",
        service_5_desc: "دنیا کے کسی بھی ملک سے آنے والے کنٹینرز کے لیے کراچی میں مکمل کسٹم کلیئرنس کی سہولت۔",
        branches_title: "ہماری شاخیں",
        branch_1_title: "مرکزی برانچ",
        branch_1_p1: "دیرہ دبئی",
        branch_1_p2: "حور العنز",
        branch_2_title: "برانچ 2",
        branch_2_p1: "السطوہ",
        branch_2_p2: "دبئی",
        branch_3_title: "برانچ 3",
        branch_3_p1: "العین",
        branch_3_p2: "صنعتی علاقہ",
        book_title: "شپمنٹ بک کریں",
        book_desc: "پک اپ شیڈول کرنے یا کوٹیشن کی درخواست کرنے کے لیے نیچے دیا گیا فارم پُر کریں۔",
        label_name: "پورا نام",
        label_email: "ای میل ایڈریس",
        label_service: "سروس کی قسم",
        option_door: "ڈور ٹو ڈور کلیکشن",
        option_air: "ایئر کارگو",
        option_customs: "کسٹمز کلیئرنس",
        label_details: "شپمنٹ کی تفصیلات",
        btn_submit: "بکنگ جمع کروائیں",
        track_title: "اپنی شپمنٹ ٹریک کریں",
        track_desc: "ریئل ٹائم سٹیٹس اپ ڈیٹس دیکھنے کے لیے اپنی ٹریکنگ آئی ڈی درج کریں۔",
        btn_track: "ٹریک کریں",
        status_picked: "وصول کیا گیا",
        status_loc_dubai: "دبئی، متحدہ عرب امارات",
        status_transit: "راستے میں ہے",
        status_loc_port: "پورٹ سے روانگی",
        status_customs: "کسٹمز",
        status_loc_khi: "کراچی، پاکستان",
        status_out: "ڈیلیوری کے لیے نکل گیا",
        status_loc_final: "آخری منزل",
        footer_desc: "متحدہ عرب امارات اور پاکستان کے درمیان آپ کا قابل اعتماد لاجسٹکس پل۔",
        footer_contact_1: "📍 مین ہب: عجمان اور دبئی، متحدہ عرب امارات",
        footer_copy: "© 2026 کراچی کارگو۔ جدید کارگو سلوشنز فراہم کر رہا ہے۔"
    }
};

let currentLang = 'en';

function updateLanguage(lang) {
    currentLang = lang;
    const isUrdu = lang === 'ur';

    // Update body direction for RTL support
    document.body.dir = isUrdu ? 'rtl' : 'ltr';
    if (isUrdu) {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }

    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update active state of lang toggle button
    const enSpan = document.querySelector('.lang-text.EN');
    const urSpan = document.querySelector('.lang-text.UR');

    if (enSpan && urSpan) {
        if (isUrdu) {
            enSpan.classList.remove('active');
            urSpan.classList.add('active');
        } else {
            urSpan.classList.remove('active');
            enSpan.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // --- Translation Toggle ---
    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            updateLanguage(currentLang === 'en' ? 'ur' : 'en');
        });
    }

    // --- Custom Cursor Logic ---
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = window.innerWidth / 2;
    let outlineY = window.innerHeight / 2;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Dot attaches directly to the cursor
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth animation loop for the trailing outline
    function animateCursor() {
        let dx = mouseX - outlineX;
        let dy = mouseY - outlineY;

        // Ease the outline position towards the dot position
        outlineX += dx * 0.15;
        outlineY += dy * 0.15;

        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effect for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, .service-card, .stat-card");

    interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursorOutline.style.width = "60px";
            cursorOutline.style.height = "60px";
            cursorOutline.style.backgroundColor = "rgba(0, 210, 255, 0.15)";
            cursorOutline.style.borderColor = "rgba(0, 210, 255, 0.8)";
        });

        el.addEventListener("mouseleave", () => {
            cursorOutline.style.width = "40px";
            cursorOutline.style.height = "40px";
            cursorOutline.style.backgroundColor = "transparent";
            cursorOutline.style.borderColor = "rgba(0, 210, 255, 0.5)";
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .tracking-container, .branch-card, .booking-container');

    // Setup initial state for elements to animate
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        scrollObserver.observe(el);
    });

    // --- Booking Form Submission ---
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submitBtn');
            const formStatus = document.getElementById('formStatus');

            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing Workflow...';

            const formData = new FormData(bookingForm);
            const data = Object.fromEntries(formData.entries());

            // Simulate network request to backend since Node.js is not installed locally
            setTimeout(() => {
                formStatus.style.display = 'block';
                formStatus.style.color = '#00d2ff';

                // --- XSS Mitigation ---
                // Avoid using innerHTML with unfiltered user data (data.email).
                // Safely construct the DOM nodes.
                formStatus.innerHTML = ''; // Clear previous messages

                const successPrefix = document.createTextNode('✅ Booking received successfully! ');
                const br1 = document.createElement('br');
                const br2 = document.createElement('br');

                const sysNoteSpan = document.createElement('span');
                sysNoteSpan.style.fontSize = '0.95em';
                sysNoteSpan.style.color = '#ccc';

                const b1 = document.createElement('b');
                b1.textContent = '[System Notification Triggered]';
                const br3 = document.createElement('br');

                const emailPrefix = document.createTextNode('📧 Confirmation Email dispatched to: ');
                const b2 = document.createElement('b');
                b2.textContent = data.email; // Safely inserted as text!
                const br4 = document.createElement('br');

                const alertPrefix = document.createTextNode('🚨 Alert Notification dispatched to: ');
                const b3 = document.createElement('b');
                b3.textContent = 'Head Office Admin';

                sysNoteSpan.appendChild(b1);
                sysNoteSpan.appendChild(br3);
                sysNoteSpan.appendChild(emailPrefix);
                sysNoteSpan.appendChild(b2);
                sysNoteSpan.appendChild(br4);
                sysNoteSpan.appendChild(alertPrefix);
                sysNoteSpan.appendChild(b3);

                formStatus.appendChild(successPrefix);
                formStatus.appendChild(br1);
                formStatus.appendChild(br2);
                formStatus.appendChild(sysNoteSpan);

                bookingForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Booking';
            }, 2000);
        });
    }

    // --- Interactive Click Particles ---
    document.addEventListener('click', (e) => {
        const numParticles = 6 + Math.random() * 4; // 6 to 10 particles

        for (let i = 0; i < numParticles; i++) {
            createParticle(e.clientX, e.clientY);
        }
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('click-particle');

        // Randomize direction and distance
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 50;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity;

        // Pass to CSS variables for keyframe animation
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);

        // Position at click coordinate (adjusted for particle size)
        particle.style.left = `${x - 3}px`;
        particle.style.top = `${y - 3}px`;

        document.body.appendChild(particle);

        // Cleanup particle after animation finishes
        setTimeout(() => {
            particle.remove();
        }, 800);
    }
});
