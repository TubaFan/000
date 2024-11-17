// 全局变量
let currentLanguage = 'cn'; // 当前语言，默认为中文
let currentInstruments = []; // 当前显示的乐器列表
let currentPage = 1; // 当前页码
const itemsPerPage = 6; // 每页显示的乐器数量
let currentCategory = ''; // 当前乐器分类

// 翻译对象
const translations = {
    en: {
        "site-title": "Fanyunqi's Personal Website",
        "home-link": "Home",
        "instruments-link": "Instruments",
        "event-link": "Events",
        "study-abroad-link": "Study Abroad",
        "artists-link": "Artists",
        "contact-link": "Contact",
        "home-title": "Welcome to My Personal Website",
        "home-description": "Hello! I'm a passionate musician and web developer. On this website, you can explore various musical instruments and learn more about them.",
        "intro-title": "About Me",
        "intro-text": "I have been playing music for over 10 years, specializing in brass instruments. I also have a deep interest in web development and love combining my passions to create interactive experiences.",
        "latest-events-title": "Latest Events",
        "featured-title": "Featured Instruments",
        "event-title": "Events",
        "event-description": "Explore upcoming musical events and workshops.",
        "event-details-title": "Event Details",
        "study-abroad-title": "Study Abroad Programs",
        "study-abroad-description": "Discover study abroad opportunities in music education.",
        "study-details-title": "Study Abroad Details",
        "artists-title": "Artists",
        "instrument-categories-title": "Instrument Categories",
        "instruments-title": "Browse Instruments",
        "contact-title": "Contact Me",
        "contact-description": "Feel free to reach out to me via:",
        "filter-label": "Filter by brand or type:",
        "flute": "Flute",
        "clarinet": "Clarinet",
        "oboe": "Oboe",
        "trumpet": "Trumpet",
        "trombone": "Trombone",
        "tuba": "Tuba",
        "violin": "Violin",
        "cello": "Cello",
        "bass": "Bass",
        "brands": "Brand",
        "Price": "Price",
        "No instruments found.": "No instruments found.",
        "开始探索": "Get Started",
        "了解更多": "Learn More",
        "Date": "Date",
        "Location": "Location",
        "Country": "Country",
        "Event Description": "Event Description",
        "Study Description": "Program Description"
    },
    cn: {
        "site-title": "范云麒的个人网站",
        "home-link": "主页",
        "instruments-link": "乐器浏览",
        "event-link": "活动",
        "study-abroad-link": "留学项目",
        "artists-link": "艺术家",
        "contact-link": "联系方式",
        "home-title": "欢迎来到我的个人网站",
        "home-description": "你好！我是一名热爱音乐和网页开发的爱好者。在这个网站上，你可以探索各种乐器并了解更多信息。",
        "intro-title": "关于我",
        "intro-text": "我从事音乐演奏已有10多年，专注于铜管乐器。同时，我对网页开发有着浓厚的兴趣，喜欢将我的热情结合起来创造互动体验。",
        "latest-events-title": "最新活动",
        "featured-title": "推荐乐器",
        "event-title": "活动",
        "event-description": "探索即将举行的音乐活动和工作坊。",
        "event-details-title": "活动详情",
        "study-abroad-title": "留学项目",
        "study-abroad-description": "发现音乐教育方面的留学机会。",
        "study-details-title": "留学项目详情",
        "artists-title": "艺术家",
        "instrument-categories-title": "乐器分类",
        "instruments-title": "乐器浏览",
        "contact-title": "联系我",
        "contact-description": "欢迎通过以下方式与我联系：",
        "filter-label": "按品牌或类型筛选：",
        "flute": "长笛",
        "clarinet": "单簧管",
        "oboe": "双簧管",
        "trumpet": "小号",
        "trombone": "长号",
        "tuba": "大号",
        "violin": "小提琴",
        "cello": "大提琴",
        "bass": "低音提琴",
        "brands": "品牌",
        "Price": "价格",
        "No instruments found.": "未找到符合条件的乐器。",
        "开始探索": "开始探索",
        "了解更多": "了解更多",
        "Date": "日期",
        "Location": "地点",
        "Country": "国家",
        "Event Description": "活动描述",
        "Study Description": "项目描述"
    },
    es: {
        "site-title": "Sitio Web Personal de Fanyunqi",
        "home-link": "Inicio",
        "instruments-link": "Instrumentos",
        "event-link": "Eventos",
        "study-abroad-link": "Estudiar en el Extranjero",
        "artists-link": "Artistas",
        "contact-link": "Contacto",
        "home-title": "Bienvenido a Mi Sitio Web Personal",
        "home-description": "¡Hola! Soy un músico apasionado y desarrollador web. En este sitio web, puedes explorar varios instrumentos musicales y aprender más sobre ellos.",
        "intro-title": "Sobre Mí",
        "intro-text": "He estado tocando música durante más de 10 años, especializándome en instrumentos de viento-metal. También tengo un profundo interés en el desarrollo web y me encanta combinar mis pasiones para crear experiencias interactivas.",
        "latest-events-title": "Últimos Eventos",
        "featured-title": "Instrumentos Destacados",
        "event-title": "Eventos",
        "event-description": "Explora próximos eventos y talleres musicales.",
        "event-details-title": "Detalles del Evento",
        "study-abroad-title": "Programas de Estudio en el Extranjero",
        "study-abroad-description": "Descubre oportunidades de estudio en el extranjero en educación musical.",
        "study-details-title": "Detalles del Estudio en el Extranjero",
        "artists-title": "Artistas",
        "instrument-categories-title": "Categorías de Instrumentos",
        "instruments-title": "Explorar Instrumentos",
        "contact-title": "Contáctame",
        "contact-description": "No dudes en contactarme vía:",
        "filter-label": "Filtrar por marca o tipo:",
        "flute": "Flauta",
        "clarinet": "Clarinete",
        "oboe": "Oboe",
        "trumpet": "Trompeta",
        "trombone": "Trombón",
        "tuba": "Tuba",
        "violin": "Violín",
        "cello": "Violonchelo",
        "bass": "Contrabajo",
        "brands": "Marca",
        "Price": "Precio",
        "No instruments found.": "No se encontraron instrumentos.",
        "开始探索": "Comenzar",
        "了解更多": "Saber Más",
        "Date": "Fecha",
        "Location": "Ubicación",
        "Country": "País",
        "Event Description": "Descripción del Evento",
        "Study Description": "Descripción del Programa"
    }
};

