/**
 * Cinema Lightbox Modal Controller
 * Fluid, accessible, distraction-free video and still viewer
 */

class CinemaLightbox {
  constructor() {
    this.modal = null;
    this.currentProjectIndex = -1;
    this.projects = [];
    this.activeVideoElement = null;
    this.init();
  }

  init() {
    this.createModalDOM();
    this.bindEvents();
  }

  createModalDOM() {
    const modalHTML = `
      <div id="cinemaLightbox" class="cinema-lightbox" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Cinematography Project Viewer">
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-wrapper">
          <header class="lightbox-header">
            <div class="lightbox-meta">
              <span class="lightbox-badge" id="lightboxCategory">Category</span>
              <h3 class="lightbox-title" id="lightboxTitle">Project Title</h3>
              <p class="lightbox-client" id="lightboxClient">Collaboration</p>
            </div>
            <div class="lightbox-actions">
              <a href="#" id="lightboxDriveLink" target="_blank" rel="noopener noreferrer" class="lightbox-btn-icon" title="Open Master Video in Google Drive" aria-label="Open Master Video in Google Drive">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Master Stream</span>
              </a>
              <button type="button" class="lightbox-close-btn" id="lightboxClose" aria-label="Close Cinema Viewer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </header>

          <div class="lightbox-viewport" id="lightboxViewport">
            <div class="lightbox-loader" id="lightboxLoader">
              <div class="loader-spinner"></div>
              <span>Loading Stream...</span>
            </div>
            <div class="lightbox-media-container" id="lightboxMediaContainer">
              <!-- Dynamic Video / Frame Player -->
            </div>
          </div>

          <footer class="lightbox-footer">
            <div class="lightbox-nav">
              <button type="button" class="lightbox-nav-btn prev" id="lightboxPrev" aria-label="Previous Project">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                <span>Previous</span>
              </button>
              <span class="lightbox-counter" id="lightboxCounter">01 / 21</span>
              <button type="button" class="lightbox-nav-btn next" id="lightboxNext" aria-label="Next Project">
                <span>Next</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
            <div class="lightbox-tags" id="lightboxTags"></div>
          </footer>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('cinemaLightbox');
  }

  bindEvents() {
    const closeBtn = document.getElementById('lightboxClose');
    const backdrop = this.modal.querySelector('.lightbox-backdrop');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    closeBtn.addEventListener('click', () => this.close());
    backdrop.addEventListener('click', () => this.close());

    prevBtn.addEventListener('click', () => this.navigate(-1));
    nextBtn.addEventListener('click', () => this.navigate(1));

    document.addEventListener('keydown', (e) => {
      if (!this.isOpen()) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.navigate(-1);
      if (e.key === 'ArrowRight') this.navigate(1);
    });
  }

  setProjectsList(projects) {
    this.projects = projects;
  }

  openById(projectId) {
    const index = this.projects.findIndex(p => p.id === projectId);
    if (index !== -1) {
      this.openIndex(index);
    }
  }

  openIndex(index) {
    if (index < 0 || index >= this.projects.length) return;
    this.currentProjectIndex = index;
    const project = this.projects[index];

    // Populate metadata
    document.getElementById('lightboxTitle').textContent = project.title;
    document.getElementById('lightboxCategory').textContent = project.categoryLabel || project.category;
    document.getElementById('lightboxClient').textContent = project.client ? `Client / Collaboration: ${project.client}` : '';
    document.getElementById('lightboxCounter').textContent = `${String(index + 1).padStart(2, '0')} / ${String(this.projects.length).padStart(2, '0')}`;

    // Master stream link
    const driveLink = document.getElementById('lightboxDriveLink');
    if (project.driveId) {
      driveLink.href = `https://drive.google.com/file/d/${project.driveId}/view?usp=sharing`;
      driveLink.style.display = 'inline-flex';
    } else {
      driveLink.style.display = 'none';
    }

    // Tags
    const tagsContainer = document.getElementById('lightboxTags');
    tagsContainer.innerHTML = '';
    if (project.tags && project.tags.length) {
      project.tags.forEach(t => {
        const span = document.createElement('span');
        span.className = 'lightbox-tag';
        span.textContent = t;
        tagsContainer.appendChild(span);
      });
    }

    // Render Media
    const mediaContainer = document.getElementById('lightboxMediaContainer');
    const loader = document.getElementById('lightboxLoader');
    loader.classList.remove('hidden');
    mediaContainer.innerHTML = '';

    // Check aspect ratio class
    const isVertical = project.aspectRatio === '9:16';
    mediaContainer.className = `lightbox-media-container ${isVertical ? 'ratio-vertical' : 'ratio-widescreen'}`;

    if (project.localVideo) {
      // Local HTML5 video
      const video = document.createElement('video');
      video.src = project.localVideo;
      video.poster = project.thumbnail || '';
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.className = 'lightbox-video-player';
      
      video.addEventListener('loadeddata', () => {
        loader.classList.add('hidden');
      });
      video.addEventListener('error', () => {
        // Fallback to Drive embed if local video fails
        this.renderDriveEmbed(project, mediaContainer, loader);
      });

      mediaContainer.appendChild(video);
      this.activeVideoElement = video;
    } else if (project.driveId) {
      this.renderDriveEmbed(project, mediaContainer, loader);
    } else if (project.thumbnail) {
      // Fallback still image
      const img = document.createElement('img');
      img.src = project.thumbnail;
      img.alt = project.title;
      img.className = 'lightbox-image-fallback';
      img.onload = () => loader.classList.add('hidden');
      mediaContainer.appendChild(img);
    }

    // Show modal
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  renderDriveEmbed(project, container, loader) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://drive.google.com/file/d/${project.driveId}/preview`;
    iframe.allow = 'autoplay; fullscreen; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.className = 'lightbox-iframe-player';
    iframe.title = project.title;
    
    iframe.onload = () => {
      loader.classList.add('hidden');
    };

    container.appendChild(iframe);
  }

  openStill(imageSrc, caption) {
    document.getElementById('lightboxTitle').textContent = caption || 'Cinematography Still';
    document.getElementById('lightboxCategory').textContent = 'Visual Frame';
    document.getElementById('lightboxClient').textContent = 'Production Still Capture';
    document.getElementById('lightboxDriveLink').style.display = 'none';
    document.getElementById('lightboxCounter').textContent = 'STILL FRAME';
    document.getElementById('lightboxTags').innerHTML = '<span class="lightbox-tag">35mm Framing</span><span class="lightbox-tag">Color Palette</span>';

    const mediaContainer = document.getElementById('lightboxMediaContainer');
    const loader = document.getElementById('lightboxLoader');
    loader.classList.remove('hidden');
    mediaContainer.className = 'lightbox-media-container ratio-widescreen';
    mediaContainer.innerHTML = '';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = caption || 'Cinematography Still';
    img.className = 'lightbox-image-fallback';
    img.onload = () => loader.classList.add('hidden');
    mediaContainer.appendChild(img);

    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  navigate(direction) {
    let newIndex = this.currentProjectIndex + direction;
    if (newIndex < 0) newIndex = this.projects.length - 1;
    if (newIndex >= this.projects.length) newIndex = 0;
    this.openIndex(newIndex);
  }

  close() {
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    const mediaContainer = document.getElementById('lightboxMediaContainer');
    mediaContainer.innerHTML = '';
    this.activeVideoElement = null;
  }

  isOpen() {
    return this.modal.classList.contains('active');
  }
}

window.CinemaLightbox = CinemaLightbox;
