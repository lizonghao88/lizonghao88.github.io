/**
 * SPA路由控制器
 * 使用hash-based路由实现
 */

import { updateSEOForRoute } from './seo.js';
import {
  renderHome,
  renderTournamentsPage,
  renderNewsPage,
  renderArticleDetail,
  renderTeamPage,
  renderGamesPage,
  renderGameDetail,
  renderChampionshipDetail,
  renderDownloadPage,
  renderNotFound
} from './pages.js';

// 路由表定义
const routes = [
  { path: '/', handler: renderHome },
  { path: '/tournaments', handler: renderTournamentsPage },
  { path: '/news', handler: renderNewsPage },
  { path: '/news/:id', handler: (params) => renderArticleDetail(params.id) },
  { path: '/team', handler: renderTeamPage },
  { path: '/games', handler: renderGamesPage },
  { path: '/games/:feature', handler: (params) => renderGameDetail(params.feature) },
  { path: '/championship/:type', handler: (params) => renderChampionshipDetail(params.type) },
  { path: '/download', handler: renderDownloadPage }
];

/**
 * 解析当前hash路由
 */
function parseRoute(hash) {
  // 去掉 # 开头
  let path = hash.replace(/^#/, '') || '/';

  // 处理参数，匹配路由
  for (const route of routes) {
    const { path: routePath, handler } = route;

    // 将路由模板转为正则表达式
    const paramNames = [];
    const regexPattern = '^' + routePath.replace(/:(\w+)/g, (_, name) => {
      paramNames.push(name);
      return '([^/]+)';
    }) + '$';

    const regex = new RegExp(regexPattern);
    const match = path.match(regex);

    if (match) {
      const params = {};
      paramNames.forEach((name, index) => {
        params[name] = match[index + 1];
      });

      return { handler, params };
    }
  }

  // 没有匹配到，返回404
  return { handler: renderNotFound, params: {} };
}

/**
 * 渲染当前路由
 */
export function renderRoute(container) {
  const hash = window.location.hash || '#/';
  const { handler, params } = parseRoute(hash.replace(/^#/, ''));

  // 更新SEO
  const routePath = hash.replace(/^#/, '').split('/')[1] ?
    `/${hash.replace(/^#/, '').split('/').slice(0, 2).join('/')}` :
    (hash.replace(/^#/, '') || '/');
  updateSEOForRoute(routePath);

  // 淡入淡出效果
  container.classList.remove('visible');

  setTimeout(() => {
    // 清空容器
    container.innerHTML = '';

    // 调用处理器获取内容
    const content = handler(params);
    container.appendChild(content);

    // 淡入
    setTimeout(() => {
      container.classList.add('visible');
      // 切换页面后滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }, 250);

  // 更新导航激活状态
  updateActiveNav(hash);
}

/**
 * 更新导航高亮
 */
function updateActiveNav(currentHash) {
  // 移除所有active
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.nav-mobile-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('active');
    }
  });
}

/**
 * 初始化路由监听
 */
export function initRouter(container) {
  // 监听hash变化
  window.addEventListener('hashchange', () => {
    renderRoute(container);
    // 关闭移动端菜单
    closeMobileMenu();
  });

  // 初始渲染
  renderRoute(container);
}

/**
 * 关闭移动端导航菜单
 */
function closeMobileMenu() {
  const mobileNav = document.getElementById('nav-mobile');
  const toggle = document.getElementById('mobile-toggle');
  if (mobileNav && mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
    toggle.classList.remove('active');
  }
}

/**
 * 切换移动端导航菜单
 */
export function toggleMobileMenu() {
  const mobileNav = document.getElementById('nav-mobile');
  const toggle = document.getElementById('mobile-toggle');
  mobileNav.classList.toggle('open');
  toggle.classList.toggle('active');
}
