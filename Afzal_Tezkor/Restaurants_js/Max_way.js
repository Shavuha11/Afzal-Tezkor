(function () {
  'use strict';

  /* ═══════════════════════════
     ДАННЫЕ — MAX WAY
     Картинки: Unsplash CDN (разрешает hotlinking)
  ═══════════════════════════ */
const MENU = [
    // CLUB SANDWICHES
    {
      id: 0,
      category: "club-sandwich",
      name: "Клаб-сендвич Классик",
      emoji: "https://cdn.zoomda.uz/products/2025/07/15/1752573274651969760.jpg",
      price: 26000,
      sub: "Курица, сыр, овощи · 350г",
      desc: "Поджаренный тостовый хлеб с куриным филе, сыром чеддер, свежими овощами и фирменным соусом. 350г"
    },
    {
      id: 1,
      category: "club-sandwich",
      name: "Клаб-сендвич Сырный",
      emoji: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=500&auto=format&fit=crop&q=60",
      price: 29000,
      sub: "Двойной сыр, курица · 380г",
      desc: "Нежное куриное филе, двойной чеддер, листья салата, помидоры и сырный соус. 380г"
    },
    {
      id: 2,
      category: "club-sandwich",
      name: "Клаб-сендвич Острый",
      emoji: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcAhQdd125ABYjJ-51X8BTdddZt62m53TvQ&s",
      price: 30000,
      sub: "Острая курица, халапеньо · 370г",
      desc: "Курица в пикантном маринаде, халапеньо, овощи и острый фирменный соус. 370г"
    },
    {
      id: 3,
      category: "club-sandwich",
      name: "Клаб-сендвич BBQ",
      emoji: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=60",
      price: 31000,
      sub: "Барбекю соус, бекон · 390г",
      desc: "Сочная курица, хрустящий бекон, сыр, овощи и насыщенный BBQ соус. 390г"
    },

    // BURGERS
    {
      id: 4,
      category: "burger",
      name: "Бургер Классик",
      emoji: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
      price: 28000,
      sub: "Говяжья котлета, овощи · 300г",
      desc: "Сочная говяжья котлета, свежие овощи, сыр и фирменный бургерный соус. 300г"
    },
    {
      id: 5,
      category: "burger",
      name: "Чизбургер",
      emoji: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop&q=60",
      price: 32000,
      sub: "Двойной сыр чеддер · 320г",
      desc: "Говяжья котлета, двойной чеддер, маринованные огурцы и фирменный соус. 320г"
    },
    {
      id: 6,
      category: "burger",
      name: "Дабл Бургер",
      emoji: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60",
      price: 42000,
      sub: "Две котлеты, двойной сыр · 500г",
      desc: "Две сочные говяжьи котлеты, двойной сыр, овощи и специальный соус. 500г"
    },
    {
      id: 7,
      category: "burger",
      name: "Бургер BBQ",
      emoji: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop&q=60",
      price: 36000,
      sub: "Барбекю соус, бекон · 350г",
      desc: "Говяжья котлета, бекон, сыр чеддер и насыщенный соус барбекю. 350г"
    },

    // DONERS
    {
      id: 8,
      category: "doner",
      name: "Донер Классик",
      emoji: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=500&auto=format&fit=crop&q=60",
      price: 24000,
      sub: "Курица, овощи, соус · 350г",
      desc: "Тонкий лаваш с сочной курицей, свежими овощами и фирменным белым соусом. 350г"
    },
    {
      id: 9,
      category: "doner",
      name: "Донер Острый",
      emoji: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=60",
      price: 26000,
      sub: "Острая курица, халапеньо · 360г",
      desc: "Курица в остром маринаде, халапеньо, овощи и пикантный соус. 360г"
    },
    {
      id: 10,
      category: "doner",
      name: "Донер Сырный",
      emoji: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60",
      price: 28000,
      sub: "Сыр, курица гриль · 380г",
      desc: "Курица гриль, расплавленный сыр, овощи и фирменный сырный соус. 380г"
    },
    {
      id: 11,
      category: "doner",
      name: "Донер XXL",
      emoji: "https://images.unsplash.com/photo-1625938146369-adc83368bda7?w=500&auto=format&fit=crop&q=60",
      price: 39000,
      sub: "Двойное мясо · 600г",
      desc: "Большой донер с двойной порцией мяса, овощей и соуса. 600г"
    },

    // DRINKS
    {
      id: 12,
      category: "drinks",
      name: "Coca-Cola",
      emoji: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop&q=60",
      price: 9000,
      sub: "0.5л",
      desc: "Оригинальная Coca-Cola 0.5л, подается охлажденной."
    },
    {
      id: 13,
      category: "drinks",
      name: "Fanta",
      emoji: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60",
      price: 9000,
      sub: "0.5л",
      desc: "Освежающий апельсиновый напиток Fanta 0.5л."
    },
    {
      id: 14,
      category: "drinks",
      name: "Sprite",
      emoji: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=500&auto=format&fit=crop&q=60",
      price: 9000,
      sub: "0.5л",
      desc: "Лимонно-лаймовый газированный напиток Sprite 0.5л."
    },

    // SAUCES
    {
      id: 16,
      category: "sauces",
      name: "Соус Чесночный",
      emoji: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&auto=format&fit=crop&q=60",
      price: 3000,
      sub: "Фирменный · 80г",
      desc: "Нежный чесночный соус собственного приготовления. 80г"
    },
    {
      id: 17,
      category: "sauces",
      name: "Соус Сырный",
      emoji: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&auto=format&fit=crop&q=60",
      price: 4000,
      sub: "Чеддер · 80г",
      desc: "Густой сырный соус на основе чеддера. 80г"
    },
    {
      id: 18,
      category: "sauces",
      name: "Соус BBQ",
      emoji: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&auto=format&fit=crop&q=60",
      price: 4000,
      sub: "Барбекю · 80г",
      desc: "Классический дымный BBQ соус с насыщенным вкусом. 80г"
    },
    {
      id: 19,
      category: "sauces",
      name: "Соус Острый",
      emoji: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=500&auto=format&fit=crop&q=60",
      price: 3000,
      sub: "Острый · 80г",
      desc: "Пикантный острый соус для любителей яркого вкуса. 80г"
    },

    // SNACKS
    {
      id: 20,
      category: "snacks",
      name: "Картофель фри • Маленький",
      emoji: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F8c7514bc-7aa4-42d4-8b71-3fdaec48e43b&w=3840&q=75",
      price: 12000,
      sub: "50г",
      desc: "Хрустящий и элегантно солёный картофель-фри, прожаренный идеально до золотой корочки. 50г"
    },
    {
      id: 21,
      category: "snacks",
      name: "Картофель фри • Средний",
      emoji: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F8c7514bc-7aa4-42d4-8b71-3fdaec48e43b&w=3840&q=75",
      price: 19000,
      sub: "100г",
      desc: "Хрустящий и элегантно солёный картофель-фри, прожаренный идеально до золотой корочки. 100г"
    },
    {
      id: 22,
      category: "snacks",
      name: "Картофель фри • Большой",
      emoji: "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F8c7514bc-7aa4-42d4-8b71-3fdaec48e43b&w=3840&q=75",
      price: 25000,
      sub: "150г",
      desc: "Хрустящий и элегантно солёный картофель-фри, прожаренный идеально до золотой корочки. 150г"
    }
  ];

  function renderMenu() {
    MENU.forEach(item => {
      const grid = document.getElementById(`${item.category}-grid`);
      if (!grid) return;

      grid.insertAdjacentHTML('beforeend', `
        <div class="ut-item"
             data-cat="${item.category}"
             data-id="${item.id}"
             data-name="${item.name}"
             data-emoji="${item.emoji}"
             data-price="${item.price}"
             data-desc="${item.desc}">
          <div class="ut-item__img-wrap">
            <div class="ut-item__img">
              <img src="${item.emoji}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" />
            </div>
          </div>

          <div class="ut-item__body">
            <p class="ut-item__name">${item.name}</p>
            <p class="ut-item__sub">${item.sub}</p>

            <div class="ut-item__foot">
              <span class="ut-item__price">
                ${item.price.toLocaleString('ru-RU')} сум
              </span>

              <button class="ut-add-btn" data-id="${item.id}">
                <svg width="16" height="16" fill="none"
                     stroke="currentColor"
                     stroke-width="2.5"
                     viewBox="0 0 24 24">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `);
    });
  }

  renderMenu();

  const STORAGE_KEY = 'uzum_cart';
  function loadCart() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }
  function saveCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }

  function addItem(id) {
    const cart = loadCart();
    const item = MENU[id];
    if (!item) return;
    if (cart[id]) {
      cart[id].qty++;
    } else {
      cart[id] = { name: item.name, emoji: item.emoji, price: item.price, qty: 1 };
    }
    saveCart(cart);
    updateBadge();
    updateCardQty(id);
    showToast(`🍔 ${item.name} добавлен`);
  }

  function removeItem(id) {
    const cart = loadCart();
    if (!cart[id]) return;
    cart[id].qty--;
    if (cart[id].qty <= 0) delete cart[id];
    saveCart(cart);
    updateBadge();
    updateCardQty(id);
  }

  function getQty(id) {
    const cart = loadCart();
    return cart[id] ? cart[id].qty : 0;
  }

  function totalCount() {
    const cart = loadCart();
    return Object.values(cart).reduce((s, i) => s + i.qty, 0);
  }

  function updateBadge() {
    const badge = document.getElementById('ut-cartBadge');
    if (!badge) return;
    const count = totalCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }

  function updateCardQty(id) {
    const foot = document.querySelector(`.ut-item[data-id="${id}"] .ut-item__foot`);
    if (!foot) return;

    const qty = getQty(id);
    let qtyRow = foot.querySelector('.ut-qty-row');

    if (qty > 0) {
      if (!qtyRow) {
        qtyRow = document.createElement('div');
        qtyRow.className = 'ut-qty-row';
        qtyRow.innerHTML = `
          <button class="ut-qty-btn ut-qty-btn--dec" data-id="${id}">−</button>
          <span class="ut-qty-num">${qty}</span>
          <button class="ut-qty-btn ut-qty-btn--inc" data-id="${id}">+</button>
        `;
        qtyRow.querySelector('.ut-qty-btn--dec').addEventListener('click', e => {
          e.stopPropagation();
          removeItem(id);
        });
        qtyRow.querySelector('.ut-qty-btn--inc').addEventListener('click', e => {
          e.stopPropagation();
          addItem(id);
        });
        const oldBtn = foot.querySelector('.ut-add-btn');
        if (oldBtn) oldBtn.style.display = 'none';
        foot.appendChild(qtyRow);
      } else {
        qtyRow.querySelector('.ut-qty-num').textContent = qty;
      }
    } else {
      if (qtyRow) qtyRow.remove();
      const oldBtn = foot.querySelector('.ut-add-btn');
      if (oldBtn) oldBtn.style.display = '';
    }
  }

  document.querySelectorAll('.ut-add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = Number(btn.closest('.ut-item').dataset.id);
      addItem(id);
    });
  });

  const modalOverlay = document.getElementById('ut-modalOverlay');
  const modalEmoji   = document.getElementById('ut-modalEmoji');
  const modalName    = document.getElementById('ut-modalName');
  const modalDesc    = document.getElementById('ut-modalDesc');
  const modalPrice   = document.getElementById('ut-modalPrice');
  const modalAdd     = document.getElementById('ut-modalAdd');
  const modalClose   = document.getElementById('ut-modalClose');

  let modalCurrentId = null;

  document.querySelectorAll('.ut-item').forEach(card => {
    card.addEventListener('click', () => {
      const id = Number(card.dataset.id);
      const item = MENU[id];
      if (!item) return;
      modalCurrentId = id;
      modalEmoji.src = card.dataset.emoji || item.emoji;
      modalName.textContent  = card.dataset.name  || item.name;
      modalDesc.textContent  = card.dataset.desc  || '';
      modalPrice.textContent = fmt(item.price);
      modalOverlay.classList.add('ut-modal-overlay--open');
    });
  });

  modalAdd.addEventListener('click', () => {
    if (modalCurrentId !== null) addItem(modalCurrentId);
    modalOverlay.classList.remove('ut-modal-overlay--open');
  });
  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('ut-modal-overlay--open');
  });
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay)
      modalOverlay.classList.remove('ut-modal-overlay--open');
  });

  const cartNavBtn = document.getElementById('ut-cartNavBtn');
  if (cartNavBtn) {
    cartNavBtn.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = '../Korzina.html';
    });
  }

  const tabs     = document.querySelectorAll('.ut-tab');
  const sections = document.querySelectorAll('.ut-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('ut-tab--active'));
      tab.classList.add('ut-tab--active');
      const cat = tab.dataset.cat;
      sections.forEach(sec => {
        sec.style.display =
          (cat === 'all' || sec.dataset.section === cat) ? '' : 'none';
      });
    });
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sec = entry.target.dataset.section;
          tabs.forEach(t =>
            t.classList.toggle('ut-tab--active', t.dataset.cat === sec)
          );
        }
      });
    }, { rootMargin: '-55% 0px -44% 0px' });
    sections.forEach(s => io.observe(s));
  }

  const toast = document.getElementById('ut-toast');
  let toastTimer = null;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('ut-toast--show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('ut-toast--show'), 2000);
  }

  function fmt(n) {
    return n.toLocaleString('ru-RU') + ' сум';
  }

  Object.keys(loadCart()).forEach(id => updateCardQty(Number(id)));
  updateBadge();

  const style = document.createElement('style');
  style.textContent = `
    .ut-qty-row {
      display: flex; align-items: center; gap: 6px;
    }
    .ut-qty-btn {
      width: 28px; height: 28px;
      border-radius: 8px;
      border: 1.5px solid var(--ut-border);
      background: var(--ut-white);
      font-size: 16px; font-weight: 700;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: var(--ut-purple);
      transition: all .15s;
    }
    .ut-qty-btn:hover {
      border-color: var(--ut-purple);
      background: var(--ut-purple-light);
    }
    .ut-qty-num {
      font-size: 15px; font-weight: 700;
      min-width: 20px; text-align: center;
    }
  `;
  document.head.appendChild(style);

})();