// 乐器数据
const instrumentData = {
    flute: [
        {
            name: {
                en: "Flute 001",
                cn: "长笛 001",
                es: "Flauta 001"
            },
            img: "images/flute1.jpg",
            description: {
                en: "A high-quality flute suitable for beginners and professionals.",
                cn: "一款适合初学者和专业人士使用的高品质长笛。",
                es: "Una flauta de alta calidad adecuada para principiantes y profesionales."
            },
            brand: "Yamaha",
            price: "$800"
        },
        // 可以添加更多长笛数据
    ],
    clarinet: [
        {
            name: {
                en: "Clarinet 001",
                cn: "单簧管 001",
                es: "Clarinete 001"
            },
            img: "images/clarinet1.jpg",
            description: {
                en: "A versatile clarinet perfect for various music genres.",
                cn: "一款多功能单簧管，适用于各种音乐流派。",
                es: "Un clarinete versátil perfecto para varios géneros musicales."
            },
            brand: "Buffet",
            price: "$950"
        },
        // 可以添加更多单簧管数据
    ],
    oboe: [
        {
            name: {
                en: "Oboe 001",
                cn: "双簧管 001",
                es: "Oboe 001"
            },
            img: "images/oboe1.jpg",
            description: {
                en: "An elegant oboe with rich tonal quality.",
                cn: "一款优雅的双簧管，具有丰富的音色。",
                es: "Un oboe elegante con rica calidad tonal."
            },
            brand: "Conn",
            price: "$1100"
        },
        // 可以添加更多双簧管数据
    ],
    trumpet: [
        {
            name: {
                en: "Trumpet 001",
                cn: "小号 001",
                es: "Trompeta 001"
            },
            img: "images/trumpet1.jpg",
            description: {
                en: "A professional-grade trumpet with excellent sound quality.",
                cn: "一款专业级小号，拥有出色的音质。",
                es: "Una trompeta de grado profesional con excelente calidad de sonido."
            },
            brand: "Yamaha",
            price: "$1200"
        },
        // 可以添加更多小号数据
    ],
    trombone: [
        {
            name: {
                en: "Trombone 001",
                cn: "长号 001",
                es: "Trombón 001"
            },
            img: "images/trombone1.jpg",
            description: {
                en: "A sturdy trombone suitable for both jazz and classical music.",
                cn: "一款坚固的长号，适用于爵士乐和古典音乐。",
                es: "Un trombón resistente adecuado para jazz y música clásica."
            },
            brand: "Conn",
            price: "$1300"
        },
        // 可以添加更多长号数据
    ],
    tuba: [
        {
            name: {
                en: "Tuba 001",
                cn: "大号 001",
                es: "Tuba 001"
            },
            img: "images/tuba1.jpg",
            description: {
                en: "A deep-sounding tuba perfect for orchestras and bands.",
                cn: "一款音色深沉的大号，适用于管弦乐队和乐队。",
                es: "Una tuba con sonido profundo perfecta para orquestas y bandas."
            },
            brand: "Bach",
            price: "$2000"
        },
        // 可以添加更多大号数据
    ],
    violin: [
        {
            name: {
                en: "Violin 001",
                cn: "小提琴 001",
                es: "Violín 001"
            },
            img: "images/violin1.jpg",
            description: {
                en: "A beautifully crafted violin for aspiring musicians.",
                cn: "一款精美制作的小提琴，适合有志于音乐的人士。",
                es: "Un violín bellamente elaborado para músicos aspirantes."
            },
            brand: "Stradivarius",
            price: "$1500"
        },
        // 可以添加更多小提琴数据
    ],
    cello: [
        {
            name: {
                en: "Cello 001",
                cn: "大提琴 001",
                es: "Violonchelo 001"
            },
            img: "images/cello1.jpg",
            description: {
                en: "A rich-sounding cello suitable for orchestral performances.",
                cn: "一款音色丰富的大提琴，适用于管弦乐表演。",
                es: "Un violonchelo con sonido rico adecuado para presentaciones orquestales."
            },
            brand: "Eastman",
            price: "$1800"
        },
        // 可以添加更多大提琴数据
    ],
    bass: [
        {
            name: {
                en: "Bass 001",
                cn: "低音提琴 001",
                es: "Contrabajo 001"
            },
            img: "images/bass1.jpg",
            description: {
                en: "A robust bass perfect for orchestras and jazz ensembles.",
                cn: "一款结实的低音提琴，适用于管弦乐队和爵士乐团。",
                es: "Un contrabajo robusto perfecto para orquestas y conjuntos de jazz."
            },
            brand: "Yamaha",
            price: "$1600"
        },
        // 可以添加更多低音提琴数据
    }
};

