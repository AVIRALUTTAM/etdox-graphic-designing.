/**
 * Aviral Uttam — Graphic Design & Ad Tech Portfolio 2026
 * Interactive Motion & Generative Experience Engine
 */

// ==========================================================================
// 1. LOGOFOLIO DATA REPOSITORY
// ==========================================================================
const LOGOS_DATA = {
  sai: {
    name: 'Sai Heart Hospital',
    sector: 'Healthcare & Cardiology',
    concept: 'Compassionate cardiovascular clinical excellence with human warmth. The emblem synthesizes a heart with an emergency medical cross and caring hands.',
    typography: 'Humanist Geometric Sans',
    deliverables: 'Master Identity, Hospital Wayfinding, Ambulance Fleet Signage',
    colors: ['#DC2626', '#FFFFFF', '#1E293B'],
    svg: `
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M50 88C50 88 18 64 18 36C18 20 30 12 42 12C48 12 50 18 50 18C50 18 52 12 58 12C70 12 82 20 82 36C82 64 50 88 50 88Z" fill="#DC2626"/>
        <circle cx="50" cy="38" r="14" fill="#FFFFFF"/>
        <path d="M47 30H53V46H47V30Z" fill="#DC2626"/>
        <path d="M42 35H58V41H42V35Z" fill="#DC2626"/>
      </svg>
    `
  },
  heuposs: {
    name: 'HEUPOSS',
    sector: 'Enterprise Systems & Security',
    concept: 'Unbroken connectivity, modular scalability, and enterprise computing strength. The endless continuous knot represents zero-downtime reliability.',
    typography: 'Industrial Square Grotesque',
    deliverables: 'Logomark, App Iconography, Hardware Badging, Brand Guidelines',
    colors: ['#114232', '#34D399', '#0F172A'],
    svg: `
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M30 30 C20 40 20 60 30 70 C40 80 60 80 70 70 C80 60 80 40 70 30 C60 20 40 20 30 30 Z" stroke="#114232" stroke-width="10" stroke-linecap="round"/>
        <path d="M70 30 C80 40 80 60 70 70 C60 80 40 80 30 70 C20 60 20 40 30 30 C40 20 60 20 70 30 Z" stroke="#114232" stroke-width="10" stroke-linecap="round"/>
        <circle cx="50" cy="50" r="8" fill="#114232"/>
      </svg>
    `
  },
  akiram: {
    name: 'ÁKIRAM',
    sector: 'Luxury Living & Real Estate',
    concept: 'Pinnacle architectural majesty and bespoke residential development. The golden chevron apex represents apex engineering and elevated skyline prestige.',
    typography: 'High-Contrast Luxury Serif (Cinzel / Didot)',
    deliverables: 'Embossed Identity, Architectural Hoardings, Real Estate Booklets',
    colors: ['#F59E0B', '#111827', '#E5E7EB'],
    svg: `
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M50 15L85 45L70 45L50 28L30 45L15 45L50 15Z" fill="#F59E0B"/>
        <path d="M50 38L70 55L60 55L50 46L40 55L30 55L50 38Z" fill="#D97706"/>
        <circle cx="50" cy="65" r="5" fill="#F59E0B"/>
      </svg>
    `
  },
  barbent: {
    name: 'barbent',
    sector: 'Modern Grooming & Men\'s Lifestyle',
    concept: 'Contemporary urban precision and effortless styling. Clean, fluid lowercase curves communicate modern minimalist sophistication.',
    typography: 'Custom Clean Lowercase Sans',
    deliverables: 'Packaging Cartons, Pomade Jars, E-Commerce Storefront',
    colors: ['#0F172A', '#64748B', '#F8FAFC'],
    svg: `
      <div style="font-family: 'Outfit', sans-serif; font-size: 2.8rem; font-weight: 700; color: #0f172a; letter-spacing: -0.04em;">barbent</div>
    `
  },
  ourvita: {
    name: 'Ourvita',
    sector: 'Premium Natural Cosmetics',
    concept: 'Harmony between science and botanicals. The signature wordmark conceals an organic sprouting leaf inside the negative space of the initial "O".',
    typography: 'Labora Regular Rounded Sans',
    deliverables: 'Full Brand Identity, 5 Product Squeeze Tubes, Retail Store Signage, Digital Storefront',
    colors: ['#0EA948', '#00380D', '#E8E8D6', '#4C3830'],
    svg: `
      <div style="font-family: 'Outfit', sans-serif; font-size: 3.2rem; font-weight: 800; color: #0ea948; letter-spacing: -0.03em;">Ourvita</div>
    `
  },
  cryst: {
    name: 'CRYST HOTELS & RESORTS',
    sector: 'International Hospitality',
    concept: 'Multifaceted pristine hospitality and diamond-tier island resorts. The crystalline hexagonal crest symbolizes multifaceted guest luxury and panoramic ocean views.',
    typography: 'Modern Architectural Display Sans',
    deliverables: 'Keycard Sleeves, Resort Signage, Luxury Bath Amenities Suite',
    colors: ['#1E3A8A', '#38BDF8', '#F1F5F9'],
    svg: `
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        <path d="M50 10L75 35V65L50 90L25 65V35L50 10Z" stroke="#1E3A8A" stroke-width="8"/>
        <polygon points="50,30 65,50 50,70 35,50" fill="#1E3A8A"/>
      </svg>
    `
  },
  alexan: {
    name: 'Alexan',
    sector: 'Haute Couture & Fine Fragrance',
    concept: 'Grace in motion, bespoke feminine elegance, and poetic allure. The curved wing-petal mark evokes weightless silk drifting on air.',
    typography: 'Editorial Roman Serif',
    deliverables: 'Perfume Bottles, Silk Scarves, Boutique Interior Inlays',
    colors: ['#BE185D', '#FB7185', '#FFF1F2'],
    svg: `
      <svg width="90" height="70" viewBox="0 0 100 70" fill="none">
        <path d="M10 35C25 15 50 10 75 18C85 22 92 30 90 40C88 52 70 58 50 52C30 46 15 38 10 35Z" fill="#BE185D"/>
        <circle cx="70" cy="25" r="4" fill="#F43F5E"/>
      </svg>
    `
  },
  western: {
    name: 'western',
    sector: 'Heritage Apparel & Craft Distilling',
    concept: 'Pioneering frontier spirit and authentic rugged heritage. Stylized double crown letterforms evoke traditional blacksmith stamping and timeless leather craft.',
    typography: 'Bespoke Frontier Display Script',
    deliverables: 'Denim Patches, Barrel Stamps, Whiskey Labels',
    colors: ['#365314', '#D97706', '#FEF3C7'],
    svg: `
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
        <path d="M25 35L50 15L75 35L65 50L50 38L35 50L25 35Z" fill="#365314"/>
        <path d="M35 55L50 45L65 55L50 75L35 55Z" fill="#365314"/>
      </svg>
    `
  },
  sunplus: {
    name: 'Sunplus',
    sector: 'Solar Energy & Cleantech Infrastructure',
    concept: 'Optimistic vitality and perpetual renewable power. Four radiant solar petals rotate in golden harmony to capture limitless clean energy.',
    typography: 'Ultra-Bold Energy Grotesque',
    deliverables: 'Industrial Solar Inverter Badges, Fleet Decals, Annual Report',
    colors: ['#EAB308', '#064E3B', '#F8FAFC'],
    svg: `
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="28" r="14" fill="#EAB308"/>
        <circle cx="50" cy="72" r="14" fill="#EAB308"/>
        <circle cx="28" cy="50" r="14" fill="#EAB308"/>
        <circle cx="72" cy="50" r="14" fill="#EAB308"/>
        <circle cx="50" cy="50" r="7" fill="#CA8A04"/>
      </svg>
    `
  },
  treslr: {
    name: 'TRESLR',
    sector: 'Cyber Defense & Cryptographic Vaults',
    concept: 'Impenetrable vault cryptography and cyber fortitude. Dual-bladed cyber trident protects distributed networks with offensive & defensive security.',
    typography: 'Futuristic Monospaced Armor Logotype',
    deliverables: 'SOC Dashboard UI, Encrypted Hardware Token, Whitepaper Branding',
    colors: ['#1E3A8A', '#38BDF8', '#0F172A'],
    svg: `
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        <path d="M46 15H54V85H46V15Z" fill="#1E3A8A"/>
        <path d="M30 30H70V38H30V30Z" fill="#1E3A8A"/>
        <path d="M25 25L30 38H22L25 25Z" fill="#1E3A8A"/>
        <path d="M75 25L78 38H70L75 25Z" fill="#1E3A8A"/>
        <path d="M36 50H64V56H36V50Z" fill="#1E3A8A"/>
      </svg>
    `
  },
  vinoma: {
    name: 'VINOMA',
    sector: 'Aerospace & Autonomous Mobility',
    concept: 'Supersonic precision and forward autonomous propulsion. Slanted aerodynamic letterforms convey drag-free velocity and next-generation transit.',
    typography: 'Aerodynamic Velocity Sans',
    deliverables: 'Autonomous Shuttle Badging, Mobile Passenger App, Launch Keynote',
    colors: ['#0284C7', '#0369A1', '#F0F9FF'],
    svg: `
      <div style="font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 800; color: #0284c7; letter-spacing: 0.15em; font-style: italic;">VINOMA</div>
    `
  },
  mystishy: {
    name: 'Mystishy',
    sector: 'Holistic Aromatherapy & Spiritual Wellness',
    concept: 'Inner stillness, transcendental mindfulness, and botanical aura. Sacred geometry blooming lotus flower radiating conscious energy droplets.',
    typography: 'Harmonic Geometric Sans',
    deliverables: 'Essential Oil Ampoules, Meditation App, Organic Incense Packaging',
    colors: ['#701A75', '#A21CAF', '#FAF5FF'],
    svg: `
      <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
        <path d="M50 20C40 38 30 45 15 50C30 55 40 62 50 80C60 62 70 55 85 50C70 45 60 38 50 20Z" stroke="#581C87" stroke-width="6"/>
        <circle cx="50" cy="50" r="10" stroke="#581C87" stroke-width="5"/>
        <path d="M50 10V20M50 80V90" stroke="#581C87" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `
  }
};

