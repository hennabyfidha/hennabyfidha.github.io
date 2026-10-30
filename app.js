// Authentic Portfolio Data curated directly from @hennabyfidha Instagram
const PORTFOLIO_ITEMS = [
  {
    id: 'royal-symmetrical',
    title: 'Royal Lotus & Mughal Arch Palms',
    category: 'bridal',
    categoryLabel: 'Royal Bridal',
    image: 'assets/images/bridal-royal-symmetrical.jpg',
    width: 1440,
    height: 1920,
    caption: 'Symmetrical full-arm bridal mehendi featuring lotus cuff borders, Mughal arches, negative-space floral mandalas, and custom hidden couple initials ("AS") woven into the wrist jaali.',
    tags: ['Full Bridal', 'Lotus Motifs', 'Hidden Initials', 'Mughal Arch'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DXRAalXASLe/'
  },
  {
    id: 'luxury-velvet-arabic',
    title: 'Couture Indo-Arabic Floral Trail',
    category: 'arabic',
    categoryLabel: 'Arabic & Khaleeji',
    image: 'assets/images/luxury-velvet-arabic.jpg',
    width: 1440,
    height: 1920,
    caption: 'Bold shaded roses and botanical vines flowing diagonally across the back of the hands, photographed on deep emerald velvet. A signature choice for Dubai Nikah and engagement soirées.',
    tags: ['Indo-Arabic', 'Shaded Florals', 'Nikah', 'Engagement'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DTp5JDXAWzE/'
  },
  {
    id: 'bridal-peacock-cuff',
    title: 'Regal Swan & Jhumka Full Bridal',
    category: 'bridal',
    categoryLabel: 'Royal Bridal',
    image: 'assets/images/bridal-peacock-cuff.jpg',
    width: 1440,
    height: 1918,
    caption: 'Intricate elbow-length bridal artistry featuring royal swan arches at the forearm cuff, diamond latticework, hanging jhumka bells, and layered concentric palm mandalas.',
    tags: ['Traditional Bridal', 'Swan Arch', 'Jhumka Border', 'Full Forearm'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DX3pYzZgRJH/'
  },
  {
    id: 'custom-skyline-bridal',
    title: 'Bespoke Gulf Skyline Bridal Cuff',
    category: 'custom',
    categoryLabel: 'Custom Story & Skylines',
    image: 'assets/images/custom-skyline-bridal.jpg',
    width: 1440,
    height: 1920,
    caption: 'Personalized destination bride henna illustrating an iconic Gulf skyline across the forearm cuff above lotus and jaali bands—crafted for brides celebrating their journey across the Arabian Gulf.',
    tags: ['Custom Skyline', 'Destination Bride', 'Storytelling Henna', 'GCC'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DS3uqPRAXjw/'
  },
  {
    id: 'bridal-lotus-arch',
    title: 'Jharokha Lotus Sanctuary Hands',
    category: 'bridal',
    categoryLabel: 'Royal Bridal',
    image: 'assets/images/bridal-lotus-arch.jpg',
    width: 1440,
    height: 1920,
    caption: 'Framed Mughal jharokha windows enclosing blooming lotus motifs on the back of both hands, surrounded by scrolling leafy vines up to the elbows.',
    tags: ['Jharokha Window', 'Lotus Cutout', 'Back Hand Bridal', 'Organic Stain'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DXTePxtAXGS/'
  },
  {
    id: 'bridal-monogram-as',
    title: 'Custom Monogram ("AS") Royal Bridal',
    category: 'bridal',
    categoryLabel: 'Royal Bridal',
    image: 'assets/images/bridal-monogram-as.jpg',
    width: 1440,
    height: 1800,
    caption: 'Bridal henna created for Suhana featuring a framed calligraphy monogram ("AS") on the upper forearm balanced by micro-checkered jaali and blooming rose palms.',
    tags: ['Couple Monogram', 'Bridal Palms', 'Calligraphy', 'Full Coverage'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DJa19eIBVNw/'
  },
  {
    id: 'eid-crescent-domes',
    title: 'Moonlit Mosque Domes & Crescent',
    category: 'custom',
    categoryLabel: 'Custom Story & Skylines',
    image: 'assets/images/eid-crescent-domes.jpg',
    width: 1440,
    height: 1920,
    caption: 'Eid & Ramadan couture henna featuring silhouette domes, crescent moons, celestial stars, reverse-filled lotus bands, and delicate finger jaali.',
    tags: ['Eid Henna', 'Islamic Architecture', 'Crescent Moon', 'Festive UAE'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DWDobOcgb15/'
  },
  {
    id: 'bridal-rose-fringe-cuff',
    title: 'Vintage Rose & Tassel Fringe Cuffs',
    category: 'bridal',
    categoryLabel: 'Royal Bridal',
    image: 'assets/images/bridal-rose-fringe-cuff.jpg',
    width: 1440,
    height: 1800,
    caption: 'Statement forearm cuffs crowned with shaded English roses, botanical chandelier fringes, reverse-filled lotus bands, and ornate wrist mandalas.',
    tags: ['Rose Cuff', 'Botanical Fringe', 'Reverse Lotus', 'Bridal'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DMafvYfhOn3/'
  },
  {
    id: 'bridal-lotus-feet',
    title: 'Delicate Lotus Vine Bridal Feet',
    category: 'engagement',
    categoryLabel: 'Nikah, Minimal & Feet',
    image: 'assets/images/bridal-lotus-feet.jpg',
    width: 1440,
    height: 1800,
    caption: 'Airy, organic crawling lotus vines and dainty toe detailing designed to complement bridal anklets and open-toe couture footwear.',
    tags: ['Bridal Feet', 'Lotus Vines', 'Minimalist', 'Organic Stain'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DMFqSCAzagu/'
  },
  {
    id: 'architect-bride-custom',
    title: 'The Architect Bride — Bespoke Concept',
    category: 'custom',
    categoryLabel: 'Custom Story & Skylines',
    image: 'assets/images/architect-bride-custom.jpg',
    width: 2268,
    height: 4032,
    caption: '"When the bride is an architect — each element in this mehndi design is custom-crafted to reflect her passion for design, structure, and creativity."',
    tags: ['Architect Bride', 'Geometric Precision', 'Custom Concept', 'Bridal'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/reel/DKWgBMGhSIb/'
  },
  {
    id: 'minimal-bridal-veil',
    title: 'Modern Architectural Lotus Cuff ("Nadha")',
    category: 'engagement',
    categoryLabel: 'Nikah, Minimal & Feet',
    image: 'assets/images/minimal-bridal-veil.jpg',
    width: 2268,
    height: 4032,
    caption: 'Contemporary negative-space vertical panels with suspended lotus buds and fine geometric finger netting—ideal for modern minimalist brides in Dubai and Abu Dhabi.',
    tags: ['Minimalist Bride', 'Vertical Panels', 'Lotus Buds', 'Modern'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/reel/DSzHJ6ggcNZ/'
  },
  {
    id: 'arabic-floral-party',
    title: 'Khaleeji Rose & Leafy Vine Trail',
    category: 'arabic',
    categoryLabel: 'Arabic & Khaleeji',
    image: 'assets/images/arabic-floral-party.jpg',
    width: 1440,
    height: 1920,
    caption: 'Graceful one-hand Arabic floral cuff flowing into delicate finger rings and leafy swirls—a favorite for Mylanchi nights, Eid gatherings, and wedding guests.',
    tags: ['Party Henna', 'Arabic Trail', 'Floral Cuff', 'Guest Styling'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DW808gfAQu5/'
  },
  {
    id: 'bride-portrait-himanshu',
    title: 'Radiant Bride with Teardrop Lotus Palms',
    category: 'bridal',
    categoryLabel: 'Royal Bridal',
    image: 'assets/images/bride-portrait-himanshu.jpg',
    width: 3216,
    height: 5712,
    caption: 'Bride Himanshu showcasing symmetrical teardrop lotus medallions framed by open lattice wrist cuffs and fine finger detailing.',
    tags: ['Real Bride', 'Teardrop Mandala', 'Bridal Portrait', 'Symmetry'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/reel/DSDGpHlAdjp/'
  },
  {
    id: 'arabic-twin-vines',
    title: 'Twin Botanical Arabic Flow',
    category: 'arabic',
    categoryLabel: 'Arabic & Khaleeji',
    image: 'assets/images/arabic-twin-vines.jpg',
    width: 1440,
    height: 1918,
    caption: 'Coordinated asymmetric Arabic floral trails on both hands with layered petal shading and classic dipped fingertips.',
    tags: ['Arabic Henna', 'Twin Trails', 'Botanical', 'Festive'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DUlJBiBgb7B/'
  },
  {
    id: 'engagement-lotus-wrist',
    title: 'Intimate Nikah Lotus Medallion Palms',
    category: 'engagement',
    categoryLabel: 'Nikah, Minimal & Feet',
    image: 'assets/images/engagement-lotus-wrist.jpg',
    width: 1440,
    height: 1918,
    caption: 'Wrist-length bridal & engagement henna centered around negative-space lotus medallions and delicate leafy scrollwork.',
    tags: ['Engagement', 'Nikah Henna', 'Wrist Length', 'Lotus Medallion'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DW33KMsExep/'
  },
  {
    id: 'bridal-initials-ja',
    title: 'Calligraphy Couple Names ("Aman & Jamath")',
    category: 'custom',
    categoryLabel: 'Custom Story & Skylines',
    image: 'assets/images/bridal-initials-ja.jpg',
    width: 1440,
    height: 1920,
    caption: 'Bespoke bridal palms featuring "JA" initials on one forearm and full couple calligraphy ("Aman & Jamath") on the other, surrounded by peacock-feather arcs.',
    tags: ['Couple Names', 'Bespoke Bridal', 'Calligraphy', 'Heirloom'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DPZHOongYzf/'
  },
  {
    id: 'bridal-jasmine-palms',
    title: 'Mylanchi Night Jasmine & Lotus Hands',
    category: 'engagement',
    categoryLabel: 'Nikah, Minimal & Feet',
    image: 'assets/images/bridal-jasmine-palms.jpg',
    width: 1215,
    height: 2160,
    caption: 'Bride Shafeena’s intricate lotus-heart medallions photographed over fresh white mogra jasmine garlands on a traditional banana leaf.',
    tags: ['Mylanchi Night', 'Jasmine & Henna', 'Lotus Heart', 'Bridal'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/reel/DW-_f9HAQgr/'
  },
  {
    id: 'indo-arabic-brocade',
    title: 'Scalloped Mandala & Jaali Wrist Cuffs',
    category: 'arabic',
    categoryLabel: 'Arabic & Khaleeji',
    image: 'assets/images/indo-arabic-brocade.jpg',
    width: 1440,
    height: 1918,
    caption: 'High-contrast Indo-Arabic back-hand mandalas paired with diamond dot-jaali wrist cuffs and bold negative-space finger caps.',
    tags: ['Indo-Arabic', 'Jaali Cuff', 'Mandala', 'Sangeet & Party'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DTLONowgZux/'
  },
  {
    id: 'engagement-checkered-palms',
    title: 'Checkered Lattice & Leaf-Tip Semi-Bridal',
    category: 'engagement',
    categoryLabel: 'Nikah, Minimal & Feet',
    image: 'assets/images/engagement-checkered-palms.jpg',
    width: 1440,
    height: 1920,
    caption: 'Refined mid-forearm engagement design combining checkered jaali diamonds, half-mandala palms, and delicate negative-space leaf motifs on the fingertips.',
    tags: ['Semi-Bridal', 'Engagement', 'Leaf Fingertips', 'Checkered Jaali'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DSz90EWAQip/'
  },
  {
    id: 'bridal-mandala-cuffs',
    title: 'Sunburst Mandala & Scallop Bridal Arms',
    category: 'bridal',
    categoryLabel: 'Royal Bridal',
    image: 'assets/images/bridal-mandala-cuffs.jpg',
    width: 1440,
    height: 1800,
    caption: 'Bridal henna created for Adhithya Nair featuring bold sunburst forearm mandalas, layered scalloped arches, and rich organic stain depth.',
    tags: ['Sunburst Mandala', 'Full Bridal', 'Scalloped Arch', 'Classic'],
    instaUrl: 'https://www.instagram.com/hennabyfidha/p/DJa2ItThVKH/'
  }
];

const INITIAL_VISIBLE_COUNT = 9;

// Validation Fallback Utility from modern-web-guidance (validate-input-after-interaction)
const UserInvalidFallback = (() => {
  const dirtyState = new WeakMap();

  const updateState = (input) => {
    const isValid = input.checkValidity();
    input.classList.toggle('user-invalid-fallback', !isValid);
    input.classList.toggle('user-valid-fallback', isValid);

    if (!isValid) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  };

  const handleEvent = (event) => {
    const input = event.target;

    if (event.type === 'reset') {
      const controls = input.elements || [];
      for (const control of controls) {
        dirtyState.delete(control);
        control.classList.remove('user-invalid-fallback');
        control.classList.remove('user-valid-fallback');
        control.removeAttribute('aria-invalid');
      }
      return;
    }

    if (!input.checkValidity) return;

    if (event.type === 'input' || event.type === 'change') {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(input, state);
      if (state.hasBlurred) {
        updateState(input);
      }
    } else if (event.type === 'blur') {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(input, state);
      if (state.hasInteracted) {
        updateState(input);
      }
    }
  };

  const init = (root = document) => {
    // Sync aria-invalid with native :user-invalid when supported
    const syncAria = (el) => {
      if (el && typeof el.matches === 'function' && el.form) {
        try {
          el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
        } catch {
          // Ignore unsupported selector
        }
      }
    };
    root.addEventListener('blur', (e) => syncAria(e.target), true);
    root.addEventListener('input', (e) => {
      if (e.target && e.target.hasAttribute && e.target.hasAttribute('aria-invalid')) {
        syncAria(e.target);
      }
    });

    if (typeof CSS !== 'undefined' && CSS.supports && CSS.supports('selector(:user-invalid)')) return;
    root.addEventListener('blur', handleEvent, true);
    root.addEventListener('input', handleEvent);
    root.addEventListener('change', handleEvent);
    root.addEventListener('reset', handleEvent, true);
  };

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioMoreWrap = document.getElementById('portfolioMoreWrap');
  const togglePortfolioBtn = document.getElementById('togglePortfolioBtn');

  const lightboxDialog = document.getElementById('portfolioLightbox');
  const lightboxFrame = document.getElementById('lightboxFrame');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxTags = document.getElementById('lightboxTags');
  const lightboxInstaLink = document.getElementById('lightboxInstaLink');
  const lightboxBookBtn = document.getElementById('lightboxBookBtn');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxFitToggle = document.getElementById('lightboxFitToggle');

  let currentFilter = 'all';
  let showAllInAllFilter = false;
  let filteredItems = [...PORTFOLIO_ITEMS];
  let activeLightboxIndex = 0;

  // Update filter button counts
  const updateFilterCounts = () => {
    filterBtns.forEach((btn) => {
      const cat = btn.dataset.filter;
      const countEl = btn.querySelector('.filter-count');
      if (!countEl) return;
      const count =
        cat === 'all'
          ? PORTFOLIO_ITEMS.length
          : PORTFOLIO_ITEMS.filter((item) => item.category === cat).length;
      countEl.textContent = count;
    });
  };

  // Render Minimalist Gallery-Grade Portfolio Cards
  const renderPortfolio = (category) => {
    currentFilter = category;
    filteredItems =
      category === 'all'
        ? [...PORTFOLIO_ITEMS]
        : PORTFOLIO_ITEMS.filter((item) => item.category === category);

    const visibleItems =
      category === 'all' && !showAllInAllFilter
        ? filteredItems.slice(0, INITIAL_VISIBLE_COUNT)
        : filteredItems;

    portfolioGrid.innerHTML = visibleItems
      .map(
        (item, index) => `
      <article class="portfolio-card" data-index="${index}" tabindex="0" role="button" aria-label="Inspect ${item.title}">
        <div class="portfolio-img-wrap">
          <img
            src="${item.image}"
            alt="${item.title} — Henna by Fidha"
            width="${item.width}"
            height="${item.height}"
            loading="lazy"
          >
          <span class="portfolio-hover-pill" aria-hidden="true">Inspect Artwork ↗</span>
        </div>
        <div class="portfolio-caption-minimal">
          <span class="portfolio-category-overline">${item.categoryLabel}</span>
          <h3 class="portfolio-title">${item.title}</h3>
        </div>
      </article>
    `
      )
      .join('');

    if (portfolioMoreWrap && togglePortfolioBtn) {
      if (category === 'all' && filteredItems.length > INITIAL_VISIBLE_COUNT) {
        portfolioMoreWrap.hidden = false;
        const hiddenCount = filteredItems.length - INITIAL_VISIBLE_COUNT;
        togglePortfolioBtn.textContent = showAllInAllFilter
          ? 'Show Curated Highlights (9 Artworks)'
          : `Explore All ${filteredItems.length} Artworks (+${hiddenCount} More)`;
      } else {
        portfolioMoreWrap.hidden = true;
      }
    }
  };

  updateFilterCounts();
  renderPortfolio('all');

  if (togglePortfolioBtn) {
    togglePortfolioBtn.addEventListener('click', () => {
      showAllInAllFilter = !showAllInAllFilter;
      renderPortfolio(currentFilter);
    });
  }

  // Filter Click Handler
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;
      if (category === currentFilter) return;

      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      renderPortfolio(category);
    });
  });

  // Open Lightbox Modal with Locked Frame Dimensions
  const openLightbox = (index) => {
    activeLightboxIndex = index;
    const item = filteredItems[activeLightboxIndex];
    if (!item) return;

    lightboxImg.classList.add('is-switching');

    lightboxImg.src = item.image;
    lightboxImg.alt = `${item.title} — Henna by Fidha`;
    lightboxCategory.textContent = item.categoryLabel;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${activeLightboxIndex + 1} / ${filteredItems.length}`;
    }
    lightboxTitle.textContent = item.title;
    lightboxCaption.textContent = item.caption;
    lightboxInstaLink.href = item.instaUrl;
    lightboxTags.innerHTML = item.tags
      .map((tag) => `<span class="lightbox-tag">#${tag}</span>`)
      .join('');

    requestAnimationFrame(() => {
      lightboxImg.classList.remove('is-switching');
    });

    if (!lightboxDialog.open) {
      lightboxDialog.showModal();
    }
  };

  portfolioGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.portfolio-card');
    if (!card) return;
    openLightbox(Number(card.dataset.index));
  });

  portfolioGrid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.portfolio-card');
      if (!card) return;
      e.preventDefault();
      openLightbox(Number(card.dataset.index));
    }
  });

  lightboxPrevBtn.addEventListener('click', () => {
    const nextIdx = (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    openLightbox(nextIdx);
  });

  lightboxNextBtn.addEventListener('click', () => {
    const nextIdx = (activeLightboxIndex + 1) % filteredItems.length;
    openLightbox(nextIdx);
  });

  lightboxCloseBtn.addEventListener('click', () => {
    lightboxDialog.close();
  });

  // Toggle between uniform 4:5 crop and full uncropped view inside the exact same locked frame
  if (lightboxFitToggle && lightboxFrame) {
    lightboxFitToggle.addEventListener('click', () => {
      const isContain = lightboxFrame.classList.toggle('fit-contain');
      lightboxFitToggle.textContent = isContain ? 'Uniform 4:5 Frame' : 'Full Uncropped View';
    });
  }

  // Keyboard navigation inside open dialog
  window.addEventListener('keydown', (e) => {
    if (!lightboxDialog.open) return;
    if (e.key === 'ArrowLeft') {
      lightboxPrevBtn.click();
    } else if (e.key === 'ArrowRight') {
      lightboxNextBtn.click();
    }
  });

  // Mandatory Fallback for browsers without <dialog closedby="any"> support (e.g. Safari)
  if (lightboxDialog && !('closedBy' in HTMLDialogElement.prototype)) {
    lightboxDialog.addEventListener('click', (event) => {
      if (event.target !== lightboxDialog) return;
      const rect = lightboxDialog.getBoundingClientRect();
      const isDialogContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (isDialogContent) return;
      lightboxDialog.close();
    });
  }

  // Pre-fill Booking Form when clicking "Request This Style" in Lightbox
  const selectedDesignBanner = document.getElementById('selectedDesignBanner');
  const selectedDesignName = document.getElementById('selectedDesignName');
  const clearSelectedDesignBtn = document.getElementById('clearSelectedDesignBtn');
  const designInput = document.getElementById('inspirationDesign');
  const bookingSection = document.getElementById('booking');

  const setInspirationDesign = (title) => {
    if (!designInput) return;
    designInput.value = title;
    selectedDesignName.textContent = title;
    selectedDesignBanner.hidden = false;
  };

  if (lightboxBookBtn) {
    lightboxBookBtn.addEventListener('click', () => {
      const item = filteredItems[activeLightboxIndex];
      if (item) {
        setInspirationDesign(item.title);
      }
      lightboxDialog.close();
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (clearSelectedDesignBtn) {
    clearSelectedDesignBtn.addEventListener('click', () => {
      designInput.value = '';
      selectedDesignBanner.hidden = true;
    });
  }

  // Service Package "Select Package" buttons
  document.querySelectorAll('[data-select-package]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pkg = btn.dataset.selectPackage;
      const serviceSelect = document.getElementById('serviceType');
      if (serviceSelect) {
        serviceSelect.value = pkg;
      }
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // UAE Emirate Card CTA Sync with Booking Form
  const emirateCards = document.querySelectorAll('.emirate-card');
  const emirateSelect = document.getElementById('emirateSelect');

  const highlightEmirate = (emirateKey) => {
    emirateCards.forEach((card) => {
      card.classList.toggle('highlighted', card.dataset.emirateCard === emirateKey);
    });
    if (emirateSelect) {
      emirateSelect.value = emirateKey;
    }
  };

  document.querySelectorAll('[data-book-emirate]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const emirate = btn.dataset.bookEmirate;
      highlightEmirate(emirate);
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Booking Form Submission & Instant WhatsApp / Instagram Concierge Generator
  const bookingForm = document.getElementById('bookingForm');
  const bookingResultBox = document.getElementById('bookingResultBox');
  const bookingSummaryPre = document.getElementById('bookingSummaryPre');
  const whatsappLaunchLink = document.getElementById('whatsappLaunchLink');
  const copySummaryBtn = document.getElementById('copySummaryBtn');

  if (bookingForm) {
    UserInvalidFallback.init(bookingForm);

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }

      const formData = new FormData(bookingForm);
      const clientName = formData.get('clientName');
      const clientPhone = formData.get('clientPhone');
      const clientEmail = formData.get('clientEmail');
      const emirate = formData.get('emirate');
      const locationArea = formData.get('locationArea');
      const eventDate = formData.get('eventDate');
      const serviceType = formData.get('serviceType');
      const inspiration = formData.get('inspirationDesign') || 'Artist Bespoke Recommendation';
      const notes = formData.get('notes') || 'None';

      const messageLines = [
        `*Henna Booking Inquiry - Henna by Fidha*`,
        `- *Name:* ${clientName}`,
        `- *Phone / WhatsApp:* ${clientPhone}`,
        `- *Email:* ${clientEmail}`,
        `- *Location:* ${emirate} (${locationArea})`,
        `- *Event Date:* ${eventDate}`,
        `- *Package / Occasion:* ${serviceType}`,
        `- *Selected Style:* ${inspiration}`,
        `- *Notes:* ${notes}`
      ];

      const summaryText = messageLines.join('\n');
      bookingSummaryPre.textContent = summaryText;

      const encodedText = encodeURIComponent(summaryText);
      whatsappLaunchLink.href = `https://wa.me/918590141988?text=${encodedText}`;

      bookingResultBox.hidden = false;
      bookingResultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  if (copySummaryBtn) {
    copySummaryBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(bookingSummaryPre.textContent);
        const originalText = copySummaryBtn.textContent;
        copySummaryBtn.textContent = 'Copied for Instagram DM';
        setTimeout(() => {
          copySummaryBtn.textContent = originalText;
        }, 2500);
      } catch {
        // Fallback selection
      }
    });
  }
});
