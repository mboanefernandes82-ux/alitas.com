// ==========================================================================
// ALITAS MZ - INTERACTIVE SCRIPTS & DYNAMIC APP ENGINE
// Modern, Fast, Modular Vanilla JavaScript
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMenuRenderer();
  initDigitalMenuModal();
  initOrderModal();
  initLocationSelector();
  initGalleryLightbox();
  initBackToTop();
  initToast();
});

// ==========================================================================
// 1. HEADER & NAVIGATION
// ==========================================================================
function initHeader() {
  const header = document.getElementById('mainHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile drawer controls
  function openDrawer() {
    mobileToggle.classList.add('active');
    mobileDrawer.classList.add('open');
    mobileBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileToggle.classList.remove('active');
    mobileDrawer.classList.remove('open');
    mobileBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeDrawer);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ScrollSpy for Active Navigation
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// ==========================================================================
// 2. MENU RENDERER & CATEGORY FILTERING
// ==========================================================================
let currentCategory = 'all';

function initMenuRenderer() {
  const tabsContainer = document.getElementById('menuTabsContainer');
  const menuGrid = document.getElementById('menuGridContainer');

  if (!tabsContainer || !menuGrid || !ALITAS_DATA) return;

  // Render Tabs
  tabsContainer.innerHTML = ALITAS_DATA.categories.map(cat => `
    <button class="menu-tab-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
      <span>${getCategoryIcon(cat.icon)}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');

  // Initial Render
  renderMenuItems(currentCategory);

  // Tab Click Handler
  tabsContainer.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.menu-tab-btn');
    if (!tabBtn) return;

    document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
    tabBtn.classList.add('active');

    currentCategory = tabBtn.getAttribute('data-category');
    renderMenuItems(currentCategory);
  });
}

function renderMenuItems(category) {
  const menuGrid = document.getElementById('menuGridContainer');
  if (!menuGrid) return;

  const filtered = category === 'all' 
    ? ALITAS_DATA.menuItems 
    : ALITAS_DATA.menuItems.filter(item => item.category === category);

  menuGrid.style.opacity = '0';
  menuGrid.style.transform = 'translateY(10px)';

  setTimeout(() => {
    menuGrid.innerHTML = filtered.map(item => `
      <article class="menu-card" data-category="${item.category}">
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'">
          <div class="menu-card-tag">${item.tags[0] || 'Alitas'}</div>
          ${item.tags[1] ? `<div class="menu-card-badge">${item.tags[1]}</div>` : ''}
        </div>
        <div class="menu-card-content">
          <span class="menu-card-category">${item.categoryLabel}</span>
          <h3 class="menu-card-title">${item.title}</h3>
          <p class="menu-card-desc">${item.description}</p>
          <div class="menu-card-footer">
            <div class="menu-price-box">
              <span class="menu-price-label">Disponibilidade</span>
              <span class="menu-price-value">${item.priceFormatted}</span>
            </div>
            <button class="btn btn-primary btn-sm open-order-modal-btn" data-dish="${encodeURIComponent(item.title)}">
              <span>FAZER PEDIDO</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    menuGrid.style.transition = 'all 0.35s ease';
    menuGrid.style.opacity = '1';
    menuGrid.style.transform = 'translateY(0)';

    // Attach click events to "FAZER PEDIDO" in cards
    menuGrid.querySelectorAll('.open-order-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dish = decodeURIComponent(btn.getAttribute('data-dish') || '');
        openOrderModalWithDish(dish);
      });
    });
  }, 150);
}

function getCategoryIcon(type) {
  switch (type) {
    case 'burger':
      return '🍔';
    case 'flame':
      return '🌶️';
    case 'wrap':
      return '🌯';
    case 'beef':
      return '🥩';
    case 'sandwich':
      return '🥪';
    case 'fish':
      return '🐟';
    case 'smile':
      return '🍟';
    case 'drumstick':
      return '🍗';
    default:
      return '🍽️';
  }
}

// ==========================================================================
// 3. DIGITAL MENU VIEWER MODAL
// ==========================================================================
function initDigitalMenuModal() {
  const modal = document.getElementById('digitalMenuModal');
  const openButtons = document.querySelectorAll('.open-digital-menu-trigger');
  const closeBtn = document.getElementById('closeDigitalMenuBtn');
  const searchInput = document.getElementById('digitalMenuSearch');
  const menuContainer = document.getElementById('digitalMenuList');

  if (!modal) return;

  function openMenuModal() {
    renderDigitalMenuList('');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (searchInput) searchInput.focus();
  }

  function closeMenuModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => btn.addEventListener('click', openMenuModal));
  if (closeBtn) closeBtn.addEventListener('click', closeMenuModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeMenuModal();
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderDigitalMenuList(e.target.value.toLowerCase().trim());
    });
  }
}

