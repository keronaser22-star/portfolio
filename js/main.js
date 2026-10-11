/**
 * Main Application Script
 * Kiro Naser — Director of Photography Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Cinema Lightbox
  const lightbox = new CinemaLightbox();
  lightbox.setProjectsList(PORTFOLIO_PROJECTS);

  // Initialize UI Modules
  initNavigation();
  renderFeaturedProjects(lightbox);
  renderPortfolioGallery(lightbox);
  renderExperienceSection();
  renderVisualShowcase(lightbox);
  initClipboardButtons();
  initDynamicYear();
  initHeroVideoFallback();
});

/* ==========================================================================
   Navigation & Scrollspy
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll effect on navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          targetLink.classList.add('active');
        }
      }
    });
  }, { passive: true });

  // Mobile drawer toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('drawer-open', isOpen);
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('drawer-open');
      });
    });
  }
}

/* ==========================================================================
   Featured Projects Spotlight
   ========================================================================== */
function renderFeaturedProjects(lightbox) {
  const container = document.getElementById('featuredProjectsContainer');
  if (!container) return;

  const featured = PORTFOLIO_PROJECTS.filter(p => p.featured);
  container.innerHTML = '';

  featured.forEach((project, idx) => {
    const card = document.createElement('article');
    const isWidescreen = project.aspectRatio === '16:9';
    card.className = `featured-card ${isWidescreen ? 'layout-wide' : 'layout-portrait'} fade-in-up`;
    card.style.animationDelay = `${idx * 0.15}s`;

    card.innerHTML = `
      <div class="featured-media-wrapper" data-project-id="${project.id}">
        <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" class="featured-thumb">
        <div class="featured-overlay">
          <div class="cinema-play-btn" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
          <span class="preview-pill">Watch Project</span>
        </div>
      </div>
      <div class="featured-info">
        <div class="featured-meta">
          <span class="meta-category">${project.categoryLabel}</span>
          <span class="meta-client">${project.client || ''}</span>
        </div>
        <h3 class="featured-title">
          <button type="button" class="title-trigger" data-project-id="${project.id}">${project.title}</button>
        </h3>
        <p class="featured-desc">${project.description}</p>
        <div class="featured-tags">
          ${project.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
        </div>
        <button type="button" class="featured-watch-btn" data-project-id="${project.id}">
          <span>Experience Film</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    `;

    // Click triggers
    const triggerElements = card.querySelectorAll('[data-project-id]');
    triggerElements.forEach(el => {
      el.addEventListener('click', () => {
        lightbox.openById(project.id);
      });
    });

    container.appendChild(card);
  });
}

/* ==========================================================================
   Portfolio Gallery & Dynamic Filter
   ========================================================================== */
