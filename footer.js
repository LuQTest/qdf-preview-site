(() => {
  const footerConfig = {
    brandAlt: '中国签证申请服务中心',
    description: '签证服务的官方提供商，致力于为所有前往中国的申请人提供高质量、专业的协助。',
    copyright: 'COPYRIGHT ©2023CVASC, ALL RIGHTS RESERVED',
    columns: [
      { title: '服务项目', links: ['申请签证', 'VIP服务', '进度查询', '旅游和保险'] },
      { title: '相关信息', links: ['关于我们', '公告', '隐私政策', '法律声明'] },
      { title: '服务项目', links: ['申请签证', 'VIP服务', '进度查询', '旅游和保险'] }
    ]
  };

  const footerColumn = ({ title, links }) => `<section class="content-footer-column"><h2>${title}</h2><ul>${links.map((label) => `<li><a href="#">${label}</a></li>`).join('')}</ul></section>`;
  const footerTemplate = `<footer class="content-footer" data-content-footer="true"><div class="content-footer-inner"><section class="content-footer-brand"><img src="images/logo5.png" alt="${footerConfig.brandAlt}"><p>${footerConfig.description}</p></section><div class="content-footer-links">${footerConfig.columns.map(footerColumn).join('')}</div></div><div class="content-footer-copyright">${footerConfig.copyright}</div></footer>`;

  const contentMain = [...document.querySelectorAll('.main-height > main')].find((main) => main.getAttribute('aria-hidden') !== 'true');
  if (!contentMain || contentMain.querySelector('[data-content-footer="true"]')) return;
  contentMain.classList.remove('lg:flex', 'lg:justify-start');
  contentMain.insertAdjacentHTML('beforeend', footerTemplate);

  const footer = contentMain.querySelector('[data-content-footer="true"]');
  const syncFooterWidth = () => {
    if (window.innerWidth < 1024) {
      footer.style.marginLeft = '';
      footer.style.marginRight = '';
      footer.style.width = '';
      return;
    }

    const contentMainStyle = window.getComputedStyle(contentMain);
    const leftPadding = Number.parseFloat(contentMainStyle.paddingLeft) || 0;
    footer.style.marginLeft = `-${leftPadding}px`;
    footer.style.marginRight = '0';
    footer.style.width = `${contentMain.clientWidth}px`;
  };

  syncFooterWidth();
  window.addEventListener('resize', syncFooterWidth, { passive: true });
})();
