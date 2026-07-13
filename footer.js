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

  if (!document.getElementById('content-footer-style')) {
    document.head.insertAdjacentHTML('beforeend', `<style id="content-footer-style">
      .content-footer { width: 100%; margin-top: 34px; border-top: 1px solid #dfe4ec; background: #f7f9fd; color: #626b7b; }
      .content-footer-inner { display: flex; min-height: 174px; max-width: 1120px; margin: 0 auto; padding: 42px 24px 26px; gap: 90px; }
      .content-footer-brand { width: 500px; flex: 1 1 auto; }
      .content-footer-brand img { display: block; height: 34px; width: auto; margin-bottom: 22px; object-fit: contain; object-position: left center; }
      .content-footer-brand p { max-width: 330px; margin: 0; font-size: 12px; line-height: 1.75; color: #778092; }
      .content-footer-links { display: grid; grid-template-columns: repeat(3, minmax(86px, 1fr)); gap: 42px; flex: 0 0 auto; }
      .content-footer-column h2 { margin: 0 0 15px; color: #394150; font-size: 13px; font-weight: 700; line-height: 1.2; white-space: nowrap; }
      .content-footer-column ul { margin: 0; padding: 0; list-style: none; }
      .content-footer-column li + li { margin-top: 9px; }
      .content-footer-column a { color: #778092; font-size: 12px; line-height: 1.25; text-decoration: none; white-space: nowrap; transition: color .2s ease; }
      .content-footer-column a:hover { color: #056eb7; }
      .content-footer-copyright { padding: 17px 24px 20px; color: #8c94a3; font-size: 11px; line-height: 1.2; text-align: center; }
      @media (max-width: 1023px) { .content-footer-inner { min-height: auto; padding: 32px 24px; gap: 32px; flex-direction: column; } .content-footer-brand { width: auto; } .content-footer-links { gap: 24px; } }
      @media (max-width: 640px) { .content-footer-links { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    </style>`);
  }

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
