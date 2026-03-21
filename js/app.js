/**
 * GG扑克 SPA 主入口
 */

import { renderHeader, renderFooter } from './components.js';
import { initRouter, toggleMobileMenu } from './router.js';

// 初始化应用
function initApp() {
  // 渲染头部
  const headerContainer = document.getElementById('header-container');
  headerContainer.appendChild(renderHeader());

  // 渲染页脚
  const footerContainer = document.getElementById('footer-container');
  footerContainer.appendChild(renderFooter());

  // 获取主内容容器
  const mainContent = document.getElementById('main-content');

  // 初始化路由
  initRouter(mainContent);

  // 绑定事件
  bindEvents();

  // 图片懒加载
  initLazyLoading();

  // 滚动阴影效果
  initScrollEffect();
}

/**
 * 绑定全局事件
 */
function bindEvents() {
  // 移动端菜单切换
  const mobileToggle = document.getElementById('mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  // 委托导航点击事件（确保所有data-navigate链接都走SPA路由）
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-navigate]');
    if (target && target.tagName === 'A') {
      // 已经是href带hash，默认行为就可以，这里只是确保关闭菜单
      setTimeout(() => {
        const mobileNav = document.getElementById('nav-mobile');
        if (mobileNav && mobileNav.classList.contains('open')) {
          mobileNav.classList.remove('open');
          mobileToggle.classList.remove('active');
        }
      }, 100);
    }
  });
}

/**
 * 图片懒加载初始化
 */
function initLazyLoading() {
  // 使用原生IntersectionObserver实现懒加载
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.lazy && img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-lazy]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // 降级处理：全部加载
    document.querySelectorAll('img[data-lazy]').forEach(img => {
      img.src = img.dataset.src;
      img.classList.add('loaded');
    });
  }
}

/**
 * 滚动时头部阴影效果
 */
function initScrollEffect() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// DOM加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