// ==========================================================================
// 2. SYNTHESIZED WEB AUDIO SOUND ENGINE
// ==========================================================================
class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  playClick(freq = 600, duration = 0.04) {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx || this.audioCtx.state === 'suspended') {
      this.audioCtx?.resume();
    }
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, this.audioCtx.currentTime + duration);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playScan() {
    if (this.isMuted) return;
    this.init();
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.4);
    } catch (e) {}
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

const sounds = new SoundEngine();

// ==========================================================================
// 3. CUSTOM MAGNETIC CURSOR
// ==========================================================================
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const label = document.getElementById('cursorLabel');
  if (!cursor || !label) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderCursor() {
    // Smooth lerp follow
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Dynamic context tags on hoverable elements
  const hoverables = document.querySelectorAll('[data-cursor]');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      const customTag = el.getAttribute('data-cursor') || 'VIEW';
      label.textContent = customTag;
      cursor.classList.add('hovered');
      sounds.playClick(850, 0.02);
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
      label.textContent = 'EXPLORE';
    });
  });
}

// ==========================================================================
// 4. HERO GLOWING ORB PARTICLE ENGINE
// ==========================================================================
function initOrbParticleCanvas() {
  const canvas = document.getElementById('orbParticleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;

  // Generate 80 atmospheric radiant particles
  const particleCount = 75;
  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radius: 40 + Math.random() * 80,
      speed: (0.005 + Math.random() * 0.015) * (Math.random() > 0.5 ? 1 : -1),
      size: 1 + Math.random() * 2.8,
      alpha: 0.2 + Math.random() * 0.8,
      color: Math.random() > 0.4 ? '#fef08a' : (Math.random() > 0.5 ? '#a3e635' : '#ffffff'),
      pulseSpeed: 0.02 + Math.random() * 0.04
    });
  }

  let mouseAttractX = 0;
  let mouseAttractY = 0;

  const orbContainer = document.getElementById('heroOrbContainer');
  if (orbContainer) {
    orbContainer.addEventListener('mousemove', (e) => {
      const rect = orbContainer.getBoundingClientRect();
      mouseAttractX = (e.clientX - rect.left - rect.width / 2) * 0.25;
      mouseAttractY = (e.clientY - rect.top - rect.height / 2) * 0.25;
    });
    orbContainer.addEventListener('mouseleave', () => {
      mouseAttractX = 0;
      mouseAttractY = 0;
    });
    orbContainer.addEventListener('click', () => {
      sounds.playScan();
      // Burst effect
      particles.forEach(p => {
        p.radius += 35;
      });
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw central light aura (pure transparent falloff)
    const gradient = ctx.createRadialGradient(
      centerX + mouseAttractX, 
      centerY + mouseAttractY, 
      8, 
      centerX, 
      centerY, 
      105
    );
    gradient.addColorStop(0, 'rgba(254, 240, 138, 0.35)');
    gradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.12)');
    gradient.addColorStop(1, 'rgba(254, 240, 138, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 105, 0, Math.PI * 2);
    ctx.fill();

    // Draw particles
    particles.forEach(p => {
      p.angle += p.speed;
      // Gently return radius if burst
      if (p.radius > 115) p.radius -= 0.6;

      const px = centerX + Math.cos(p.angle) * p.radius + mouseAttractX;
      const py = centerY + Math.sin(p.angle) * (p.radius * 0.85) + mouseAttractY;

      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.sin(Date.now() * 0.003 * p.pulseSpeed) * 0.3 + 0.7;
      ctx.fill();
    });

    ctx.globalAlpha = 1.0;
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

// ==========================================================================
// 5. 3D TILT EFFECT ENGINE
// ==========================================================================
function init3DTilt() {
  const tiltCards = document.querySelectorAll('[data-tilt]');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;

      // Update sheen position variables
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${percentX}%`);
      card.style.setProperty('--mouse-y', `${percentY}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// ==========================================================================
// 6. GENERATIVE PROMPT BAR & SCANLINE ENGINE
// ==========================================================================
function initGenerativePrompt() {
  const input = document.getElementById('promptInput');
  const generateBtn = document.getElementById('promptGenerateBtn');
  const clearBtn = document.getElementById('promptClearBtn');
  const laser = document.getElementById('scanlineLaser');
  const chips = document.querySelectorAll('.prompt-chip');

  function triggerGeneration(query) {
    sounds.playScan();

    // Trigger Laser Scanline Animation
    if (laser) {
      laser.classList.remove('active');
      void laser.offsetWidth; // force reflow
      laser.classList.add('active');
    }

    const q = (query || input.value || '').toLowerCase();

    // Intelligent query routing
    setTimeout(() => {
      if (q.includes('cosmetic') || q.includes('ourvita') || q.includes('skincare')) {
        showToast('Generated: Scrolled to Ourvita Cosmetic Case Study');
        document.getElementById('ourvita-case')?.scrollIntoView({ behavior: 'smooth' });
      } else if (q.includes('social') || q.includes('instagram') || q.includes('facebook') || q.includes('ad')) {
        showToast('Generated: Scrolled to Social Media Campaigns');
        document.getElementById('social-media')?.scrollIntoView({ behavior: 'smooth' });
      } else if (q.includes('packag') || q.includes('fmcg') || q.includes('bottle') || q.includes('dates')) {
        showToast('Generated: Scrolled to Product Packaging Design');
        document.getElementById('packaging')?.scrollIntoView({ behavior: 'smooth' });
      } else if (q.includes('print') || q.includes('brochure') || q.includes('billboard')) {
        showToast('Generated: Scrolled to Print Media & Billboards');
        document.getElementById('print-media')?.scrollIntoView({ behavior: 'smooth' });
      } else if (q.includes('ui') || q.includes('ux') || q.includes('epic') || q.includes('poppy') || q.includes('app')) {
        showToast('Generated: Scrolled to UI/UX Digital Product Redesigns');
        document.getElementById('uiux')?.scrollIntoView({ behavior: 'smooth' });
      } else if (q.includes('health') || q.includes('cardiology') || q.includes('hospital')) {
        showToast('Filtered: Displaying Healthcare & Cardiology logos');
        filterLogos('health');
        document.getElementById('logofolio')?.scrollIntoView({ behavior: 'smooth' });
      } else if (q.includes('luxury') || q.includes('resort') || q.includes('hotel')) {
        showToast('Filtered: Displaying Hospitality & Luxury brands');
        filterLogos('luxury');
        document.getElementById('logofolio')?.scrollIntoView({ behavior: 'smooth' });
      } else if (q.includes('tech') || q.includes('security')) {
        showToast('Filtered: Displaying Tech & Cyber brands');
        filterLogos('tech');
        document.getElementById('logofolio')?.scrollIntoView({ behavior: 'smooth' });
      } else if (q.includes('about') || q.includes('aviral')) {
        showToast('Navigated: About Executive Director Aviral Uttam');
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        showToast('✨ Generative prompt rendered new creative parameters!');
      }
    }, 600);
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', () => triggerGeneration(input?.value));
  }

  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') triggerGeneration(input.value);
    });
  }

  if (clearBtn && input) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      input.focus();
      sounds.playClick(400);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const promptText = chip.getAttribute('data-prompt');
      if (input && promptText) {
        input.value = promptText;
        triggerGeneration(promptText);
      }
    });
  });
}

