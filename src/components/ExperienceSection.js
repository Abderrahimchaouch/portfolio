export function ExperienceSection() {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      // AMADEUS carousel
      var track = document.getElementById('experience-carousel-track');
      var descs = document.querySelectorAll('.experience-amadeus-desc');
      var amadeusInterval;
      var amadeusPaused = false;
      if (track && descs.length) {
        var images = track.children;
        var current = 0;
        var imageWidth = track.offsetWidth;
        
        // Set fixed height for all carousel containers
        var carouselContainer = track.parentElement;
        if (carouselContainer) {
          carouselContainer.style.minHeight = '300px';
        }
        
        function updateDesc(idx) {
          descs.forEach(function (li, i) {
            if (i === idx) {
              li.classList.remove('hidden');
            } else {
              li.classList.add('hidden');
            }
          });
          // Logo highlight logic
          var logo0 = document.getElementById('exp-logo-0');
          var logo1 = document.getElementById('exp-logo-1');
          var logo2 = document.getElementById('exp-logo-2');
          var logo3 = document.getElementById('exp-logo-3');
          var logo4 = document.getElementById('exp-logo-4');
          if (logo0 && logo1 && logo2 && logo3 && logo4) {
            // Reset all
            [logo0, logo1, logo2, logo3, logo4].forEach(function(el) {
              el.classList.remove('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','text-white','font-bold','scale-105');
              el.classList.add('border-neutral-700','bg-neutral-900/70','text-white');
            });
            if(idx === 0) {
              logo0.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo1.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            } else if(idx === 1) {
              logo0.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo1.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo2.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            } else if(idx === 2) {
              logo3.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo4.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            } 
          }
        }
        
        function scrollCarousel() {
          if (amadeusPaused) return;
          imageWidth = track.offsetWidth;
          current = (current + 1) % images.length;
          track.style.transform = `translateX(-${current * imageWidth}px)`;
          updateDesc(current);
        }
        
        // Set fixed width for all images
        for (var i = 0; i < images.length; i++) {
          images[i].style.width = '100%';
          images[i].style.height = '100%';
          images[i].style.objectFit = 'contain';
          images[i].style.flexShrink = '0';
        }
        
        amadeusInterval = setInterval(scrollCarousel, 2000);
        track.addEventListener('mouseenter', function () {
          amadeusPaused = true;
        });
        track.addEventListener('mouseleave', function () {
          amadeusPaused = false;
        });
        window.addEventListener('resize', function () {
          imageWidth = track.offsetWidth;
          track.style.transform = `translateX(-${current * imageWidth}px)`;
        });
        updateDesc(0);
      }

      // SFR carousel
      var sfrTrack = document.getElementById('sfr-carousel-track');
      var sfrDescs = document.querySelectorAll('.experience-sfr-desc');
      var sfrInterval;
      var sfrPaused = false;
      if (sfrTrack && sfrDescs.length) {
        var sfrImages = sfrTrack.children;
        var sfrCurrent = 0;
        var sfrImageWidth = sfrTrack.offsetWidth;
        
        // Set fixed height for all carousel containers
        var sfrCarouselContainer = sfrTrack.parentElement;
        if (sfrCarouselContainer) {
          sfrCarouselContainer.style.minHeight = '300px';
        }
        
        function updateSfrDesc(idx) {
          sfrDescs.forEach(function (li, i) {
            if (i === idx) {
              li.classList.remove('hidden');
            } else {
              li.classList.add('hidden');
            }
          });
          // Logo highlight logic for SFR
          var logo0 = document.getElementById('sfr-logo-0');
          var logo1 = document.getElementById('sfr-logo-1');
          var logo2 = document.getElementById('sfr-logo-2');
          var logo3 = document.getElementById('sfr-logo-3');
          var logo4 = document.getElementById('sfr-logo-4');
          if (logo0 && logo1 && logo2 && logo3 && logo4) {
            [logo0, logo1, logo2, logo3, logo4].forEach(function(el) {
              el.classList.remove('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              el.classList.add('border-neutral-700','bg-neutral-900/80','text-white');
            });
            if(idx === 0) {
              logo0.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo4.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            } else if(idx === 1) {
              logo1.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo2.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
              logo3.classList.add('ring-2','ring-red-400','bg-gradient-to-r','from-orange-700','to-yellow-500','font-bold','scale-105');
            }
          }
        }
        
        function scrollSfrCarousel() {
          if (sfrPaused) return;
          sfrImageWidth = sfrTrack.offsetWidth;
          sfrCurrent = (sfrCurrent + 1) % sfrImages.length;
          sfrTrack.style.transform = `translateX(-${sfrCurrent * sfrImageWidth}px)`;
          updateSfrDesc(sfrCurrent);
        }
        
        // Set fixed width for all images
        for (var i = 0; i < sfrImages.length; i++) {
          sfrImages[i].style.width = '100%';
          sfrImages[i].style.height = '100%';
          sfrImages[i].style.objectFit = 'contain';
          sfrImages[i].style.flexShrink = '0';
        }
        
        sfrInterval = setInterval(scrollSfrCarousel, 2000);
        sfrTrack.addEventListener('mouseenter', function () {
          sfrPaused = true;
        });
        sfrTrack.addEventListener('mouseleave', function () {
          sfrPaused = false;
        });
        window.addEventListener('resize', function () {
          sfrImageWidth = sfrTrack.offsetWidth;
          sfrTrack.style.transform = `translateX(-${sfrCurrent * sfrImageWidth}px)`;
        });
        updateSfrDesc(0);
      }
    });
  }
  return `
  <section id="experience" class="rockstar-section bg-rockstar bg-cover bg-center bg-no-repeat">
    <div class="section-content">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-center mt-34">Professional Experience</h2>
      
      <div class="flex flex-col gap-24">
        <!-- Fullstack Engineer at AMADEUS -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600 min-h-[600px] flex flex-col">
          <div class="flex justify-between items-center mb-6">
            <div>
              <h3 class="text-2xl font-bold text-white">Fullstack Engineer | Internship</h3>
              <p class="text-gray-400 mt-1">April 2025 - October 2025</p>
            </div>
            <a href="https://www.amadeus.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <img src="/images/amadeus.jpg" alt="AMADEUS" class="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span class="text-sm md:text-base text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">@AMADEUS</span>
            </a>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8 flex-grow">
            <div class="min-h-[300px] flex flex-col">
              <div class="experience-amadeus-desc flex-grow min-h-[250px]" data-index="0">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Existing Angular application required enhanced navigation assistance features to improve user experience.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Design and develop a new navigation assistance feature within the existing application.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Implemented the feature using Angular, refactored components, and participated in Agile team workflows and code reviews.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Successfully delivered and validated the feature with client, improving application performance and maintainability.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-amadeus-desc hidden flex-grow min-h-[250px]" data-index="1">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Application needed improved code quality, performance, and maintainability for better user experience.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Refactor Angular components and implement best practices for a responsive application with thousands of users.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Conducted code refactoring, participated in pull requests, and implemented development best practices in a multi-team environment.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Enhanced application maintainability, performance, accessibility, and usability for end-users.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-amadeus-desc hidden flex-grow min-h-[250px]" data-index="2">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Need for robust backend services with comprehensive testing for new application features.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Develop REST APIs with Spring Boot and establish comprehensive testing strategies.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Built REST APIs using Spring Boot and implemented unit, integration, and performance tests.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Created reliable backend services with thorough testing and maintained technical documentation.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rounded-lg overflow-hidden bg-neutral-800/50 border border-neutral-700">
              <div class="h-full flex items-center justify-center rounded-lg relative min-h-[300px]">
                <div id="experience-carousel-track" class="flex transition-transform duration-700 w-full h-full">
                  <img src="/images/norwegian.png" alt="Angular Feature Development" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                  <img src="/images/code.png" alt="Angular Refactoring" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                  <img src="/images/API.jpg" alt="Spring Boot API" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="experience-logos-row">
            <span id="exp-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/angular.png" alt="Angular" class="h-6 w-6 object-contain" /> Angular
            </span>
            <span id="exp-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/ts.png" alt="TypeScript" class="h-6 w-6 object-contain" /> TypeScript
            </span>
            <span id="exp-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/springboot.png" alt="Spring Boot" class="h-6 w-6 object-contain" /> Spring Boot
            </span>
            <span id="exp-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/java.png" alt="Java" class="h-6 w-6 object-contain" /> Java
            </span>
            <span id="exp-logo-4" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/agile.png" alt="Agile" class="h-6 w-6 object-contain" /> Agile/Scrum
            </span>
          </div>
        </div>
        
        <!-- SI Engineer Intern at SFR -->
        <div class="appear-on-scroll bg-neutral-900/90 border border-neutral-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-neutral-600 min-h-[600px] flex flex-col mb-12">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-2xl font-bold text-white">SI Engineer Developer | Intern</h3>
              <p class="text-gray-400 mt-1">February 2024 - August 2024</p>
            </div>
            <a href="https://www.sfr.fr" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <img src="/images/sfr.png" alt="SFR" class="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span class="text-sm md:text-base text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors duration-300">@SFR</span>
            </a>
          </div>
          <div class="mt-8 grid md:grid-cols-2 gap-8 flex-grow">
            <div class="min-h-[300px] flex flex-col">
              <div class="experience-sfr-desc flex-grow min-h-[250px]" data-index="0">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Data analysis challenges from Excel files requiring automated incident identification and notification.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Develop automated data analysis system with dashboard visualization and incident notifications.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Used Python with Pandas for data analysis, created dashboards, and implemented Outlook API for automated notifications.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Automated incident detection and notification system with data visualization dashboard.</span>
                  </li>
                </ul>
              </div>
              <div class="experience-sfr-desc hidden flex-grow min-h-[250px]" data-index="1">
                <ul class="list-none space-y-3">
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Situation:</span>
                    <span>Need for centralized web application to manage internal network equipment data access.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Task:</span>
                    <span>Design and develop a full-stack web application for centralized data management.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Action:</span>
                    <span>Built Angular frontend with Spring Boot backend, SQL database, and interface for corrective action tracking.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-semibold text-orange-400 min-w-[100px]">Result:</span>
                    <span>Centralized web application simplifying access to internal network equipment interfaces.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rounded-lg overflow-hidden bg-neutral-800/50 border border-neutral-700">
              <div class="h-full flex items-center justify-center rounded-lg relative min-h-[300px]">
                <div id="sfr-carousel-track" class="flex transition-transform duration-700 w-full h-full">
                  <img src="/images/dash.webp" alt="Python Data Analysis Dashboard" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                  <img src="/images/reccurenceanalyzer.png" alt="Angular Spring Application" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="sfr-logos-row">
            <span id="sfr-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/python.png" alt="Python" class="h-6 w-6 object-contain" /> Python
            </span>
            <span id="sfr-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/angular.png" alt="Angular" class="h-6 w-6 object-contain" /> Angular
            </span>
            <span id="sfr-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/springboot.png" alt="Spring Boot" class="h-6 w-6 object-contain" /> Spring Boot
            </span>
            <span id="sfr-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/mysql.png" alt="MySQL" class="h-6 w-6 object-contain" /> MySQL
            </span>
            <span id="sfr-logo-4" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="/images/pandas.png" alt="Pandas" class="h-6 w-6 object-contain" /> Pandas
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}