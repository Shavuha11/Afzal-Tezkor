(function () {
  'use strict';

  /* ═══════════════════════════
     ДАННЫЕ — BELLISSIMO PIZZA
  ═══════════════════════════ */
const MENU = [
  /* ── МАЛЕНЬКИЕ ПИЦЦЫ (20 см) ── */
  {
    id: 0,
    category: "small",
    name: "Пепперони (20 см)",
    emoji: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    price: 39000,
    sub: "Пепперони, моцарелла, томатный соус",
    desc: "Классика жанра: томатный соус, сыр моцарелла и щедрая порция пепперони. 20 см, 4 кусочка."
  },
  {
    id: 1,
    category: "small",
    name: "Маргарита (20 см)",
    emoji: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    price: 35000,
    sub: "Моцарелла, томатный соус, орегано",
    desc: "Нежная классическая пицца: томатный соус, сыр моцарелла и ароматный орегано. 20 см, 4 кусочка."
  },
  {
    id: 2,
    category: "small",
    name: "Курица с грибами (20 см)",
    emoji: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    price: 38000,
    sub: "Куриное филе, шампиньоны, орегано",
    desc: "Томатный соус, моцарелла, нежное куриное филе, шампиньоны и орегано. 20 см, 4 кусочка."
  },
  {
    id: 3,
    category: "small",
    name: "BBQ Курица (20 см)",
    emoji: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    price: 39000,
    sub: "Курица, соус барбекю, лук шалот",
    desc: "Соус барбекю, моцарелла, куриное филе и лук шалот. Сочно и ароматно. 20 см, 4 кусочка."
  },
  {
    id: 4,
    category: "small",
    name: "Кебаб (20 см)",
    emoji: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    price: 40000,
    sub: "Мясо кебаб, болгарский перец, помидоры",
    desc: "Томатный соус, моцарелла, мясо кебаб, хрустящий болгарский перец, томаты и лук. 20 см, 4 кусочка."
  },
  {
    id: 5,
    category: "small",
    name: "Дабл Чизбургер (20 см)",
    emoji: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    price: 42000,
    sub: "Говядина, сырный соус, корнишоны",
    desc: "Сырный соус, моцарелла, говядина, корнишоны, томаты и лук шалот. 20 см, 4 кусочка."
  },
  {
    id: 6,
    category: "small",
    name: "Дабл Пепперони (20 см)",
    emoji: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    price: 43000,
    sub: "Двойная порция пепперони, моцарелла",
    desc: "В два раза больше пепперони, чем в классической — для настоящих ценителей. 20 см, 4 кусочка."
  },
  {
    id: 7,
    category: "small",
    name: "Альфредо (20 см)",
    emoji: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    price: 40000,
    sub: "Соус альфредо, курица, шпинат",
    desc: "Нежный соус альфредо со шпинатом, сыр моцарелла и куриное филе. 20 см, 4 кусочка."
  },

  /* ── СРЕДНИЕ ПИЦЦЫ (25 см) ── */
  {
    id: 8,
    category: "medium",
    name: "Пепперони (25 см)",
    emoji: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    price: 55000,
    sub: "Пепперони, моцарелла, томатный соус",
    desc: "Томатный соус, сыр моцарелла и щедрая порция пепперони. 25 см, 6 кусочков."
  },
  {
    id: 9,
    category: "medium",
    name: "Маргарита (25 см)",
    emoji: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    price: 49000,
    sub: "Моцарелла, томатный соус, орегано",
    desc: "Томатный соус, сыр моцарелла и ароматный орегано. 25 см, 6 кусочков."
  },
  {
    id: 10,
    category: "medium",
    name: "Курица с грибами (25 см)",
    emoji: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    price: 54000,
    sub: "Куриное филе, шампиньоны, орегано",
    desc: "Томатный соус, моцарелла, нежное куриное филе, шампиньоны и орегано. 25 см, 6 кусочков."
  },
  {
    id: 11,
    category: "medium",
    name: "BBQ Курица (25 см)",
    emoji: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    price: 55000,
    sub: "Курица, соус барбекю, лук шалот",
    desc: "Соус барбекю, моцарелла, куриное филе и лук шалот. 25 см, 6 кусочков."
  },
  {
    id: 12,
    category: "medium",
    name: "Кебаб (25 см)",
    emoji: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    price: 57000,
    sub: "Мясо кебаб, болгарский перец, помидоры",
    desc: "Томатный соус, моцарелла, мясо кебаб, болгарский перец, томаты и лук. 25 см, 6 кусочков."
  },
  {
    id: 13,
    category: "medium",
    name: "Дабл Чизбургер (25 см)",
    emoji: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    price: 59000,
    sub: "Говядина, сырный соус, корнишоны",
    desc: "Сырный соус, моцарелла, говядина, корнишоны, томаты и лук шалот. 25 см, 6 кусочков."
  },
  {
    id: 14,
    category: "medium",
    name: "Беллиссимо (25 см)",
    emoji: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    price: 62000,
    sub: "Пепперони, индейка, грибы, маслины",
    desc: "Фирменная пицца: пепперони, индейка, болгарский перец, грибы, маслины, лук шалот. 25 см, 6 кусочков."
  },
  {
    id: 15,
    category: "medium",
    name: "Донар (25 см)",
    emoji: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    price: 57000,
    sub: "Мясо донар, болгарский перец, лук",
    desc: "Соус барбекю, моцарелла, мясо донар, болгарский перец, лук и помидоры. 25 см, 6 кусочков."
  },

  /* ── БОЛЬШИЕ ПИЦЦЫ (30 см) ── */
  {
    id: 16,
    category: "large",
    name: "Пепперони (30 см)",
    emoji: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    price: 75000,
    sub: "Пепперони, моцарелла, томатный соус",
    desc: "Томатный соус, сыр моцарелла и щедрая порция пепперони. 30 см, 8 кусочков."
  },
  {
    id: 17,
    category: "large",
    name: "Маргарита (30 см)",
    emoji: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    price: 67000,
    sub: "Моцарелла, томатный соус, орегано",
    desc: "Томатный соус, сыр моцарелла и ароматный орегано. 30 см, 8 кусочков."
  },
  {
    id: 18,
    category: "large",
    name: "Курица с грибами (30 см)",
    emoji: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    price: 73000,
    sub: "Куриное филе, шампиньоны, орегано",
    desc: "Томатный соус, моцарелла, куриное филе, шампиньоны и орегано. 30 см, 8 кусочков."
  },
  {
    id: 19,
    category: "large",
    name: "Беллиссимо (30 см)",
    emoji: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    price: 85000,
    sub: "Пепперони, индейка, грибы, маслины",
    desc: "Фирменная пицца: пепперони, индейка, болгарский перец, грибы, маслины, лук шалот. 30 см, 8 кусочков."
  },
  {
    id: 20,
    category: "large",
    name: "Дабл Пепперони (30 см)",
    emoji: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    price: 82000,
    sub: "Двойная порция пепперони, моцарелла",
    desc: "В два раза больше пепперони — максимум вкуса в каждом кусочке. 30 см, 8 кусочков."
  },
  {
    id: 21,
    category: "large",
    name: "4 в 1 (30 см)",
    emoji: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    price: 89000,
    sub: "Кебаб, пепперони, курица с грибами, маргарита",
    desc: "Четыре вкуса в одной пицце: кебаб, пепперони, курица с грибами и маргарита. 30 см, 8 кусочков."
  },

  /* ── ЗАКУСКИ ── */
  {
    id: 22,
    category: "snacks",
    name: "Картошка фри",
    emoji: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
    price: 18000,
    sub: "Хрустящая · 150г",
    desc: "Золотистая хрустящая картошка фри. 150г."
  },
  {
    id: 23,
    category: "snacks",
    name: "Куриные стрипсы (3 шт)",
    emoji: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
    price: 22000,
    sub: "Куриное филе в панировке · 3 шт",
    desc: "Сочные куриные стрипсы в хрустящей панировке. 3 штуки."
  },
  {
    id: 24,
    category: "snacks",
    name: "Куриные крылышки BBQ",
    emoji: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=80",
    price: 28000,
    sub: "Соус барбекю · 5 шт",
    desc: "Куриные крылышки в соусе барбекю. Пальчики оближете! 5 штук."
  },
  {
    id: 25,
    category: "snacks",
    name: "Роллы с пепперони",
    emoji: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    price: 24000,
    sub: "Пепперони, сыр, соус ранч · 4 шт",
    desc: "Хрустящее тесто с пепперони, сыром и нежным соусом ранч. 4 штуки."
  },
  {
    id: 26,
    category: "snacks",
    name: "Сэндвич Кебаб",
    emoji: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    price: 32000,
    sub: "Мясо кебаб, перец, сыр, чиабатта",
    desc: "Сэндвич с пепперони и мясом кебаб на воздушной чиабатте с болгарским перцем и бургерным соусом."
  },
  {
    id: 27,
    category: "snacks",
    name: "Сэндвич Донар",
    emoji: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=400&q=80",
    price: 30000,
    sub: "Мясо донар, ранч, барбекю, чиабатта",
    desc: "Мясо донар, сыр, соусы ранч и барбекю на воздушной чиабатте с корнишонами и халапеньо."
  },

  /* ── КОМБО ── */
  {
    id: 28,
    category: "combo",
    name: "Комбо Старт",
    emoji: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    price: 69000,
    oldPrice: 84000,
    sub: "Пицца пепперони 20см + фри + стрипсы",
    desc: "Пицца пепперони (20 см) + хрустящая картошка фри + 3 куриных стрипса. Идеально для 1-2 человек!"
  },
  {
    id: 29,
    category: "combo",
    name: "Комбо Конёк",
    emoji: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    price: 119000,
    oldPrice: 145000,
    sub: "3 пиццы (25 см) на выбор",
    desc: "Создайте своё идеальное комбо: выберите любые 3 пиццы (25 см) и заплатите только за две!"
  },
  {
    id: 30,
    category: "combo",
    name: "Комбо на двоих",
    emoji: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    price: 109000,
    oldPrice: 135000,
    sub: "Пицца 25см + 8 синнамончиков + стрипсы + 2 Кола",
    desc: "Пицца (25 см) на выбор + 8 синнамончиков + 5 куриных стрипсов + 2 Coca-Cola (разлив). Идеально на двоих!"
  },
  {
    id: 31,
    category: "combo",
    name: "Семейное Комбо",
    emoji: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    price: 189000,
    oldPrice: 240000,
    sub: "2 пиццы 30см + синнамончики + Кола 1л",
    desc: "2 пиццы (30 см) на выбор + 8 классических синнамончиков + Coca-Cola (1 л) + 2 фирменных соуса."
  },
  {
    id: 32,
    category: "combo",
    name: "Тройное Комбо",
    emoji: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    price: 80000,
    oldPrice: 99000,
    sub: "3 пиццы (20 см) на выбор",
    desc: "Выбирайте любые три пиццы (20 см) по выгодной цене. Для 2-4 человек!"
  },

  /* ── ПАСТА И САЛАТЫ ── */
  {
    id: 33,
    category: "pasta",
    name: "Паста Фузили",
    emoji: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=80",
    price: 35000,
    sub: "Копчёная индейка, грибы, соус ранч",
    desc: "Паста фузили с копчёной индейкой, свежими грибами, соусом ранч и моцареллой."
  },
  {
    id: 34,
    category: "pasta",
    name: "Салат Греческий",
    emoji: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
    price: 28000,
    sub: "Айсберг, помидоры, огурцы, фетакса",
    desc: "Айсберг, латук, помидоры, огурцы, оливки, маслины, фетакса и базилик."
  },
  {
    id: 35,
    category: "pasta",
    name: "Салат Цезарь",
    emoji: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=80",
    price: 30000,
    sub: "Курица, айсберг, черри, крутоны",
    desc: "Курица, айсберг, томаты черри, крутоны и фирменный соус цезарь."
  },

  /* ── НАПИТКИ ── */
  {
    id: 36,
    category: "drinks",
    name: "Coca-Cola 0.5л",
    emoji: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80",
    price: 10000,
    sub: "Coca-Cola · 500мл",
    desc: "Coca-Cola 0.5л в холодном виде. Освежает в любое время!"
  },
  {
    id: 37,
    category: "drinks",
    name: "Coca-Cola 1л",
    emoji: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80",
    price: 16000,
    sub: "Coca-Cola · 1000мл",
    desc: "Coca-Cola 1л — отличный выбор для компании!"
  },
  {
    id: 38,
    category: "drinks",
    name: "Фанта 0.5л",
    emoji: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
    price: 10000,
    sub: "Fanta Апельсин · 500мл",
    desc: "Fanta апельсин 0.5л. Яркий и освежающий вкус!"
  },
  {
    id: 39,
    category: "drinks",
    name: "Sprite 0.5л",
    emoji: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&q=80",
    price: 10000,
    sub: "Sprite · 500мл",
    desc: "Sprite 0.5л. Лимонно-лаймовая свежесть!"
  },
  {
    id: 40,
    category: "drinks",
    name: "Вода без газа 0.5л",
    emoji: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
    price: 5000,
    sub: "Питьевая вода · 500мл",
    desc: "Чистая питьевая вода без газа 0.5л."
  },

  /* ── СОУСЫ ── */
  {
    id: 41,
    category: "sauces",
    name: "Соус Ранч",
    emoji: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80",
    price: 4000,
    sub: "Фирменный · 50г",
    desc: "Нежный фирменный соус ранч. 50г."
  },
  {
    id: 42,
    category: "sauces",
    name: "Соус Барбекю",
    emoji: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80",
    price: 4000,
    sub: "Дымный · 50г",
    desc: "Насыщенный соус барбекю с нотами дымка. 50г."
  },
  {
    id: 43,
    category: "sauces",
    name: "Соус Чесночный",
    emoji: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80",
    price: 4000,
    sub: "Чеснок, зелень · 50г",
    desc: "Ароматный чесночный соус с зеленью. 50г."
  },
  {
    id: 44,
    category: "sauces",
    name: "Кетчуп",
    emoji: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&q=80",
    price: 3000,
    sub: "Томатный · 30г",
    desc: "Классический томатный кетчуп в порционном пакетике. 30г."
  },

  /* ── ДЕСЕРТЫ ── */
  {
    id: 45,
    category: "desserts",
    name: "Синнамончики (8 шт)",
    emoji: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&q=80",
    price: 22000,
    sub: "Булочки с корицей · 8 шт",
    desc: "Фирменные мягкие булочки с корицей и глазурью. 8 штук."
  },
  {
    id: 46,
    category: "desserts",
    name: "Шоколадный фондан",
    emoji: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
    price: 18000,
    sub: "Тёплый шоколадный десерт",
    desc: "Тёплый шоколадный фондан с жидкой начинкой — фирменный десерт Bellissimo."
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
      cart[id] = {
        name: item.name,
        emoji: item.emoji,
        price: item.price,
        qty: 1,
        fromBellissimo: true   // ← метка ресторана
      };
    }
    saveCart(cart);
    updateBadge();
    updateCardQty(id);
    showToast(`🍕 ${item.name} добавлен`);
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