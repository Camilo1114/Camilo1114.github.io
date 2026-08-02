(() => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const projectCards = [...document.querySelectorAll('.project-card')];
  const projectCount = document.querySelector('#project-count');
  const emptyState = document.querySelector('.empty-state');
  const filterTargets = [...document.querySelectorAll('[data-filter-target]')];

  const setHeaderState = () => {
    header?.classList.toggle('scrolled', window.scrollY > 12);
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  navToggle?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  function applyFilter(filter) {
    let visible = 0;

    projectCards.forEach((card) => {
      const categories = (card.dataset.categories || '').split(' ');
      const show = filter === 'all' || categories.includes(filter);
      card.hidden = !show;
      if (show) visible += 1;
    });

    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    if (projectCount) {
      projectCount.textContent = `${visible} project${visible === 1 ? '' : 's'}`;
    }
    if (emptyState) emptyState.hidden = visible !== 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter || 'all'));
  });

  filterTargets.forEach((target) => {
    target.addEventListener('click', () => {
      const filter = target.dataset.filterTarget || 'all';
      applyFilter(filter);
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;

  document.querySelectorAll('.reveal').forEach((element) => {
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add('visible');
  });

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
