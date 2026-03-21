/**
 * 所有页面渲染函数
 */

import {
  ambassadors,
  gameFeatures,
  tournaments,
  getArticles,
  getArticleById,
  getGameFeatureById,
  getChampionshipById
} from './data.js';

import {
  renderNewsCard,
  renderAmbassadorCard,
  renderTournamentItem,
  createBackButton,
  getIcon
} from './components.js';

import { updateSEOForArticle } from './seo.js';

/**
 * 首页
 */
export function renderHome() {
  const container = document.createElement('div');

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(110, 10, 0, 0.2)), url('/assets/images/banner-main.webp'); background-size: cover; background-position: center;">
      <div class="hero-content">
        <span class="hero-badge">WSOP官方合作平台</span>
        <h1 class="hero-title">欢迎来到GG扑克<br>中文旗舰平台</h1>
        <p class="hero-subtitle">汇集全球顶尖牌手，每日海量赛事，安全公平竞技，打造专业扑克体验。</p>
        <div class="hero-buttons">
          <a href="https://signup02.guanaizhijia.com/signup?qtag=KK88&brand-id=MBP&site-id=GGPUKE" target="_blank" rel="nofollow" class="btn-primary">立即下载</a>
        </div>
      </div>
    </section>

    <!-- Platform Features -->
    <section class="section container">
      <h2 class="section-title">平台优势</h2>
      <p class="section-subtitle">为什么选择GG扑克</p>
      <div class="features-grid">
        ${renderFeatures()}
      </div>
    </section>

    <!-- Ambassadors -->
    <section class="section container">
      <h2 class="section-title">品牌战队</h2>
      <p class="section-subtitle">世界冠军与你同行</p>
      <div class="ambassadors-grid" id="home-ambassadors-grid">
      </div>
    </section>

    <!-- Latest News -->
    <section class="section container">
      <h2 class="section-title">最新报道</h2>
      <p class="section-subtitle">掌握最新资讯与技巧</p>
      <div class="news-grid" id="home-news-grid">
        ${renderLatestNews()}
      </div>
    </section>

    <!-- Download CTA -->
    <section class="download-section" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(110, 10, 0, 0.2)), url('/assets/images/banner-main.webp'); background-size: cover; background-position: center;">
      <div class="container">
        <h2 class="section-title">立即开始体验</h2>
        <p class="section-subtitle">支持多平台，一键下载安装</p>
        <div style="margin-top: var(--spacing-8);">
          <a href="https://signup02.guanaizhijia.com/signup?qtag=KK88&brand-id=MBP&site-id=GGPUKE" target="_blank" rel="nofollow" class="btn-primary">下载客户端</a>
        </div>
      </div>
    </section>
  `;

  // 绑定战队卡片
  const ambassadorsGrid = container.querySelector('#home-ambassadors-grid');
  ambassadors.slice(0, 4).forEach(a => {
    const card = renderAmbassadorCard(a);
    ambassadorsGrid.appendChild(card);
  });

  // 绑定新闻点击事件
  const newsGrid = container.querySelector('#home-news-grid');
  newsGrid.querySelectorAll('.news-card').forEach(card => {
    const articleId = card.dataset.articleId;
    card.addEventListener('click', () => {
      window.location.hash = `/news/${articleId}`;
    });
  });

  return container;
}

function renderFeatures() {
  const features = [
    {
      name: '安全公平',
      description: '先进的随机发牌算法，严格的防作弊监控，保证每一手牌公平公正',
      icon: 'shield'
    },
    {
      name: '多端同步',
      description: '支持Windows、Mac、iOS、Android全平台，账号数据实时同步',
      icon: 'mobile'
    },
    {
      name: '创新功能',
      description: '智能下注辅助，一键数据分析，帮你快速提升牌技',
      icon: 'chart'
    }
  ];

  return features.map(f => `
    <div class="feature-item">
      <div class="feature-icon">${getIcon(f.icon)}</div>
      <div class="feature-content">
        <h3>${f.name}</h3>
        <p>${f.description}</p>
      </div>
    </div>
  `).join('');
}

// 现在改用DOM方式渲染，保证点击事件绑定正常
function renderTopTournaments() {
  return '';
}

function renderTopAmbassadors() {
  return ambassadors.slice(0, 4).map(a => {
    const card = renderAmbassadorCard(a);
    return card.outerHTML;
  }).join('');
}

function renderLatestNews() {
  const latestArticles = getArticles(3);
  // 需要保留点击事件，所以不能直接用outerHTML，需要逐个创建后附加
  let html = '';
  latestArticles.forEach(a => {
    html += `
      <article class="news-card" data-article-id="${a.id}">
        <div class="news-image" style="background-image: url('${a.image}'); background-size: cover; background-position: center;">
        </div>
        <div class="news-content">
          <div class="news-meta">
            <span class="news-category">${a.category}</span>
            <span class="news-date">${a.date}</span>
          </div>
          <h3 class="news-title">${a.title}</h3>
          <p class="news-excerpt">${a.excerpt}</p>
          <span class="read-more">阅读更多</span>
        </div>
      </article>
    `;
  });
  return html;
}

/**
 * 赛事专区页
 */
export function renderTournamentsPage() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="page-header">
      <div class="container">
        <h1>赛事专区</h1>
        <p>汇集各类精彩赛事，满足不同水平玩家需求</p>
      </div>
    </div>
    <section class="section container">
      <div class="tournament-list" id="tournament-list"></div>
    </section>
  `;

  const list = container.querySelector('#tournament-list');
  tournaments.forEach(t => {
    list.appendChild(renderTournamentItem(t));
  });

  return container;
}