// ==========================================================================
// 7. LOGOFOLIO FILTER & INSPECTOR MODAL
// ==========================================================================
function filterLogos(sector) {
  const cards = document.querySelectorAll('.logo-card');
  const pills = document.querySelectorAll('.filter-pill');

  pills.forEach(pill => {
    if (pill.getAttribute('data-filter') === sector) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  cards.forEach(card => {
    const cardSector = card.getAttribute('data-sector');
    if (sector === 'all' || cardSector === sector) {
      card.style.display = 'flex';
      card.style.opacity = '1';
    } else {
      card.style.display = 'none';
      card.style.opacity = '0';
    }
  });
}

function initLogofolio() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const sector = pill.getAttribute('data-filter');
      sounds.playClick(700);
      filterLogos(sector);
    });
  });

  // Modal inspection setup
  const modal = document.getElementById('logoModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalStage = document.getElementById('modalLogoStage');
  const modalSector = document.getElementById('modalSectorTag');
  const modalName = document.getElementById('modalBrandName');
  const modalConcept = document.getElementById('modalConceptText');
  const modalType = document.getElementById('modalTypeSpec');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalSwatches = document.getElementById('modalSwatchesRow');

  function openModal(logoId) {
    const data = LOGOS_DATA[logoId];
    if (!data || !modal) return;

    modalStage.innerHTML = data.svg;
    modalSector.textContent = data.sector;
    modalName.textContent = data.name;
    modalConcept.textContent = data.concept;
    modalType.textContent = data.typography;
    modalDeliverables.textContent = data.deliverables;

    modalSwatches.innerHTML = '';
    data.colors.forEach(hex => {
      const chip = document.createElement('div');
      chip.className = 'modal-swatch-chip';
      chip.style.backgroundColor = hex;
      chip.title = `Copy ${hex}`;
      chip.addEventListener('click', () => {
        navigator.clipboard.writeText(hex);
        showToast(`Copied ${hex} to clipboard!`);
        sounds.playClick(900);
      });
      modalSwatches.appendChild(chip);
    });

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    sounds.playClick(600);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    sounds.playClick(450);
  }

  const logoCards = document.querySelectorAll('.logo-card');
  logoCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-logo-id');
      if (id) openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });
}

