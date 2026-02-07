export function ProjectsSection() {
  return `
  <section id="projects" class="rockstar-section bg-rockstar">
    <div class="section-content">
    <h2 class="text-2xl md:text-4xl font-bold mt-20 pt-12 bg-gradient-to-r from-red-600 via-blue-500 to-green-600 bg-clip-text text-transparent text-center">Projects</h2>
      
      <div class="grid md:grid-cols-2 gap-8 mt-8 mb-20"> 
        <!-- Atlas-Horticole -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-red-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Atlas-Horticole</h3>
              <a href="https://github.com/Abderrahimchaouch/Atlas-Horticole" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
              </a>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">Angular</span>
              <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">TypeScript</span>
              <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">Spring Boot</span>
              <span class="px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-sm">Docker</span>
            </div>
            <p class="text-white/80 text-base">Atlas Horticoles is a professional showcase platform built with Angular and Spring Boot. It features a public interface with advanced filters and a secure admin panel, all secured by JWT authentication. The application uses a microservices architecture, integrates Cloudinary for asset management, and is deployed via Docker for optimal scalability and performance.</p>
          </div>
        </div>

        <!-- BlueRev-Academic-Project -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-blue-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">BlueRev Academic Project</h3>
              <a href="https://github.com/Abderrahimchaouch/BlueRev-Academic-Project" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
              </a>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Java</span>
              <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">Machine Learning</span>
              <span class="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm">TensorFlow</span>
            </div>
            <p class="text-white/80 text-base">Designed and developed a Java-based tool for the automated analysis of marine meiofauna from microscopic images, enhancing the accuracy and speed of species identification. The solution implements advanced image processing models, extracts morphological features, and classifies organisms using machine learning techniques.</p>
          </div>
        </div>

        <!-- Robot-MultiSensors -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-green-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Robot-MultiSensors</h3>
              <a href="https://github.com/Abderrahimchaouch/Robot-MultiSensors" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
              </a>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">C</span>
              <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">IoT</span>
              <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">Sensor Integration</span>
              <span class="px-3 py-1 bg-green-900/50 text-green-200 rounded-full text-sm">Real-time Processing</span>
            </div>
            <p class="text-white/80 text-base">A sophisticated multi-sensor robot system built with C for IoT applications. Integrates various sensors for real-time data collection and processing, enabling autonomous navigation and intelligent decision-making in dynamic environments.</p>
          </div>
        </div>

        <!-- babylon-Museum-3D -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-purple-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">babylon-Museum-3D</h3>
              <div class="flex gap-4">
                <a href="https://github.com/Abderrahimchaouch/babylon-Museum-3D" target="_blank" class="text-white/80 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
                </a>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">JavaScript</span>
              <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">Babylon.js</span>
              <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">3D Graphics</span>
              <span class="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">WebGL</span>
            </div>
            <p class="text-white/80 text-base">An immersive 3D virtual museum experience built with JavaScript and Babylon.js. Features interactive exhibits, realistic lighting, and spatial audio for an engaging cultural exploration platform. Demonstrates advanced 3D graphics techniques and interactive web design.</p>
          </div>
        </div>

        <!-- Sudoku Solver -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-yellow-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">Sudoku Solver</h3>
              <a href="https://github.com/Abderrahimchaouch/Soduku" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
              </a>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">Angular</span>
              <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">API suduku</span>
              <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">Backtracking</span>
              <span class="px-3 py-1 bg-yellow-900/50 text-yellow-200 rounded-full text-sm">Problem Solving</span>
            </div>
            <p class="text-white/80 text-base">A highly optimized Sudoku solver implemented in Python using advanced algorithms including constraint propagation and backtracking. Demonstrates strong algorithmic thinking and optimization techniques for solving complex constraint satisfaction problems efficiently.</p>
          </div>
        </div>

        <!-- Web Services & APIs -->
        <div class="project-card appear-on-scroll group relative bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500">
          <div class="project-details relative z-20 p-6 opacity-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-white">REST APIs & Services</h3>
              <a href="https://github.com/Abderrahimchaouch/Atlas-Horticole" target="_blank" class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
              </a>
            </div>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-sm">REST API</span>
              <span class="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-sm">Docker</span>
              <span class="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-sm">PostgreSQL</span>
              <span class="px-3 py-1 bg-cyan-900/50 text-cyan-200 rounded-full text-sm">Microservices</span>
            </div>
            <p class="text-white/80 text-base">Robust backend services and APIs for enterprise applications. Features comprehensive REST endpoints, containerized deployment with Docker, and persistent data management with PostgreSQL. Implements microservices architecture for scalability and maintainability.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .project-card {
      min-height: 400px;
      position: relative;
    }
    
    .project-card .project-details {
      background: rgba(23, 23, 23, 0.95);
      backdrop-filter: blur(10px);
    }
    
    .project-card a {
      position: relative;
      z-index: 40;
    }
  </style>
  `;
}
