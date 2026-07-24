(() => {
  const headerTemplate = `
    <header class="shared-v4-header">
      <div class="shared-v4-utility"><div class="shared-v4-utility-inner"><a href="#">切换中心</a><span aria-hidden="true">|</span><a href="#">切换旧版</a><details class="shared-v4-language"><summary>中文<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></summary><div><a href="index.html">中文</a><a href="index-en.html">English</a><a href="index-vi.html">Tiếng Việt</a></div></details></div></div>
      <div class="shared-v4-mainbar">
        <div class="shared-v4-mainbar-inner">
          <a class="shared-v4-brand" href="index-V4.html" aria-label="中国签证申请服务中心首页"><img src="images/logo5.png" alt="中国签证申请服务中心"></a>
          <div class="shared-v4-location"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>新加坡</span></div>
          <div class="shared-v4-actions"><form class="shared-v4-search" role="search"><label class="sr-only" for="site-search">站内搜索</label><input id="site-search" name="q" placeholder="搜索..." type="search"><button type="submit" aria-label="搜索"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg></button></form><div class="shared-v4-auth-actions"><a class="shared-v4-login" href="login.html">注册/登录</a></div></div>
          <button aria-controls="mobile-menu" aria-expanded="false" aria-label="打开菜单" class="shared-v4-menu-button" id="mobile-menu-toggle" type="button"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
        </div>
      </div>
    </header>`;

  const mobileMenuTemplate = `
    <div class="fixed inset-0 z-[60] hidden lg:hidden" id="mobile-menu">
      <button aria-label="关闭菜单" class="absolute inset-0 h-full w-full bg-slate-950/40" id="mobile-menu-backdrop" type="button"></button>
      <aside aria-label="移动端导航" class="relative h-full w-[min(86vw,360px)] overflow-y-auto bg-white p-5 shadow-2xl">
        <div class="flex items-center justify-between"><span class="text-base font-semibold text-visa-blue">新加坡</span><button aria-label="关闭菜单" class="flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100" id="mobile-menu-close" type="button">×</button></div>
        <form class="mt-5 flex h-10" role="search"><label class="sr-only" for="mobile-site-search">站内搜索</label><input class="min-w-0 flex-1 rounded-l-md border border-slate-200 px-3 text-sm text-slate-700" id="mobile-site-search" name="q" placeholder="搜索签证服务、通知等" type="search"><button class="shared-search-button rounded-r-md px-3 text-sm font-medium" type="submit">搜索</button></form>
        <div class="my-5 border-t border-slate-200"></div>
        <div class="shared-v4-mobile-auth"><a class="shared-login-button block rounded-md bg-visa-blue px-4 py-3 text-center text-base font-medium text-white" href="login.html">注册 / 登录</a></div>
        <a class="mt-1 block rounded-md px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-visa-blue" href="#">切换中心</a>
        <details class="group mt-1"><summary class="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-visa-blue">中文<span>⌄</span></summary><div class="ml-4 border-l border-slate-200 py-1"><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">中文</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">English</a></div></details>
        <div class="my-5 border-t border-slate-200"></div>
        <nav class="space-y-1 text-base">
          <div class="shared-v4-mobile-nav-section">证件办理</div>
          <a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="index-V4.html">首页</a>
          <details class="group" open><summary class="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 font-medium text-visa-blue hover:bg-blue-50">签证服务<span>⌄</span></summary><div class="ml-3 border-l border-slate-200 py-1"><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="visa info.html">签证类型及材料清单</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">费用标准</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">申请表样例</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">资料下载</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">在华证件办理</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">常见问题</a></div></details>
          <details class="group"><summary class="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50">认证服务<span>⌄</span></summary><div class="ml-3 border-l border-slate-200 py-1"><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">认证类型及材料清单</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">费用标准</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">填写样例</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">资料下载</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">常见问题</a></div></details>
          <a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="extended-services.html">延伸服务</a>
          <a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="list.html">通知</a>
          <div class="my-3 border-t border-slate-200"></div>
          <div class="shared-v4-mobile-nav-section">赴华服务</div>
          <a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">酒店</a>
          <a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">机票</a>
          <a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">定制游</a>
          <details class="group"><summary class="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50">旅行保险<span>⌄</span></summary></details>
          <details class="group"><summary class="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50">健康服务<span>⌄</span></summary></details>
          <a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">救援服务</a>
          <details class="group"><summary class="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50">其他交通<span>⌄</span></summary></details>
          <a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">体验/门票</a>
          <a class="shared-v4-truncate-item block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#" title="测试超长文字XXXXXXXXXXXXXXX" aria-label="测试超长文字XXXXXXXXXXXXXXX"><span class="shared-v4-nav-label">测试超长文字XXXXXXXXXXXXXXX</span></a>
        </nav>
      </aside>
    </div>`;

  const desktopSidebarTemplate = `
    <aside class="shared-v4-sidebar" aria-label="主要导航">
      <nav>
        <div class="shared-v4-nav-section">证件办理</div>
        <a class="shared-v4-nav-row" href="index-V4.html">首页</a>
        <button aria-controls="visa-service-submenu" aria-expanded="true" class="layout-toggle shared-v4-nav-row" type="button"><span>签证服务</span><span>⌄</span></button>
        <ul class="shared-v4-submenu" id="visa-service-submenu"><li><a class="is-active" href="visa info.html">签证类型及材料清单</a></li><li><a href="#">费用标准</a></li><li><a href="#">申请表样例</a></li><li><a href="#">资料下载</a></li><li><a href="#">在华证件办理</a></li><li><a href="#">常见问题</a></li></ul>
        <button aria-controls="authentication-service-submenu" aria-expanded="false" class="layout-toggle shared-v4-nav-row" type="button"><span>认证服务</span><span>⌄</span></button>
        <ul class="shared-v4-submenu hidden" id="authentication-service-submenu"><li><a href="#">认证类型及材料清单</a></li><li><a href="#">费用标准</a></li><li><a href="#">填写样例</a></li><li><a href="#">资料下载</a></li><li><a href="#">常见问题</a></li></ul>
        <a class="shared-v4-nav-row" href="extended-services.html">延伸服务</a>
        <a class="shared-v4-nav-row" href="list.html">通知</a>
        <div class="shared-v4-nav-divider"></div>
        <div class="shared-v4-nav-section">赴华服务</div>
        <a class="shared-v4-nav-row" href="#">酒店</a>
        <a class="shared-v4-nav-row" href="#">机票</a>
        <a class="shared-v4-nav-row" href="#">定制游</a>
        <button aria-controls="travel-insurance-submenu" aria-expanded="false" class="layout-toggle shared-v4-nav-row" type="button"><span>旅行保险</span><span>⌄</span></button>
        <ul class="shared-v4-submenu hidden" id="travel-insurance-submenu"></ul>
        <button aria-controls="health-service-submenu" aria-expanded="false" class="layout-toggle shared-v4-nav-row" type="button"><span>健康服务</span><span>⌄</span></button>
        <ul class="shared-v4-submenu hidden" id="health-service-submenu"></ul>
        <a class="shared-v4-nav-row" href="#">救援服务</a>
        <button aria-controls="transport-service-submenu" aria-expanded="false" class="layout-toggle shared-v4-nav-row" type="button"><span>其他交通</span><span>⌄</span></button>
        <ul class="shared-v4-submenu hidden" id="transport-service-submenu"></ul>
        <a class="shared-v4-nav-row" href="#">体验/门票</a>
        <a class="shared-v4-nav-row shared-v4-truncate-item" href="#" title="测试超长文字XXXXXXXXXXXXXXX" aria-label="测试超长文字XXXXXXXXXXXXXXX"><span class="shared-v4-nav-label">测试超长文字XXXXXXXXXXXXXXX</span></a>
      </nav>
    </aside>`;

  const mockAuthKey = 'cvasc-demo-auth';
  const hasMockAuth = () => {
    try {
      return JSON.parse(localStorage.getItem(mockAuthKey) || 'null')?.loggedIn === true;
    } catch (error) {
      return false;
    }
  };
  const clearMockAuth = () => {
    try {
      localStorage.removeItem(mockAuthKey);
    } catch (error) {
      // The demo still restores the signed-out UI if browser storage is unavailable.
    }
  };
  const renderMockAuth = () => {
    const loggedIn = hasMockAuth();
    const desktopActions = document.querySelector('.shared-v4-auth-actions');
    const mobileActions = document.querySelector('.shared-v4-mobile-auth');
    if (desktopActions) {
      desktopActions.innerHTML = loggedIn
        ? '<a class="shared-v4-account" data-mock-personal-center href="#">个人中心</a><button class="shared-v4-logout" data-mock-logout type="button">登出</button>'
        : '<a class="shared-v4-login" href="login.html">注册/登录</a>';
    }
    if (mobileActions) {
      mobileActions.classList.toggle('is-logged-in', loggedIn);
      mobileActions.innerHTML = loggedIn
        ? '<a class="shared-v4-mobile-account" data-mock-personal-center href="#">个人中心</a><button class="shared-v4-mobile-logout" data-mock-logout type="button">登出</button>'
        : '<a class="shared-login-button block rounded-md bg-visa-blue px-4 py-3 text-center text-base font-medium text-white" href="login.html">注册 / 登录</a>';
    }
    document.querySelectorAll('[data-mock-personal-center]').forEach((link) => {
      link.addEventListener('click', (event) => event.preventDefault());
    });
    document.querySelectorAll('[data-mock-logout]').forEach((button) => {
      button.addEventListener('click', () => {
        clearMockAuth();
        renderMockAuth();
      });
    });
  };

  const sidebarIconPaths = {
    '首页': '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-6h6v6"/>',
    '签证服务': '<path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v14.5a2.75 2.75 0 0 1-2.75 2.75H6.75A2.75 2.75 0 0 1 4 19.25V4.75Z"/><path d="M8 7h8M8 11h8M8 15h4"/><path d="m14.5 18 4-4"/>',
    '认证服务': '<path d="M12 3 4.5 6.5V12c0 4.7 3.1 7.9 7.5 9 4.4-1.1 7.5-4.3 7.5-9V6.5L12 3Z"/><path d="m9 12 2 2 4-4"/>',
    '延伸服务': '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
    '通知': '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
    '酒店': '<path d="M5 21V4h10v17M5 8h10M9 4v4M8 12h2M8 16h2M15 21V10h4v11M3 21h18"/>',
    '机票': '<path d="m3 11 18-5-6 5 4 7-2.5.7-5-5-3.5 4.5-2-.7 1.5-5.5L3 13v-2Z"/>',
    '其他交通': '<rect x="4" y="4" width="16" height="15" rx="3"/><path d="M7 19v2M17 19v2M7 9h10M8 14h.01M16 14h.01"/>',
    '体验/门票': '<path d="M4 7a2 2 0 0 0 2 2v6a2 2 0 0 0-2 2v1h16v-1a2 2 0 0 0-2-2V9a2 2 0 0 0 2-2V6H4v1ZM12 6v12"/>',
    '定制游': '<path d="m12 3 2.5 5.5L20 9l-4 4 1 5.5-5-2.8-5 2.8L8 13 4 9l5.5-.5L12 3Z"/>',
    '旅行保险': '<path d="M12 3c3 3.4 5 6.2 5 9a5 5 0 1 1-10 0c0-2.8 2-5.6 5-9ZM4 13.5h16"/>',
    '健康服务': '<path d="M12 21s-7-4.6-7-10.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 7 4.5C19 16.4 12 21 12 21Z"/><path d="M9 12h6M12 9v6"/>',
    '救援服务': '<path d="M4 17h5l2-2h4l2 2h3"/><path d="M5 17v3h14v-3M8 13V7a4 4 0 0 1 8 0v6M12 3v3M8.5 5.5l2 2M15.5 5.5l-2 2"/>',
    '测试超长文字XXXXXXXXXXXXXXX': '<path d="M5 17h14l-1.5-6h-11L5 17Z"/><path d="m7 11 1.5-4h7L17 11M7 17v3M17 17v3M3 14h2M19 14h2"/><circle cx="8" cy="15" r=".75" fill="currentColor" stroke="none"/><circle cx="16" cy="15" r=".75" fill="currentColor" stroke="none"/>'
  };

  const addSidebarIcons = () => {
    const createIcon = (paths) => document.createRange().createContextualFragment(`<svg aria-hidden="true" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">${paths}</svg>`);
    document.querySelectorAll('aside a, aside button, aside summary').forEach((item) => {
      const label = item.textContent.replace(/[⌄›]/g, '').trim();
      if (!sidebarIconPaths[label] || item.dataset.sidebarIcon) return;
      item.dataset.sidebarIcon = 'true';
      const icon = createIcon(sidebarIconPaths[label]);
      if (item.tagName === 'A') {
        item.classList.add('flex', 'items-center', 'gap-2');
        item.insertBefore(icon, item.firstChild);
        return;
      }
      const labelNode = [...item.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()) || item.querySelector('span:first-child');
      if (labelNode?.nodeType === Node.TEXT_NODE) {
        const wrapper = document.createElement('span');
        wrapper.className = 'inline-flex items-center gap-2';
        labelNode.replaceWith(wrapper);
        wrapper.append(labelNode);
        wrapper.insertBefore(icon, wrapper.firstChild);
      } else if (labelNode) {
        labelNode.classList.add('inline-flex', 'items-center', 'gap-2');
        labelNode.insertBefore(icon, labelNode.firstChild);
      }
    });
  };

  const bindLayout = () => {
    const sidebarToggles = [...document.querySelectorAll('.layout-toggle')];
    const setSidebarExpanded = (button, expanded) => {
      const submenu = document.getElementById(button.getAttribute('aria-controls'));
      const indicator = button.querySelector('span:last-child');
      button.setAttribute('aria-expanded', String(expanded));
      submenu.classList.toggle('hidden', !expanded);
      if (indicator) indicator.textContent = expanded ? '⌃' : '⌄';
    };
    sidebarToggles.forEach((button) => {
      const initiallyExpanded = button.getAttribute('aria-expanded') === 'true';
      setSidebarExpanded(button, initiallyExpanded);
      button.addEventListener('click', () => {
        const expandCurrent = button.getAttribute('aria-expanded') !== 'true';
        sidebarToggles.forEach((otherButton) => setSidebarExpanded(otherButton, false));
        if (expandCurrent) setSidebarExpanded(button, true);
      });
    });
    const menu = document.getElementById('mobile-menu');
    const toggle = document.getElementById('mobile-menu-toggle');
    const close = document.getElementById('mobile-menu-close');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    const setOpen = (open) => { menu.classList.toggle('hidden', !open); toggle.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('overflow-hidden', open); };
    toggle.addEventListener('click', () => setOpen(menu.classList.contains('hidden')));
    close.addEventListener('click', () => setOpen(false));
    backdrop.addEventListener('click', () => setOpen(false));
  };

  const header = document.querySelector('body > header');
  const legacyMobileMenu = document.getElementById('mobile-menu');
  const shell = document.querySelector('.main-height');
  if (!header || !shell) return;
  legacyMobileMenu?.remove();
  header.outerHTML = headerTemplate;
  document.querySelector('header').insertAdjacentHTML('afterend', mobileMenuTemplate);
  const sidebar = shell.querySelector(':scope > aside');
  sidebar?.replaceWith(document.createRange().createContextualFragment(desktopSidebarTemplate));
  addSidebarIcons();
  renderMockAuth();
  bindLayout();
  window.addEventListener('storage', renderMockAuth);
})();
