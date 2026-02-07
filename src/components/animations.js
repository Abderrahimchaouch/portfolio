export function setupAnimations() {
  return `
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all elements with appear-on-scroll class
  document.querySelectorAll('.appear-on-scroll').forEach(element => {
    observer.observe(element);
  });
  
  // Smooth scrolling and active section detection
  const sections = document.querySelectorAll('.rockstar-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Detect current section and update nav links
  const handleSectionVisibility = () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.id;
      }
    });
    
    // Update active nav link
    navLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1); // Remove the # from href
      if (href === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Add active class to clicked link
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Scroll effect for header and smooth header
  const headerName = document.getElementById('header-name');
  const header = document.querySelector('header');
  const colorLoopText = document.querySelector('.color-loop-text');
  const scrollThreshold = 150; // Adjust this value as needed
  const maxScrollForEffect = 1500; // Maximum scroll value for animation speed effect
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Header name visibility
    if (scrollPosition > scrollThreshold) {
      headerName.classList.add('opacity-100', 'translate-y-0');
      headerName.classList.remove('opacity-0', 'translate-y-2');
      header.classList.add('scrolled');
      
      // Adjust color loop animation speed based on scroll position
      if (colorLoopText) {
        // Calculate animation duration between 2s (fast) and 10s (slow) based on scroll position
        const scrollPercentage = Math.min(scrollPosition / maxScrollForEffect, 1);
        const animationDuration = 10 - (scrollPercentage * 8); // 10s at top, 2s at maxScrollForEffect
        colorLoopText.style.animationDuration = animationDuration + 's';
      }
    } else {
      headerName.classList.remove('opacity-100', 'translate-y-0');
      headerName.classList.add('opacity-0', 'translate-y-2');
      header.classList.remove('scrolled');
    }
    
    // Update active section in navigation
    handleSectionVisibility();
    
    // About section scroll animations - fallback for browsers that don't support scroll timeline
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const aboutRect = aboutSection.getBoundingClientRect();
      const aboutMainText = document.querySelector('.about-main-text');
      const aboutSecondaryText = document.querySelector('.about-secondary-text');
      const aboutLinks = document.querySelectorAll('.about-link');
      
      // Calculate position relative to the viewport
      const viewportHeight = window.innerHeight;
      const aboutPosition = aboutRect.top / viewportHeight;
      
      if (aboutPosition < 0.7 && aboutPosition > -0.3) {
        // Main text animation
        if (aboutMainText) {
          const mainTextOpacity = Math.min(1, Math.max(0, 1 - aboutPosition));
          const backgroundPos = 50 + (aboutPosition * -100) + '%'; 
          aboutMainText.style.opacity = mainTextOpacity;
          aboutMainText.style.backgroundPosition = '50% ' + backgroundPos;
        }
        
        // Secondary text and links animations
        if (aboutPosition < 0.3) {
          if (aboutSecondaryText) {
            aboutSecondaryText.style.opacity = '0.65';
          }
          
          aboutLinks.forEach(link => {
            link.style.opacity = '1';
          });
        } else {
          if (aboutSecondaryText) {
            aboutSecondaryText.style.opacity = '0';
          }
          
          aboutLinks.forEach(link => {
            link.style.opacity = '0';
          });
        }
      }
    }
  });
  
  // Skills Horizontal Slider Functionality
  const setupSkillsSlider = () => {
    const sliderTrack = document.querySelector('.skills-slider-track');
    const cards = document.querySelectorAll('.skill-card');
    const controls = document.querySelectorAll('.skills-control');
    const prevButton = document.querySelector('.skills-prev');
    const nextButton = document.querySelector('.skills-next');
    const progressBar = document.querySelector('.skills-progress .progress-bar');
    
    if (!sliderTrack || cards.length === 0) return;
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;
    const cardGap = 24; // This corresponds to space-x-6 (1.5rem = 24px)
    const totalCards = cards.length;
    const visibleCards = Math.min(Math.floor(sliderTrack.offsetWidth / (cardWidth + cardGap)), totalCards);
    const maxIndex = totalCards - visibleCards;
    
    // Function to scroll to a specific card
    const scrollToCard = (index) => {
      // Ensure index is within bounds
      if (index < 0) index = 0;
      if (index > maxIndex) index = maxIndex;
      
      currentIndex = index;
      
      // Update scroll position
      const scrollAmount = index * (cardWidth + cardGap);
      sliderTrack.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Update controls
      controls.forEach((control, i) => {
        if (i === currentIndex) {
          control.classList.add('bg-white');
          control.classList.remove('bg-gray-600');
        } else {
          control.classList.remove('bg-white');
          control.classList.add('bg-gray-600');
        }
      });
      
      // Update progress bar
      if (progressBar) {
        const progress = (index / Math.max(maxIndex, 1)) * 100;
        progressBar.style.width = \`\${progress}%\`;
      }
    };
    
    // Set up click events for controls
    controls.forEach((control, index) => {
      control.addEventListener('click', () => {
        scrollToCard(index);
      });
    });
    
    // Set up prev/next buttons
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        scrollToCard(currentIndex - 1);
      });
    }
    
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        scrollToCard(currentIndex + 1);
      });
    }
    
    // Sync control states when user manually scrolls
    sliderTrack.addEventListener('scroll', () => {
      const scrollPosition = sliderTrack.scrollLeft;
      const estimatedIndex = Math.round(scrollPosition / (cardWidth + cardGap));
      
      // Only update if the estimated index is different from current
      if (estimatedIndex !== currentIndex) {
        currentIndex = estimatedIndex;
        
        // Update controls
        controls.forEach((control, i) => {
          if (i === currentIndex) {
            control.classList.add('bg-white');
            control.classList.remove('bg-gray-600');
          } else {
            control.classList.remove('bg-white');
            control.classList.add('bg-gray-600');
          }
        });
        
        // Update progress bar
        if (progressBar) {
          const progress = (currentIndex / Math.max(maxIndex, 1)) * 100;
          progressBar.style.width = \`\${progress}%\`;
        }
      }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (document.querySelector('.skills-slider-container:hover')) {
        if (e.key === 'ArrowRight') {
          scrollToCard(currentIndex + 1);
        } else if (e.key === 'ArrowLeft') {
          scrollToCard(currentIndex - 1);
        }
      }
    });
    
    // Initialize auto-scroll
    let autoScrollInterval;
    
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        // Sequential scrolling - always move to next card, reset to 0 when reaching end
        const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        scrollToCard(nextIndex);
      }, 3000); // Scroll every 3 seconds
    };
    
    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };
    
    // Pause auto-scroll on hover or touch
    const sliderContainer = document.querySelector('.skills-slider-container');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoScroll);
      sliderContainer.addEventListener('touchstart', stopAutoScroll);
      sliderContainer.addEventListener('mouseleave', startAutoScroll);
      sliderContainer.addEventListener('touchend', () => {
        setTimeout(startAutoScroll, 2000);
      });
    }
    
    // Initialize first card and auto-scroll
    scrollToCard(0);
    startAutoScroll();
  };
  
  // Initialize card sliders after the DOM is loaded
  setTimeout(() => {
    setupSkillsSlider();
    
    // Check if browser supports scroll-timeline
    if (!CSS.supports('animation-timeline: scroll()')) {
      console.log('Browser does not support scroll-timeline, using polyfill');
      // The scroll event handler will handle the animations as a fallback
    }
    
    // Initial call to set active section
    handleSectionVisibility();
  }, 500);
  
  // Trigger the scroll event once to initialize the header state
  window.dispatchEvent(new Event('scroll'));
  `;
} 