# Adding Images to Your Portfolio

To add the images for your skills section (Streamlit.png and vs-code-logo.png), follow these steps:

1. Create a directory for your images:
```bash
mkdir -p my-tailwind-project/public/images
```

2. Add your image files to that directory:
- Place `Streamlit.png` in `my-tailwind-project/public/images/`
- Place `vs-code-logo.png` in `my-tailwind-project/public/images/`

3. Update the SkillsSection.js file to use the actual images:

```javascript
// Replace the placeholder divs with actual image tags:

// For Streamlit (on the left side):
<div class="absolute left-0 top-1/4 transform -translate-x-1/2 hidden md:block">
  <div class="w-24 h-24 bg-white bg-opacity-10 rounded-lg flex items-center justify-center appear-on-scroll">
    <img src="/images/Streamlit.png" alt="Streamlit" class="h-16 w-16 object-contain" />
  </div>
</div>

// For VS Code (on the right side):
<div class="absolute right-0 top-2/3 transform translate-x-1/2 hidden md:block">
  <div class="w-24 h-24 bg-white bg-opacity-10 rounded-lg flex items-center justify-center appear-on-scroll">
    <img src="/images/vs-code-logo.png" alt="VS Code" class="h-16 w-16 object-contain" />
  </div>
</div>
```

This will display your actual images positioned on the sides of the skills section as requested. 