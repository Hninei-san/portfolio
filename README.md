# Robotics AI Portfolio

A clean, dark-themed portfolio site for a Robotics & AI Engineer.

## Folder Structure

```
robotics_portfolio/
├── index.html          ← Main entry point (open this in a browser)
├── README.md           ← This file
└── assets/
    └── css/
        └── style.css   ← All styles (variables, layout, components, animations)
```

## How to Use

1. Open `index.html` in any modern browser — no build step needed.
2. To customize, edit `index.html` directly for content changes.
3. For visual changes (colors, fonts, spacing), edit `assets/css/style.css`.

## Customization Checklist

- [ ] Replace `YourName` in the nav logo and footer
- [ ] Update `your.email@domain.com` in the contact section
- [ ] Add real URLs to the GITHUB, LINKEDIN, RESUME.PDF, GOOGLE SCHOLAR buttons
- [ ] Update the stats bar numbers (projects, years, languages, papers)
- [ ] Add your actual project links to each card (replace the `↗` arrows)
- [ ] Update location if needed (currently: Bangkok, TH)

## CSS Variables (easy theming)

All colors are defined at the top of `style.css` under `:root`:

```css
--green:  #00ff88   /* Primary accent */
--cyan:   #00e5ff   /* Robotics tag */
--amber:  #ffb800   /* AI/ML tag */
--red:    #ff4455   /* CV tag */
--bg:     #080c10   /* Page background */
```

## Fonts

Loaded via Google Fonts CDN (requires internet):
- **Syne** — headings & logo
- **JetBrains Mono** — body text & terminal