/**
 * 资讯列表页
 */
export function renderNewsPage() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="page-header">
      <div class="container">
        <h1>最新报道</h1>
        <p>活动资讯、技巧教学、赛事热点一网打尽</p>
      </div>
    </div>
    <section class="section container">
      <div class="news-grid" id="news-grid"></div>
    </section>
  `;

  const grid = container.querySelector('#news-grid');
  const allArticles = getArticles();
  allArticles.forEach(a => {
    grid.appendChild(renderNewsCard(a));
  });

  return container;
}

/**
 * 文章详情页
 */
export function renderArticleDetail(articleId) {
  const article = getArticleById(articleId);
  if (!article) {
    return renderNotFound();
  }

  // 更新SEO
  updateSEOForArticle(article);

  const container = document.createElement('div');
  container.innerHTML = `
    <div class="article-container">
      <div id="back-button"></div>
      <article>
        <header class="article-header">
          <div class="article-meta">
            <span class="article-category">${article.category}</span>
            <span class="article-date">${article.date}</span>
          </div>
          <h1 class="article-title">${article.title}</h1>
        </header>
        <div class="article-content">
          ${article.content}
        </div>
      </article>
    </div>
  `;

  const backBtn = container.querySelector('#back-button');
  backBtn.appendChild(createBackButton('#/news'));

  return container;
}

/**
 * 战队页
 */
export function renderTeamPage() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="page-header">
      <div class="container">
        <h1>品牌战队</h1>
        <p>世界冠军代言，顶尖牌手云集</p>
      </div>
    </div>
    <section class="section container">
      <div class="ambassadors-grid" id="ambassadors-grid"></div>
    </section>
  `;

  const grid = container.querySelector('#ambassadors-grid');
  ambassadors.forEach(a => {
    grid.appendChild(renderAmbassadorCard(a));
  });

  return container;
}

/**
 * 游戏特色列表页
 */