function renderPortfolioGallery(lightbox) {
  const grid = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const countBadge = document.getElementById('projectCountBadge');
  if (!grid) return;

  let currentCategory = 'all';

  function renderGrid(filter) {
    grid.innerHTML = '';
    const filtered = filter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Productions`;
    }

    filtered.forEach((project, index) => {
      const card = document.createElement('div');
      const isVertical = project.aspectRatio === '9:16';
      card.className = `project-card ${isVertical ? 'card-vertical' : 'card-widescreen'} fade-in-up`;
      card.style.animationDelay = `${(index % 8) * 0.08}s`;

      card.innerHTML = `
        <div class="project-media" tabindex="0" role="button" aria-label="View ${project.title}">
          <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" class="project-thumb">
          <div class="card-aspect-badge">${project.aspectRatio}</div>
          <div class="project-overlay">
            <div class="card-play-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div class="project-details">
          <div class="project-top-row">
            <span class="project-cat">${project.categoryLabel}</span>
            <span class="project-client-badge">${project.client || ''}</span>
          </div>
          <h4 class="project-title" title="${project.title}">${project.title}</h4>
          <p class="project-snippet">${project.description}</p>
        </div>
      `;

      card.querySelector('.project-media').addEventListener('click', () => {
        lightbox.openById(project.id);
      });

      card.querySelector('.project-media').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          lightbox.openById(project.id);
        }
      });

      grid.appendChild(card);
    });
  }

  // Filter click events
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderGrid(currentCategory);
    });
  });

  // Initial render
  renderGrid('all');
}

/* ==========================================================================
   Professional Experience & Collaborations
   ========================================================================== */
function renderExperienceSection() {
  const container = document.getElementById('experienceTimelineContainer');
  if (!container) return;

  container.innerHTML = '';

  EXPERIENCE_COLLABORATIONS.forEach((exp, idx) => {
    const item = document.createElement('div');
    item.className = `experience-card ${exp.isCurrent ? 'current-engagement' : ''} fade-in-up`;
    item.style.animationDelay = `${idx * 0.12}s`;

    item.innerHTML = `
      <div class="exp-marker">
        <div class="marker-dot ${exp.isCurrent ? 'current-pulse' : ''}"></div>
        <div class="marker-line"></div>
      </div>
      <div class="exp-content">
        <div class="exp-header">
          <div class="exp-title-row">
            <h3 class="exp-org-name">${exp.name}</h3>
            ${exp.isCurrent 
              ? `<span class="current-badge"><span class="live-dot"></span> CURRENT ENGAGEMENT</span>` 
              : `<span class="collab-badge">${exp.status}</span>`}
          </div>
          <span class="exp-category">${exp.category}</span>
        </div>
        <p class="exp-description">${exp.description}</p>
        <div class="exp-highlights">
          ${exp.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
      </div>
    `;

    container.appendChild(item);
  });
}

/* ==========================================================================
   Visual Showcase (Cinematography Frames)
   ========================================================================== */
function renderVisualShowcase(lightbox) {
  const showcaseGrid = document.getElementById('showcaseGrid');
  if (!showcaseGrid) return;

  // Curate 8 striking still captures from the project assets
  const showcaseFrames = [
    {
      src: "assets/thumbnails/thumb_1uW6iOwOd-56N9Y3KdojQgAXKrMmtn6XR.jpg",
      title: "Architectural Symmetry & Spatial Volume",
      location: "Cairo Gate Commercial"
    },
    {
      src: "assets/thumbnails/thumb_1ARFJHAqtL_ca0IdgERIyAy03YNmAIPng.jpg",
      title: "Culinary Macro Texture & Steam",
      location: "Nussa Commercial Production"
    },
    {
      src: "assets/thumbnails/thumb_1_oTRo9ePqiD8n1JPtp0kASV4qrGaE19A.jpg",
      title: "Chiaroscuro & Emotional Depth",
      location: "Music Video Production"
    },
    {
      src: "assets/thumbnails/thumb_1SRpRfci6X5uBv9dVE4nXihM86Bv8iWEi.jpg",
      title: "Clinical Light Purity & Focus",
      location: "Citrine Dental Aesthetics"
    },
    {
      src: "assets/thumbnails/thumb_1gDjSvGXjQ-YkcbF76eE886OTZ-BvlAe3.jpg",
      title: "Tabletop Gourmet Styling",
      location: "Nussa Series Showcase"
    },
    {
      src: "assets/thumbnails/thumb_1Hry5fZRYt8OYosVxefBNppZA-Kx-DeDn.jpg",
      title: "Physician Portrait Lighting",
      location: "Citrine Clinics Series"
    },
    {
      src: "assets/thumbnails/thumb_11KvZQr0gVO9qChuU_pZh00eFOfHTBz20.jpg",
      title: "Interior Daylighting & Balance",
      location: "Luxury Real Estate Production"
    },
    {
      src: "assets/thumbnails/thumb_1rT3ol6dCMCLl-iljZnxCRdEvxbsTMw1S.jpg",
      title: "Prismatic Gels & Performance Energy",
      location: "Music Video Reel"
    }
  ];

  showcaseGrid.innerHTML = '';

  showcaseFrames.forEach((frame, idx) => {
    const item = document.createElement('div');
    item.className = `showcase-item item-${(idx % 4) + 1} fade-in-up`;
    item.style.animationDelay = `${idx * 0.1}s`;

    item.innerHTML = `
      <div class="showcase-img-box" tabindex="0" role="button" aria-label="View Still: ${frame.title}">
        <img src="${frame.src}" alt="${frame.title}" loading="lazy" class="showcase-img">
        <div class="showcase-hover-overlay">
          <div class="showcase-meta">
            <span class="showcase-tag">Cinematic Frame</span>
            <h4 class="showcase-caption">${frame.title}</h4>
            <p class="showcase-sub">${frame.location}</p>
          </div>
          <div class="showcase-zoom-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>
      </div>
    `;

    const imgBox = item.querySelector('.showcase-img-box');
    imgBox.addEventListener('click', () => {
      lightbox.openStill(frame.src, `${frame.title} — ${frame.location}`);
    });
    imgBox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        lightbox.openStill(frame.src, `${frame.title} — ${frame.location}`);
      }
    });

    showcaseGrid.appendChild(item);
  });
}

/* ==========================================================================
   Clipboard Copy Utilities & Toast Feedback
   ========================================================================== */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll('.copy-trigger');
  
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Text';

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`${label} copied to clipboard!`);
        }).catch(() => {
          fallbackCopy(textToCopy, label);
        });
      } else {
        fallbackCopy(textToCopy, label);
      }
    });
  });
}

function fallbackCopy(text, label) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${label} copied to clipboard!`);
  } catch (err) {
    showToast(`Could not copy automatically: ${text}`);
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  let toast = document.getElementById('cinemaToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cinemaToast';
    toast.className = 'cinema-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}

/* ==========================================================================
   Dynamic Copyright Year
   ========================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   Hero Video Fallback & Reduced Motion
   ========================================================================== */
function initHeroVideoFallback() {
  const heroVideo = document.getElementById('heroBgVideo');
  if (!heroVideo) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    heroVideo.pause();
    return;
  }

  // Handle browser autoplay policy gracefully
  const playPromise = heroVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      console.log('Hero video autoplay prevented by browser policy; showing poster frame.');
    });
  }
}
