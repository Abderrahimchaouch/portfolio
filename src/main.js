import './styles/global.css'
import './style.css'

// Import components
import { Header } from './components/Header.js';
import { HeroSection } from './components/HeroSection.js';
import { AboutSection } from './components/AboutSection.js';
import { EducationSection } from './components/EducationSection.js'; 
import { SkillsSection } from './components/SkillsSection.js';
import { ExperienceSection } from './components/ExperienceSection.js';
import { ProjectsSection } from './components/ProjectsSection.js';
import { ContactSection } from './components/ContactSection.js';
import { Footer } from './components/Footer.js';
import { setupAnimations } from './components/animations.js';

// Clear previous content
const appElement = document.querySelector('#app');
appElement.innerHTML = `
  ${Header()}
  <main>
    ${HeroSection()}
    ${AboutSection()}
    ${EducationSection()}
    ${SkillsSection()}
    ${ExperienceSection()}
    ${ProjectsSection()}
    ${ContactSection()}
  </main>
  ${Footer()}
`;

// Run animations setup after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Execute animation setup code
  eval(setupAnimations());

  // Initialize contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', window.handleSubmit);
  }
});
