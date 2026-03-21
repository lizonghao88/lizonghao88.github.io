/**
 * 可复用UI组件
 */

// SVG图标库 - 内联SVG避免外部请求
const icons = {
  calculator: `
    <svg viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
  `,
  toolbox: `
    <svg viewBox="0 0 24 24">
      <path d="M22 17V19H14V17.1c1.2-.5 2-1.8 2-3.1 0-.6-.2-1.2-.5-1.8L20.4 4.8c.2-.5 0-1.1-.5-1.3-.5-.3-1.1-.1-1.3.5L13.7 11.4c-.5-.2-1.1-.4-1.7-.4s-1.2.2-1.7.4L5.4 4c-.2-.6-.8-.8-1.3-.5-.5.3-.7.8-.5 1.3l4.9 8.1c-.3.6-.5 1.2-.5 1.8 0 1.3.8 2.6 2 3.1V19H2v-2h6v-.1c1.3-.4 2-1.6 2-2.9 0-.5-.1-.9-.3-1.3l5-8.3 5 8.3c-.2.4-.3.8-.3 1.3 0 1.3.7 2.5 2 2.9z"/>
    </svg>
  `,
  chart: `
    <svg viewBox="0 0 24 24">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 14H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1zm-1-7h-4v3h4v-3zm-4-1V8h4v1h-4zm-2 5H7v-3h4v3zm0-4H7V8h4v1z"/>
    </svg>
  `,
  avatar: `
    <svg viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
    </svg>
  `,
  share: `
    <svg viewBox="0 0 24 24">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.01.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6.04 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.76 0 1.45-.31 1.97-.8l7.03 4.11c-.05.24-.08.47-.08.7 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  `,
  game: `
    <svg viewBox="0 0 24 24">
      <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2z"/>
    </svg>
  `,
  shield: `
    <svg viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8-3.72-.21-6.47-3.88-7-8h7z"/>
    </svg>
  `,
  mobile: `
    <svg viewBox="0 0 24 24">
      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
    </svg>
  `
};

export function getIcon(name) {
  return icons[name] || '';
}

/**
 * 渲染页眉导航组件
 */
export function renderHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="header-container">
      <a href="#/" class="logo" data-navigate>
        <span class="logo-text">GG扑克</span>
        <span class="logo-badge">中文官网</span>
      </a>

      <nav class="nav-desktop">
        <div class="nav-item">
          <a href="#/tournaments" class="nav-link" data-navigate>赛事专区</a>
        </div>
        <div class="nav-item">
          <a href="#/news" class="nav-link" data-navigate>最新报道</a>
        </div>
        <div class="nav-item">
          <a href="#/team" class="nav-link" data-navigate>战队</a>
        </div>
        <div class="nav-item has-dropdown">
          <a href="#/games" class="nav-link" data-navigate>游戏类别</a>
          <div class="dropdown-menu">
            <a href="#/games/smart-betting" class="dropdown-item" data-navigate>智能下注</a>
            <a href="#/games/smart-tools" class="dropdown-item" data-navigate>智能工具箱</a>
            <a href="#/games/hand-history" class="dropdown-item" data-navigate>战绩</a>
            <a href="#/games/nft-avatars" class="dropdown-item" data-navigate>NFT特殊头像</a>
            <a href="#/games/tournament-shares" class="dropdown-item" data-navigate>赛事股份</a>
            <a href="#/games/straddle" class="dropdown-item" data-navigate>Straddle</a>
          </div>
        </div>
        <div class="nav-item has-dropdown">
          <a href="#" class="nav-link">锦标赛</a>
          <div class="dropdown-menu">
            <a href="#/championship/high-roller" class="dropdown-item" data-navigate>豪客赛</a>
            <a href="#/championship/zodiac" class="dropdown-item" data-navigate>生肖专属赛</a>
            <a href="#/championship/daily-guaranteed" class="dropdown-item" data-navigate>每日常规保底赛</a>
            <a href="#/championship/bounty-hunter" class="dropdown-item" data-navigate>赏金猎人</a>
            <a href="#/championship/omaha" class="dropdown-item" data-navigate>奥马哈迷</a>
            <a href="#/championship/tournament-fund" class="dropdown-item" data-navigate>锦标赛基金</a>
          </div>
        </div>
        <a href="#/download" class="download-btn" data-navigate>立即下载</a>
      </nav>

      <button class="mobile-menu-toggle" id="mobile-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav class="nav-mobile" id="nav-mobile">
      <div class="nav-mobile-item">
        <a href="#/tournaments" class="nav-mobile-link" data-navigate>赛事专区</a>
      </div>
      <div class="nav-mobile-item">
        <a href="#/news" class="nav-mobile-link" data-navigate>最新报道</a>
      </div>
      <div class="nav-mobile-item">
        <a href="#/team" class="nav-mobile-link" data-navigate>战队</a>
      </div>
      <div class="nav-mobile-item">
        <a href="#/games" class="nav-mobile-link" data-navigate>游戏类别</a>
        <div class="dropdown-mobile">
          <div class="dropdown-mobile-item"><a href="#/games/smart-betting" data-navigate>智能下注</a></div>
          <div class="dropdown-mobile-item"><a href="#/games/smart-tools" data-navigate>智能工具箱</a></div>
          <div class="dropdown-mobile-item"><a href="#/games/hand-history" data-navigate>战绩</a></div>
          <div class="dropdown-mobile-item"><a href="#/games/nft-avatars" data-navigate>NFT特殊头像</a></div>
          <div class="dropdown-mobile-item"><a href="#/games/tournament-shares" data-navigate>赛事股份</a></div>
          <div class="dropdown-mobile-item"><a href="#/games/straddle" data-navigate>Straddle</a></div>
        </div>
      </div>
      <div class="nav-mobile-item">
        <a href="#/download" class="nav-mobile-link" data-navigate>游戏下载</a>
      </div>
    </nav>
  `;

  return header;
}

/**
 * 渲染页脚组件
 */
export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-disclaimer">
      <p>本网站仅供娱乐，仅提供虚拟积分棋牌竞技服务，不涉及任何现金交易。参与者需年满18周岁。</p>
      <p>&copy; 2026 GG扑克中文官网. All rights reserved.</p>
      <p style="color: #666; font-size: 0.8em; text-align: center;">
        ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow noopener" style="color: #888; text-decoration: none;">沪ICP备xxxxxxxx号</a>（申请中）
      </p>
    </div>
  `;

  return footer;
}

