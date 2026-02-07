import emailjs from '@emailjs/browser';

export function ContactSection() {
  // Initialize EmailJS with environment variable
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  // Create Moroccan-inspired star animation
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars-container';
        contactSection.appendChild(starsContainer);

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
          const contactTop = contactSection.getBoundingClientRect().top + window.scrollY;
          const contactHeight = contactSection.getBoundingClientRect().height;
          initialY = contactTop + contactHeight * 0.3 + (Math.random() - 0.5) * 200;
          
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

  // Make handleSubmit available globally
  window.handleSubmit = function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Show loading state with spinner
    submitButton.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `;
    submitButton.disabled = true;
    submitButton.classList.add('opacity-75');

    // Get form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    // Send email using EmailJS with environment variables
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData
    )
    .then(() => {
      // Show success message with checkmark
      submitButton.innerHTML = `
        <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Message Sent!
      `;
      submitButton.classList.remove('from-orange-500', 'to-yellow-400');
      submitButton.classList.add('bg-green-500');
      form.reset();
      
      // Show success toast
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-y-0 opacity-100';
      toast.innerHTML = 'Your message has been sent successfully!';
      document.body.appendChild(toast);
      
      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
      }, 3000);
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitButton.innerHTML = originalButtonText;
        submitButton.classList.remove('bg-green-500');
        submitButton.classList.add('from-orange-500', 'to-yellow-400');
        submitButton.disabled = false;
        submitButton.classList.remove('opacity-75');
      }, 3000);
    })
    .catch((error) => {
      // Show error message with X icon
      submitButton.innerHTML = `
        <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        Error! Try Again
      `;
      submitButton.classList.remove('from-orange-500', 'to-yellow-400');
      submitButton.classList.add('bg-red-500');
      
      // Show error toast
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-y-0 opacity-100';
      toast.innerHTML = 'Failed to send message. Please try again.';
      document.body.appendChild(toast);
      
      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
      }, 3000);
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitButton.innerHTML = originalButtonText;
        submitButton.classList.remove('bg-red-500');
        submitButton.classList.add('from-orange-500', 'to-yellow-400');
        submitButton.disabled = false;
        submitButton.classList.remove('opacity-75');
      }, 3000);
      
      console.error('Error sending email:', error);
    });
  };

  return `
  <section id="contact" class="rockstar-section bg-rockstar ">
    <div class="section-content max-w-4xl mx-auto">
      <h2 class="text-4xl font-extrabold text-white mb-2 text-left mt-24">Contact <span class="text-gradient">me.</span></h2>
      <p class="text-lg md:text-xl text-white/80 mb-8 text-left font-mono">I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.</p>
      <form id="contactForm" class="bg-transparent border border-neutral-800 rounded-xl p-8 space-y-6" autocomplete="off">
        <div class="md:flex md:space-x-6 space-y-6 md:space-y-0">
          <div class="flex-1">
            <label for="name" class="block font-bold text-white mb-2 font-mono">Name<span class="text-red-500">*</span></label>
            <input id="name" name="name" type="text" placeholder="Your Name" class="w-full px-5 py-3 rounded-lg bg-transparent border border-neutral-700 text-white font-mono focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-neutral-500" required />
          </div>
          <div class="flex-1">
            <label for="email" class="block font-bold text-white mb-2 font-mono">Email<span class="text-red-500">*</span></label>
            <input id="email" name="email" type="email" placeholder="john@doe.com" class="w-full px-5 py-3 rounded-lg bg-transparent border border-neutral-700 text-white font-mono focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-neutral-500" required />
          </div>
        </div>
        <div>
          <label for="message" class="block font-bold text-white mb-2 font-mono">Message<span class="text-red-500">*</span></label>
          <textarea id="message" name="message" rows="5" placeholder="Hello there, I would like to ask you about..." class="w-full px-5 py-3 rounded-lg bg-transparent border border-neutral-700 text-white font-mono focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-neutral-500" required></textarea>
        </div>
        <button type="submit" class="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-lg shadow hover:scale-105 transition-transform tracking-wide font-mono flex items-center justify-center">Send Message</button>
      </form>
    </div>
    
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
  </section>
  `;
}