// ==========================================================================
// 8. OURVITA CASE STUDY: TABS, TYPE TESTER & COLOR STUDIO
// ==========================================================================
function initCaseStudy() {
  // 1. Tab switching
  const tabBtns = document.querySelectorAll('.case-tab-btn');
  const panes = document.querySelectorAll('.case-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
      sounds.playClick(650);
    });
  });

  // 2. Interactive Type Tester
  const textInput = document.getElementById('fontTesterInput');
  const sizeSlider = document.getElementById('fontSizeSlider');
  const sizeDisplay = document.getElementById('fontSizeDisplay');
  const spacingSlider = document.getElementById('letterSpacingSlider');
  const spacingDisplay = document.getElementById('spacingDisplay');
  const sampleText = document.getElementById('liveSampleText');

  if (textInput && sampleText) {
    textInput.addEventListener('input', () => {
      sampleText.textContent = textInput.value || 'Labora Regular — Pure Botanical Harmony';
    });
  }

  if (sizeSlider && sampleText && sizeDisplay) {
    sizeSlider.addEventListener('input', () => {
      const val = sizeSlider.value;
      sampleText.style.fontSize = `${val}px`;
      sizeDisplay.textContent = `${val}px`;
    });
  }

  if (spacingSlider && sampleText && spacingDisplay) {
    spacingSlider.addEventListener('input', () => {
      const val = spacingSlider.value;
      sampleText.style.letterSpacing = `${val}px`;
      spacingDisplay.textContent = `${val}px`;
    });
  }

  // 3. Palette Studio & Hex Copier
  const swatchCards = document.querySelectorAll('.color-swatch-card');
  const previewCanvas = document.getElementById('paletteTestCanvas');
  const accentLabel = document.getElementById('currentAccentLabel');

  swatchCards.forEach(card => {
    card.addEventListener('click', () => {
      const hex = card.getAttribute('data-hex');
      if (hex) {
        navigator.clipboard.writeText(hex);
        showToast(`Copied ${hex} to clipboard!`);
        sounds.playClick(800);

        if (previewCanvas && accentLabel) {
          previewCanvas.style.backgroundColor = hex;
          accentLabel.textContent = hex;

          // Auto detect light/dark text contrast
          if (hex === '#E8E8D6') {
            previewCanvas.classList.remove('dark-tint');
            previewCanvas.classList.add('light-tint');
          } else {
            previewCanvas.classList.remove('light-tint');
            previewCanvas.classList.add('dark-tint');
          }
        }
      }
    });
  });
}