function renderDigitalMenuList(filterText) {
  const menuContainer = document.getElementById('digitalMenuList');
  if (!menuContainer || !ALITAS_DATA) return;

  const items = ALITAS_DATA.menuItems.filter(item => {
    return item.title.toLowerCase().includes(filterText) ||
           item.description.toLowerCase().includes(filterText) ||
           item.categoryLabel.toLowerCase().includes(filterText);
  });

  if (items.length === 0) {
    menuContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <span style="font-size: 3rem;">🔍</span>
        <h4 style="margin-top: 1rem; color: #fff;">Nenhum prato encontrado</h4>
        <p style="color: #94a3b8;">Tente pesquisar por hambúrguer, burrito, frango ou peixe.</p>
      </div>
    `;
    return;
  }

  menuContainer.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${items.map(item => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 1.2rem; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 1.2rem; max-width: 580px;">
            <img src="${item.image}" alt="${item.title}" style="width: 70px; height: 70px; border-radius: 10px; object-fit: cover; flex-shrink: 0;" loading="lazy">
            <div>
              <span style="font-size: 0.75rem; color: #ffb703; font-weight: 800; text-transform: uppercase;">${item.categoryLabel}</span>
              <h4 style="font-size: 1.15rem; color: #fff; margin: 2px 0 4px 0;">${item.title}</h4>
              <p style="font-size: 0.88rem; color: #94a3b8; line-height: 1.4; margin: 0;">${item.description}</p>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <button class="btn btn-primary btn-sm" onclick="openOrderModalWithDish('${encodeURIComponent(item.title)}')">
              <span>PEDIR ESTE</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================================================
// 4. BRANCH SELECTOR & WHATSAPP ORDER MODAL
// ==========================================================================
let selectedDishName = "";

function initOrderModal() {
  const modal = document.getElementById('orderBranchModal');
  const openButtons = document.querySelectorAll('.open-order-modal-trigger');
  const closeBtn = document.getElementById('closeOrderModalBtn');

  if (!modal) return;

  function openOrderModal() {
    selectedDishName = "";
    document.getElementById('orderModalSelectedDishNotice').style.display = 'none';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOrderModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => btn.addEventListener('click', openOrderModal));
  if (closeBtn) closeBtn.addEventListener('click', closeOrderModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeOrderModal();
  });
}

window.openOrderModalWithDish = function(encodedDish) {
  selectedDishName = decodeURIComponent(encodedDish || '');
  const modal = document.getElementById('orderBranchModal');
  const dishNotice = document.getElementById('orderModalSelectedDishNotice');
  const dishNameEl = document.getElementById('orderModalDishName');

  if (dishNotice && dishNameEl && selectedDishName) {
    dishNameEl.textContent = `"${selectedDishName}"`;
    dishNotice.style.display = 'block';
  }

  // Also close digital menu if open
  const menuModal = document.getElementById('digitalMenuModal');
  if (menuModal) menuModal.classList.remove('open');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.sendWhatsAppOrder = function(whatsappNumber, branchName) {
  let message = `Olá Alitas MZ (${branchName})! Gostaria de consultar o menu e fazer um pedido.`;
  if (selectedDishName) {
    message = `Olá Alitas MZ (${branchName})! Gostaria de pedir: *${selectedDishName}*. Vocês estão com entregas ativas agora?`;
  }
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

// ==========================================================================
// 5. LOCATION / BRANCH SELECTOR & MAPS
// ==========================================================================
function initLocationSelector() {
  const branchCards = document.querySelectorAll('.branch-card');
  const mapIframe = document.getElementById('googleMapIframe');
  const currentBranchLabel = document.getElementById('currentBranchLabel');

  branchCards.forEach(card => {
    card.addEventListener('click', () => {
      branchCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const mapQuery = card.getAttribute('data-map');
      const branchName = card.querySelector('.branch-title').textContent;

      if (mapIframe && mapQuery) {
        mapIframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
      }
      if (currentBranchLabel) {
        currentBranchLabel.textContent = branchName;
      }
    });
  });
}

// ==========================================================================
// 6. GALLERY LIGHTBOX
// ==========================================================================
function initGalleryLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!lightbox) return;

  function openLightbox(imgSrc, captionText) {
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = captionText || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-item-title')?.textContent || '';
      const caption = item.querySelector('.gallery-item-caption')?.textContent || '';
      openLightbox(img.src, `${title} — ${caption}`);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeBtn) closeLightbox();
  });
}

// ==========================================================================
// 7. BACK TO TOP
// ==========================================================================
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==========================================================================
// 8. TOAST NOTIFICATION UTILITY
// ==========================================================================
function initToast() {
  window.showToast = function(msg) {
    const existing = document.getElementById('alitasToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'alitasToast';
    toast.style.position = 'fixed';
    toast.style.bottom = '2rem';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.background = '#e5252a';
    toast.style.color = '#fff';
    toast.style.padding = '0.75rem 1.75rem';
    toast.style.borderRadius = '9999px';
    toast.style.fontWeight = '700';
    toast.style.fontSize = '0.92rem';
    toast.style.boxShadow = '0 10px 25px rgba(229, 37, 42, 0.5)';
    toast.style.zIndex = '3000';
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.textContent = msg;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(0)';
      toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };

  window.copyMenuLink = function() {
    const url = window.location.origin + window.location.pathname + '#menu';
    navigator.clipboard.writeText(url).then(() => {
      window.showToast('✅ Link do Menu Digital copiado com sucesso!');
    }).catch(() => {
      window.showToast('✅ Link do Menu: ' + url);
    });
  };
}
