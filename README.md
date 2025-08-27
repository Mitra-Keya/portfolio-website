# Portfolio Website — Keya Mitra

A clean, responsive portfolio site with light/dark mode, project cards (with GitHub + live links), and embedded YouTube demos. Built with HTML, CSS, and vanilla JS — ready for GitHub Pages.

## Quick Start

1. **Edit content** in `index.html`:
   - Replace all `your-username`, `your-live-demo-link.com`, and `YOUTUBE_ID_*` placeholders with your real links/IDs.
   - Update contact info if needed.
   - (Optional) Replace the Formspree action with your form endpoint.

2. **Preview locally**: just open `index.html` in a browser.

3. **Deploy on GitHub Pages**:
   - Create a new repo named `portfolio-website` (or any name).
   - Push this folder to the repo.
   - In **Settings → Pages**, set **Source** to `main` branch `/root` and save.
   - Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Embedding YouTube
Get the video ID from your YouTube URL and replace in:
```html
<iframe src="https://www.youtube.com/embed/YOUR_ID"></iframe>
```

## Contact Form (Formspree)
Create a Formspree project and replace:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```
with your real endpoint.

## License
MIT — see `LICENSE`.
