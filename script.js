// 可配置数据 - 后期可通过字典/列表进行修改、增删
const config = {
    // 滚动语录数据
    quotes: [
        "侯师常言：\"青蔬白菔，各有所好。\"———《师》",
        "侯师曰：\"此也。\"此为吾兴也。———《师》",
        "陈曰：\"XX杨极有心，未离神焉。\"此为反言也。———《师》",
        "李道师常例吾曰：\"何为果？为何食果？如何食果？\"吾偷笑矣，喜哉！———《师》",
        "众生曰：\"无机盐乃无机物否？\"皆哄堂大笑。———《生》",
        "邱生言：\"尔为何弗与吾同席？\"吾无言以对也。———《生》"
    ],

    // 公告数据
    announcements: [
        "📢 《五史》《五事》正在编写中，敬请期待！",
        "🎉 五语工作室仍在招新，欢迎加入我们！",
        "📚 会议将不定时举行，请各位准时参加",
        "🌟 若想与我们交流，请加CEO卢XX微信号：Lujunyan23"
    ],

    // 工作室成员数据
    members: [
        { name: "卢XX", role: "创始人(CEO)/总主编(五史部)", avatar: "https://picsum.photos/100/100?random=1" },
        { name: "杨XX", role: "总主编(副CEO/五工部)/记者部", avatar: "https://picsum.photos/100/100?random=2" },
        { name: "沈XX", role: "主编(五语部/五史部)", avatar: "https://picsum.photos/100/100?random=3" },
        { name: "李XX", role: "主编(五工部)", avatar: "https://picsum.photos/100/100?random=4" },
        { name: "邱XX", role: "主编/技术部(部长)", avatar: "https://picsum.photos/100/100?random=5" },
        { name: "李XX", role: "主编(五语部)/外交部", avatar: "https://picsum.photos/100/100?random=6" },
        { name: "李XX", role: "主编/记者部", avatar: "https://picsum.photos/100/100?random=7" },
        { name: "黄XX", role: "主编(五事部)/记者部(部长)", avatar: "https://picsum.photos/100/100?random=8" },
        { name: "俞XX", role: "分部(部长)", avatar: "https://picsum.photos/100/100?random=9" }
    ],

    // 工作室介绍文本
    studioIntroduction: "《五语》意为五班大小事。2025年10月20日，创始人卢XX于一本井皮本上写下《五言》二字，此乃《五语》之前身，彼时无《师》《生》《理》等篇目，内容聚焦于老师之言行。2025年11月1日，正式让《五言》进入公众视野，2025年11月12日，正式与杨XX等人组成团队，将《五言》更名为《五语》，成立\"五语工作室\"（Quintessence Studio）。",

    // 经典句子及释义
    classicQuotes: [
        {
            quote: "侯师常言：\"青蔬白菔，各有所好。\"———《师》",
            meaning: "侯老师常说：\"这就青菜萝卜各有所爱了。\"",
            category: "活用"
        },
        {
            quote: "邱生言：\"尔为何弗与吾同席？\"吾无言以对也。———《生》",
            meaning: "邱XX说：\"你为什么不和我做同桌？\"我无言以对。",
            category: "友谊"
        },
        {
            quote: "陈曰：\"XX杨极有心，未离神焉。\"此为反言也。———《师》",
            meaning: "陈老师说：\"杨XX非常认真，没有走神。\"这是反语啊。",
            category: "反讽"
        },
        {
            quote: "众生皆怒喊：\"祝吾破顶！\"遂其朱布因风起。",
            meaning: "众学生全都怒吼：\"祝我破顶！\"随即红色的布乘风而起。",
            category: "魔丸"
        },
        {
            quote: "李道师常例吾曰：\"何为果？为何食果？如何食果？\"吾偷笑矣，喜哉！———《师》",
            meaning: "道法李老师常常举例跟我说：\"什么是水果？为什么要吃水果？怎么吃水果？\"我偷偷笑了，真高兴啊！",
            category: "教学"
        },
        {
            quote: "众生曰：\"无机盐乃无机物否？\"皆哄堂大笑。———《生》",
            meaning: "同学们说：\"无机盐是无机物吗？\"大家都哄堂大笑。",
            category: "幽默"
        },
        {
            quote: "侯师曰：\"此也。\"此为吾兴也。———《师》",
            meaning: "侯老师说：\"就是这样的。\"这让我很兴奋。",
            category: "日常"
        }
    ]
};

// 分页相关变量
let currentPage = 1;
const quotesPerPage = 4;

// 初始化网站内容
document.addEventListener('DOMContentLoaded', function() {
    initializeQuotes();
    initializeAnnouncements();
    initializeMembers();
    initializeStudioIntro();
    initializeClassicQuotes();
});

// 初始化滚动语录
function initializeQuotes() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    let currentQuoteIndex = 0;
    
    function updateQuote() {
        quoteDisplay.textContent = config.quotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % config.quotes.length;
    }
    
    updateQuote();
    setInterval(updateQuote, 5000);
}