// 推荐乐器列表
const featuredInstruments = [
    instrumentData['trumpet'][0],
    instrumentData['violin'][0],
    instrumentData['flute'][0]
];

// 活动数据
const eventData = [
    {
        title: {
            en: "Music Workshop: Classical Journey",
            cn: "音乐工作坊：古典乐之旅",
            es: "Taller de Música: Viaje Clásico"
        },
        img: "images/event1.jpg",
        date: "2024-11-10",
        location: {
            en: "Concert Hall A",
            cn: "音乐厅 A",
            es: "Sala de Conciertos A"
        },
        description: {
            en: "An immersive workshop on classical music.",
            cn: "关于古典音乐的沉浸式工作坊。",
            es: "Un taller inmersivo sobre música clásica."
        }
    },
    {
        title: {
            en: "Jazz Night",
            cn: "爵士乐夜晚",
            es: "Noche de Jazz"
        },
        img: "images/event2.jpg",
        date: "2024-12-05",
        location: {
            en: "Music Center B",
            cn: "音乐中心 B",
            es: "Centro de Música B"
        },
        description: {
            en: "Explore the world of jazz music.",
            cn: "探索爵士乐的世界。",
            es: "Explora el mundo de la música jazz."
        }
    }
    // 可以添加更多活动数据
];

// 留学项目数据
const studyAbroadData = [
    {
        title: {
            en: "German Music Academy Exchange Program",
            cn: "德国音乐学院交流项目",
            es: "Programa de Intercambio de la Academia de Música Alemana"
        },
        img: "images/study1.jpg",
        country: {
            en: "Germany",
            cn: "德国",
            es: "Alemania"
        },
        description: {
            en: "Study classical music in Germany.",
            cn: "在德国学习古典音乐。",
            es: "Estudia música clásica en Alemania."
        }
    },
    {
        title: {
            en: "French Art and Culture Tour",
            cn: "法国艺术文化之旅",
            es: "Tour de Arte y Cultura Francesa"
        },
        img: "images/study2.jpg",
        country: {
            en: "France",
            cn: "法国",
            es: "Francia"
        },
        description: {
            en: "Learn about French musical heritage.",
            cn: "了解法国的音乐遗产。",
            es: "Aprende sobre el patrimonio musical francés."
        }
    }
    // 可以添加更多留学项目数据
];

