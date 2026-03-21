/**
 * SEO工具模块
 * 处理SPA动态更新标题和meta标签
 */

import { routeSEO } from './data.js';

export function updateSEOTitle(title) {
  document.title = title;
}

export function updateMetaDescription(description) {
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;
}

export function updateMetaKeywords(keywords) {
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = keywords;
}

export function updateOpenGraph(title, description) {
  updateOGTag('og:title', title);
  updateOGTag('og:description', description);
}

function updateOGTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function updateCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

/**
 * 根据路由更新整个页面SEO
 */
export function updateSEOForRoute(route) {
  // 默认SEO
  const defaultSEO = routeSEO['/'];
  const seo = routeSEO[route] || defaultSEO;

  updateSEOTitle(seo.title);
  updateMetaDescription(seo.description);
  updateMetaKeywords(seo.keywords);
  updateOpenGraph(seo.title, seo.description);

  // 更新canonical
  const baseUrl = window.location.origin;
  const canonicalUrl = route === '/' ? baseUrl : `${baseUrl}/#${route}`;
  updateCanonical(canonicalUrl);
}

/**
 * 为文章详情页更新SEO
 */
export function updateSEOForArticle(article) {
  updateSEOTitle(article.seoTitle + ' - GG扑克中文官网');
  updateMetaDescription(article.seoDescription);
  updateMetaKeywords(`${article.category},GG扑克,德州扑克`);
  updateOpenGraph(article.seoTitle, article.seoDescription);
}
