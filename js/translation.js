// Función para cambiar el idioma
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Cambiar el texto del botón
    const langBtn = document.getElementById('language-toggle');
    if (lang === 'es') {
        langBtn.textContent = 'EN';
    } else {
        langBtn.textContent = 'ES';
    }

    // Aquí puedes añadir más lógica para cambiar textos dinámicamente
    updateTexts(lang);
}

// Función para actualizar textos (se implementará con los textos traducidos)
function updateTexts(lang) {
    const translations = {
        'home': { 'en': 'Home', 'es': 'Inicio' },
        'about': { 'en': 'About', 'es': 'Nosotros' },
        'services': { 'en': 'Services', 'es': 'Servicios' },
        'portfolio': { 'en': 'Portfolio', 'es': 'Portafolio' },
        'gallery': { 'en': 'Gallery', 'es': 'Galería' },
        'blog': { 'en': 'Blog', 'es': 'Blog' },
        'pages': { 'en': 'Pages', 'es': 'Páginas' },
        'contact': { 'en': 'Contact', 'es': 'Contacto' },
        'dream_maker': { 'en': 'Dream Maker', 'es': 'Creadora de Sueños' },
        'mexico_locations': { 'en': 'Mexico: Puerto Vallarta, Punta Mita & Sayulita.', 'es': 'México: Puerto Vallarta, Punta Mita y Sayulita.' },
        'happiness_quote': { 'en': '"Happiness grows bigger when it is shared."', 'es': '"La felicidad se hace más grande cuando se comparte"' },
        'we_do': { 'en': 'We do everything', 'es': 'Hacemos' },
        'elegant': { 'en': 'From an elegant', 'es': 'Desde una elegante' },
        'wedding': { 'en': 'wedding', 'es': 'boda' },
        'ceremonia': { 'en': 'to an intimate ceremony!', 'es': 'hasta una íntima ceremonia!' },
        'PV': { 'en': 'Located on the Pacific Ocean, Puerto Vallarta is renowned for its breathtaking sunsets. This charming little town, with its red-tiled roofs and cobblestone streets, offers a perfect setting and a wonderful atmosphere for any romantic experience.', 'es': 'Ubicado en el océano Pacífico, reconocido por sus impresionantes puestas de sol. Este pueblito encantador, con sus techos de teja roja y calles empedradas, ofrece un escenario perfecto y una atmósfera maravillosa para cualquier romántica experiencia.' },
        'RN': { 'en': 'Located south of Puerto Vallarta International Airport, San Pancho, Sayulita, Punta Mita, and La Cruz de Huanacaxtle are some of the picturesque towns of Riviera Nayarit. These destinations boast exotic, romantic, and sophisticated locations with pristine waters, golden sands, and blue skies, providing the perfect touch for your celebration.', 'es': 'Ubicados al sur del aeropuerto internacional de Puerto Vallarta, San Pancho, Sayulita, Punta Mita y la Cruz de Huanacaxtle, son algunos de los pueblitos de la Riviera Nayarit que albergan exóticas, románticas y sofisticadas locaciones con playas de aguas prístinas, arenas doradas y cielos azules que nos dan el toque perfecto para tu celebración.' },
        'explore': { 'en': 'Explore', 'es': 'Explora' },
        'our': { 'en': 'Our', 'es': 'Otros' },
        'services': { 'en': 'Services', 'es': 'Servicios' },
        'hiring': { 'en': 'Hiring a wedding planner may seem like a big investment, but it saves you stress and helps you avoid poor decisions. While choosing the dress or tasting cakes may be exciting at first, the essential details can quickly become overwhelming.', 'es': 'Contratar un organizador de bodas puede parecer una gran inversión, pero te ahorra estrés y evita malas decisiones. Aunque al principio te emocione elegir el vestido o degustar pasteles, los detalles esenciales pueden ser abrumadores.' },
        'personalized': { 'en': 'Personalized', 'es': 'Consultoría' },
        'consultation': { 'en': 'Consultation', 'es': 'Personalizada' },
        'mystory': { 'en': 'MY STORY', 'es': 'MI HISTORIA' },
        'story1': { 'en': 'I am Gretel Aguilera, a passionate wedding planner with years of experience creating unforgettable weddings in Puerto Vallarta, Punta Mita, and Sayulita.', 'es': 'Soy Gretel Aguilera, wedding planner certificada por la ABC y miembro de la Asociación de Coordinadores de Bodas de Puerto Vallarta y Riviera Nayarit (AIR), cuento con 24 años de experiencia creando bodas inolvidables en Puerto Vallarta, Punta Mita, Sayulita y los alrededores de la Bahía de Banderas.' },
        'story2': { 'en': '. My love for organization and design is paired with a sincere commitment to bringing each couple’s vision to life. Through a personalized approach, I ensure that every detail reflects their love story.', 'es': 'Mi pasión por la organización y el diseño de bodas se combina con un compromiso genuino de hacer realidad la visión de cada pareja que me confía su tan importante proyecto. A través de un enfoque personalizado, cuido cada detalle para que refleje su personalizad y su estilo.' },
        'story3': { 'en': 'I’m here to guide you every step of the way and make your special day truly magical. Let’s make your dreams come true!', 'es': 'Estoy aquí para acompañarte en cada paso del proceso y convertir tu día especial en una experiencia verdaderamente mágica. ¡Hagamos realidad tus sueños!' },
        'Certified': { 'en': 'Certified coordinator by Beverly Clark and ABC Latin America.', 'es': 'Coordinadora certificada por Beverly Clark y ABC Latam' },
        'member': { 'en': 'Member of AIR, the Association of Wedding Coordinators of PVR and NYR', 'es': 'Miembro de AIR, Asociación de Coordinadores de bodas de PVR y NYR' },
        'experience': { 'en': 'Over 23 years of professional experience', 'es': 'Más de 23 años de experiencia' },
        'weddings_made': { 'en': 'More than 350 weddings successfully coordinated', 'es': 'Más de 350 bodas realizadas' },
        'weddings': { 'en': 'Weddings', 'es': 'bodas' },
        'our_': { 'en': 'Our', 'es': 'Nuestro' },
        'Portfolio': { 'en': 'Portfolio', 'es': 'Portafolio' },
        'meet': { 'en': 'meet', 'es': 'conoce a' },
        'team': { 'en': 'Team', 'es': 'Equipo' },
        'minister': {
            'en': 'Spiritual Ceremony Minister',
            'es': 'Ministro de Ceremonias Espirituales'
        },
        'coordinator_wedding': {
            'en': 'Wedding Coordinator',
            'es': 'Coordinador de bodas'
        },
        'esp_eng': {
            'en': 'Spanish and English',
            'es': 'Español e ingles'
        },
        'flowers': {
            'en': 'Expert in flowers, design, and event decoration',
            'es': 'Experta en flores, diseño y decoración de eventos'
        },
        'coord_wed': {
            'en': 'Wedding Coordinator',
            'es': 'Coordinadora de bodas'
        },
        'admin': {
            'en': 'Administration',
            'es': 'Administración'
        },
        'event_co': {
            'en': 'Event Coordination',
            'es': 'Coordinación de eventos'
        },
        'expe_sup': {
            'en': 'Experience in Supervision and Logistics',
            'es': 'Experiencia Supervisión y Logística'
        },
        'inspire': {
            'en': 'GET INSPIRED WITH OUR',
            'es': 'INSPÍRATE CON NUESTRO'
        },
        'last': {
            'en': 'Latest',
            'es': 'Último'
        },
        'video': {
            'en': 'Video',
            'es': 'Video'
        },
        'lets': {
            'en': "LET'S START PLANNING THE WEDDING OF YOUR DREAMS",
            'es': "EMPECÉMOS A PLANEAR LA BODA DE TUS SUEÑOS"
        },
        'location_for': {
            'en': '❖ Location for the ceremony and event with ocean view',
            'es': '❖ Locación para la ceremonia y evento con vista al mar'
        },
        'welcome_sign': {
            'en': '❖ Personalized Welcome Sign',
            'es': '❖ Letrero de Bienvenida personalizado'
        },
        'minister_for': {
            'en': '❖ Minister for spiritual ceremony',
            'es': '❖ Ministro para ceremonia espiritual'
        },
        'chairs_and': {
            'en': '❖ Chairs and audio for ceremony',
            'es': '❖ Sillas y audio para ceremonia'
        },
        'reception_dinner': {
            'en': '❖ Reception Dinner with 1 hour of Welcome Cocktail',
            'es': '❖ Cena-Recepción con 1 hora de Coctel de Bienvenida'
        },
        'three_course': {
            'en': '❖ Three-course menu with starter, main dish, and dessert',
            'es': '❖ Menú de 3 tiempos, con entrada, plato fuerte y postre'
        },
        'six_hours': {
            'en': '❖ 6 hours of open bar with ice and mixers included',
            'es': '❖ 6 horas de descorche con hielos y mezcladores incluidos'
        },
        'tables_chairs': {
            'en': '❖ Tables, chairs, and linens for the event to choose from',
            'es': '❖ Mesas, sillas y mantelería para el evento a seleccionar'
        },
        'seven_hours': {
            'en': '❖ 7 hours of DJ music',
            'es': '❖ 7 horas de música de DJ'
        },
        'dance_floor': {
            'en': '❖ Wooden dance floor and robotic lighting',
            'es': '❖ Pista de baile de madera e iluminación robótica'
        },
        'day_of': {
            'en': '❖ Day-of Wedding Coordination (Event coordination)',
            'es': '❖ Day-of Wedding Coordination (Coordinación del evento)'
        },
        'waiters_cooks': {
            'en': '❖ Waiters, cooks, and event staff included',
            'es': '❖ Meseros, cocineros, y personal a cargo del evento incluido.'
        },
        'hello': { 'en': "Hi! I'm Gretel, a Wedding Planner who loves her job and is passionate about creating dream weddings. Contact us to work together!", 'es': 'Hola! Soy Gretel Una Wedding Planner que ama su trabajo y le encanta hacer bodas de ensueño. Contáctanos para trabajar juntos!' },

        'contact_us': { 'en': 'Contact us', 'es': 'Contáctanos' },
        'placeholder_name': { 'en': 'Couple\'s name', 'es': 'Nombre de los novios' },
        'placeholder_guests': { 'en': 'Number of guests', 'es': 'Número de invitados' },
        'placeholder_email': { 'en': 'Email', 'es': 'Correo electrónico' },
        'placeholder_date': { 'en': 'Wedding date', 'es': 'Fecha de la boda' },
        'placeholder_phone': { 'en': 'Phone number', 'es': 'Teléfono de contacto' },
        'placeholder_message': { 'en': 'Message', 'es': 'Mensaje' },
        'submit_button': {'en': 'Send', 'es': 'Enviar'},




        // Añade más traducciones según sea necesario
    };

    // Actualizar textos basados en las clases de traducción
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });
    // Traduce placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
const key = element.getAttribute('data-translate-placeholder');
if (translations[key] && translations[key][lang]) {
    element.setAttribute('placeholder', translations[key][lang]);
}
});
}

// Cargar el idioma preferido al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(preferredLanguage);
});