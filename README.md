# Kiro Naser — Director of Photography (DOP) Cinematic Portfolio

A premium, cinematic, visually stunning portfolio website engineered for **Kiro Naser**, professional **Director of Photography (DOP)** with **4 Years of Experience** in visual storytelling, commercial cinematography, medical reels, culinary visuals, and narrative music clips.

Designed with an **Obsidian & Warm Film Brass Aesthetic**, featuring full-screen cinematic video hero with local streaming playback, an interactive and accessible **Cinema Lightbox**, responsive category filters across 21 verified productions, an editorial **Professional Experience Timeline**, and one-click contact channels for WhatsApp, Phone, and Email.

---

## 🌟 Key Highlights & Portfolio Features

1. **Cinematic Hero Opening Experience**:
   - High-definition video background (`assets/videos/hero_reel.mp4`) autoplaying with browser audio policy compliance, muted playback, graceful poster fallback, and reduced-motion support.
   - Dual-layer radial & vertical gradient overlay ensuring typography readability.
   - Prominent professional title: **DIRECTOR OF PHOTOGRAPHY**.
   - Cinematic statement: *"Crafting stories through light, movement, and emotion."*
   - Credibility line: *4 Years of Cinematic Storytelling — Collaborating with media organizations & creative teams.*

2. **Featured Flagship Productions**:
   - Curated spotlight featuring flagship productions across Architectural Real Estate (*Onyx Cairo Gate*), Culinary Commercials (*Nussa Gourmet*), Music Videos, and Clinical Precision (*Citrine*).
   - Asymmetric editorial layout with customized play interaction.

3. **Complete Filmography & Selected Work (21 Productions)**:
   - Dynamic category filter tabs:
     - **All Projects (21)**
     - **Commercials & Food (4)**
     - **Medical & Healthcare (11)**
     - **Real Estate & Architecture (3)**
     - **Music Videos & Clips (3)**
   - High-resolution local poster frame thumbnails downloaded directly from the verified production archive.
   - Support for 16:9 widescreen cinema and 9:16 social-first vertical reels.

4. **Cinema Lightbox Video Viewer**:
   - Distraction-free, fluid modal player with keyboard navigation (`ESC` to close, `Left`/`Right` arrow keys to cycle).
   - Instant local playback for offline reels and high-definition Google Drive streaming embed integration.
   - Direct link button to access the original master video on Google Drive.

5. **Professional Experience & Collaborations Section**:
   - Prominent **"4 YEARS OF CINEMATIC STORYTELLING"** visual centerpiece.
   - **Tungsten Media** (Current Professional Engagement) highlighted with live indicator dot and active commercial scope.
   - Verified collaborations with **SAT-7** (Christian media organization), **Alkarma TV Channel**, **NextGen** (Christian organization), and **Praise Center** (Christian organization).

6. **Visual Showcase**:
   - Curated editorial mosaic of still captures highlighting lighting setups, chiaroscuro contrast, macro culinary steam, and architectural symmetry.
   - Click-to-expand still inspection in full resolution.

7. **Direct Contact Hub**:
   - Prominent heading: **"LET'S CREATE SOMETHING CINEMATIC."**
   - Functional direct contact links:
     - **WhatsApp**: `https://wa.me/201200299191`
     - **Email**: `mailto:keronaser22@gmail.com`
     - **Phone**: `tel:+201200299191`
   - One-click copy-to-clipboard buttons with toast confirmation feedback.

8. **Technical Excellence & SEO**:
   - Zero-dependency, pure vanilla HTML5/CSS3/JavaScript ES6 architecture.
   - Instant local loading, lightweight footprint, and zero build step required.
   - Schema.org `Person` JSON-LD structured data for Google Search rich snippets.
   - Open Graph and Twitter Card metadata for rich social previews.
   - Custom SVG anamorphic camera lens aperture favicon.

---

## 📁 Repository Structure

```text
keo portofolio/
├── index.html                   # Semantic HTML5 single-page application
├── README.md                    # Portfolio documentation & deployment guide
├── server.js                    # Local streaming HTTP server (supports MP4 range requests)
├── css/
│   ├── style.css                # Design system tokens, typography & dark theme foundation
│   ├── components.css           # Modular UI components, hero, cards, lightbox & contact
│   └── responsive.css           # Responsive breakpoints (desktop, tablet, mobile down to 320px)
├── js/
│   ├── projects-data.js         # Centralized structured data catalog (21 verified projects)
│   ├── lightbox.js              # Cinema Lightbox modal controller & keyboard handler
│   └── main.js                  # Application bootstrapper, filters, scrollspy & clipboard
└── assets/
    ├── favicon.svg              # Cinematic aperture & lens flare SVG icon
    ├── videos/
    │   └── hero_reel.mp4        # High-definition local hero background video reel
    └── thumbnails/              # 21 high-resolution poster frame grabs
        ├── thumb_1ARFJHAqtL_ca0IdgERIyAy03YNmAIPng.jpg
        ├── thumb_1uW6iOwOd-56N9Y3KdojQgAXKrMmtn6XR.jpg
        ├── thumb_1_oTRo9ePqiD8n1JPtp0kASV4qrGaE19A.jpg
        └── ... (21 total local image frames)
```

---

## 🚀 Running Locally

The portfolio requires **no external build tools** or compilers. You can run it immediately with the included Node.js server or any static file server:

### Option 1: Included Node.js Streaming Server (Recommended)
This server includes native support for HTTP 206 Partial Content range requests for smooth video scrubbing:
```bash
node server.js
```
Open your browser and navigate to:
**`http://localhost:3000/`**

### Option 2: Python Simple HTTP Server
```bash
python -m http.server 3000
```

### Option 3: VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 Deploying to GitHub Pages, Netlify, or Vercel

Since the project uses vanilla web standards, it is 100% compatible with static web hosting:

### GitHub Pages (1-Click Zero Build)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial release: Kiro Naser DOP Cinematic Portfolio"
   ```
2. Push to your GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository settings, go to **Pages**, select the `main` branch, and click **Save**.

### Netlify / Vercel
- Drag and drop the `keo portofolio` folder directly into your Netlify dashboard, or link your GitHub repository.
- Publish directory: `.` (root).

---

## 🎥 Asset & Google Drive Management

- **Master Assets Source**:
  `https://drive.google.com/drive/folders/1LKm_n29ehfI-Eh8Znia3XDGhzn743SrI`
- **Thumbnails**: All 21 project poster frames are stored locally in `assets/thumbnails/` to ensure instantaneous page rendering without waiting for external API queries.
- **Hero Video**: Stored locally in `assets/videos/hero_reel.mp4`.
- **Streaming Playback**: Projects in the lightbox seamlessly stream in high resolution via Google Drive's secure CDN embed (`https://drive.google.com/file/d/${driveId}/preview`), keeping repository weight optimal.
