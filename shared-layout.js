(() => {
  const headerTemplate = `
    <header class="flex h-[60px] w-full bg-gradient-to-r from-[#0950a4] to-[#0679b7] px-4 text-white shadow-md sticky top-0 z-50 lg:px-[30px]">
      <div class="flex h-full w-full items-center">
        <div class="flex items-center"><img src="images/logo5.png" alt="Chinese Visa Application Service Center Logo" class="h-10 max-w-[210px] object-contain lg:max-w-none"></div>
        <form class="ml-8 hidden h-9 items-stretch lg:flex" role="search"><label class="sr-only" for="site-search">站内搜索</label><input class="w-[300px] rounded-l-md border-0 bg-white px-3 text-sm text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-200" id="site-search" name="q" placeholder="搜索签证服务、通知等" type="search"><button class="shared-search-button rounded-r-md px-3.5 text-sm font-medium" type="submit">搜索</button></form>
        <div class="ml-auto hidden items-center gap-5 text-sm font-medium lg:flex"><span class="text-white/85">新加坡</span><a class="text-white/85 hover:text-white" href="#">切换中心</a><details class="group relative"><summary class="flex cursor-pointer list-none items-center gap-1 text-white/85 hover:text-white">中文<svg aria-hidden="true" class="h-3.5 w-3.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg></summary><div class="absolute right-0 top-7 z-20 w-24 overflow-hidden rounded-md bg-white py-1 text-slate-700 shadow-lg"><a class="block px-3 py-2 text-sm hover:bg-slate-50 hover:text-visa-blue" href="#">中文</a><a class="block px-3 py-2 text-sm hover:bg-slate-50 hover:text-visa-blue" href="#">English</a></div></details><a class="rounded-md bg-white px-3.5 py-1.5 text-visa-blue hover:bg-blue-50" href="#">注册 / 登录</a></div>
        <button aria-controls="mobile-menu" aria-expanded="false" aria-label="打开菜单" class="ml-auto flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10 lg:hidden" id="mobile-menu-toggle" type="button"><svg aria-hidden="true" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      </div>
    </header>`;

  const mobileMenuTemplate = `
    <div class="fixed inset-0 z-[60] hidden lg:hidden" id="mobile-menu"><button aria-label="关闭菜单" class="absolute inset-0 h-full w-full bg-slate-950/40" id="mobile-menu-backdrop" type="button"></button><aside aria-label="移动端导航" class="relative h-full w-[min(86vw,360px)] overflow-y-auto bg-white p-5 shadow-2xl"><div class="flex items-center justify-between"><span class="text-base font-semibold text-visa-blue">新加坡</span><button aria-label="关闭菜单" class="flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100" id="mobile-menu-close" type="button">×</button></div><form class="mt-5 flex h-10" role="search"><label class="sr-only" for="mobile-site-search">站内搜索</label><input class="min-w-0 flex-1 rounded-l-md border border-slate-200 px-3 text-sm text-slate-700" id="mobile-site-search" name="q" placeholder="搜索签证服务、通知等" type="search"><button class="shared-search-button rounded-r-md px-3 text-sm font-medium" type="submit">搜索</button></form><div class="my-5 border-t border-slate-200"></div><a class="block rounded-md bg-visa-blue px-4 py-3 text-center text-base font-medium text-white" href="#">注册 / 登录</a><a class="mt-1 block rounded-md px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-visa-blue" href="#">切换中心</a><details class="group mt-1"><summary class="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-visa-blue">中文<span>⌄</span></summary><div class="ml-4 border-l border-slate-200 py-1"><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">中文</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">English</a></div></details><div class="my-5 border-t border-slate-200"></div><nav class="space-y-1 text-base"><a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="index.html">首页</a><details class="group" open><summary class="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 font-medium text-visa-blue hover:bg-blue-50">签证服务<span>⌄</span></summary><div class="ml-3 border-l border-slate-200 py-1"><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="visa info.html">签证类型及材料清单</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">费用标准</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">申请表样例</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">资料下载</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">在华证件办理</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">常见问题</a></div></details><details class="group"><summary class="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50">认证服务<span>⌄</span></summary><div class="ml-3 border-l border-slate-200 py-1"><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">认证类型及材料清单</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">费用标准</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">填写样例</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">资料下载</a><a class="block px-3 py-2 text-base leading-6 text-slate-600 hover:text-visa-blue" href="#">常见问题</a></div></details><a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">延伸服务</a><a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="list.html">通知</a><div class="my-3 border-t border-slate-200"></div><a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">酒店</a><a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">机票</a><a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">其他交通</a><a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">体验/门票</a><a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">定制游</a><a class="block rounded-md px-3 py-2.5 font-medium text-visa-sidebar-text hover:bg-slate-50" href="#">旅行保险</a></nav></aside></div>`;

  const desktopSidebarTemplate = `
    <aside class="hidden w-[200px] shrink-0 flex-col border-r border-visa-border py-8 lg:flex lg:h-full lg:overflow-y-auto"><nav class="space-y-1"><div class="mb-8 flex flex-col"><a class="px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" href="index.html">首页</a><div><button aria-controls="visa-service-submenu" aria-expanded="true" class="layout-toggle flex w-full items-center justify-between px-8 py-3 text-sm font-medium text-visa-blue hover:bg-gray-50" type="button"><span>签证服务</span><span>⌄</span></button><ul class="mb-2 ml-8 border-l border-slate-200" id="visa-service-submenu"><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="visa info.html">签证类型及材料清单</a></li><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">费用标准</a></li><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">申请表样例</a></li><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">资料下载</a></li><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">在华证件办理</a></li><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">常见问题</a></li></ul></div><div><button aria-controls="authentication-service-submenu" aria-expanded="false" class="layout-toggle flex w-full items-center justify-between px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" type="button"><span>认证服务</span><span>⌄</span></button><ul class="hidden mb-2 ml-8 border-l border-slate-200" id="authentication-service-submenu"><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">认证类型及材料清单</a></li><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">费用标准</a></li><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">填写样例</a></li><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">资料下载</a></li><li><a class="block px-4 py-2 text-sm text-visa-sidebar-text hover:bg-gray-50 hover:text-visa-blue" href="#">常见问题</a></li></ul></div><a class="px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" href="#">延伸服务</a><a class="px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" href="list.html">通知</a></div><div class="mb-8 mx-8 border-t border-gray-100"></div><div class="flex flex-col"><a class="px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" href="#">酒店</a><a class="px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" href="#">机票</a><a class="px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" href="#">其他交通</a><a class="px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" href="#">体验/门票</a><a class="px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" href="#">定制游</a><a class="px-8 py-3 text-sm font-medium text-visa-sidebar-text hover:bg-gray-50" href="#">旅行保险</a></div></nav></aside>`;

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
    '旅行保险': '<path d="M12 3c3 3.4 5 6.2 5 9a5 5 0 1 1-10 0c0-2.8 2-5.6 5-9ZM4 13.5h16"/>'
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
      const labelNode = item.querySelector('span:first-child') || [...item.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
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
    if (!document.getElementById('shared-sidebar-flyout-style')) {
      document.head.insertAdjacentHTML('beforeend', `<style id="shared-sidebar-flyout-style">
        .shared-submenu-parent { position: relative; }
        .shared-flyout-submenu { display: none; position: fixed; top: 0; left: 0; z-index: 80; width: 240px; margin: 0; padding: 10px 0; border: 1px solid #e2e8f0; border-radius: 10px; background: #fff; box-shadow: 0 14px 30px rgba(15, 23, 42, .16); }
        .shared-submenu-parent:hover > .shared-flyout-submenu, .shared-submenu-parent:focus-within > .shared-flyout-submenu, .shared-submenu-parent.is-open > .shared-flyout-submenu { display: block; }
        .shared-flyout-submenu a { padding: 10px 16px; font-size: 14px; line-height: 20px; }
        .shared-login-button { background: #e1b53f !important; color: #fff !important; }
        .shared-login-button:hover { background: #c99c25 !important; }
        .shared-search-button { background: #e1b53f !important; color: #fff !important; }
        .shared-search-button:hover { background: #c99c25 !important; }
      </style>`);
    }
    document.querySelectorAll('.layout-toggle').forEach((button) => {
      const submenu = document.getElementById(button.getAttribute('aria-controls'));
      const parent = button.parentElement;
      parent.classList.add('shared-submenu-parent');
      submenu.classList.remove('hidden');
      submenu.classList.add('shared-flyout-submenu');
      button.querySelector('span:last-child').textContent = '›';
      button.setAttribute('aria-expanded', 'false');
      const placeFlyout = () => {
        const rect = button.getBoundingClientRect();
        submenu.style.top = `${Math.max(8, rect.top)}px`;
        submenu.style.left = `${rect.right + 8}px`;
      };
      parent.addEventListener('pointerenter', placeFlyout);
      button.addEventListener('focus', placeFlyout);
      button.addEventListener('click', () => {
        placeFlyout();
        const expanded = parent.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(expanded));
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
  document.querySelectorAll('a').forEach((link) => {
    if (link.textContent.trim() === '注册 / 登录') link.classList.add('shared-login-button');
  });
  const sidebar = shell.querySelector(':scope > aside');
  sidebar?.replaceWith(document.createRange().createContextualFragment(desktopSidebarTemplate));
  addSidebarIcons();
  bindLayout();
})();
