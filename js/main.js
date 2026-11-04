/**
 * MAMA BHANJA INTERIOR (मामा भांजा इंटीरियर)
 * गृहसज्जा एवं नवीनीकरण | "आपके सपनो का घर, हमारा प्रयास!"
 * निदेशक: प्रोफेसर विजय शर्मा | संपर्क: +91 8354099023
 * Matiyari, Lucknow - 226028, Uttar Pradesh
 * Specialists in: Home Decor, Modular Kitchen, False Ceiling, Wallpapers, Painting, Renovations
 */

document.addEventListener('DOMContentLoaded', () => {
  const CONFIG = {
    businessName: "Mama Bhanja Interior & Enterprises",
    hindiName: "मामा भांजा इंटीरियर",
    slogan: "आपके सपनो का घर, हमारा प्रयास!",
    artisanName: "प्रोफेसर विजय शर्मा (निदेशक)",
    phoneDisplay: "+91 8354099023",
    phoneRaw: "+918354099023",
    whatsappNumber: "918354099023",
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
      specs: ["Lifespan: 50+ Saal", "Termite Proof: 100% Guaranteed", "Best For: Main Entrance Doors, Pooja Mandir, Solid Dining Sets"],
      price: "₹3,500 - ₹5,500 / cu.ft",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    sheesham: {
      title: "Pure Solid Sheesham (Indian Rosewood)",
      tag: "Heavy Density Solid Hardwood",
      desc: "Distinctive two-tone natural wood grain with extreme load-bearing strength. Perfect for heavy hydraulic box beds, 8-seater dining tables and luxury sofa frames.",
      specs: ["Lifespan: 40+ Saal", "Finish: High Gloss / Matte PU", "Best For: Hydraulic Beds, Dining Tables, Sofa Frames"],
      price: "₹1,800 - ₹2,800 / cu.ft",
      img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
    },
    marineply: {
      title: "Century & Greenply 710 BWP Marine Ply",
      tag: "Boiling Waterproof Marine Grade",
      desc: "Chemically treated against borer and fungus with 72-hour boiling water resistance. Precision calibrated core ensuring zero warping for modular kitchens and wardrobes.",
      specs: ["Warranty: 15-25 Saal Company", "Moisture Proof: 100% BWP Calibrated", "Best For: Modular Kitchen Cabinets, Sliding Wardrobes"],
      price: "₹95 - ₹160 / sq.ft",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    fluted: {
      title: "Acoustic Fluted Louvers & Smoked Glass",
      tag: "Modern Architectural Accent",
      desc: "Charcoal and wooden fluted louvers paired with smoked fluted glass for high-end wardrobe shutters, TV wall backdrops and partition screens.",
      specs: ["Style: Japandi & Contemporary", "Lighting: Integrated Sensor LED Profile", "Best For: TV Media Wall, Designer Almirah Shutters"],
      price: "₹280 - ₹450 / sq.ft",
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    },
    italianpu: {
      title: "Italian High-Gloss & Satin PU Polish",
      tag: "Mirror-Reflective Luxury Polish",
      desc: "Multi-coat polyurethane Italian wood polish offering scratch-proof, heat-proof and crystal-clear depth that brings old and new wood to showroom life.",
      specs: ["Finish: Gloss / Satin Matte", "Scratch Resistance: Ultra High", "Best For: Dining Table Tops, Sagwan Doors, Antique Furniture"],
      price: "₹45 - ₹90 / sq.ft",
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
        `Namaste Vijay Sharma ji! Mujhe *${data.title}* ke baare mein janna hai aur is lakdi se apne ghar (Lucknow) mein furniture banwana hai. Kripya rates batayein.`
      );
      timberWhatsApp.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}`;
    });
  });

  // --- 5. Interactive Cost Calculator ---
  const calcService = document.getElementById('calcService');
  const calcSize = document.getElementById('calcSize');
  const calcSizeDisplay = document.getElementById('calcSizeDisplay');
  const calcMaterial = document.getElementById('calcMaterial');
  const calcResultPrice = document.getElementById('calcResultPrice');
  const calcResultDesc = document.getElementById('calcResultDesc');
  const calcWhatsAppBtn = document.getElementById('calcWhatsAppBtn');

  const recalculate = () => {
    if (!calcService || !calcSize || !calcMaterial) return;

    const service = calcService.value;
    const size = parseFloat(calcSize.value) || 50;
    const matMult = parseFloat(calcMaterial.value) || 1.25;

    if (calcSizeDisplay) calcSizeDisplay.textContent = size;

    let baseRate = 1250;
    let unitLabel = "sq.ft";
    let serviceName = "Modular Kitchen";

    switch(service) {
      case 'kitchen':
        baseRate = 1250;
        unitLabel = "sq.ft";
        serviceName = "Modular Kitchen";
        break;
      case 'wardrobe':
        baseRate = 980;
        unitLabel = "sq.ft";
        serviceName = "Sliding Wardrobe";
        break;
      case 'ceiling':
        baseRate = 110;
        unitLabel = "sq.ft";
        serviceName = "False Ceiling (फॉल्स सीलिंग)";
        break;
      case 'wallpaper':
        baseRate = 65;
        unitLabel = "sq.ft";
        serviceName = "Luxury Wallpapers (वॉलपेपर)";
        break;
      case 'painting':
        baseRate = 38;
        unitLabel = "sq.ft";
        serviceName = "Home Painting & Polish (पेंटिंग)";
        break;
      case 'renovation':
        baseRate = 350;
        unitLabel = "sq.ft";
        serviceName = "Complete Renovation (गृहसज्जा एवं नवीनीकरण)";
        break;
      case 'bed':
        baseRate = 18500 / 50; // normalized to scale with slider
        unitLabel = "Double Bed Unit";
        serviceName = "Hydraulic Double Bed";
        break;
      case 'door':
        baseRate = 4800 / 30;
        unitLabel = "Sagwan Door Unit";
        serviceName = "Sagwan Teak Main Door";
        break;
      case 'tv':
        baseRate = 340;
        unitLabel = "sq.ft";
        serviceName = "Fluted TV Unit & Mandir";
        break;
      case 'polish':
        baseRate = 55;
        unitLabel = "sq.ft";
        serviceName = "Italian PU Polish";
        break;
    }

    const calculated = Math.round(baseRate * size * matMult);
    const minP = Math.round(calculated * 0.95);
    const maxP = Math.round(calculated * 1.15);

    calcResultPrice.textContent = `₹${minP.toLocaleString('en-IN')} - ₹${maxP.toLocaleString('en-IN')}`;
    calcResultDesc.textContent = `Anumanit kharcha for ${size} ${unitLabel} (${serviceName}) with chosen timber & finish grade.`;

    const matText = calcMaterial.options[calcMaterial.selectedIndex].text;
    const waText = encodeURIComponent(
      `Namaste Prof. Vijay Sharma ji (मामा भांजा इंटीरियर)!\nMaine aapki website ke Cost Calculator se estimate nikala hai:\n• Service: *${serviceName}*\n• Approx Size: *${size} ${unitLabel}*\n• Material / Finish: *${matText}*\n• Estimated Budget: *₹${minP.toLocaleString('en-IN')} - ₹${maxP.toLocaleString('en-IN')}*\n\nKripya mere ghar (Lucknow) aakar free mein naap lein aur pakka estimate dein.`
    );
    calcWhatsAppBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${waText}`;
  };

  if (calcService && calcSize && calcMaterial) {
    calcService.addEventListener('change', recalculate);
    calcSize.addEventListener('input', recalculate);
    calcMaterial.addEventListener('change', recalculate);
    recalculate();
  }

  // --- 6. Portfolio Filter System ---
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
          `Namaste Prof. Vijay Sharma ji! Maine Mama Bhanja Interior website par "${title}" (${loc}) ka photo dekha. Mujhe bhi apne ghar par aisa hi interior/carpentry kaam karwana hai. Kripya details dein.`
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
        alert('Kripya apna poora naam likhein.');
        return;
      }

      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phone.replace(/[\s\-\+91]/g, ''))) {
        alert('Kripya 10-digit sahi mobile number darj karein.');
        return;
      }

      if (!service) {
        alert('Kripya service select karein.');
        return;
      }

      if (!location) {
        alert('Kripya apna area / locality (e.g. Matiyari, Gomti Nagar) darj karein.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Bheja ja raha hai...`;

      const waMsg = encodeURIComponent(
        `Namaste Prof. Vijay Sharma ji (मामा भांजा इंटीरियर)!\n\nMera naam: *${name}*\nMobile: *${phone}*\nService Required: *${service}*\nLucknow Area: *${location}*\nDetails: ${message || 'Ghar par aakar free naap lein aur quotation dein.'}`
      );

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Enquiry Bhejein &bull; Free Site Visit Payein &rarr;`;

        if (formFeedback) {
          formFeedback.classList.remove('hidden');
          formFeedback.innerHTML = `
            <div class="p-4 bg-emerald-950/90 border border-emerald-500/50 rounded-xl text-emerald-200">
              <strong class="text-white text-base">Shukriya, ${name} ji!</strong><br>
              Aapki enquiry <em>${service}</em> ke liye <strong>मामा भांजा इंटीरियर (Mama Bhanja Interior)</strong> mein darj ho gayi hai. <strong>प्रोफेसर विजय शर्मा (+91 8354099023)</strong> aapse jaldi contact karenge.
              <div class="mt-3">
                <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-4 py-2.5 rounded-lg text-sm transition-all shadow-lg">
                  Direct WhatsApp Par Message Bhejein &rarr;
                </a>
              </div>
            </div>
          `;
        }
        contactForm.reset();
      }, 400);
    });
  }

  // --- 10. Service Card WhatsApp Triggers ---
  document.querySelectorAll('[data-service-wa]').forEach(el => {
    const sName = el.getAttribute('data-service-wa') || 'Carpentry';
    const msg = encodeURIComponent(`Namaste Prof. Vijay Sharma ji! Mujhe Mama Bhanja Interior se Lucknow mein *${sName}* ka kaam karwana hai. Kripya rates aur estimation share karein.`);
    el.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
  });

  console.log("Mama Bhanja Interior Master UI Engine Ready.");
});