// 工具函数
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// 语言切换函数
function switchLanguage(lang) {
    currentLanguage = lang;

    // 更新具有 id 的元素
    document.querySelectorAll("[id]").forEach(element => {
        const key = element.id;
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // 更新具有 data-translation-key 的元素
    document.querySelectorAll("[data-translation-key]").forEach(element => {
        const key = element.getAttribute("data-translation-key");
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // 更新过滤器标签
    const filterLabel = document.querySelector('label[for="filter"]');
    if (filterLabel && translations[lang]['filter-label']) {
        filterLabel.innerText = translations[lang]['filter-label'];
    }

    // 更新页面的语言属性
    document.documentElement.lang = lang;

    // 保存用户的语言选择
    localStorage.setItem('selectedLanguage', lang);

    // 如果当前在乐器列表页面，刷新列表以更新文本
    if (!document.getElementById('instruments').classList.contains('hidden')) {
        displayInstruments();
    }

    // 更新活动和留学项目的文本
    updateEventTexts();
    updateStudyAbroadTexts();

    // 更新主页推荐乐器的名称
    updateFeaturedInstruments();

    // 更新导航栏链接文本
    updateNavLinks();
}

// 更新导航栏链接文本
function updateNavLinks() {
    const links = ['home-link', 'instruments-link', 'event-link', 'study-abroad-link', 'artists-link', 'contact-link'];
    links.forEach(id => {
        const link = document.getElementById(id);
        if (link && translations[currentLanguage][id]) {
            link.innerText = translations[currentLanguage][id];
        }
    });
}

// 显示特定的页面部分
function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 显示乐器分类列表
function showInstrumentCategories() {
    showSection('instrument-categories');
}

// 显示乐器列表
function showInstruments(category) {
    const instrumentList = document.getElementById('instrument-list');
    instrumentList.innerHTML = ''; // 清空现有内容

    currentCategory = category;
    currentInstruments = instrumentData[category];
    currentPage = 1;
    displayInstruments();

    showSection('instruments');
}

// 过滤乐器列表
function filterInstruments(filter) {
    const instrumentList = document.getElementById('instrument-list');
    instrumentList.innerHTML = ''; // 清空列表

    const filteredInstruments = [];

    instrumentData[currentCategory].forEach(instrument => {
        const instrumentName = instrument.name[currentLanguage];
        const instrumentBrand = instrument.brand;
        if (
            instrumentName.toLowerCase().includes(filter.toLowerCase()) ||
            instrumentBrand.toLowerCase().includes(filter.toLowerCase())
        ) {
            filteredInstruments.push(instrument);
        }
    });

    if (filteredInstruments.length === 0) {
        instrumentList.innerHTML = `<p>${translations[currentLanguage]["No instruments found."]}</p>`;
        return;
    }

    currentInstruments = filteredInstruments;
    currentPage = 1;
    displayInstruments();
}

// 显示当前页的乐器
function displayInstruments() {
    const instrumentList = document.getElementById('instrument-list');
    instrumentList.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const instrumentsToShow = currentInstruments.slice(startIndex, endIndex);

    instrumentsToShow.forEach(instrument => {
        const item = createInstrumentItem(instrument);
        instrumentList.appendChild(item);
    });

    displayPagination();
}

// 创建乐器项
function createInstrumentItem(instrument) {
    const item = document.createElement('div');
    item.className = 'instrument-item';
    item.onclick = () => showInstrumentDetails(instrument);

    const img = document.createElement('img');
    img.src = instrument.img;
    img.alt = instrument.name[currentLanguage];

    const name = document.createElement('h3');
    name.innerText = instrument.name[currentLanguage];

    const brand = document.createElement('p');
    brand.innerText = `${translations[currentLanguage]["brands"]}: ${instrument.brand}`;

    const price = document.createElement('p');
    price.className = 'price';
    price.innerText = `${translations[currentLanguage]["Price"]}: ${instrument.price}`;

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(brand);
    item.appendChild(price);

    return item;
}

// 显示乐器详情
function showInstrumentDetails(instrument) {
    document.getElementById('details-title').innerText = instrument.name[currentLanguage];
    document.getElementById('details-img').src = instrument.img;
    document.getElementById('details-description').innerText = instrument.description[currentLanguage];
    document.getElementById('details-price').innerText = `${translations[currentLanguage]["Price"]}: ${instrument.price}`;

    showSection('instrument-details');
}

// 显示活动详情
function showEventDetails(index) {
    const event = eventData[index];
    document.getElementById('event-details-title').innerText = event.title[currentLanguage];
    document.getElementById('event-details-img').src = event.img;
    document.getElementById('event-details-description').innerText = event.description[currentLanguage];
    document.getElementById('event-details-date').innerText = `${translations[currentLanguage]["Date"]}: ${event.date}`;
    document.getElementById('event-details-location').innerText = `${translations[currentLanguage]["Location"]}: ${event.location[currentLanguage]}`;

    showSection('event-details');
}

// 显示留学项目详情
function showStudyDetails(index) {
    const program = studyAbroadData[index];
    document.getElementById('study-details-title').innerText = program.title[currentLanguage];
    document.getElementById('study-details-img').src = program.img;
    document.getElementById('study-details-description').innerText = program.description[currentLanguage];
    document.getElementById('study-details-country').innerText = `${translations[currentLanguage]["Country"]}: ${program.country[currentLanguage]}`;

    showSection('study-details');
}

// 更新活动文本
function updateEventTexts() {
    document.getElementById('event-title').innerText = translations[currentLanguage]['event-title'];
    document.getElementById('event-description').innerText = translations[currentLanguage]['event-description'];

    const eventItems = document.querySelectorAll('#event .event-item');
    eventItems.forEach((item, index) => {
        const event = eventData[index];
        item.querySelector('h3').innerText = event.title[currentLanguage];
        item.querySelector(`#event-date-${index}`).innerText = `${translations[currentLanguage]["Date"]}: ${event.date}`;
        item.querySelector(`#event-location-${index}`).innerText = `${translations[currentLanguage]["Location"]}: ${event.location[currentLanguage]}`;
    });
}

// 更新留学项目文本
function updateStudyAbroadTexts() {
    document.getElementById('study-abroad-title').innerText = translations[currentLanguage]['study-abroad-title'];
    document.getElementById('study-abroad-description').innerText = translations[currentLanguage]['study-abroad-description'];

    const studyItems = document.querySelectorAll('#study-abroad .study-abroad-item');
    studyItems.forEach((item, index) => {
        const program = studyAbroadData[index];
        item.querySelector('h3').innerText = program.title[currentLanguage];
        item.querySelector(`#study-country-${index}`).innerText = `${translations[currentLanguage]["Country"]}: ${program.country[currentLanguage]}`;
    });
}

// 更新主页推荐乐器
function updateFeaturedInstruments() {
    const featuredItems = document.querySelectorAll('#featured-instruments .instrument-item');
    featuredItems.forEach((item, index) => {
        const instrument = featuredInstruments[index];
        item.querySelector('h3').innerText = instrument.name[currentLanguage];
        item.querySelector('p').innerText = `${translations[currentLanguage]["brands"]}: ${instrument.brand}`;
        item.querySelector('.price').innerText = `${translations[currentLanguage]["Price"]}: ${instrument.price}`;
    });

    document.getElementById('featured-title').innerText = translations[currentLanguage]['featured-title'];
}

// 显示分页控件
function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(currentInstruments.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.onclick = () => {
            currentPage = i;
            displayInstruments();
        };
        if (i === currentPage) {
            button.style.backgroundColor = '#c0392b';
        }
        pagination.appendChild(button);
    }
}

// 更新动态内容
function updateDynamicContent() {
    updateNavLinks();
    updateEventTexts();
    updateStudyAbroadTexts();
    updateFeaturedInstruments();
}

// 页面加载后初始化
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'cn';
    const supportedLanguages = ['en', 'cn', 'es'];
    const languageToUse = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'cn';
    switchLanguage(languageToUse);

    // 初始时显示主页
    showSection('home');
});
.hidden {
    display: none;
}
