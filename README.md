# Personal Website - Murat Can Erk

A modern, responsive personal website showcasing your background as an automotive engineer, AI developer, and educator.

## Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Dark/Light Theme**: Toggle between themes with persistent preference storage
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, parallax scrolling, and interactive elements
- **SEO-Friendly**: Semantic HTML structure
- **Fast Loading**: Pure HTML/CSS/JavaScript with no dependencies

## How to Use

1. **Open the site**: Simply double-click `index.html` to open it in your browser
2. **View online**: Upload the files to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## File Structure

```
cv-site/
├── index.html          # Main HTML structure
├── styles.css          # All styling and themes
├── script.js           # Interactive features and animations
├── MCE-CV.pdf         # Your CV (for reference)
└── README.md          # This file
```

## Customization Guide

### Adding Your Profile Photo

1. Save your profile photo in this folder (e.g., `profile.jpg`)
2. Open `index.html` and find the hero section
3. Add this code after the `<div class="hero-content">` line:
```html
<div class="profile-image">
    <img src="profile.jpg" alt="Murat Can Erk">
</div>
```
4. Add this CSS to `styles.css`:
```css
.profile-image {
    width: 200px;
    height: 200px;
    margin: 0 auto 2rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--accent-primary);
    box-shadow: var(--shadow-lg);
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### Updating Content

- **Personal Info**: Edit the hero section in `index.html`
- **About Section**: Modify the about text to reflect your latest interests
- **Skills**: Add or remove skill tags in the skills section
- **Experience**: Add new positions to the timeline
- **Projects**: Update project cards with your latest work
- **Contact**: Update email, phone, and LinkedIn links

### Color Customization

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #2563eb;    /* Main accent color */
    --accent-secondary: #3b82f6;   /* Secondary accent */
    --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adding New Sections

1. Add HTML section in `index.html`:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

2. Add styling in `styles.css`
3. Add navigation link in the navbar

## Deploying Online

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop this folder
3. Your site is live instantly!

### Custom Domain
After deploying, you can connect a custom domain in your hosting provider's settings.

## Browser Support

- Chrome/Edge: ✓
- Firefox: ✓
- Safari: ✓
- Opera: ✓

## Performance

- Lightweight: < 50KB total
- No external dependencies
- Fast load times
- Optimized animations

## Tips

- **Update regularly**: Keep your experience and projects current
- **Add real projects**: Replace placeholder projects with actual work
- **Include links**: Add GitHub, portfolio, or project links
- **Optimize images**: Compress photos before adding them
- **Test responsiveness**: Check on different devices

## Technical Stack

- Pure HTML5
- CSS3 with CSS Variables
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## License

Feel free to modify and use this template for your personal website.

---

Built with curiosity and code by Murat Can Erk
