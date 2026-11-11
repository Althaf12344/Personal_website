/**
 * ACADEMIC PORTFOLIO JAVASCRIPT
 * Handles theme toggling, publication filtering, BibTeX drawers,
 * clipboard copy with feedback toasts, and news expansion.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavScroll();
  initNewsToggle();
  initPublicationFilters();
  initBibtexToggles();
  initAbstractToggles();
  initMobileNav();
});

/* ==========================================================================
   Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* ==========================================================================
   Navigation & Scroll Spy
   ========================================================================== */
function initNavScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    // Close when clicking a link
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   News Feed Expand / Collapse
   ========================================================================== */
function initNewsToggle() {
  const expandBtn = document.getElementById('toggle-news-btn');
  const newsContainer = document.getElementById('news-container');

  if (expandBtn && newsContainer) {
    expandBtn.addEventListener('click', () => {
      const isExpanded = newsContainer.classList.toggle('expanded');
      expandBtn.textContent = isExpanded ? 'Show fewer news ↑' : 'Show older news ↓';
    });
  }
}

/* ==========================================================================
   Publication Filtering
   ========================================================================== */
function initPublicationFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubCards = document.querySelectorAll('.pub-card');
  const countDisplay = document.getElementById('pub-count');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      pubCards.forEach(card => {
        const categories = card.getAttribute('data-category')?.split(' ') || [];
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'grid';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (countDisplay) {
        countDisplay.textContent = `Showing ${visibleCount} publications`;
      }
    });
  });
}

/* ==========================================================================
   BibTeX Drawers & Copy
   ========================================================================== */
function initBibtexToggles() {
  const bibBtns = document.querySelectorAll('.toggle-bibtex');

  bibBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const drawer = document.getElementById(targetId);
      if (drawer) {
        drawer.classList.toggle('open');
      }
    });
  });

  const copyBtns = document.querySelectorAll('.copy-bib-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const codeElement = document.getElementById(targetId);
      if (codeElement) {
        const text = codeElement.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
          showToast('BibTeX copied to clipboard!');
          const origText = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = origText;
          }, 2000);
        });
      }
    });
  });
}

/* ==========================================================================
   Abstract Expand / Collapse
   ========================================================================== */
function initAbstractToggles() {
  const absBtns = document.querySelectorAll('.toggle-abstract');

  absBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const desc = document.getElementById(targetId);
      if (desc) {
        if (desc.style.display === 'block') {
          desc.style.display = 'none';
          btn.textContent = 'Abstract';
        } else {
          desc.style.display = 'block';
          btn.textContent = 'Hide Abstract';
        }
      }
    });
  });
}

/* ==========================================================================
   Toast Notifications
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