// ==========================================================================
// 8.5 SOCIAL MEDIA TABS & OUTRO CTA
// ==========================================================================
function initSocialMediaTabs() {
  const btns = document.querySelectorAll('.social-tab-btn');
  const panel1 = document.getElementById('socialSet1');
  const panel2 = document.getElementById('socialSet2');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-social');
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (target === 'set1') {
        panel1?.classList.add('active');
        panel2?.classList.remove('active');
      } else {
        panel2?.classList.add('active');
        panel1?.classList.remove('active');
      }
      sounds.playClick(600);
    });
  });

  const outroBtn = document.getElementById('outroHireBtn');
  const drawer = document.getElementById('contactDrawer');
  if (outroBtn && drawer) {
    outroBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      sounds.playScan();
    });
  }
}

// ==========================================================================
// 8.6 PACKAGING COLLECTION TABS
// ==========================================================================
function initPackagingTabs() {
  const btns = document.querySelectorAll('.pkg-tab-btn');
  const stage1 = document.getElementById('pkgStage1');
  const stage2 = document.getElementById('pkgStage2');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-pkg');
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (target === 'pkg1') {
        stage1?.classList.add('active');
        stage2?.classList.remove('active');
        showToast('Viewing Collection 01: Gourmet Organics & FMCG');
      } else {
        stage2?.classList.add('active');
        stage1?.classList.remove('active');
        showToast('Viewing Collection 02: Retail Confectionery & Hardware');
      }
      sounds.playClick(650);
    });
  });
}

