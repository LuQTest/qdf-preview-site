(() => {
  const footerConfig = {
    brandAlt: '中国签证申请服务中心',
    description: '签证服务的官方提供商，致力于为所有前往中国的申请人提供高质量、专业的协助。',
    copyright: 'COPYRIGHT ©2023CVASC, ALL RIGHTS RESERVED&nbsp;京ICP备19020028号-2',
    columns: [
      { title: '关于我们', links: [
        { label: '关于签证中心', href: 'about-us.html' },
        { label: '联系我们', href: '#' },
        { label: '法律条款', href: '#' }
      ] },
      { title: '友情链接', links: [] },
      { title: '服务反馈', links: [] }
    ]
  };

  const footerColumn = ({ title, links }) => `<section class="content-footer-column"><h2>${title}</h2><ul>${links.map(({ label, href }) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul></section>`;
  const footerTemplate = `<footer class="content-footer" data-content-footer="true"><div class="content-footer-inner"><section class="content-footer-brand"><img src="images/logo5.png" alt="${footerConfig.brandAlt}"><p>${footerConfig.description}</p></section><div class="content-footer-links">${footerConfig.columns.map(footerColumn).join('')}</div><div class="content-footer-copyright">${footerConfig.copyright}</div></div></footer>`;

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
