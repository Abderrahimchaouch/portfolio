export function EducationSection() {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      // LetterGlitch Effect - Converted from React
      function initLetterGlitch() {
        const educationSection = document.getElementById('education');
        if (!educationSection) return;

        // Configuration
        const config = {
          glitchColors: ['#dc2626', '#2563eb', '#16a34a'], // Red, blue, green colors
          glitchSpeed: 80,
          centerVignette: false,
          outerVignette: true,
          smooth: true,
          fontSize: 16,
          charWidth: 10,
          charHeight: 20
        };

        const lettersAndSymbols = [
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
          '!', '@', '#', '$', '&', '*', '(', ')', '-', '_', '+', '=', '/',
          '[', ']', '{', '}', ';', ':', '<', '>', ',', '0', '1', '2', '3',
          '4', '5', '6', '7', '8', '9'
        ];

        // Create canvas container
        const canvasContainer = document.createElement('div');
        canvasContainer.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000000;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        `;

        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
          display: block;
          width: 100%;
          height: 100%;
        `;

        // Create vignette overlay
        const vignetteOverlay = document.createElement('div');
        vignetteOverlay.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.9) 100%);
        `;

        canvasContainer.appendChild(canvas);
        if (config.outerVignette) {
          canvasContainer.appendChild(vignetteOverlay);
        }

        // Make education section relative and add canvas
        educationSection.style.position = 'relative';
        educationSection.insertBefore(canvasContainer, educationSection.firstChild);

        const ctx = canvas.getContext('2d');
        let letters = [];
        let grid = { columns: 0, rows: 0 };
        let animationId;
        let lastGlitchTime = Date.now();

        // Helper functions
        function getRandomChar() {
          return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
        }

        function getRandomColor() {
          return config.glitchColors[Math.floor(Math.random() * config.glitchColors.length)];
        }

        function hexToRgb(hex) {
          const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
          hex = hex.replace(shorthandRegex, (m, r, g, b) => {
            return r + r + g + g + b + b;
          });

          const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
        }

        function interpolateColor(start, end, factor) {
          const result = {
            r: Math.round(start.r + (end.r - start.r) * factor),
            g: Math.round(start.g + (end.g - start.g) * factor),
            b: Math.round(start.b + (end.b - start.b) * factor),
          };
          return `rgb(${result.r}, ${result.g}, ${result.b})`;
        }

        function calculateGrid(width, height) {
          const columns = Math.ceil(width / config.charWidth);
          const rows = Math.ceil(height / config.charHeight);
          return { columns, rows };
        }

        function initializeLetters(columns, rows) {
          grid = { columns, rows };
          const totalLetters = columns * rows;
          letters = Array.from({ length: totalLetters }, () => ({
            char: getRandomChar(),
            color: getRandomColor(),
            targetColor: getRandomColor(),
            colorProgress: 1,
          }));
        }

        function resizeCanvas() {
          const rect = educationSection.getBoundingClientRect();
          const dpr = window.devicePixelRatio || 1;

          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;

          canvas.style.width = `${rect.width}px`;
          canvas.style.height = `${rect.height}px`;

          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

          const { columns, rows } = calculateGrid(rect.width, rect.height);
          initializeLetters(columns, rows);

          drawLetters();
        }

        function drawLetters() {
          if (!ctx || letters.length === 0) return;
          const rect = educationSection.getBoundingClientRect();
          ctx.clearRect(0, 0, rect.width, rect.height);
          ctx.font = `${config.fontSize}px monospace`;
          ctx.textBaseline = 'top';

          letters.forEach((letter, index) => {
            const x = (index % grid.columns) * config.charWidth;
            const y = Math.floor(index / grid.columns) * config.charHeight;
            ctx.fillStyle = letter.color;
            ctx.fillText(letter.char, x, y);
          });
        }

        function updateLetters() {
          if (!letters || letters.length === 0) return;

          const updateCount = Math.max(1, Math.floor(letters.length * 0.05));

          for (let i = 0; i < updateCount; i++) {
            const index = Math.floor(Math.random() * letters.length);
            if (!letters[index]) continue;

            letters[index].char = getRandomChar();
            letters[index].targetColor = getRandomColor();

            if (!config.smooth) {
              letters[index].color = letters[index].targetColor;
              letters[index].colorProgress = 1;
            } else {
              letters[index].colorProgress = 0;
            }
          }
        }

        function handleSmoothTransitions() {
          let needsRedraw = false;
          letters.forEach((letter) => {
            if (letter.colorProgress < 1) {
              letter.colorProgress += 0.05;
              if (letter.colorProgress > 1) letter.colorProgress = 1;

              const startRgb = hexToRgb(letter.color);
              const endRgb = hexToRgb(letter.targetColor);
              if (startRgb && endRgb) {
                letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
                needsRedraw = true;
              }
            }
          });

          if (needsRedraw) {
            drawLetters();
          }
        }

        function animate() {
          const now = Date.now();
          if (now - lastGlitchTime >= config.glitchSpeed) {
            updateLetters();
            drawLetters();
            lastGlitchTime = now;
          }

          if (config.smooth) {
            handleSmoothTransitions();
          }

          animationId = requestAnimationFrame(animate);
        }

        // Initialize
        resizeCanvas();
        animate();

        // Handle resize
        let resizeTimeout;
        function handleResize() {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            cancelAnimationFrame(animationId);
            resizeCanvas();
            animate();
          }, 100);
        }

        window.addEventListener('resize', handleResize);

        // Cleanup function (called when page unloads)
        window.addEventListener('beforeunload', () => {
          cancelAnimationFrame(animationId);
          window.removeEventListener('resize', handleResize);
        });
      }

      // Initialize the letter glitch effect
      initLetterGlitch();
    });
  }

  return `
  <section id="education" class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#090909] to-[#1a1a1a] py-16 overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 relative z-10">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-center">Education</h2>
      <div class="space-y-10">
        <!-- ENIB Brest -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll relative z-20">
          <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-black/30 rounded-xl">
            <img src="https://wiki.lesfabriquesduponant.net/images/4/48/Logo-enib.png" alt="ENIB Brest Logo" class="object-contain h-16" />
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold text-white">
                <a href="https://www.enib.fr/" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-yellow-400 transition-colors">École nationale d'ingénieurs de Brest</a>
              </h3>
              <span class="text-yellow-400 text-md mt-2 md:mt-0 font-semibold">Sept. 2022 - Sept. 2025</span>
            </div>
            <p class="text-lg italic text-gray-200 mb-1">Software Engineer's Degree | Brest, FR</p>
          </div>
        </div>
        <!-- IAE UBO Brest -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll relative z-20">
          <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-black/30 rounded-xl">
            <img src="/images/iae.png" alt="IAE Brest Logo" class="object-contain h-20" />
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold text-white">
                <a href="https://www.univ-brest.fr/iae/fr" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-yellow-400 transition-colors">Institut d'Administration des Entreprises</a>
              </h3>
              <span class="text-yellow-400 text-md mt-2 md:mt-0 font-semibold">Sept. 2023 - Sept. 2025</span>
            </div>
            <p class="text-lg italic text-gray-200 mb-1">Master in Management and Business Administration| Brest, FR</p>
          </div>
        </div>
        <!-- ESTM Meknes -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll relative z-20">
          <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-black/30 rounded-xl">
            <img src="/images/estm.png" alt="ESTM Meknes Logo" class="object-contain h-16" />
          </div>
          <div class="flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold text-white">
                <a href="https://www.estm.ac.ma" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-yellow-400 transition-colors">École Supérieure de Technologie de Meknès</a>
              </h3>
              <span class="text-yellow-400 text-md mt-2 ml-4 md:mt-0 font-semibold">Sept. 2020 - July 2023</span>
            </div>
            <p class="text-lg italic text-gray-200 mb-1">DUT Degree in Computer Engineering | Meknes, MA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}