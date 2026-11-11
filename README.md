# Academic Personal Website Template 🎓

A minimalist, responsive, and high-performance academic personal website inspired by top computer science PhD students and professors from **Stanford University**, **MIT CSAIL**, and **UC Berkeley BAIR** (including Jon Barron and Andrej Karpathy's clean web style).

---

## ✨ Features

- **Iconic Academic Layout**: Two-column profile header with portrait, social/academic links (Google Scholar, arXiv, GitHub, X/Twitter, LinkedIn, CV download), and research summary tags.
- **Dynamic News Timeline**: Collapsible chronological updates with badges (`[Paper]`, `[Award]`, `[Talk]`, `[Service]`).
- **Publication Showcase**:
  - Filter by category (`All`, `Selected`, `LLMs & Agents`, `Vision`, `Robotics`).
  - Teaser thumbnails / architecture diagrams.
  - Author highlighting with your name in bold/underlined.
  - Venue badges (`Oral (Top 1.2%)`, `Spotlight`, `Best Paper Finalist`).
  - Quick action links (`[Paper]`, `[Project Page]`, `[Code]`, `[Video]`).
  - Interactive **Abstract drawer** and **BibTeX accordion with 1-click clipboard copy + toast notification**.
- **Open-Source Software & Projects**: GitHub stars, project tags, and repo links.
- **Teaching, Mentorship & Academic Service**: Two-column grid with TA roles, reviewer duties (NeurIPS, ICLR, ICML, CVPR), and invited talks.
- **Light & Dark Mode**: Seamless toggle button with automatic system preference detection and `localStorage` persistence.
- **Zero-Dependency & Fast**: Pure semantic HTML5, modern CSS3 (CSS variables), and vanilla JavaScript. No node build step, Webpack, or framework bloat required!

---

## 🚀 Quick Start / Local Preview

You can open and view the website right away:

### Option 1: Double-click
Simply double-click `index.html` in your file explorer to open it in your browser.

### Option 2: Using Python HTTP server
In your terminal, navigate to the `personal-website` folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🛠️ How to Customize in 5 Minutes

1. **Your Name & Profile Photo**:
   - Open `index.html`.
   - Search for `Alex Chen` and replace it with your full name.
   - Replace `assets/avatar.svg` with your own photo (e.g. `assets/avatar.jpg` or `assets/profile.png`).
2. **Affiliation & Bio**:
   - Edit the `<div class="hero-affiliation">` and `<div class="hero-bio">` sections with your university/lab, advisor, and research vision.
3. **Scholar / Social Links**:
   - Update the href links under `<div class="profile-links">` with your Google Scholar, GitHub, LinkedIn, and CV file.
4. **News & Updates**:
   - Modify the items under `<ul class="news-list">` with your recent news, papers, and achievements.
5. **Publications**:
   - Under `<div class="pub-list">`, customize each `<article class="pub-card">`.
   - Update the `data-category` attribute to match the filters (`selected`, `llm`, `vision`, `robotics`).
   - Swap the SVG teaser images in `assets/` with your own paper diagrams or figures.
   - Update the BibTeX snippet in the `<pre class="bibtex-code">` tags.

---

## 🌐 Deploy to GitHub Pages (Free, 2 Minutes)

1. Create a new GitHub repository named `yourusername.github.io` (or any repo name).
2. Push the files in this directory to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial academic personal website"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** > **Pages** > Select `Branch: main` and `/ (root)` > Save.
4. Your website will be live at `https://yourusername.github.io`!
