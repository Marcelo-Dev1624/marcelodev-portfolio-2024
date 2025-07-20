# CSS File Structure

This directory contains the organized CSS files for the portfolio website, separated by purpose and functionality.

## File Organization

### Base Styles (`/base/`)
- **`variables.css`** - CSS custom properties, color schemes, and design tokens
- **`reset.css`** - Global resets and base HTML element styles
- **`typography.css`** - Font sizes, weights, and text utilities
- **`utilities.css`** - Utility classes (hidden, glassmorphism, lines, etc.)

### Components (`/components/`)
- **`buttons.css`** - Button styles and variants
- **`navigation.css`** - Navbar and menu styles
- **`forms.css`** - Form inputs and contact form styles

### Layout (`/layout/`)
- **`footer.css`** - Footer styles and layout

### Pages (`/pages/`)
- **`home.css`** - Home page specific styles
- **`about.css`** - About page styles
- **`projects.css`** - Project cards and layouts
- **`contact.css`** - Contact page styles
- **`project1.css`** - Individual project page styles (existing)

### Animations (`/animations/`)
- **`loading.css`** - Loading screen animations
- **`keyframes.css`** - All @keyframes definitions

### Responsive (`/responsive/`)
- **`mobile.css`** - Mobile-specific styles (max-width: 767px)
- **`tablet.css`** - Tablet/iPad styles (768px - 1024px)

### Legacy Files
- **`bg.css`** - Background styles (existing)
- **`cubes.css`** - Cube animation styles (existing)
- **`style.css`** - Original monolithic file (to be deprecated)

## Usage

### For Development
Use the main entry point:
```html
<link rel="stylesheet" href="css/main.css">
```

### For Production
Consider bundling all files into a single minified CSS file for better performance.

## Benefits of This Structure

1. **Maintainability** - Each file has a single responsibility
2. **Scalability** - Easy to add new components or pages
3. **Team Collaboration** - Multiple developers can work on different files
4. **Debugging** - Easier to locate and fix specific styling issues
5. **Reusability** - Components can be easily reused across pages

## Migration Notes

- The original `style.css` file has been separated into logical modules
- CSS custom properties are now centralized in `variables.css`
- Responsive styles are separated by device type
- All imports are handled through `main.css`

## Adding New Styles

1. **New Component**: Add to appropriate file in `/components/`
2. **New Page**: Create new file in `/pages/`
3. **New Animation**: Add to `/animations/keyframes.css`
4. **New Utility**: Add to `/base/utilities.css`
5. **New Variable**: Add to `/base/variables.css`

Remember to import any new files in `main.css` if they're not automatically included. 