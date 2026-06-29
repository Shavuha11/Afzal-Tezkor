const restaurants = [
  {
    id: 1,
    name: "Oqtepa Lavash",
    emoji: "https://cdn.uzumtezkor.uz/images/058e56d9ed1ecbf6a2ee7f6da146e6a10843f15b8bba7015f3b94d4ee4c8717f_330x114_fit.jpg",
    bg: "#FFF8E7",
    rating: 4.8,
    time: "20–35",
    delivery: 0,
    tags: ["Лаваш", "Шаурма", "Фастфуд"],
    badge: "Бесплатная доставка",
    badgeType: "free",
    link: "Restaurants/Oqtepa_lavash.html" // <-- Добавили ссылку
  },
  {
    id: 2,
    name: "Yaponomama",
    emoji: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYcssVGuwKZFTCVMw5uRiyulz1TL6ExtlEA&s",
    bg: "#F0F8FF",
    rating: 4.7,
    time: "30–45",
    delivery: 5000,
    tags: ["Суши", "Роллы", "Японская"],
    badge: "Популярное",
    badgeType: "",
    link: "Restaurants/Yaponomama.html" // <-- Добавили ссылку
  },
  {
    id: 3,
    name: "Max Way",
    emoji: "https://cdn.uzumtezkor.uz/images/cea7a00cad5b85dc5eb1a920a155446f1268f058ba811bd93182396d9e9be461_550x160_fit.png",
    bg: "#FFF0F0",
    rating: 4.6,
    time: "15–25",
    delivery: 3000,
    tags: ["Бургеры", "Снеки", "Фастфуд"],
    badge: "Быстро",
    badgeType: "",
    link: "Restaurants/Max_way.html" // <-- Добавили ссылку
  },
  {
    id: 4,
    name: "Evos",
    emoji: "https://cdn.uzumtezkor.uz/images/2d8bd159b04afd3f736f2a31f1d03542f929a13ed39f8442df38c2997bd61d8c_550x160_fit.jpg",
    bg: "#F0FFF4",
    rating: 4.9,
    time: "20–30",
    delivery: 0,
    tags: ["Бургеры", "Картошка", "Напитки"],
    badge: "Бесплатная доставка",
    badgeType: "free",
    link: "Restaurants/Evos.html" // <-- Добавили ссылку
  },
  {
    id: 5,
    name: "Belissimo",
    emoji: "https://cdn.uzumtezkor.uz/images/23498398725032fa18f99ae6b906d81db1366200594839ab5896537449f5abec_330x114_fit.jpg",
    bg: "#FFF5F0",
    rating: 4.5,
    time: "25–40",
    delivery: 4000,
    tags: ["Пицца", "Паста", "Итальянская"],
    badge: "Скидка 15%",
    badgeType: "",
    link: "Restaurants/Belissimo.html" // <-- Добавили ссылку
  }
];


let cartCount = 0;
let currentDish = null;
let modalDishIndex = -1;

/* ── Helpers ── */
function formatPrice(p) {
  return p.toLocaleString("ru-RU") + " сум";
}

/* ── Render restaurants ── */
function renderRestaurants(list = restaurants) {
  const grid = document.getElementById("restaurants-grid");

  grid.innerHTML = list.map(r => `
    <a href="${r.link}" class="restaurant-card" style="text-decoration: none; color: inherit; display: block;">
      <div class="card-img" style="background:${r.bg}; font-size:64px">
        <img src="${r.emoji}" style="width:100%;height:100%;object-fit:cover;">
        <div class="card-badge ${r.badgeType}">${r.badge}</div>
      </div>
      <div class="card-body">
        <div class="card-name">${r.name}</div>
        <div class="card-meta">
          <span class="rating">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            ${r.rating}
          </span>

          <div class="dot"></div>
          <span>⏱ ${r.time} мин</span>

          <div class="dot"></div>
          <span>
            ${r.delivery === 0
              ? "🆓 Бесплатно"
              : "🚴 " + formatPrice(r.delivery)}
          </span>
        </div>

        <div class="card-tags">
          ${r.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}
        </div>
      </div>
    </a>
  `).join("");

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:40px;">
        Ресторан не найден 😔
      </div>
    `;
  }
}

/* ── Фильтрация через Promo Pills ── */
const promoPills = document.querySelectorAll(".promo-pill");

promoPills.forEach(pill => {
  pill.addEventListener("click", function () {
    promoPills.forEach(p => p.classList.remove("active"));
    this.classList.add("active");

    const filterText = this.textContent.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '').trim();

    // Если выбрали "Все", то показываем исходный массив ресторанов
    if (filterText.toLowerCase() === "все") {
      renderRestaurants(restaurants);
      return;
    }

    const filtered = restaurants.filter(r => {
      const matchesBadge = r.badge.toLowerCase().includes(filterText.toLowerCase());
      const matchesTag = r.tags.some(tag => tag.toLowerCase() === filterText.toLowerCase());
      return matchesBadge || matchesTag;
    });

    renderRestaurants(filtered);
  });
});


/* ── Cart ── */
function addToCart(name) {
  cartCount++;
  const badge = document.getElementById("cart-count");
  badge.textContent = cartCount;
  badge.style.display = "flex";
  showToast("✓ " + name + " добавлено в корзину");
}

/* ── Toast ── */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}



/* ── Стартовая загрузка ── */
renderRestaurants();

/* ── Поиск в реальном времени ── */
const searchInput = document.querySelector(".search-wrap input");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();

  if (query === "") {
    renderRestaurants(restaurants);
    return;
  }

  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.tags.some(tag =>
      tag.toLowerCase().includes(query)
    )
  );

  renderRestaurants(filtered);
});