// 初始化公告区域
function initializeAnnouncements() {
    const announcementsContainer = document.getElementById('announcementsContainer');
    
    config.announcements.forEach((announcement, index) => {
        const announcementElement = document.createElement('div');
        announcementElement.className = 'bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500 hover-lift';
        announcementElement.innerHTML = `
            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <span class="text-white text-xs font-bold">${index + 1}</span>
                </div>
                <p class="text-gray-700 flex-1">${announcement}</p>
            </div>
        `;
        announcementsContainer.appendChild(announcementElement);
    });
}

// 初始化成员列表
function initializeMembers() {
    const membersGrid = document.getElementById('membersGrid');
    
    config.members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'text-center bg-white rounded-xl shadow-md p-4 hover-lift';
        memberCard.innerHTML = `
            <img src="${member.avatar}" alt="${member.name}的头像 - ${member.role}" class="w-20 h-20 rounded-full mx-auto mb-3 shadow">
            <h3 class="chinese-font font-semibold text-gray-800">${member.name}</h3>
            <p class="text-sm text-gray-600">${member.role}</p>
        `;
        membersGrid.appendChild(memberCard);
    });
}

// 初始化工作室介绍
function initializeStudioIntro() {
    document.getElementById('studioIntro').textContent = config.studioIntroduction;
}

// 初始化经典句子（带分页功能）
function initializeClassicQuotes() {
    renderQuotesPage();
    renderPaginationControls();
}

// 渲染当前页面的句子
function renderQuotesPage() {
    const quotesContainer = document.getElementById('quotesContainer');
    quotesContainer.innerHTML = '';
    
    const startIndex = (currentPage - 1) * quotesPerPage;
    const endIndex = Math.min(startIndex + quotesPerPage, config.classicQuotes.length);
    const currentQuotes = config.classicQuotes.slice(startIndex, endIndex);
    
    currentQuotes.forEach((item, index) => {
        const globalIndex = startIndex + index;
        const quoteElement = document.createElement('div');
        quoteElement.className = 'bg-white rounded-2xl shadow-lg p-6 hover-lift fade-in';
        quoteElement.style.animationDelay = `${index * 0.2}s`;
        quoteElement.innerHTML = `
            <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span class="text-white font-bold text-lg">${globalIndex + 1}</span>
                </div>
                <div class="flex-1">
                    <div class="flex items-center space-x-3 mb-2">
                        <h3 class="chinese-font text-xl font-bold text-gray-800">${item.quote}</h3>
                        <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">${item.category}</span>
                    </div>
                    <p class="text-gray-600 leading-relaxed">${item.meaning}</p>
                </div>
            </div>
        `;
        quotesContainer.appendChild(quoteElement);
    });
}

// 渲染分页控件
function renderPaginationControls() {
    const paginationContainer = document.getElementById('paginationContainer');
    const totalPages = Math.ceil(config.classicQuotes.length / quotesPerPage);
    
    paginationContainer.innerHTML = `
        <div class="flex items-center justify-center space-x-2">
            <button onclick="previousPage()" 
                    class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}">
                <i class="fas fa-chevron-left"></i> 上一页
            </button>
            
            <div class="flex space-x-1">
                ${Array.from({length: totalPages}, (_, i) => `
                <button onclick="goToPage(${i + 1})" 
                        class="w-10 h-10 rounded-lg transition-colors ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}">
                    ${i + 1}
                </button>
                `).join('')}
            </div>
            
            <button onclick="nextPage()" 
                    class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}">
                下一页 <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        <div class="text-center text-gray-600 mt-2">
                第 ${currentPage} 页，共 ${totalPages} 页（${config.classicQuotes.length} 条句子）
        </div>
    `;
}

// 分页功能函数
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderQuotesPage();
        renderPaginationControls();
    }
}

function nextPage() {
    const totalPages = Math.ceil(config.classicQuotes.length / quotesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderQuotesPage();
        renderPaginationControls();
    }
}

function goToPage(page) {
    const totalPages = Math.ceil(config.classicQuotes.length / quotesPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderQuotesPage();
        renderPaginationControls();
    }
}

// 数据更新函数 - 供后期维护使用
function updateQuotes(newQuotes) {
    config.quotes = newQuotes;
    initializeQuotes();
}

function updateAnnouncements(newAnnouncements) {
    config.announcements = newAnnouncements;
    document.getElementById('announcementsContainer').innerHTML = '';
    initializeAnnouncements();
}

function updateMembers(newMembers) {
    config.members = newMembers;
    document.getElementById('membersGrid').innerHTML = '';
    initializeMembers();
}

function updateClassicQuotes(newQuotes) {
    config.classicQuotes = newQuotes;
    currentPage = 1;
    document.getElementById('quotesContainer').innerHTML = '';
    document.getElementById('paginationContainer').innerHTML = '';
    initializeClassicQuotes();
}