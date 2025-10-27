# SPA Navigation Template

A clean, modern single-page application template with smooth navigation and responsive design.

## Features

- 🚀 **Fast Navigation** - Instant page switching without reloads
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Beautiful glassmorphism design
- ⚡ **Lightweight** - No external dependencies
- 🔧 **Easy to Customize** - Simple to modify and extend
- 🎯 **SEO Friendly** - Proper page titles and structure

## Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your browser
3. **Customize** the content in `script.js`
4. **Modify** styles in `styles.css`
5. **Deploy** to your hosting platform

## Customization

### Adding New Pages

1. Add a new page object to the `pages` object in `script.js`:

```javascript
newPage: {
    title: 'New Page - MyApp',
    content: `
        <div class="page-container">
            <h1 class="page-title">New Page</h1>
            <div class="page-content">
                <p>Your content here</p>
            </div>
        </div>
    `
}
```

2. Add a navigation link in `index.html`:

```html
<li class="nav-item">
    <a href="#newPage" onclick="navigateToPage('newPage'); return false;" class="nav-link">New Page</a>
</li>
```

### Styling

- Modify `styles.css` to change colors, fonts, and layout
- The template uses CSS custom properties for easy theming
- All animations and transitions can be customized

### Content

- Edit the `content` property in each page object
- Use HTML and CSS within the template strings
- Add images, forms, or any other content you need

## File Structure