// ==========================================================================
// 8.7 BILLBOARD SPOTLIGHT NIGHT FLOODLIGHTS
// ==========================================================================
function initBillboardLighting() {
  const toggleBtn = document.getElementById('toggleSpotlightBtn');
  const billboardWrapper = document.getElementById('billboardWrapper');

  if (!toggleBtn || !billboardWrapper) return;

  toggleBtn.addEventListener('click', () => {
    const isNight = billboardWrapper.classList.toggle('night-mode');
    toggleBtn.classList.toggle('active', isNight);

    if (isNight) {
      toggleBtn.innerHTML = '💡 Night Floodlights ON';
      showToast('Highway unipole night floodlights activated!');
      sounds.playScan();
    } else {
      toggleBtn.innerHTML = '💡 Toggle Night Floodlights';
      showToast('Daylight view restored');
      sounds.playClick(500);
    }
  });
}

// ==========================================================================
// 8.8 INTERACTIVE BEFORE / AFTER SLIDER (EPIC GAMES STORE)
// ==========================================================================
function initCompareSlider() {
  const slider = document.getElementById('compareSlider');
  const handle = document.getElementById('compareHandle');
  if (!slider || !handle) return;

  let isDragging = false;

  function updatePosition(clientX) {
    const rect = slider.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    let pct = (offsetX / rect.width) * 100;
    pct = Math.max(5, Math.min(95, pct));
    handle.style.left = `${pct}%`;
  }

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    updatePosition(e.clientX);
    sounds.playClick(700);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
    }
  });

  // Touch support for mobile devices
  slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches[0]) updatePosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Smooth hover follower
  slider.addEventListener('mousemove', (e) => {
    if (!isDragging) {
      updatePosition(e.clientX);
    }
  });
}

