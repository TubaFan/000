// 全局变量
let currentLanguage = 'cn'; // 当前语言，默认为中文
let currentInstruments = []; // 当前显示的乐器列表
let currentPage = 1; // 当前页码
const itemsPerPage = 6; // 每页显示的乐器数量
let currentCategory = ''; // 当前乐器分类

// 翻译对象
const translations = {
    en: {
        // ...（完整的英文翻译内容，保持不变）
    },
    cn: {
        // ...（完整的中文翻译内容，保持不变）
    },
    es: {
        // ...（完整的西班牙语翻译内容，保持不变）
    }
};

// 乐器数据
const instrumentData = {
    // ...（乐器数据，保持不变）
};

// 推荐乐器列表
const featuredInstruments = [
    // ...（推荐乐器，保持不变）
];

// 活动数据
const eventData = [
    // ...（活动数据，保持不变）
];

// 留学项目数据
const studyAbroadData = [
    // ...（留学项目数据，保持不变）
];

// 工具函数
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function startExploring() {
    showSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        item.querySelector('#event-date-' + index).innerText = `${translations[currentLanguage]["Date"]}: ${event.date}`;
        item.querySelector('#event-location-' + index).innerText = `${translations[currentLanguage]["Location"]}: ${event.location[currentLanguage]}`;
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
        item.querySelector('#study-country-' + index).innerText = `${translations[currentLanguage]["Country"]}: ${program.country[currentLanguage]}`;
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

// 页面加载后初始化
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'cn';
    const supportedLanguages = ['en', 'cn', 'es'];
    const languageToUse = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'cn';
    switchLanguage(languageToUse);

    // 初始时显示主页
    showSection('home');
});
