(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();function Header(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mobile-menu-button"),a=document.querySelector(".mobile-menu"),t=document.querySelectorAll(".mobile-menu a");e&&a&&(e.addEventListener("click",()=>{a.classList.toggle("hidden"),e.classList.toggle("active")}),t.forEach(u=>{u.addEventListener("click",()=>{a.classList.add("hidden"),e.classList.remove("active")})}));const r=document.querySelectorAll("section[id]"),o=document.querySelectorAll(".nav-link");function n(){const u=window.pageYOffset;r.forEach(s=>{const c=s.offsetHeight,i=s.offsetTop-150,g=s.getAttribute("id");u>i&&u<=i+c&&o.forEach(l=>{l.classList.remove("active"),l.getAttribute("href").substring(1)===g&&l.classList.add("active")})})}window.addEventListener("scroll",n),n()}),`
  <!-- Left-aligned contact info bar - Hidden on mobile -->
  <div class="fixed left-2 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 bg-black/40 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-800">
    <a href="mailto:abderrahimchaouch2001@gmail.com" target="_blank" rel="noopener" class="group" aria-label="Email">
      <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25ZM3.75 7.5l7.5 6 7.5-6"/></svg>
    </a>
    <a href="https://github.com/Abderrahimchaouch" target="_blank" rel="noopener" class="group" aria-label="GitHub">
      <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
    </a>
  </div>

  <header class="smooth-header fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300">
    <nav class="container mx-auto px-4 md:px-6 py-4">
      <div class="flex items-center justify-between">
        <div id="header-name" class="text-xl md:text-2xl font-bold opacity-0 transform translate-y-2 transition-all duration-1000">
          <span class="bg-gradient-to-r from-red-600 via-blue-500 to-green-600 bg-clip-text text-transparent">ABDERRAHIM CHAOUCH</span>
        </div>

        <!-- Mobile menu button -->
        <button class="mobile-menu-button md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors ml-30">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <ul class="nav-links hidden md:flex ">
          <li>
            <a href="#home" class="ml-100 nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#about" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#education" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Education
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#skills" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Skills
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#experience" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Experience
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#projects" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Projects
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#contact" class="nav-link relative text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Contact
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300"></span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-menu hidden md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
        <ul class="py-4 px-6 space-y-4">
          <li>
            <a href="#home" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Home
            </a>
          </li>
          <li>
            <a href="#about" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              About
            </a>
          </li>
          <li>
            <a href="#education" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" class="block text-gray-300 hover:text-white transition-colors duration-300 py-2">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <style>
    .nav-link.active {
      color: white;
    }
    .nav-link.active span {
      width: 100%;
    }
    .nav-link:hover span {
      width: 100%;
    }
    .smooth-header {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .smooth-header.scrolled {
      padding: 0.5rem 0;
      background: rgba(0, 0, 0, 0.95);
    }
    @keyframes colorLoop {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .color-loop-text {
      background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6c5ce7);
      background-size: 200% auto;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: colorLoop 5s ease infinite;
    }
    .mobile-menu-button.active svg {
      transform: rotate(90deg);
    }
    .mobile-menu-button svg {
      transition: transform 0.3s ease;
    }
  </style>
  `}function HeroSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){function e(r,o){let n=0;const u=Math.ceil(o/1e4),s=()=>{n+=u,n>=o?r.textContent=o+(o===365?"":"+"):(r.textContent=n,requestAnimationFrame(s))};s()}document.querySelectorAll(".stat-number").forEach(r=>{const o=parseInt(r.getAttribute("data-target"),20);e(r,o)});const a=document.getElementById("home");if(a){let u=function(s,c){const i=document.createElement("div");i.className="moroccan-star",i.innerHTML="★";const g=n[s%n.length];i.style.color=g;let l,f;c?l=window.innerWidth*.1+(Math.random()-.5)*100:l=window.innerWidth*.9+(Math.random()-.5)*100,f=window.innerHeight*.3+(Math.random()-.5)*200,i.dataset.initialX=l,i.dataset.initialY=f,i.dataset.color=g,i.style.left=l+"px",i.style.top=f+"px",r.appendChild(i),o.push({element:i,isSpread:!1})};var t=u;const r=document.createElement("div");r.className="stars-container",a.appendChild(r);const o=[],n=["#22c55e","#ef4444","#3b82f6","#ffffff"];for(let s=0;s<10;s++)u(s,!0),u(s+10,!1);document.addEventListener("mousemove",s=>{const c=s.clientX,i=s.clientY;o.forEach(g=>{const l=g.element,f=parseFloat(l.dataset.initialX),b=parseFloat(l.dataset.initialY),y=f-c,T=b-i,L=Math.sqrt(y*y+T*T),E=250;if(L<E){const v=Math.atan2(T,y),h=150*(1-L/E),k=f+Math.cos(v)*h,w=b+Math.sin(v)*h;l.style.left=k+"px",l.style.top=w+"px",l.style.transform="scale(1.4)",g.isSpread=!0}else{if(g.isSpread){const v=parseFloat(l.style.left),h=parseFloat(l.style.top),k=v+(f-v)*.12,w=h+(b-h)*.12;l.style.left=k+"px",l.style.top=w+"px",Math.abs(k-f)<3&&Math.abs(w-b)<3&&(l.style.left=f+"px",l.style.top=b+"px",g.isSpread=!1)}l.style.transform="scale(1)"}})})}}),`
  
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
  `}function AboutSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){const e=new IntersectionObserver(a=>{a.forEach(t=>{t.isIntersecting&&t.target.classList.add("show")})},{threshold:.1});document.querySelectorAll(".about-paragraph").forEach(a=>{e.observe(a)})}),`
  <section id="about" class="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-[#090909] to-[#1a1a1a] py-16">
    <div class="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
      <!-- Left: Text -->
      <div class="flex-1">
        <div class="uppercase tracking-widest text-sm text-gray-400 font-semibold mt-12">Know About Me</div>
        <h2 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
          Full-Stack Developer &<br/>
          <span class="inline-block"> <span class="bg-gradient-to-r from-red-600 via-blue-500 to-green-600 bg-clip-text text-transparent font-bold">Tech Innovator</span></span>
        </h2>
        <div class="space-y-6 text-white/90">
          <p class="about-paragraph text-lg leading-relaxed">
            I'm a passionate Full-Stack Developer and Software Engineer with expertise in building robust backend systems and responsive frontend applications. I specialize in REST APIs, cloud services, and modern web technologies. My experience spans Java, Python, JavaScript/TypeScript, and various frameworks including Spring Boot, Flask, React, and Angular.           </p>
          <p class="about-paragraph text-lg leading-relaxed">
            I thrive on solving complex technical challenges and creating scalable, efficient solutions. Currently focusing on microservices architecture, DevOps, and cloud technologies (Docker, Kubernetes, AWS). Fluent in French, English, and Arabic, I'm a collaborative problem-solver who enjoys working with diverse teams and sharing knowledge to drive innovation.          </p>

          <p class="about-paragraph text-lg leading-relaxed font-semibold">
            Let's build something amazing together! 🚀
          </p>
        </div>
      </div>
      <!-- Right: Logo/Image -->
      <div class="flex-1 flex justify-center items-center">
        <div class="rounded-full bg-gradient-to-tr from-red-600 via-blue-500 to-green-600 p-1 shadow-2xl">
          <div class="bg-black rounded-full flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
            <div class="relative w-40 h-40 md:w-64 md:h-64 group">
              <img
                src="images/ae-removebg-preview.png"
                alt="AE Logo"
                class="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                src="images/IMG_20250330_215752_781.webp"
                alt="Adam"
                class="absolute inset-0 w-full h-full object-cover rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function EducationSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){function e(){const a=document.getElementById("education");if(!a)return;const t={glitchColors:["#dc2626","#2563eb","#16a34a"],glitchSpeed:80,fontSize:16,charWidth:10,charHeight:20},r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"],o=document.createElement("div");o.style.cssText=`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000000;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        `;const n=document.createElement("canvas");n.style.cssText=`
          display: block;
          width: 100%;
          height: 100%;
        `;const u=document.createElement("div");u.style.cssText=`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.9) 100%);
        `,o.appendChild(n),o.appendChild(u),a.style.position="relative",a.insertBefore(o,a.firstChild);const s=n.getContext("2d");let c=[],i={columns:0},g,l=Date.now();function f(){return r[Math.floor(Math.random()*r.length)]}function b(){return t.glitchColors[Math.floor(Math.random()*t.glitchColors.length)]}function y(d){const p=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;d=d.replace(p,(x,M,C,I)=>M+M+C+C+I+I);const m=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(d);return m?{r:parseInt(m[1],16),g:parseInt(m[2],16),b:parseInt(m[3],16)}:null}function T(d,p,m){const x={r:Math.round(d.r+(p.r-d.r)*m),g:Math.round(d.g+(p.g-d.g)*m),b:Math.round(d.b+(p.b-d.b)*m)};return`rgb(${x.r}, ${x.g}, ${x.b})`}function L(d,p){const m=Math.ceil(d/t.charWidth),x=Math.ceil(p/t.charHeight);return{columns:m,rows:x}}function E(d,p){i={columns:d,rows:p};const m=d*p;c=Array.from({length:m},()=>({char:f(),color:b(),targetColor:b(),colorProgress:1}))}function v(){const d=a.getBoundingClientRect(),p=window.devicePixelRatio||1;n.width=d.width*p,n.height=d.height*p,n.style.width=`${d.width}px`,n.style.height=`${d.height}px`,s.setTransform(p,0,0,p,0,0);const{columns:m,rows:x}=L(d.width,d.height);E(m,x),h()}function h(){if(!s||c.length===0)return;const d=a.getBoundingClientRect();s.clearRect(0,0,d.width,d.height),s.font=`${t.fontSize}px monospace`,s.textBaseline="top",c.forEach((p,m)=>{const x=m%i.columns*t.charWidth,M=Math.floor(m/i.columns)*t.charHeight;s.fillStyle=p.color,s.fillText(p.char,x,M)})}function k(){if(!c||c.length===0)return;const d=Math.max(1,Math.floor(c.length*.05));for(let p=0;p<d;p++){const m=Math.floor(Math.random()*c.length);c[m]&&(c[m].char=f(),c[m].targetColor=b(),c[m].colorProgress=0)}}function w(){let d=!1;c.forEach(p=>{if(p.colorProgress<1){p.colorProgress+=.05,p.colorProgress>1&&(p.colorProgress=1);const m=y(p.color),x=y(p.targetColor);m&&x&&(p.color=T(m,x,p.colorProgress),d=!0)}}),d&&h()}function S(){const d=Date.now();d-l>=t.glitchSpeed&&(k(),h(),l=d),w(),g=requestAnimationFrame(S)}v(),S();let j;function A(){clearTimeout(j),j=setTimeout(()=>{cancelAnimationFrame(g),v(),S()},100)}window.addEventListener("resize",A),window.addEventListener("beforeunload",()=>{cancelAnimationFrame(g),window.removeEventListener("resize",A)})}e()}),`
  <section id="education" class="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#090909] to-[#1a1a1a] py-16 overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 relative z-10">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-center">Education</h2>
      <div class="space-y-10">
        <!-- ENIB Brest -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105 hover:shadow-2xl appear-on-scroll relative z-20">
          <div class="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-black/30 rounded-xl">
            <img src="https://wiki.lesfabriquesduponant.netimages/4/48/Logo-enib.png" alt="ENIB Brest Logo" class="object-contain h-16" />
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
            <img src="images/iae.png" alt="IAE Brest Logo" class="object-contain h-20" />
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
            <img src="images/estm.png" alt="ESTM Meknes Logo" class="object-contain h-16" />
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
  `}function SkillsSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("#skills-filter-row button"),a=document.querySelectorAll(".skill-pill");e.forEach(function(t){t.addEventListener("click",function(){var r=t.getAttribute("data-skilltype");e.forEach(o=>{o.classList.remove("bg-gradient-to-r","from-red-500","via-orange-500","to-yellow-500","text-white","font-bold","ring-2","ring-orange-400","scale-105")}),t.classList.add("bg-gradient-to-r","from-red-500","via-orange-500","to-yellow-500","text-white","font-bold","ring-2","ring-orange-400","scale-105"),a.forEach(function(o){r==="all"||o.getAttribute("data-skilltype")===r?o.style.display="":o.style.display="none"})})})}),`
  <section id="skills" class="rockstar-section bg-rockstar">
    <div class="section-content relative">
      <h2 class="text-2xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent text-center">Skills</h2>
      <div class="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-600/50 rounded-lg p-6 mb-8 backdrop-blur-sm">
        <div class="flex items-center justify-center flex-wrap gap-4">
          <span class="text-white font-semibold text-lg">Filter by:</span>
          <div class="flex flex-wrap gap-3 justify-center" id="skills-filter-row">
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-gradient-to-r from-red-600 via-red-500 to-green-600 text-white text-sm font-bold shadow ring-2 ring-red-200 scale-105 transition-all" data-skilltype="all">All</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-red-700 transition-all" data-skilltype="dev">Dev</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-red-700 transition-all" data-skilltype="data">Data/AI</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-red-700 transition-all" data-skilltype="Tools">Tools</button>
        <button class="px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-medium shadow hover:bg-red-700 transition-all" data-skilltype="soft">Soft Skills</button>
      </div>
      <div class="flex flex-wrap gap-3 justify-center" id="skills-list">
        <a href="https://www.python.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/python.png" class="h-5 w-5 object-contain mr-2" alt="Python"/>Python</a>
        <a href="https://www.java.com/fr/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/java.png" class="h-5 w-5 object-contain mr-2" alt="Java"/>Java</a>
        <a href="https://www.springboot.com/fr/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/springboot.png" class="h-5 w-5 object-contain mr-2" alt="Spring Boot"/>Spring-Boot</a>
        <a href="https://www.angular.com/fr/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/angular.png" class="h-5 w-5 object-contain mr-2" alt="angular"/>Angular</a>
        <a href="https://cplusplus.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/Cpp.png"  class="h-5 w-5 object-contain mr-2" alt="C++"/>C++</a>
        <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/js.png" class="h-5 w-5 object-contain mr-2" alt="JavaScript"/>Javascript</a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/ts.png" class="h-5 w-5 object-contain mr-2" alt="Typescript"/>Typescript</a>
        <a href="https://webassembly.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev">Assembly</a>
        <a href="https://react.dev/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/react.png" class="h-5 w-5 object-contain mr-2" alt="React"/>React</a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/nodejs.png" class="h-5 w-5 object-contain mr-2" alt="Node.js"/>Node.js</a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/nextjs.png" class="h-5 w-5 object-contain mr-2" alt="Next.js"/>Next.js</a>
        <a href="https://expressjs.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/expressjs.png" class="h-5 w-5 object-contain mr-2" alt="Express.js"/>Express.js</a>
        <a href="https://pypi.org/project/Flask/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev">Flask</a>        
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/Tailwind.png" class="h-5 w-5 object-contain mr-2" alt="TailwindCSS"/>TailwindCSS</a>
        <a href="https://github.com/ELALAMIADAM/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="dev"><img src="images/github.png" class="h-5 w-5 object-contain mr-2" alt="Github"/>Github</a>
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="images/VS.png" class="h-5 w-5 object-contain mr-2" alt="Visual Studio Code"/>Visual Studio Code</a>
        <a href="https://www.cursor.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="images/cursor.jpeg" class="h-5 w-5 object-contain mr-2" alt="Cursor"/>Cursor</a>
        <a href="https://www.eclipse.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="images/eclipse_94656.webp" class="h-5 w-5 object-contain mr-2" alt="Eclipse"/>Eclipse</a>
        <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="images/idea.webp" class="h-5 w-5 object-contain mr-2" alt="IntelliJ IDEA"/>IntelliJ IDEA</a>
        <a href="https://www.docker.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="images/docker.png" class="h-5 w-5 object-contain mr-2" alt="Docker"/>Docker</a>
        <a href="https://www.oracle.com/analytics/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/oracle.png" class="h-5 w-5 object-contain mr-2" alt="Oracle Analytics"/>Oracle Analytics</a>
        <a href="https://www.starburst.io/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/starburst.png" class="h-5 w-5 object-contain mr-2" alt="Starburst"/>Starburst</a>
        <a href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/ETL.png" class="h-5 w-5 object-contain mr-2" alt="ETL"/>ETL</a>
        <a href="https://pig.apache.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/pig.png" class="h-5 w-5 object-contain mr-2" alt="PIG Latin"/>PIG Latin</a>
        <a href="https://en.wikipedia.org/wiki/Natural_language_processing" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/nlp.png" class="h-5 w-5 object-contain mr-2" alt="NLP"/>NLP</a>
        <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/ML.png" class="h-5 w-5 object-contain mr-2" alt="ML & DL"/>ML & DL</a>
        <a href="https://www.sqlite.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/sqlite.png" class="h-5 w-5 object-contain mr-2" alt="SQLite"/>SQLite</a>
        <a href="https://www.mysql.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/mysql.png" class="h-5 w-5 object-contain mr-2" alt="MySQL"/>MySQL</a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/postgres.png" class="h-5 w-5 object-contain mr-2" alt="PostgreSQL"/>PostgreSQL</a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/mongo.png" class="h-5 w-5 object-contain mr-2" alt="MongoDB"/>MongoDB</a>
        <a href="https://streamlit.io/" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="data"><img src="images/streamlit.png" class="h-5 w-5 object-contain mr-2" alt="Streamlit"/>Streamlit</a>
        <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="Tools"><img src="images/jira.png" class="h-5 w-5 object-contain mr-2" alt="Jira"/>Jira</a>
        <a href="https://en.wikipedia.org/wiki/Teamwork" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="images/3135715.png" class="h-5 w-5 object-contain mr-2" alt="Teamwork"/>Teamwork</a>
        <a href="https://en.wikipedia.org/wiki/Communication" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="images/190411.png" class="h-5 w-5 object-contain mr-2" alt="Communication"/>Communication</a>
        <a href="https://en.wikipedia.org/wiki/Problem_solving" target="_blank" rel="noopener" class="skill-pill flex items-center px-4 py-1 rounded-lg border border-neutral-700 bg-neutral-900/80 text-white text-sm font-mono font-medium shadow transition-all gap-2" data-skilltype="soft"><img src="images/1828884.png" class="h-5 w-5 object-contain mr-2" alt="Problem Solving"/>Problem Solving</a>
      </div>
      <p class="text-center text-white/70 mt-6">...and many more!</p>
    </div>
  </section>
  `}function ExperienceSection(){return typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("experience-carousel-track"),a=document.querySelectorAll(".experience-amadeus-desc"),t=!1;if(e&&a.length){let h=function(w){a.forEach(function(m,x){x===w?m.classList.remove("hidden"):m.classList.add("hidden")});var S=document.getElementById("exp-logo-0"),j=document.getElementById("exp-logo-1"),A=document.getElementById("exp-logo-2"),d=document.getElementById("exp-logo-3"),p=document.getElementById("exp-logo-4");S&&j&&A&&d&&p&&([S,j,A,d,p].forEach(function(m){m.classList.remove("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","text-white","font-bold","scale-105"),m.classList.add("border-neutral-700","bg-neutral-900/70","text-white")}),w===0?(S.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),j.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")):w===1?(S.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),j.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),A.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")):w===2&&(d.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),p.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")))},k=function(){t||(n=e.offsetWidth,o=(o+1)%r.length,e.style.transform=`translateX(-${o*n}px)`,h(o))};var T=h,L=k,r=e.children,o=0,n=e.offsetWidth,u=e.parentElement;u&&(u.style.minHeight="300px");for(var s=0;s<r.length;s++)r[s].style.width="100%",r[s].style.height="100%",r[s].style.objectFit="contain",r[s].style.flexShrink="0";setInterval(k,2e3),e.addEventListener("mouseenter",function(){t=!0}),e.addEventListener("mouseleave",function(){t=!1}),window.addEventListener("resize",function(){n=e.offsetWidth,e.style.transform=`translateX(-${o*n}px)`}),h(0)}var c=document.getElementById("sfr-carousel-track"),i=document.querySelectorAll(".experience-sfr-desc"),g=!1;if(c&&i.length){let h=function(w){i.forEach(function(m,x){x===w?m.classList.remove("hidden"):m.classList.add("hidden")});var S=document.getElementById("sfr-logo-0"),j=document.getElementById("sfr-logo-1"),A=document.getElementById("sfr-logo-2"),d=document.getElementById("sfr-logo-3"),p=document.getElementById("sfr-logo-4");S&&j&&A&&d&&p&&([S,j,A,d,p].forEach(function(m){m.classList.remove("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),m.classList.add("border-neutral-700","bg-neutral-900/80","text-white")}),w===0?(S.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),p.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")):w===1&&(j.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),A.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105"),d.classList.add("ring-2","ring-red-400","bg-gradient-to-r","from-orange-700","to-yellow-500","font-bold","scale-105")))},k=function(){g||(b=c.offsetWidth,f=(f+1)%l.length,c.style.transform=`translateX(-${f*b}px)`,h(f))};var E=h,v=k,l=c.children,f=0,b=c.offsetWidth,y=c.parentElement;y&&(y.style.minHeight="300px");for(var s=0;s<l.length;s++)l[s].style.width="100%",l[s].style.height="100%",l[s].style.objectFit="contain",l[s].style.flexShrink="0";setInterval(k,2e3),c.addEventListener("mouseenter",function(){g=!0}),c.addEventListener("mouseleave",function(){g=!1}),window.addEventListener("resize",function(){b=c.offsetWidth,c.style.transform=`translateX(-${f*b}px)`}),h(0)}}),`
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
              <img src="images/amadeus.jpg" alt="AMADEUS" class="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
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
                  <img src="images/norwegian.png" alt="Angular Feature Development" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                  <img src="images/code.png" alt="Angular Refactoring" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                  <img src="images/API.jpg" alt="Spring Boot API" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="experience-logos-row">
            <span id="exp-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/angular.png" alt="Angular" class="h-6 w-6 object-contain" /> Angular
            </span>
            <span id="exp-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/ts.png" alt="TypeScript" class="h-6 w-6 object-contain" /> TypeScript
            </span>
            <span id="exp-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/springboot.png" alt="Spring Boot" class="h-6 w-6 object-contain" /> Spring Boot
            </span>
            <span id="exp-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/java.png" alt="Java" class="h-6 w-6 object-contain" /> Java
            </span>
            <span id="exp-logo-4" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/agile.png" alt="Agile" class="h-6 w-6 object-contain" /> Agile/Scrum
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
              <img src="images/sfr.png" alt="SFR" class="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
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
                  <img src="images/dash.webp" alt="Python Data Analysis Dashboard" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                  <img src="images/reccurenceanalyzer.png" alt="Angular Spring Application" class="w-full h-full object-contain flex-shrink-0" style="object-fit: contain;" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 mb-6 mt-6 justify-center" id="sfr-logos-row">
            <span id="sfr-logo-0" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/python.png" alt="Python" class="h-6 w-6 object-contain" /> Python
            </span>
            <span id="sfr-logo-1" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/angular.png" alt="Angular" class="h-6 w-6 object-contain" /> Angular
            </span>
            <span id="sfr-logo-2" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/springboot.png" alt="Spring Boot" class="h-6 w-6 object-contain" /> Spring Boot
            </span>
            <span id="sfr-logo-3" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/mysql.png" alt="MySQL" class="h-6 w-6 object-contain" /> MySQL
            </span>
            <span id="sfr-logo-4" class="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 text-white text-base font-medium shadow transition-all duration-200">
              <img src="images/pandas.png" alt="Pandas" class="h-6 w-6 object-contain" /> Pandas
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `}function ProjectsSection(){return`
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
  `}class EmailJSResponseStatus{constructor(a=0,t="Network Error"){this.status=a,this.text=t}}const createWebStorage=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,a)=>Promise.resolve(localStorage.setItem(e,a)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},store={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:createWebStorage()},buildOptions=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},init=(e,a="https://api.emailjs.com")=>{if(!e)return;const t=buildOptions(e);store.publicKey=t.publicKey,store.blockHeadless=t.blockHeadless,store.storageProvider=t.storageProvider,store.blockList=t.blockList,store.limitRate=t.limitRate,store.origin=t.origin||a},sendPost=async(e,a,t={})=>{const r=await fetch(store.origin+e,{method:"POST",headers:t,body:a}),o=await r.text(),n=new EmailJSResponseStatus(r.status,o);if(r.ok)return n;throw n},validateParams=(e,a,t)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a||typeof a!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},validateTemplateParams=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},isHeadless=e=>e.webdriver||!e.languages||e.languages.length===0,headlessError=()=>new EmailJSResponseStatus(451,"Unavailable For Headless Browser"),validateBlockListParams=(e,a)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof a!="string")throw"The BlockList watchVariable has to be a string"},isBlockListDisabled=e=>{var a;return!((a=e.list)!=null&&a.length)||!e.watchVariable},getValue=(e,a)=>e instanceof FormData?e.get(a):e[a],isBlockedValueInParams=(e,a)=>{if(isBlockListDisabled(e))return!1;validateBlockListParams(e.list,e.watchVariable);const t=getValue(a,e.watchVariable);return typeof t!="string"?!1:e.list.includes(t)},blockedEmailError=()=>new EmailJSResponseStatus(403,"Forbidden"),validateLimitRateParams=(e,a)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(a&&typeof a!="string")throw"The LimitRate ID has to be a non-empty string"},getLeftTime=async(e,a,t)=>{const r=Number(await t.get(e)||0);return a-Date.now()+r},isLimitRateHit=async(e,a,t)=>{if(!a.throttle||!t)return!1;validateLimitRateParams(a.throttle,a.id);const r=a.id||e;return await getLeftTime(r,a.throttle,t)>0?!0:(await t.set(r,Date.now().toString()),!1)},limitRateError=()=>new EmailJSResponseStatus(429,"Too Many Requests"),send=async(e,a,t,r)=>{const o=buildOptions(r),n=o.publicKey||store.publicKey,u=o.blockHeadless||store.blockHeadless,s=o.storageProvider||store.storageProvider,c={...store.blockList,...o.blockList},i={...store.limitRate,...o.limitRate};return u&&isHeadless(navigator)?Promise.reject(headlessError()):(validateParams(n,e,a),validateTemplateParams(t),t&&isBlockedValueInParams(c,t)?Promise.reject(blockedEmailError()):await isLimitRateHit(location.pathname,i,s)?Promise.reject(limitRateError()):sendPost("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:n,service_id:e,template_id:a,template_params:t}),{"Content-type":"application/json"}))},validateForm=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},findHTMLForm=e=>typeof e=="string"?document.querySelector(e):e,sendForm=async(e,a,t,r)=>{const o=buildOptions(r),n=o.publicKey||store.publicKey,u=o.blockHeadless||store.blockHeadless,s=store.storageProvider||o.storageProvider,c={...store.blockList,...o.blockList},i={...store.limitRate,...o.limitRate};if(u&&isHeadless(navigator))return Promise.reject(headlessError());const g=findHTMLForm(t);validateParams(n,e,a),validateForm(g);const l=new FormData(g);return isBlockedValueInParams(c,l)?Promise.reject(blockedEmailError()):await isLimitRateHit(location.pathname,i,s)?Promise.reject(limitRateError()):(l.append("lib_version","4.4.1"),l.append("service_id",e),l.append("template_id",a),l.append("user_id",n),sendPost("/api/v1.0/email/send-form",l))},emailjs={init,send,sendForm,EmailJSResponseStatus};function ContactSection(){return emailjs.init(void 0),typeof window<"u"&&document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("contact");if(e){let a=function(n,u){const s=document.createElement("div");s.className="moroccan-star",s.innerHTML="★";const c=o[n%o.length];s.style.color=c;let i,g;u?i=window.innerWidth*.1+(Math.random()-.5)*100:i=window.innerWidth*.9+(Math.random()-.5)*100;const l=e.getBoundingClientRect().top+window.scrollY,f=e.getBoundingClientRect().height;g=l+f*.3+(Math.random()-.5)*200,s.dataset.initialX=i,s.dataset.initialY=g,s.dataset.color=c,s.style.left=i+"px",s.style.top=g+"px",t.appendChild(s),r.push({element:s,isSpread:!1})};const t=document.createElement("div");t.className="stars-container",e.appendChild(t);const r=[],o=["#22c55e","#ef4444","#3b82f6","#ffffff"];for(let n=0;n<10;n++)a(n,!0),a(n+10,!1);document.addEventListener("mousemove",n=>{const u=n.clientX,s=n.clientY;r.forEach(c=>{const i=c.element,g=parseFloat(i.dataset.initialX),l=parseFloat(i.dataset.initialY),f=g-u,b=l-s,y=Math.sqrt(f*f+b*b),T=250;if(y<T){const L=Math.atan2(b,f),E=150*(1-y/T),v=g+Math.cos(L)*E,h=l+Math.sin(L)*E;i.style.left=v+"px",i.style.top=h+"px",i.style.transform="scale(1.4)",c.isSpread=!0}else{if(c.isSpread){const L=parseFloat(i.style.left),E=parseFloat(i.style.top),v=L+(g-L)*.12,h=E+(l-E)*.12;i.style.left=v+"px",i.style.top=h+"px",Math.abs(v-g)<3&&Math.abs(h-l)<3&&(i.style.left=g+"px",i.style.top=l+"px",c.isSpread=!1)}i.style.transform="scale(1)"}})})}}),window.handleSubmit=function(e){e.preventDefault();const a=e.target,t=a.querySelector('button[type="submit"]'),r=t.textContent;t.innerHTML=`
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `,t.disabled=!0,t.classList.add("opacity-75");const o={name:a.name.value,email:a.email.value,message:a.message.value};emailjs.send(void 0,void 0,o).then(()=>{t.innerHTML=`
        <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Message Sent!
      `,t.classList.remove("from-orange-500","to-yellow-400"),t.classList.add("bg-green-500"),a.reset();const n=document.createElement("div");n.className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-y-0 opacity-100",n.innerHTML="Your message has been sent successfully!",document.body.appendChild(n),setTimeout(()=>{n.classList.add("translate-y-2","opacity-0"),setTimeout(()=>n.remove(),500)},3e3),setTimeout(()=>{t.innerHTML=r,t.classList.remove("bg-green-500"),t.classList.add("from-orange-500","to-yellow-400"),t.disabled=!1,t.classList.remove("opacity-75")},3e3)}).catch(n=>{t.innerHTML=`
        <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        Error! Try Again
      `,t.classList.remove("from-orange-500","to-yellow-400"),t.classList.add("bg-red-500");const u=document.createElement("div");u.className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-y-0 opacity-100",u.innerHTML="Failed to send message. Please try again.",document.body.appendChild(u),setTimeout(()=>{u.classList.add("translate-y-2","opacity-0"),setTimeout(()=>u.remove(),500)},3e3),setTimeout(()=>{t.innerHTML=r,t.classList.remove("bg-red-500"),t.classList.add("from-orange-500","to-yellow-400"),t.disabled=!1,t.classList.remove("opacity-75")},3e3),console.error("Error sending email:",n)})},`
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
  `}function Footer(){return`
  <footer class="py-8 text-center text-gray-400 bg-black">
    <p>&copy; ${new Date().getFullYear()} ABDERRAHIM CHAOUCH. All rights reserved.</p>
  </footer>
  `}function setupAnimations(){return`
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
  `}const appElement=document.querySelector("#app");appElement.innerHTML=`
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
`;document.addEventListener("DOMContentLoaded",()=>{eval(setupAnimations());const contactForm=document.getElementById("contactForm");contactForm&&contactForm.addEventListener("submit",window.handleSubmit)});
