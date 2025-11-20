# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- 🎨 Modern and clean design with gradient effects
- 📱 Fully responsive for all devices
- 🎭 Smooth animations and transitions
- 🚀 Fast and lightweight
- 💼 Sections: Home, About, Skills, Projects, Contact
- 📧 Contact form
- 🔗 Social media links

## Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── images/             # Images folder
│   ├── profile.jpg     # Your profile photo
│   ├── project1.jpg    # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   └── project6.jpg
└── resume.pdf          # Your resume (optional)
```

## Setup Instructions

1. **Add Your Information:**
   - Open `index.html` and replace placeholder text with your actual information:
     - Your name
     - Your title/role
     - About section details
     - Project information
     - Contact details
     - Social media links

2. **Add Images:**
   - Add your profile photo as `images/profile.jpg`
   - Add project screenshots as `images/project1.jpg`, `project2.jpg`, etc.
   - Recommended image sizes:
     - Profile: 400x400px (square)
     - Projects: 800x600px (landscape)

3. **Customize Colors:**
   - Edit CSS variables in `styles.css` (lines 6-15) to match your brand:
     ```css
     --primary-color: #6366f1;
     --secondary-color: #8b5cf6;
     ```

4. **Add Your Resume:**
   - Place your resume PDF in the root folder as `resume.pdf`
   - Or update the link in the About section

## How to Run

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Use Live Server (Recommended)
1. Install Live Server extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Python Server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`

## Customization Guide

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Adding More Projects
Copy a project card in `index.html` and modify the content:
```html
<div class="project-card">
    <!-- Your project details -->
</div>
```

### Modifying Skills
Edit the skill tags in the Skills section of `index.html`:
```html
<span class="skill-tag">Your Skill</span>
```

### Contact Form Backend
The contact form currently shows an alert. To make it functional:
1. Set up a backend service (e.g., FormSpree, EmailJS)
2. Update the form handler in `script.js`

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Font Awesome Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch and save
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your folder to Netlify
2. Or connect your GitHub repository
3. Deploy automatically

### Vercel
1. Import your GitHub repository
2. Deploy with one click

## Tips for Success

1. **Use High-Quality Images:** Professional photos make a big difference
2. **Keep It Updated:** Regularly add new projects
3. **Test Responsiveness:** Check on multiple devices
4. **Optimize Images:** Compress images for faster loading
5. **Add Analytics:** Consider adding Google Analytics
6. **SEO:** Update meta tags for better search visibility

## Optional Enhancements

- Add a blog section
- Integrate a CMS (Content Management System)
- Add dark/light theme toggle
- Include testimonials section
- Add animations library (AOS, GSAP)
- Implement form validation
- Add loading animations

## License

Feel free to use this template for your personal portfolio!

## Support

If you need help customizing your portfolio, feel free to reach out or check the code comments for guidance.

---

Made with ❤️ for developers building their online presence