// ==========================================================================
// 8.9 LIVSPACE BROCHURE CATALOG MODAL
// ==========================================================================
function initBrochureModal() {
  const openBtn = document.getElementById('openBrochureModalBtn');
  const modal = document.getElementById('brochureModal');
  const closeBtn = document.getElementById('brochureCloseBtn');
  const spreadBtns = document.querySelectorAll('.spread-nav-btn');
  const tagEl = document.getElementById('spreadTag');
  const titleEl = document.getElementById('spreadTitle');
  const descEl = document.getElementById('spreadDesc');
  const imgEl = document.getElementById('brochureStageImg');

  const SPREADS = [
    {
      tag: 'SPREAD 01 / 06',
      title: 'Cover & Thank You Back',
      desc: 'Minimalist dark backdrop with striking amber lounge seating and brand logo lockup for premium residential appeal.',
      scale: 1,
      origin: 'center center'
    },
    {
      tag: 'SPREAD 02 / 06',
      title: 'About Us & Content Index',
      desc: 'Corporate philosophy, design methodology pillars, and modular directory for comprehensive home space planning.',
      scale: 1.08,
      origin: '35% 30%'
    },
    {
      tag: 'SPREAD 03 / 06',
      title: 'Customize Your Living Room',
      desc: 'Warm earth tones, modern acoustic slat panels, and modular luxury seating arrangements tailored for family living.',
      scale: 1.12,
      origin: '75% 30%'
    },
    {
      tag: 'SPREAD 04 / 06',
      title: 'Customize Your Bedroom',
      desc: 'Emerald velvet tufted headboard, hidden LED cove lighting, and bespoke minimalist wardrobing suites.',
      scale: 1.12,
      origin: '15% 75%'
    },
    {
      tag: 'SPREAD 05 / 06',
      title: 'Customize Your Kitchen',
      desc: 'High-gloss crimson lacquer cabinetry, quartz waterfall breakfast counter, and integrated smart appliances.',
      scale: 1.12,
      origin: '50% 75%'
    },
    {
      tag: 'SPREAD 06 / 06',
      title: 'Customize Your Bathroom',
      desc: 'Midnight slate porcelain slabs, floating vanity with brushed brass hardware, and frameless walk-in glass shower.',
      scale: 1.12,
      origin: '85% 75%'
    }
  ];

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    sounds.playScan();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (imgEl) {
      imgEl.style.transform = 'scale(1)';
    }
    sounds.playClick(400);
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  spreadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-spread') || '0', 10);
      spreadBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = SPREADS[idx];
      if (data) {
        if (tagEl) tagEl.textContent = data.tag;
        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.desc;
        if (imgEl) {
          imgEl.style.transformOrigin = data.origin;
          imgEl.style.transform = `scale(${data.scale})`;
        }
      }
      sounds.playClick(750);
    });
  });
}

