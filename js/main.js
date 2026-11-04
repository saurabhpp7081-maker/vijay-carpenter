/**
 * MAMA BHANJA INTERIOR
 * Home Decor & Renovations | "Your Dream Home, Our Passionate Craft!"
 * Director: Prof. Vijay Sharma | Contact: +91 8354099023
 * Matiyari, Lucknow - 226028, Uttar Pradesh
 * Specialists in: Home Decor, Modular Kitchen, False Ceiling, Wallpapers, Painting, Renovations
 */

document.addEventListener('DOMContentLoaded', () => {
  const CONFIG = {
    businessName: "Mama Bhanja Interior",
    tagline: "Your Dream Home, Our Passionate Craft!",
    artisanName: "Prof. Vijay Sharma (Director)",
    phoneDisplay: "+91 8354099023",
    phoneRaw: "+918354099023",
    whatsappNumber: "918354099023",
    leadEmail: "saurabhpp7081@gmail.com",
    web3formsAccessKey: "9a69c94f-9f72-4a97-9c17-70d4a9da8f2c", // Replace with free Access Key from web3forms.com
    location: "Matiyari Chauraha, Near Chinhat, Lucknow - 226028",
    pincode: "226028"
  };

  // --- 1. Sticky Navigation Scroll Effect ---
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-black/95', 'shadow-2xl', 'py-3');
      header.classList.remove('py-4');
    } else {
      header.classList.remove('bg-black/95', 'shadow-2xl', 'py-3');
      header.classList.add('py-4');
    }
  }, { passive: true });

  // --- 2. Mobile Menu Toggle ---
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // --- 3. Interactive Before & After Image Comparison Slider ---
  const baContainer = document.getElementById('baContainer');
  const baBefore = document.getElementById('baBefore');
  const baHandle = document.getElementById('baHandle');

  if (baContainer && baBefore && baHandle) {
    let isDragging = false;

    const setPosition = (clientX) => {
      const rect = baContainer.getBoundingClientRect();
      let posX = clientX - rect.left;
      if (posX < 0) posX = 0;
      if (posX > rect.width) posX = rect.width;
      const percentage = (posX / rect.width) * 100;
      baBefore.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      baHandle.style.left = `${percentage}%`;
    };

    // Initial 50%
    baBefore.style.clipPath = `polygon(0 0, 50% 0, 50% 100%, 0 100%)`;
    baHandle.style.left = `50%`;

    const startDrag = (e) => {
      isDragging = true;
      setPosition(e.touches ? e.touches[0].clientX : e.clientX);
    };

    const stopDrag = () => {
      isDragging = false;
    };

    const onDrag = (e) => {
      if (!isDragging) return;
      setPosition(e.touches ? e.touches[0].clientX : e.clientX);
    };

    baContainer.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', onDrag);

    baContainer.addEventListener('touchstart', startDrag, { passive: true });
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('touchmove', onDrag, { passive: true });
  }

  // --- 4. Interactive Timber & Materials Showcase Board ---
  const timberData = {
    sagwan: {
      title: "Burma & CP Teak (Sagwan)",
      tag: "100% Solid Seasoned Sagwan",
      desc: "Gold standard of Indian woodworking. Naturally resistant to termites, moisture and cracking. Unmatched warm golden honey tone that ages gracefully over 50+ years.",
      specs: ["Lifespan: 50+ Years", "Termite Proof: 100% Guaranteed", "Best For: Main Entrance Doors, Pooja Mandir, Solid Dining Sets"],
      price: "Custom Quote On Request",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    sheesham: {
      title: "Pure Solid Sheesham (Indian Rosewood)",
      tag: "Heavy Density Solid Hardwood",
      desc: "Distinctive two-tone natural wood grain with extreme load-bearing strength. Perfect for heavy hydraulic box beds, 8-seater dining tables and luxury sofa frames.",
      specs: ["Lifespan: 40+ Years", "Finish: High Gloss / Matte PU", "Best For: Hydraulic Beds, Dining Tables, Sofa Frames"],
      price: "Custom Quote On Request",
      img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
    },
    marineply: {
      title: "Century & Greenply 710 BWP Marine Ply",
      tag: "Boiling Waterproof Marine Grade",
      desc: "Chemically treated against borer and fungus with 72-hour boiling water resistance. Precision calibrated core ensuring zero warping for modular kitchens and wardrobes.",
      specs: ["Warranty: 15-25 Years Manufacturer Guarantee", "Moisture Proof: 100% BWP Calibrated", "Best For: Modular Kitchen Cabinets, Sliding Wardrobes"],
      price: "Custom Quote On Request",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    fluted: {
      title: "Acoustic Fluted Louvers & Smoked Glass",
      tag: "Modern Architectural Accent",
      desc: "Charcoal and wooden fluted louvers paired with smoked fluted glass for high-end wardrobe shutters, TV wall backdrops and partition screens.",
      specs: ["Style: Japandi & Contemporary", "Lighting: Integrated Sensor LED Profile", "Best For: TV Media Wall, Designer Almirah Shutters"],
      price: "Custom Quote On Request",
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    },
    italianpu: {
      title: "Italian High-Gloss & Satin PU Polish",
      tag: "Mirror-Reflective Luxury Polish",
      desc: "Multi-coat polyurethane Italian wood polish offering scratch-proof, heat-proof and crystal-clear depth that brings old and new wood to showroom life.",
      specs: ["Finish: Gloss / Satin Matte", "Scratch Resistance: Ultra High", "Best For: Dining Table Tops, Sagwan Doors, Antique Furniture"],
      price: "Custom Quote On Request",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    }
  };

  const timberTabs = document.querySelectorAll('[data-timber-tab]');
  const timberImg = document.getElementById('timberImg');
  const timberTitle = document.getElementById('timberTitle');
  const timberTag = document.getElementById('timberTag');
  const timberDesc = document.getElementById('timberDesc');
  const timberSpecs = document.getElementById('timberSpecs');
  const timberPrice = document.getElementById('timberPrice');
  const timberWhatsApp = document.getElementById('timberWhatsApp');

  timberTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      timberTabs.forEach(t => {
        t.classList.remove('bg-amber-500', 'text-black', 'shadow-lg');
        t.classList.add('bg-stone-900', 'text-stone-300', 'border-stone-800');
      });
      tab.classList.add('bg-amber-500', 'text-black', 'shadow-lg');
      tab.classList.remove('bg-stone-900', 'text-stone-300', 'border-stone-800');

      const key = tab.getAttribute('data-timber-tab');
      const data = timberData[key];
      if (!data) return;

      timberImg.src = data.img;
      timberImg.alt = data.title;
      timberTitle.textContent = data.title;
      timberTag.textContent = data.tag;
      timberDesc.textContent = data.desc;
      timberPrice.textContent = data.price;

      timberSpecs.innerHTML = '';
      data.specs.forEach(sp => {
        const li = document.createElement('li');
        li.className = 'flex items-center gap-2 text-xs text-stone-200';
        li.innerHTML = `<span class="text-amber-400 font-bold">✓</span> ${sp}`;
        timberSpecs.appendChild(li);
      });

      const waMsg = encodeURIComponent(
        `Hello Prof. Vijay Sharma ji! I am interested in *${data.title}* and would like to build custom furniture for my home in Lucknow using this material. Please share catalogue details and a quotation.`
      );
      timberWhatsApp.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}`;
    });
  });

  // --- 5. Interactive Project & Quote Planner ---
  const calcService = document.getElementById('calcService');
  const calcSize = document.getElementById('calcSize');
  const calcSizeDisplay = document.getElementById('calcSizeDisplay');
  const calcMaterial = document.getElementById('calcMaterial');
  const calcResultPrice = document.getElementById('calcResultPrice');
  const calcResultDesc = document.getElementById('calcResultDesc');
  const calcWhatsAppBtn = document.getElementById('calcWhatsAppBtn');

  const updatePlanner = () => {
    if (!calcService || !calcSize || !calcMaterial) return;

    const service = calcService.value;
    const size = parseFloat(calcSize.value) || 50;

    if (calcSizeDisplay) calcSizeDisplay.textContent = size;

    let unitLabel = "sq.ft";
    let serviceName = "Modular Kitchen Design";

    switch(service) {
      case 'kitchen':
        unitLabel = "sq.ft";
        serviceName = "Modular Kitchen Design";
        break;
      case 'wardrobe':
        unitLabel = "sq.ft";
        serviceName = "Custom Sliding Wardrobe";
        break;
      case 'ceiling':
        unitLabel = "sq.ft";
        serviceName = "Designer False Ceiling";
        break;
      case 'wallpaper':
        unitLabel = "sq.ft";
        serviceName = "Luxury 3D Wallpapers";
        break;
      case 'painting':
        unitLabel = "sq.ft";
        serviceName = "Wall Painting & PU Wood Polish";
        break;
      case 'renovation':
        unitLabel = "sq.ft";
        serviceName = "Complete Turnkey Home Renovation";
        break;
      case 'bed':
        unitLabel = "Double Bed Unit";
        serviceName = "Hydraulic Storage Double Bed";
        break;
      case 'door':
        unitLabel = "Teak Door Unit";
        serviceName = "Solid Teak Wood Main Door";
        break;
      case 'tv':
        unitLabel = "sq.ft";
        serviceName = "Fluted TV Media Unit & Mandir";
        break;
      case 'polish':
        unitLabel = "sq.ft";
        serviceName = "Italian PU Wood Polish";
        break;
    }

    const matText = calcMaterial.options[calcMaterial.selectedIndex].text;
    if (calcResultPrice) {
      calcResultPrice.textContent = "Free Site Visit & Quote";
    }
    if (calcResultDesc) {
      calcResultDesc.textContent = `Tailored proposal for ${size} ${unitLabel} (${serviceName}) with ${matText}. Prof. Vijay Sharma will take laser measurements at your home for exact estimation.`;
    }

    const waText = encodeURIComponent(
      `Hello Prof. Vijay Sharma ji (Mama Bhanja Interior)!\nI would like to get a free measurement and customized quote for my home in Lucknow:\n• Service: *${serviceName}*\n• Approx Dimensions: *${size} ${unitLabel}*\n• Material / Finish: *${matText}*\n\nPlease arrange a convenient doorstep visit to inspect site requirements and provide an exact proposal.`
    );
    if (calcWhatsAppBtn) {
      calcWhatsAppBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waText}`;
    }
  };

  if (calcService && calcSize && calcMaterial) {
    calcService.addEventListener('change', updatePlanner);
    calcSize.addEventListener('input', updatePlanner);
    calcMaterial.addEventListener('change', updatePlanner);
    updatePlanner();
  }

  // --- 6. Portfolio Filter System with Re-play Animations ---
  const filterBtns = document.querySelectorAll('[data-portfolio-filter]');
  const portfolioItems = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-black', 'shadow-lg');
        b.classList.add('bg-stone-900', 'text-stone-300', 'border-stone-800');
      });
      btn.classList.add('bg-amber-500', 'text-black', 'shadow-lg');
      btn.classList.remove('bg-stone-900', 'text-stone-300', 'border-stone-800');

      const f = btn.getAttribute('data-portfolio-filter');
      portfolioItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (f === 'all' || cat === f) {
          item.style.display = 'flex';
          item.classList.remove('portfolio-card-animate');
          void item.offsetWidth; // Force CSS reflow to replay animation
          item.classList.add('portfolio-card-animate');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // --- 7. Lightbox Modal (Safely Hidden with pointer-events-none by default) ---
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxLoc = document.getElementById('lightboxLoc');
  const lightboxSpecs = document.getElementById('lightboxSpecs');
  const lightboxWaLink = document.getElementById('lightboxWaLink');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightboxModal) {
    portfolioItems.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-title') || 'Custom Furniture Project';
        const loc = card.getAttribute('data-loc') || 'Lucknow';
        const specs = card.getAttribute('data-specs') || 'Quality Hardwood & Marine Ply';
        const img = card.querySelector('img');
        const imgSrc = img ? img.src : '';

        lightboxImg.src = imgSrc;
        lightboxImg.alt = title;
        lightboxTitle.textContent = title;
        lightboxLoc.textContent = `Location: ${loc}`;
        lightboxSpecs.textContent = `Materials: ${specs}`;

        const waText = encodeURIComponent(
          `Hello Prof. Vijay Sharma ji! I saw the photo of "${title}" (${loc}) on your Mama Bhanja Interior website. I would like to get similar bespoke interior and woodwork done for my home in Lucknow. Please share details.`
        );
        lightboxWaLink.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waText}`;

        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // --- 8. FAQ Accordion ---
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isHidden = content.classList.contains('hidden');

      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (isHidden) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // --- 9. Lead Contact Form Validation & Direct WhatsApp Redirection ---
  const contactForm = document.getElementById('leadContactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('[name="customer_name"]').value.trim();
      const phone = contactForm.querySelector('[name="phone_number"]').value.trim();
      const service = contactForm.querySelector('[name="service_required"]').value;
      const location = contactForm.querySelector('[name="project_location"]').value.trim();
      const message = contactForm.querySelector('[name="message"]').value.trim();

      if (!name || name.length < 2) {
        alert('Please enter your full name.');
        return;
      }

      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phone.replace(/[\s\-\+91]/g, ''))) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }

      if (!service) {
        alert('Please select a service.');
        return;
      }

      if (!location) {
        alert('Please enter your locality or colony in Lucknow (e.g. Matiyari, Gomti Nagar).');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-flex items-center justify-center gap-2">
          <svg class="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Delivering Enquiry to Email...
        </span>
      `;

      const waMsg = encodeURIComponent(
        `Hello Prof. Vijay Sharma ji (Mama Bhanja Interior)!\n\nName: *${name}*\nPhone: *${phone}*\nService: *${service}*\nLucknow Location: *${location}*\nProject Details: ${message || 'Please schedule a free doorstep visit to take measurements and provide an itemized quote.'}`
      );

      // Submit lead directly to email via Web3Forms
      const formData = new FormData();
      formData.append("access_key", CONFIG.web3formsAccessKey);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("service", service);
      formData.append("location", location);
      formData.append("message", message || "Free doorstep laser measurement & quotation requested.");
      formData.append("subject", `New Lead: ${name} (${service} - ${location})`);
      formData.append("from_name", "Mama Bhanja Interior Website");

      fetch("https://api.web3forms.com/submit", {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (formFeedback) {
          formFeedback.classList.remove('hidden');
          formFeedback.innerHTML = `
            <div class="p-5 bg-emerald-950/90 border border-emerald-500/60 rounded-2xl text-emerald-200 space-y-3">
              <div class="flex items-center gap-2">
                <span class="text-xl">✅</span>
                <strong class="text-white text-base">Enquiry Sent to Email Successfully!</strong>
              </div>
              <p class="text-xs text-stone-200 leading-relaxed">
                Thank you, <strong>${name}</strong>. Your enquiry details have been delivered to our team's inbox (<strong>${CONFIG.leadEmail}</strong>). Director <strong>Prof. Vijay Sharma (+91 8354099023)</strong> will contact you promptly.
              </p>
              <div class="pt-2">
                <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-4 py-2.5 rounded-xl text-xs transition-all shadow-lg">
                  <span>💬 Also Connect on WhatsApp for Instant Confirmation &rarr;</span>
                </a>
              </div>
            </div>
          `;
        }
        contactForm.reset();
      })
      .catch(error => {
        console.error("Email submission error:", error);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (formFeedback) {
          formFeedback.classList.remove('hidden');
          formFeedback.innerHTML = `
            <div class="p-5 bg-emerald-950/90 border border-emerald-500/60 rounded-2xl text-emerald-200 space-y-3">
              <div class="flex items-center gap-2">
                <span class="text-xl">✅</span>
                <strong class="text-white text-base">Enquiry Received!</strong>
              </div>
              <p class="text-xs text-stone-200 leading-relaxed">
                Thank you, <strong>${name}</strong>. Director <strong>Prof. Vijay Sharma (+91 8354099023)</strong> will contact you promptly.
              </p>
              <div class="pt-2">
                <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-4 py-2.5 rounded-xl text-xs transition-all shadow-lg">
                  <span>💬 Connect on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>
          `;
        }
        contactForm.reset();
      });
    });
  }

  // --- 10. Service Card WhatsApp Triggers ---
  document.querySelectorAll('[data-service-wa]').forEach(el => {
    const sName = el.getAttribute('data-service-wa') || 'Carpentry & Interior Work';
    const msg = encodeURIComponent(`Hello Prof. Vijay Sharma ji! I would like to get *${sName}* done by Mama Bhanja Interior in Lucknow. Please share pricing and catalogue details.`);
    el.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
  });

  // --- 11. Intersection Observer for Smooth Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .reveal-zoom');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --- 12. Animated Number Counters ---
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const runCounter = (el) => {
      const target = parseFloat(el.getAttribute('data-target')) || 0;
      const isDecimal = el.getAttribute('data-decimals') === '1';
      const duration = 1800;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = target * easeProgress;

        el.textContent = isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = isDecimal ? target.toFixed(1) : target;
        }
      };
      requestAnimationFrame(updateCount);
    };

    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      counters.forEach(c => counterObserver.observe(c));
    } else {
      counters.forEach(c => runCounter(c));
    }
  }

  // --- 13. Interactive 3D Card Tilt with Dynamic Glare ---
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    // Add glare element if not already present
    if (!card.querySelector('.tilt-glare')) {
      const glare = document.createElement('div');
      glare.className = 'tilt-glare';
      card.appendChild(glare);
    }

    let rect = card.getBoundingClientRect();
    card.addEventListener('mouseenter', () => {
      rect = card.getBoundingClientRect();
    });

    card.addEventListener('mousemove', (e) => {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = (x / rect.width) * 100;
      const yPct = (y / rect.height) * 100;

      // Calculate tilt degrees (max 6 deg for subtle luxury feel)
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
      const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 6;

      card.style.setProperty('--mouse-x', `${xPct}%`);
      card.style.setProperty('--mouse-y', `${yPct}%`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // --- 14. Luxury Ambient Golden Embers Floating in Hero Background ---
  const canvas = document.getElementById('heroParticlesCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.offsetWidth;
    let height = canvas.height = canvas.parentElement.offsetHeight;

    window.addEventListener('resize', () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }, { passive: true });

    const particleCount = 28;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        increasing: Math.random() > 0.5
      });
    }

    let animationFrameId;
    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        // Move upward gently
        p.y -= p.speedY;
        p.x += p.speedX;

        // Reset if drifted out
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Alpha pulsing
        if (p.increasing) {
          p.alpha += p.pulseSpeed;
          if (p.alpha >= 0.7) p.increasing = false;
        } else {
          p.alpha -= p.pulseSpeed;
          if (p.alpha <= 0.15) p.increasing = true;
        }

        // Render golden glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(251, 191, 36, 0.8)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    // Pause when hero is not visible to conserve battery & CPU
    if ('IntersectionObserver' in window) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!animationFrameId) animateParticles();
          } else {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        });
      }, { threshold: 0.1 });
      heroObserver.observe(canvas.parentElement);
    } else {
      animateParticles();
    }
  }

  // --- 15. Background Video Smart Observer (Pause off-screen for 60fps smoothness) ---
  const bgVideos = document.querySelectorAll('.video-bg-container video');
  if ('IntersectionObserver' in window && bgVideos.length > 0) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1 });
    bgVideos.forEach(v => videoObserver.observe(v));
  }

  console.log("Mama Bhanja Interior UI Engine Initialized Successfully.");
});