export function renderGamesPage() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="page-header">
      <div class="container">
        <h1>游戏特色</h1>
        <p>创新功能带来极致游戏体验</p>
      </div>
    </div>
    <section class="section container">
      <div class="card-grid" id="features-grid"></div>
    </section>
  `;

  const grid = container.querySelector('#features-grid');
  gameFeatures.forEach(feature => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.cursor = 'pointer';
    card.innerHTML = `
      <div class="card-icon">
        ${getIcon(feature.icon)}
      </div>
      <h3 class="card-title">${feature.name}</h3>
      <p class="card-text">${feature.description}</p>
    `;
    card.addEventListener('click', () => {
      window.location.hash = `/games/${feature.id}`;
    });
    grid.appendChild(card);
  });

  return container;
}

/**
 * 游戏功能详情页
 */
export function renderGameDetail(featureId) {
  const feature = getGameFeatureById(featureId);
  if (!feature) {
    return renderNotFound();
  }

  const container = document.createElement('div');
  container.innerHTML = `
    <div class="article-container">
      <div id="back-button"></div>
      <article>
        <header class="article-header">
          <div class="card-icon" style="max-width: 80px; margin: 0 auto var(--spacing-4)">
            ${getIcon(feature.icon)}
          </div>
          <h1 class="article-title" style="text-align: center">${feature.name}</h1>
        </header>
        <div class="article-content">
          <p>${feature.description}</p>
          <p>该功能已经集成在GG扑克客户端中，下载客户端即可体验全部特色功能。</p>
        </div>
      </article>
    </div>
  `;

  const backBtn = container.querySelector('#back-button');
  backBtn.appendChild(createBackButton('#/games'));

  return container;
}

/**
 * 锦标赛详情页
 */
export function renderChampionshipDetail(type) {
  const tournament = getChampionshipById(type);
  if (!tournament) {
    return renderNotFound();
  }

  const container = document.createElement('div');
  container.innerHTML = `
    <div class="article-container">
      <div id="back-button"></div>
      <article>
        <header class="article-header">
          <span class="tournament-badge" style="display: inline-block; margin-bottom: var(--spacing-4)">${tournament.badge}</span>
          <h1 class="article-title">${tournament.name}</h1>
        </header>
        <div class="article-content">
          <h2>赛事介绍</h2>
          <p>${tournament.description}</p>
          <h2>赛事信息</h2>
          <ul>
            <li><strong>保底奖金池：</strong>${tournament.guarantee}</li>
            <li><strong>开赛频率：</strong>${tournament.frequency}</li>
          </ul>
          <p>登录GG扑克客户端，在赛事大厅即可报名参赛。新玩家首次参赛还可获得额外优惠。</p>
        </div>
      </article>
    </div>
  `;

  const backBtn = container.querySelector('#back-button');
  backBtn.appendChild(createBackButton('#/tournaments'));

  return container;
}

/**
 * 下载页
 */
export function renderDownloadPage() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="page-header">
      <div class="container">
        <h1>游戏下载</h1>
        <p>支持多平台，一键安装，立即开始体验</p>
      </div>
    </div>
    <section class="section container">
      <div class="download-cards">
        <div class="download-card">
          <h3 class="download-platform">Windows</h3>
          <p class="download-desc">适合Window电脑玩家，完整功能，流畅体验，支持多开。</p>
          <a href="https://signup02.guanaizhijia.com/signup?qtag=KK88&brand-id=MBP&site-id=GGPUKE" target="_blank" rel="nofollow" class="btn-download">立即下载</a>
        </div>
        <div class="download-card">
          <h3 class="download-platform">macOS</h3>
          <p class="download-desc">专为苹果电脑优化，原生适配，稳定流畅，舒适体验。</p>
          <a href="https://signup02.guanaizhijia.com/signup?qtag=KK88&brand-id=MBP&site-id=GGPUKE" target="_blank" rel="nofollow" class="btn-download">立即下载</a>
        </div>
        <div class="download-card">
          <h3 class="download-platform">iOS / Android</h3>
          <p class="download-desc">移动端随时随地畅玩，随时随地参赛，数据同步。</p>
          <a href="https://signup02.guanaizhijia.com/signup?qtag=KK88&brand-id=MBP&site-id=GGPUKE" target="_blank" rel="nofollow" class="btn-download">立即下载</a>
        </div>
      </div>

      <div class="container" style="max-width: 800px; margin: 4rem auto 0;">
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--color-dark)">安装说明</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-content">
              <h3>1. 下载安装包</h3>
              <p>点击上方对应平台下载按钮，下载最新版本客户端安装包。</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-content">
              <h3>2. 安装客户端</h3>
              <p>运行安装程序，按照提示完成安装，整个过程不到一分钟。</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-content">
              <h3>3. 注册账号</h3>
              <p>打开客户端，按照提示完成注册，验证后即可开始游戏。</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-content">
              <h3>4. 开始游戏</h3>
              <p>选择喜欢的赛事，买入参赛，享受专业扑克竞技体验。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return container;
}

/**
 * 404 页面
 */
export function renderNotFound() {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="article-container" style="text-align: center;">
      <h1 style="font-size: 5rem; color: var(--color-gray); margin-bottom: 1rem;">404</h1>
      <h2 style="margin-bottom: 2rem;">页面未找到</h2>
      <p style="color: var(--color-gray); margin-bottom: 2rem;">你访问的页面不存在或已经被移动。</p>
      <a href="#/" class="btn-primary" data-navigate>返回首页</a>
    </div>
  `;
  return container;
}
