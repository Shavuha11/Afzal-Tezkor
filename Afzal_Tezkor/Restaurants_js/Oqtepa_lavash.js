(function () {
  'use strict';

  /* ═══════════════════════════
     ДАННЫЕ — 20 товаров
  ═══════════════════════════ */
const MENU = [
  {
    id: 0,
    category: "lavash",
    name: "Лаваш Классик",
    emoji: "https://cc.oqtepalavash.uz/api/image/aa44149a-db72-44ca-8749-18b7d87cb51e_small.png",
    price: 18000,
    sub: "Курица, овощи, белый соус · 350г",
    desc: "Тонкий лаваш с курицей гриль, свежими овощами, сыром и фирменным белым соусом. 350г"
  },
  {
    id: 1,
    category: "lavash",
    name: "Лаваш Острый",
    emoji: "https://cc.oqtepalavash.uz/api/image/1b505b28-5e1b-47cb-8c7d-26d88fa8fd80_small.png",
    price: 19000,
    sub: "Острая курица, халапеньо · 360г",
    desc: "Лаваш с курицей в остром маринаде, перцем халапеньо, маринованным луком и острым соусом. 360г"
  },
  {
    id: 2,
    category: "lavash",
    name: "Лаваш Сырный",
    emoji: "https://cc.oqtepalavash.uz/api/image/a81aad0d-0e89-4ed5-a740-7b689ecf6805_small.png",
    price: 21000,
    sub: "Двойной сыр, курица · 380г",
    desc: "Двойной сыр, курица гриль, помидоры черри, салат и фирменный сырный соус. 380г"
  },
  {
    id: 3,
    category: "lavash",
    name: "Лаваш Овощной",
    emoji: "https://cc.oqtepalavash.uz/api/image/b3eaeb30-499a-4dfa-8436-a94c7485c126_small.png",
    price: 15000,
    sub: "Свежие овощи, греческий соус · 300г",
    desc: "Без мяса: свежие овощи, рукола, огурцы, помидоры, сладкий перец и греческий соус. 300г"
  },

  {
    id: 4,
    category: "shawarma",
    name: "Шаурма Классик",
    emoji: "https://cc.oqtepalavash.uz/api/image/845fd3d0-b85e-44c0-9982-70408cc89337_small.png",
    price: 22000,
    sub: "Курица, капуста, чеснок · 400г",
    desc: "Сочная курица на углях, капуста, морковь по-корейски, помидор, соус чесночный. 400г"
  },
  {
    id: 5,
    category: "shawarma",
    name: "Шаурма Двойная",
    emoji: "https://cc.oqtepalavash.uz/api/image/1c271994-7719-46a0-837b-375051e4bb25_small.jpg",
    price: 32000,
    sub: "Двойное мясо и соус · 650г",
    desc: "Двойная порция мяса, двойной соус, всё как обычная шаурма — только больше. 650г"
  },
  {
    id: 6,
    category: "shawarma",
    name: "Шаурма Сырная",
    emoji: "https://cc.oqtepalavash.uz/api/image/cbcb7b78-5b3a-40c9-93bd-09641f58dfa8_small.jpg",
    price: 25000,
    sub: "Плавленый сыр, тысяча островов · 420г",
    desc: "Курица гриль, плавленый сыр, маринованные огурцы, соус тысяча островов. 420г"
  },

  {
    id: 7,
    category: "hotdog",
    name: "Хот-дог Классик",
    emoji: "https://cc.oqtepalavash.uz/api/image/8a0ee504-017f-4709-b82c-93e633bc30e3_small.png",
    price: 14000,
    sub: "Говяжья сосиска, горчица · 220г",
    desc: "Мягкая булочка, говяжья сосиска, горчица, кетчуп, маринованный огурец. 220г"
  },
  {
    id: 8,
    category: "hotdog",
    name: "Хот-дог Сырный",
    emoji: "https://cc.oqtepalavash.uz/api/image/ffa002c0-9b6e-4a70-b132-eb48e6e01916_small.png",
    price: 16000,
    sub: "Чеддер, жареный лук, барбекю · 240г",
    desc: "Сосиска, расплавленный чеддер, жареный лук, соус барбекю. 240г"
  },
  {
    id: 9,
    category: "hotdog",
    name: "Хот-дог Двойной",
    emoji: "https://cc.oqtepalavash.uz/api/image/4f37807b-c5ac-44b6-a8e3-ed9a5f5108b7_small.png",
    price: 20000,
    sub: "Две сосиски, двойная булочка · 350г",
    desc: "Две сосиски, двойная булочка, горчица, кетчуп, сыр. 350г"
  },

  {
    id: 10,
    category: "combo",
    name: "Комбо №1",
    emoji: "https://cc.oqtepalavash.uz/api/image/c59231ba-0125-4aa0-a06d-7c8b260dbd4d_small.jpg",
    price: 35000,
    oldPrice: 41000,
    sub: "Лаваш + Хот-дог + Кола",
    desc: "Лаваш Классик + Хот-дог Классик + Кола 0.5л. Экономия 6 000 сум!"
  },
  {
    id: 11,
    category: "combo",
    name: "Комбо №2",
    emoji: "https://cc.oqtepalavash.uz/api/image/8dcdd80a-21f0-4342-9c4c-ee3ea6b19dd3_small.jpg",
    price: 45000,
    oldPrice: 54000,
    sub: "Шаурма + Лаваш Сырный + 2 Сока",
    desc: "Шаурма Классик + Лаваш Сырный + 2 Сока. Экономия 9 000 сум!"
  },
  {
    id: 12,
    category: "combo",
    name: "Семейное Комбо",
    emoji: "https://cc.oqtepalavash.uz/api/image/8982120b-f509-4bd7-812e-735ba29b01f3_small.jpg",
    price: 89000,
    oldPrice: 111000,
    sub: "4 Лаваша + 2 Шаурмы + 4 напитка",
    desc: "4 Лаваша на выбор + 2 Шаурмы + 4 напитка. Идеально для всей семьи!"
  },

  {
    id: 13,
    category: "drinks",
    name: "Кола 0.5л",
    emoji: "https://cc.oqtepalavash.uz/api/image/b7a6e769-64c2-4219-9468-4878314de0dd_small.png",
    price: 8000,
    sub: "Pepsi · 500мл",
    desc: "Pepsi 0.5л в холодном виде. Освежает в любое время!"
  },
  {
    id: 14,
    category: "drinks",
    name: "Сок апельсин",
    emoji: "https://cc.oqtepalavash.uz/api/image/dede5843-c0f5-40f8-bffb-f00939894f14_small.png",
    price: 7000,
    sub: "Rich · 200мл",
    desc: "Натуральный апельсиновый сок. Rich 0.2л."
  },
  {
    id: 15,
    category: "drinks",
    name: "Вода Nestle",
    emoji: "https://cc.oqtepalavash.uz/api/image/1fad52fd-5113-4710-8607-a32b2a7d32cc_small.png",
    price: 4000,
    sub: "Без газа · 500мл",
    desc: "Питьевая вода без газа 0.5л."
  },
  {
    id: 16,
    category: "drinks",
    name: "Moxito",
    emoji: "https://cc.oqtepalavash.uz/api/image/f41ed0e5-e0b3-4bbe-a5fc-2f316b511512_small.png",
    price: 6000,
    sub: "Холодный · 330мл",
    desc: "Холодный Moxito. Освежает и насыщает. 0.33л."
  },

  {
    id: 17,
    category: "sauces",
    name: "Соус Чесночный",
    emoji: "https://cc.oqtepalavash.uz/api/image/a15d17ee-6e3a-47d6-8304-5d604ac56e19_small.png",
    price: 3000,
    sub: "На основе айрана · 80г",
    desc: "Фирменный чесночный соус на основе айрана. 80г"
  },
  {
    id: 18,
    category: "sauces",
    name: "Соус Острый",
    emoji: "https://cc.oqtepalavash.uz/api/image/8b5c121a-d901-4842-af21-c20491532924_small.jpg",
    price: 3000,
    sub: "Домашний рецепт · 80г",
    desc: "Домашний острый соус. Внимание: очень острый! 80г"
  },
  {
    id: 19,
    category: "sauces",
    name: "Кетчуп Хайнц",
    emoji: "https://cc.oqtepalavash.uz/api/image/4a7c4c27-d61a-4e36-a3e6-251510f015fa_small.jpg",
    price: 2000,
    sub: "Heinz · 30г",
    desc: "Фирменный кетчуп Heinz в порционном пакетике. 30г"
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
          <div class="ut-item__img"><img src="${item.emoji}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" /></div>
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

  /* ═══════════════════════════
     КОРЗИНА — localStorage
  ═══════════════════════════ */
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
    showToast(`🫓 ${item.name} добавлен`);
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
      modalEmoji.innerHTML = `<img src="${item.emoji}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" />`;
      modalName.textContent  = card.dataset.name || item.name;
      modalDesc.textContent  = card.dataset.desc || '';
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