/**
 * 通用卡片组件
 */
export function createCard(title, text, iconName = null) {
  const card = document.createElement('div');
  card.className = 'card';

  let iconHtml = '';
  if (iconName) {
    iconHtml = `
      <div class="card-icon">
        ${getIcon(iconName)}
      </div>
    `;
  }

  card.innerHTML = `
    ${iconHtml}
    <h3 class="card-title">${title}</h3>
    <p class="card-text">${text}</p>
  `;

  return card;
}

/**
 * 渲染文章卡片
 */
export function renderNewsCard(article) {
  const card = document.createElement('article');
  card.className = 'news-card';
  card.innerHTML = `
    <div class="news-image" style="background-image: url('${article.image}'); background-size: cover; background-position: center;">
    </div>
    <div class="news-content">
      <div class="news-meta">
        <span class="news-category">${article.category}</span>
        <span class="news-date">${article.date}</span>
      </div>
      <h3 class="news-title">${article.title}</h3>
      <p class="news-excerpt">${article.excerpt}</p>
      <span class="read-more">阅读更多</span>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.hash = `/news/${article.id}`;
  });

  return card;
}

/**
 * 渲染大使/战队卡片
 */
export function renderAmbassadorCard(ambassador) {
  const card = document.createElement('div');
  card.className = 'ambassador-card';
  card.innerHTML = `
    <div class="ambassador-avatar" style="background-image: url('${ambassador.avatar}'); background-size: cover; background-position: center;">
      <div class="ambassador-avatar-placeholder">${ambassador.chineseName}</div>
    </div>
    <div class="ambassador-info">
      <h3 class="ambassador-name">${ambassador.name}</h3>
      <p class="ambassador-title">${ambassador.title}</p>
      <p class="ambassador-bio">${ambassador.bio}</p>
    </div>
  `;
  return card;
}

/**
 * 渲染锦标赛条目
 */
export function renderTournamentItem(tournament) {
  const item = document.createElement('div');
  item.className = 'tournament-item';
  item.innerHTML = `
    <div class="tournament-header">
      <h3 class="tournament-name">${tournament.name}</h3>
      <span class="tournament-badge">${tournament.badge}</span>
    </div>
    <div class="tournament-info">
      <div class="tournament-info-item">
        <span class="tournament-info-label">保底奖金</span>
        <span class="tournament-info-value">${tournament.guarantee}</span>
      </div>
      <div class="tournament-info-item">
        <span class="tournament-info-label">开赛频率</span>
        <span class="tournament-info-value">${tournament.frequency}</span>
      </div>
    </div>
    <p class="tournament-desc">${tournament.description}</p>
  `;

  item.addEventListener('click', () => {
    window.location.hash = `/championship/${tournament.id}`;
  });

  return item;
}

/**
 * 创建返回按钮
 */
export function createBackButton(targetHash = '#/') {
  const backBtn = document.createElement('a');
  backBtn.className = 'back-button';
  backBtn.href = targetHash;
  backBtn.textContent = '返回';
  backBtn.setAttribute('data-navigate', 'true');
  return backBtn;
}