// ==========================================================================
// 9. CONTACT DRAWER & FORM TRANSMISSION (DIRECT TO aviraluttam@gmail.com)
// ==========================================================================
function initContactDrawer() {
  const drawer = document.getElementById('contactDrawer');
  const openNavBtn = document.getElementById('openContactBtn');
  const aboutHireBtn = document.getElementById('aboutHireBtn');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitFormBtn');
  const btnText = submitBtn?.querySelector('.btn-text');
  const btnIcon = submitBtn?.querySelector('.btn-icon');
  const successMsg = document.getElementById('formSuccessMsg');
  const errorMsg = document.getElementById('formErrorMsg');
  const errorText = document.getElementById('formErrorText');

  function openDrawer(e) {
    if (e) e.preventDefault();
    if (!drawer) return;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    sounds.playClick(600);
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    sounds.playClick(400);
  }

  if (openNavBtn) openNavBtn.addEventListener('click', openDrawer);
  if (aboutHireBtn) aboutHireBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeDrawer();
    });
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      sounds.playScan();

      // Clear previous statuses
      successMsg?.classList.add('hidden');
      errorMsg?.classList.add('hidden');

      const nameVal = document.getElementById('clientName')?.value.trim() || '';
      const emailVal = document.getElementById('clientEmail')?.value.trim() || '';
      const serviceSelect = document.getElementById('projectType');
      const serviceVal = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : 'Creative Design';
      const messageVal = document.getElementById('projectMessage')?.value.trim() || 'No additional scope provided.';

      if (!nameVal || !emailVal) {
        showToast('Please provide your name and email address.');
        return;
      }

      // UI Loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        if (btnText) btnText.innerHTML = '<span class="loading-spinner"></span> Transmitting to Aviral...';
        if (btnIcon) btnIcon.style.display = 'none';
      }

      const payload = {
        name: nameVal,
        email: emailVal,
        service_requirement: serviceVal,
        message: messageVal,
        _subject: `⚡ New Project Brief: ${nameVal} — ${serviceVal}`,
        _replyto: emailVal,
        _template: 'table',
        _captcha: 'false'
      };

      try {
        const response = await fetch('https://formsubmit.co/ajax/aviraluttam@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok || data.success === 'true' || data.success === true) {
          sounds.playScan();
          if (btnText) btnText.textContent = '✓ Brief Dispatched!';
          if (successMsg) successMsg.classList.remove('hidden');
          showToast('✓ Dispatched directly to aviraluttam@gmail.com!');

          setTimeout(() => {
            form.reset();
            if (submitBtn) submitBtn.disabled = false;
            if (btnText) btnText.textContent = 'Transmit Project Brief';
            if (btnIcon) btnIcon.style.display = '';
          }, 3500);
        } else {
          throw new Error(data.message || 'Dispatch service did not confirm transmission.');
        }
      } catch (err) {
        console.warn('FormSubmit.co transmission notice:', err);
        sounds.playClick(300);

        if (errorMsg) {
          if (errorText) {
            errorText.textContent = `Direct dispatch could not connect. Launching prefilled mailto client to aviraluttam@gmail.com...`;
          }
          errorMsg.classList.remove('hidden');
        }

        showToast('Opening default email client as fallback...');

        // Fallback: Launch mailto directly so the inquiry is NEVER lost
        const subject = encodeURIComponent(`⚡ Creative Project Brief from ${nameVal} — ${serviceVal}`);
        const body = encodeURIComponent(
          `Hello Aviral,\n\nName / Organization: ${nameVal}\nEmail: ${emailVal}\nService Requirement: ${serviceVal}\n\nProject Scope & Ambitions:\n${messageVal}\n\n— Transmitted from Graphic Design Portfolio 2026`
        );
        window.location.href = `mailto:aviraluttam@gmail.com?subject=${subject}&body=${body}`;

        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Transmit Project Brief';
        if (btnIcon) btnIcon.style.display = '';
      }
    });
  }
}

// ==========================================================================
// 10. SOUND TOGGLE & TOAST HELPER
// ==========================================================================
function initSoundToggle() {
  const toggleBtn = document.getElementById('soundToggle');
  const iconOn = toggleBtn?.querySelector('.icon-sound-on');
  const iconOff = toggleBtn?.querySelector('.icon-sound-off');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const muted = sounds.toggleMute();
      if (muted) {
        iconOn?.classList.add('hidden');
        iconOff?.classList.remove('hidden');
        showToast('Sound effects muted');
      } else {
        iconOff?.classList.add('hidden');
        iconOn?.classList.remove('hidden');
        sounds.playClick(800);
        showToast('Sound effects enabled');
      }
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// 11. BOOTSTRAP INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initOrbParticleCanvas();
  init3DTilt();
  initGenerativePrompt();
  initLogofolio();
  initCaseStudy();
  initSocialMediaTabs();
  initPackagingTabs();
  initBillboardLighting();
  initCompareSlider();
  initBrochureModal();
  initContactDrawer();
  initSoundToggle();

  console.log('⚡ Aviral Uttam Creative Ad Tech & Graphic Design Engine loaded successfully.');
});
