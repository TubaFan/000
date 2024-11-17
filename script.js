// 全局变量
let currentLanguage = 'cn'; // 当前语言，默认为中文

// 翻译对象
const translations = {
    en: {
        "site-title": "Fanyunqi's Personal Website",
        "home-link": "Home",
        "about-link": "About Me",
        "home-title": "Welcome to My Personal Website",
        "home-description": "This is the home content.",
        "about-title": "About Me",
        "about-description": "This is the about me content."
    },
    cn: {
        "site-title": "范云麒的个人网站",
        "home-link": "主页",
        "about-link": "关于我",
        "home-title": "欢迎来到我的个人网站",
        "home-description": "这是主页内容。",
        "about-title": "关于我",
        "about-description": "这是关于我的内容。"
    },
    es: {
        "site-title": "Sitio Web Personal de Fanyunqi",
        "home-link": "Inicio",
        "about-link": "Sobre Mí",
        "home-title": "Bienvenido a Mi Sitio Web Personal",
        "home-description": "Este es el contenido de inicio.",
        "about-title": "Sobre Mí",
        "about-description": "Este es el contenido sobre mí."
    }
};

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

    // 更新页面的语言属性
    document.documentElement.lang = lang;

    // 保存用户的语言选择
    localStorage.setItem('selectedLanguage', lang);
}

// 显示特定的页面部分
function showSection(sectionId) {
    console.log(`Showing section: ${sectionId}`); // 调试信息
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

// 页面加载后初始化
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'cn';
    const supportedLanguages = ['en', 'cn', 'es'];
    const languageToUse = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'cn';
    switchLanguage(languageToUse);

    // 初始时显示主页
    showSection('home');
});
