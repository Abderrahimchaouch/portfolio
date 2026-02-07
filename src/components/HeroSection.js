export function HeroSection() {
  // Animate stats from 0 to their target values
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      function animateStat(el, target) {
        let current = 0;
        const increment = Math.ceil(target / 10000);
        const update = () => {
          current += increment;
          if (current >= target) {
            el.textContent = target + (target === 365 ? '' : '+');
          } else {
            el.textContent = current;
            requestAnimationFrame(update);
          }
        };
        update();
      }
      document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 20);
        animateStat(el, target);
      });

      // Create and animate Moroccan-inspired stars in background
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars-container';
        homeSection.appendChild(starsContainer);

        const stars = [];
        const moroccanColors = ['#22c55e', '#ef4444', '#3b82f6', '#ffffff']; // Green, Red, Blue, White

        // Create stars with grouped positions on left and right sides
        function createStar(index, isLeftSide) {
          const star = document.createElement('div');
          star.className = 'moroccan-star';
          star.innerHTML = '★';
          
          // Alternate colors
          const color = moroccanColors[index % moroccanColors.length];
          star.style.color = color;
          
          // Group stars on left or right side
          let initialX, initialY;
          if (isLeftSide) {
            // Left side cluster
            initialX = window.innerWidth * 0.1 + (Math.random() - 0.5) * 100;
          } else {
            // Right side cluster
            initialX = window.innerWidth * 0.9 + (Math.random() - 0.5) * 100;
          }
          initialY = window.innerHeight * 0.3 + (Math.random() - 0.5) * 200;
          
          // Store initial positions
          star.dataset.initialX = initialX;
          star.dataset.initialY = initialY;
          star.dataset.color = color;
          
          star.style.left = initialX + 'px';
          star.style.top = initialY + 'px';
          
          starsContainer.appendChild(star);
          stars.push({element: star, isSpread: false});
        }

        // Create 10 stars on left side, 10 on right side
        for (let i = 0; i < 10; i++) {
          createStar(i, true);
          createStar(i + 10, false);
        }

        // Mouse move event for star spreading effect
        document.addEventListener('mousemove', (e) => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
          
          stars.forEach(starObj => {
            const star = starObj.element;
            const initialX = parseFloat(star.dataset.initialX);
            const initialY = parseFloat(star.dataset.initialY);
            
            const dx = initialX - mouseX;
            const dy = initialY - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const interactionRadius = 250;
            
            if (distance < interactionRadius) {
              // Calculate spread direction
              const angle = Math.atan2(dy, dx);
              const spreadDistance = 150 * (1 - distance / interactionRadius);
              const spreadX = initialX + Math.cos(angle) * spreadDistance;
              const spreadY = initialY + Math.sin(angle) * spreadDistance;
              
              star.style.left = spreadX + 'px';
              star.style.top = spreadY + 'px';
              star.style.transform = 'scale(1.4)';
              starObj.isSpread = true;
            } else {
              // Smoothly return to initial position
              if (starObj.isSpread) {
                const currentX = parseFloat(star.style.left);
                const currentY = parseFloat(star.style.top);
                
                // Smooth interpolation back to initial position
                const newX = currentX + (initialX - currentX) * 0.12;
                const newY = currentY + (initialY - currentY) * 0.12;
                
                star.style.left = newX + 'px';
                star.style.top = newY + 'px';
                
                // Check if close enough to initial position
                if (Math.abs(newX - initialX) < 3 && Math.abs(newY - initialY) < 3) {
                  star.style.left = initialX + 'px';
                  star.style.top = initialY + 'px';
                  starObj.isSpread = false;
                }
              }
              star.style.transform = 'scale(1)';
            }
          });
        });
      }
    });
  }
  return `
  
  <section id="home" class="rockstar-section bg-black py-16 ">
    <div class="section-content max-w-5xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <!-- Left: Description -->
      <div class="md:w-1/2 w-full mb-10 md:mb-0">
        <p class="text-lg font-semibold mb-2 appear-on-scroll text-white">Hi, my name is</p>
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 appear-on-scroll text-gradient">ABDERRAHIM CHAOUCH</h1>
        <p class="text-xl mb-6 appear-on-scroll text-white">Software Engineer & Full-Stack Developer passionate about creating scalable solutions and innovative digital experiences.</p>
        <div class="flex gap-4 mt-4 appear-on-scroll justify-center md:justify-start">
          <a href="#contact" class="font-semibold px-6 py-2 rounded-lg shadow transition-colors text-white bg-gradient-to-r from-red-600 to-blue-600 border-0 hover:scale-105 focus:scale-105 ">Contact me</a>
          <a href="#about" class="ml-2 border font-semibold px-6 py-2 rounded-lg shadow transition-colors text-gradient border-blue-400 hover:bg-blue-400 hover:scale-105 hover:border-blue-400 focus:bg-blue-400 focus:text-black focus:border-blue-400">Check Portfolio</a>
        </div>
      </div>
      <!-- Right: Single Image -->
      <div class="md:w-1/2 w-full flex justify-center md:justify-end">
        <div class="relative w-64 h-80 flex items-center justify-center">
          <!-- Single main image -->
          <img
            src="images/abderrahimc.jpg"
            alt="Abderrahim"
            class="relative w-64 h-80 obgit ject-cover rounded-3xl shadow-2xl z-10"
          />
        </div>
      </div>
    </div>
    <!-- Stats Row -->
    <div class="max-w-3xl mx-auto mt-12 grid grid-cols-4 gap-6 text-center bg-black bg-opacity-40 rounded-xl py-6 px-4 appear-on-scroll">
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="6">0</p>
        <p class="text-sm text-white">Projects</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="25">0</p>
        <p class="text-sm text-white">Technologies Mastered</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="3">0</p>
        <p class="text-sm text-white">Years of Experience</p>
      </div>
      <div>
        <p class="text-3xl font-extrabold text-gradient stat-number" data-target="100">0</p>
        <p class="text-sm text-white">Passion Level</p>
      </div>
    </div>
    <div class="mt-12 flex justify-center appear-on-scroll">
      <a href="#about" class="inline-block animate-bounce">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="color:#2563eb;">
          <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>
  </section>
  
  <style>
    .stars-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .moroccan-star {
      position: fixed;
      font-size: 32px;
      text-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
      filter: drop-shadow(0 0 8px currentColor);
      animation: twinkle 3.5s infinite, float 7s ease-in-out infinite;
      z-index: 1;
      pointer-events: none;
      transition: all 0.12s ease-out;
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 1;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  </style>
  `;
}