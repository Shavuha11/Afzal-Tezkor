(function () {
  'use strict';

  /* ═══════════════════════════
     ДАННЫЕ — YAPONAMAMA
     Картинки: официальные фото с Wolt CDN (imageproxy.wolt.com)
  ═══════════════════════════ */
const MENU = [

  /* ── РОЛЛЫ И СУШИ ── */
  {
    id: 0,
    category: "rolls",
    name: "Филадельфия Classic 8 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/adff8588-08c6-11f1-9206-d63c32c7fa61_0a0b65026c07f710b5495a28e02ba771.jpeg",
    price: 99000,
    sub: "Лосось, сыр сливочный, огурец · 8 шт",
    desc: "Классическая Филадельфия: лосось, сыр сливочный, огурец. 8 штук."
  },
  {
    id: 1,
    category: "rolls",
    name: "Филадельфия Classic 4 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/adff8588-08c6-11f1-9206-d63c32c7fa61_0a0b65026c07f710b5495a28e02ba771.jpeg",
    price: 52000,
    sub: "Лосось, сыр сливочный, огурец · 4 шт",
    desc: "Классическая Филадельфия: лосось, сыр сливочный, огурец. 4 штуки."
  },
  {
    id: 2,
    category: "rolls",
    name: "Сливочный лосось 8 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/adff8588-08c6-11f1-9206-d63c32c7fa61_0a0b65026c07f710b5495a28e02ba771.jpeg",
    price: 89000,
    sub: "Лосось, сыр сливочный, огурец · 8 шт",
    desc: "Нежный ролл с лососем, сливочным сыром и огурцом. 8 штук."
  },
  {
    id: 3,
    category: "rolls",
    name: "Сливочный лосось 4 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/adff8588-08c6-11f1-9206-d63c32c7fa61_0a0b65026c07f710b5495a28e02ba771.jpeg",
    price: 39000,
    sub: "Лосось, сыр сливочный, огурец · 4 шт",
    desc: "Нежный ролл с лососем, сливочным сыром и огурцом. 4 штуки."
  },
  {
    id: 4,
    category: "rolls",
    name: "Филадельфия с угрём 8 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/adf5ef50-08c6-11f1-9206-d63c32c7fa61_92d8caff11b4758ae224d3a50b0a4858.jpeg",
    price: 119000,
    sub: "Угорь, сыр сливочный, огурец, соус унаги · 8 шт",
    desc: "Угорь, сыр сливочный, огурец, соус унаги, кунжут. 8 штук."
  },
  {
    id: 5,
    category: "rolls",
    name: "Филадельфия с угрём 4 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/adf5ef50-08c6-11f1-9206-d63c32c7fa61_92d8caff11b4758ae224d3a50b0a4858.jpeg",
    price: 62000,
    sub: "Угорь, сыр сливочный, огурец, соус унаги · 4 шт",
    desc: "Угорь, сыр сливочный, огурец, соус унаги, кунжут. 4 штуки."
  },
  {
    id: 6,
    category: "rolls",
    name: "Тоби Канада 8 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/ae02c888-08c6-11f1-9206-d63c32c7fa61_338c62215c72f344a6d348cee4dd4aa4.jpeg",
    price: 75000,
    sub: "Лосось, майонез, огурец, икра летучей рыбы · 8 шт",
    desc: "Лосось, майонез, огурец, икра летучей рыбы. 8 штук."
  },
  {
    id: 7,
    category: "rolls",
    name: "Калифорния с тобико 8 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e56e5c65f2e76ac935288/51ae8046-2904-11f1-b8d9-aa843c9a277f_087b6518f06d7ab1918c90e07fc285dd.webp",
    price: 69000,
    sub: "Крабовый микс, огурец, икра летучей рыбы · 8 шт",
    desc: "Крабовый микс, огурец, икра летучей рыбы тобико. 8 штук."
  },
  {
    id: 8,
    category: "rolls",
    name: "Akibuto 8 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/adf8c914-08c6-11f1-9206-d63c32c7fa61_2c66e5bc843cfa89454668b671f856a6.jpeg",
    price: 69000,
    sub: "Лосось гриль, яблоко, огурец, сыр сливочный · 8 шт",
    desc: "Лосось гриль, яблоко, огурец, сыр сливочный, икра летучей рыбы. 8 штук."
  },
  {
    id: 9,
    category: "rolls",
    name: "Тоби Чикен маки 8 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/ae02c888-08c6-11f1-9206-d63c32c7fa61_338c62215c72f344a6d348cee4dd4aa4.jpeg",
    price: 55000,
    sub: "Курица терияки, майонез, огурец, икра · 8 шт",
    desc: "Курица терияки, майонез, огурец, яблоко, икра летучей рыбы. 8 штук."
  },
  {
    id: 10,
    category: "rolls",
    name: "Филадельфия кунсей 8 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e517225a884930bffa5be/b0e5db3c-1625-11f1-aeb4-a6f84f94a861_edeb51a12b0d85153e2fe6d8aea0009f.jpeg",
    price: 89000,
    sub: "Копчёный лосось, крабовый микс, сыр · 8 шт",
    desc: "Лосось копчёный, крабовый микс, сыр сливочный, майонез, огурец, салат айсберг. 8 штук."
  },
  {
    id: 11,
    category: "rolls",
    name: "Филадельфия с креветкой 8 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/67ebd2b642916adb75576c0d/9f680382-17d6-11f1-bd22-226e4c82111c_df627e15eb89dd8bed98ae2332a5a559.jpeg",
    price: 89000,
    sub: "Креветка, сыр сливочный, огурец · 8 шт",
    desc: "Креветка, сыр сливочный, огурец. 8 штук."
  },
  {
    id: 12,
    category: "rolls",
    name: "Филадельфия с креветкой 4 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/67ebd2b642916adb75576c0d/9f680382-17d6-11f1-bd22-226e4c82111c_df627e15eb89dd8bed98ae2332a5a559.jpeg",
    price: 49000,
    sub: "Креветка, сыр сливочный, огурец · 4 шт",
    desc: "Креветка, сыр сливочный, огурец. 4 штуки."
  },

  /* ── СЕТЫ ── */
  {
    id: 13,
    category: "sets",
    name: "Сет Китана 92 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8a29724-08c6-11f1-9206-d63c32c7fa61_a15b917ff3093c66e17aaaec9f9d8346.jpeg",
    price: 799000,
    sub: "Филадельфия, угорь, спайси, запечённые · 92 шт · 7-8 чел",
    desc: "Филадельфия classic 8 шт, филадельфия с угрём 8 шт, спайси сяке 8 шт, uzumi запечённый 8 шт, тоби канада 8 шт, калифорния с тобико 8 шт, гурме маки 8 шт, самуи 10 шт, тонкий ролл с копчёным лососем 8 шт, тонкий ролл с креветкой 8 шт, лосось нигири 5 шт, угорь нигири 5 шт. На 7-8 персон."
  },
  {
    id: 14,
    category: "sets",
    name: "Сет Биг Бен 57 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e6122dba10d14c5c47774/f8e9318e-1884-11f1-aacf-da48cacfbf5b_ae4730bb7de6f8dff139995061986191.jpeg",
    price: 485000,
    sub: "Ассорти роллов и miniroll · 57 шт · 4-5 чел",
    desc: "Филадельфия classic 4 шт, филадельфия с угрём 4 шт, сливочный тунец 4 шт, гурме маки 4 шт, унаги маки 4 шт, калифорния с тобико 4 шт, akibuto 4 шт, кииро темпура 4 шт, americano 5 шт, miniroll тунец 6 шт, miniroll лосось 6 шт, хоккайдо 8 шт. На 4-5 персон."
  },
  {
    id: 15,
    category: "sets",
    name: "Сет Салмон 50 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/68d3dac52facf1f05a5d9546/a93f42c4-1639-11f1-894f-7a0a6bc0ce90_a7a6f521a97a1e6101952e4bd68a0068.jpeg",
    price: 389000,
    sub: "Роллы с лососем · 50 шт · 4-5 чел",
    desc: "Филадельфия classic 8 шт, спайси сяке 8 шт, тоби канада 8 шт, сяке темпура 8 шт, uzumi запечённый 8 шт, maxroll лосось 10 шт. На 4-5 персон."
  },
  {
    id: 16,
    category: "sets",
    name: "Сет Big Love 48 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e5f8343a00238f6ba7e2e/9eb0799e-0d7f-11f1-8235-928f211faeb9_2da5963e2a0c5a607e8240a42d158326.jpeg",
    price: 339000,
    sub: "Сливочный лосось, тунец, запечённые · 48 шт · 3-4 чел",
    desc: "Сливочный лосось 8 шт, сливочный тунец 8 шт, uzumi запечённый 8 шт, akibuto 8 шт, тонкий ролл с лососем 8 шт, тонкий ролл с угрём 8 шт. На 3-4 персоны."
  },
  {
    id: 17,
    category: "sets",
    name: "Сет Харудонари 44 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/6852aa462178686972b1736c/354e43f4-0b32-11f1-bf73-764ec8761d86_ab8e0094c2f9f6048c351c163dad7f76.jpeg",
    price: 310000,
    sub: "Филадельфия, темпура, miniroll · 44 шт · 3-4 чел",
    desc: "Филадельфия classic 4 шт, филадельфия с угрём 4 шт, тоби канада 4 шт, спайси сяке 4 шт, тонкий ролл с лососем 8 шт, сяке темпура 8 шт, miniroll краб 6 шт, miniroll чикен 6 шт. На 3-4 персоны."
  },
  {
    id: 18,
    category: "sets",
    name: "Сет Якудза 46 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8a5969a-08c6-11f1-9206-d63c32c7fa61_e27c0f57ddc4bf18aa91838d140b4a80.jpeg",
    price: 299000,
    sub: "Сливочный лосось, самуи, шанхай · 46 шт · 3-4 чел",
    desc: "Сливочный лосось 8 шт, akibuto 8 шт, самуи 10 шт, шанхай 10 шт, americano 10 шт. На 3-4 персоны."
  },
  {
    id: 19,
    category: "sets",
    name: "Сет Корпоратив 44 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/6852aa462178686972b1736c/354e43f4-0b32-11f1-bf73-764ec8761d86_ab8e0094c2f9f6048c351c163dad7f76.jpeg",
    price: 299000,
    sub: "Филадельфия, спайси, maxroll · 44 шт · 3-4 чел",
    desc: "Филадельфия classic 8 шт, калифорния с тобико 8 шт, спайси сяке 8 шт, maxroll чикен 10 шт, americano 10 шт. На 3-4 персоны."
  },
  {
    id: 20,
    category: "sets",
    name: "Сет Калифорния 38 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a89d80e0-08c6-11f1-9206-d63c32c7fa61_8f33146b24b63ca2c8bcb6e4496342e6.jpeg",
    price: 269000,
    sub: "Филадельфия, калифорния, miniroll · 38 шт · 2-3 чел",
    desc: "Филадельфия classic 4 шт, филадельфия с угрём 4 шт, спайси сяке 4 шт, калифорния с кунжутом 4 шт, калифорния с тобико 4 шт, тоби канада 4 шт, тонкий ролл с огурцом 8 шт, miniroll тунец 6 шт. На 2-3 персоны."
  },
  {
    id: 21,
    category: "sets",
    name: "Сет Mika Love 34 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e5f8343a00238f6ba7e2e/9eb0799e-0d7f-11f1-8235-928f211faeb9_2da5963e2a0c5a607e8240a42d158326.jpeg",
    price: 275000,
    sub: "Филадельфия, калифорния, запечённые · 34 шт · 2-3 чел",
    desc: "Филадельфия classic 8 шт, калифорния с тобико 8 шт, тонкий ролл с лососем 8 шт, uzumi запечённый 8 шт, лосось нигири 2 шт. На 2-3 персоны."
  },
  {
    id: 22,
    category: "sets",
    name: "Сет Запечённый max 30 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a89d80e0-08c6-11f1-9206-d63c32c7fa61_8f33146b24b63ca2c8bcb6e4496342e6.jpeg",
    price: 225000,
    sub: "Maxroll лосось, угорь, чикен · 30 шт · 2-3 чел",
    desc: "Maxroll лосось 10 шт, maxroll угорь 10 шт, maxroll чикен 10 шт. На 2-3 персоны."
  },
  {
    id: 23,
    category: "sets",
    name: "Сет Tsuki 30 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a89d80e0-08c6-11f1-9206-d63c32c7fa61_8f33146b24b63ca2c8bcb6e4496342e6.jpeg",
    price: 185000,
    sub: "Uzumi, miniroll лосось и чикен · 30 шт · 2-3 чел",
    desc: "Uzumi запечённый 8 шт, miniroll лосось 6 шт, miniroll чикен 6 шт, americano 10 шт. На 2-3 персоны."
  },

  /* ── МИНИ-СЕТЫ ── */
  {
    id: 24,
    category: "minisets",
    name: "Сет Детройт 26 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669f9246ccd642bf83dfa38f/df0f6e4c-1ba7-11f1-b4b1-f24c13d0ff78_9c7465809891c84e77525c075ffb9655.jpeg",
    price: 189000,
    sub: "Филадельфия, темпура, miniroll · 26 шт · 2 чел",
    desc: "Филадельфия classic 4 шт, uzumi запечённый 4 шт, тонкий ролл с лососем 8 шт, кииро темпура 4 шт, miniroll тунец 6 шт. На 2 персоны."
  },
  {
    id: 25,
    category: "minisets",
    name: "Сет Ямомото 26 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669f9246ccd642bf83dfa38f/df0f6e4c-1ba7-11f1-b4b1-f24c13d0ff78_9c7465809891c84e77525c075ffb9655.jpeg",
    price: 155000,
    sub: "Сливочный лосось, калифорния, maxroll · 26 шт · 2 чел",
    desc: "Сливочный лосось 8 шт, калифорния с кунжутом 8 шт, maxroll чикен 10 шт. На 2 персоны."
  },
  {
    id: 26,
    category: "minisets",
    name: "Сет Нагата 22 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669f9246ccd642bf83dfa38f/df0f6e4c-1ba7-11f1-b4b1-f24c13d0ff78_9c7465809891c84e77525c075ffb9655.jpeg",
    price: 155000,
    sub: "Филадельфия, калифорния, miniroll · 22 шт · 1-2 чел",
    desc: "Филадельфия classic 8 шт, калифорния с кунжутом 4 шт, калифорния с тобико 4 шт, miniroll чикен 6 шт. На 1-2 персоны."
  },
  {
    id: 27,
    category: "minisets",
    name: "Сет Кантан 19 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669f9246ccd642bf83dfa38f/df0f6e4c-1ba7-11f1-b4b1-f24c13d0ff78_9c7465809891c84e77525c075ffb9655.jpeg",
    price: 109000,
    sub: "Калифорния, americano, miniroll · 19 шт · 1-2 чел",
    desc: "Калифорния с кунжутом 4 шт, калифорния с тобико 4 шт, americano 5 шт, miniroll чикен 6 шт. На 1-2 персоны."
  },
  {
    id: 28,
    category: "minisets",
    name: "Сет Запечённый mini 18 шт",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a89d80e0-08c6-11f1-9206-d63c32c7fa61_8f33146b24b63ca2c8bcb6e4496342e6.jpeg",
    price: 129000,
    sub: "Miniroll лосось, угорь, чикен · 18 шт · 1-2 чел",
    desc: "Miniroll лосось 6 шт, miniroll угорь 6 шт, miniroll чикен 6 шт. На 1-2 персоны."
  },

  /* ── ЗАКУСКИ ── */
  {
    id: 29,
    category: "starters",
    name: "Креветочные чипсы",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8866aa4-08c6-11f1-9206-d63c32c7fa61_859eece53da2f7f934631e624c09ee3e.jpeg",
    price: 25000,
    sub: "Креветочные чипсы, соус сладкий чили",
    desc: "Воздушные хрустящие креветочные чипсы со сладким соусом чили."
  },
  {
    id: 30,
    category: "starters",
    name: "Битые огурцы",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8825a4a-08c6-11f1-9206-d63c32c7fa61_fbd400f54764bc0b50e2b377889c7843.jpeg",
    price: 29000,
    sub: "Огурцы, соус соевый, кунжутное масло, чеснок",
    desc: "Огурцы, соус соевый, масло кунжутное, перец чили, чеснок, кешью, кинза, кунжут."
  },
  {
    id: 31,
    category: "starters",
    name: "Самоса с уткой",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8866aa4-08c6-11f1-9206-d63c32c7fa61_859eece53da2f7f934631e624c09ee3e.jpeg",
    price: 49000,
    sub: "Утка, тесто, соус хойсин",
    desc: "Утка, тесто, соус хойсин, лист бамбука."
  },
  {
    id: 32,
    category: "starters",
    name: "Ротти с уткой",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8866aa4-08c6-11f1-9206-d63c32c7fa61_859eece53da2f7f934631e624c09ee3e.jpeg",
    price: 62000,
    sub: "Утка, лепёшка, сыр сливочный, огурцы",
    desc: "Утка, лепёшка, сыр сливочный, огурцы, лук красный, икра летучей рыбы с кимчи, соус хойсин, кунжут."
  },
  {
    id: 33,
    category: "starters",
    name: "Ротти с лососем",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a87860da-08c6-11f1-9206-d63c32c7fa61_6aef50791bfda56cc8e9544f5768dae5.jpeg",
    price: 74000,
    sub: "Лосось, лепёшка, шпинат, сыр сливочный",
    desc: "Лосось, лепёшка, шпинат, лук репчатый, чеснок, сыр сливочный, икра летучей рыбы с кимчи, рукола."
  },
  {
    id: 34,
    category: "starters",
    name: "Крокеты с лососем",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a87860da-08c6-11f1-9206-d63c32c7fa61_6aef50791bfda56cc8e9544f5768dae5.jpeg",
    price: 25000,
    sub: "Лосось, сыр сливочный, соус терияки · 5 шт",
    desc: "Лосось, сыр сливочный, соус терияки, лук зелёный, стружка тунца. 5 штук."
  },
  {
    id: 35,
    category: "starters",
    name: "Крокеты с угрём",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e5f8343a00238f6ba7e2e/8a678522-26a7-11f1-9f3f-1eecd7ffec2e_dd3e07bfda1907a8faf227fb45d6b975.jpeg",
    price: 35000,
    sub: "Угорь, сыр сливочный, соус унаги · 5 шт",
    desc: "Угорь, сыр сливочный, соус унаги, лук зелёный, кунжут. 5 штук."
  },
  {
    id: 36,
    category: "starters",
    name: "Эби темпура",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8866aa4-08c6-11f1-9206-d63c32c7fa61_859eece53da2f7f934631e624c09ee3e.jpeg",
    price: 102000,
    sub: "Тигровые креветки, вешенки, кабачки",
    desc: "Тигровые креветки, вешенки, кабачки, специи, соус тартар, лук репчатый, редис, икра летучей рыбы, лук зелёный."
  },

  /* ── САЛАТЫ ── */
  {
    id: 37,
    category: "salads",
    name: "Кани сарада",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8825a4a-08c6-11f1-9206-d63c32c7fa61_fbd400f54764bc0b50e2b377889c7843.jpeg",
    price: 38000,
    sub: "Крабовый микс, огурцы, икра летучей рыбы",
    desc: "Крабовый микс, огурцы, листья салата, рис, икра летучей рыбы, соус тартар, кляр жареный, ким жареный, кунжут, специи."
  },
  {
    id: 38,
    category: "salads",
    name: "Чука сарада",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8825a4a-08c6-11f1-9206-d63c32c7fa61_fbd400f54764bc0b50e2b377889c7843.jpeg",
    price: 46000,
    sub: "Салат чука, соус ореховый, кунжут",
    desc: "Салат чука, помидор, масло кунжутное, лимон, кунжут, соус ореховый."
  },
  {
    id: 39,
    category: "salads",
    name: "Салат Греческий",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8825a4a-08c6-11f1-9206-d63c32c7fa61_fbd400f54764bc0b50e2b377889c7843.jpeg",
    price: 39000,
    sub: "Огурцы, помидоры, маслины, сыр фета",
    desc: "Огурцы, помидоры черри, перец болгарский, маслины, листья салата, рукола, лук красный, сыр фета, крем бальзамический, масло базиликовое."
  },
  {
    id: 40,
    category: "salads",
    name: "Микадо сарада",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8825a4a-08c6-11f1-9206-d63c32c7fa61_fbd400f54764bc0b50e2b377889c7843.jpeg",
    price: 50000,
    sub: "Курица гриль, айсберг, соус цезарь",
    desc: "Курица гриль, листья салата, салат айсберг, помидоры черри, крутоны, соус цезарь, сыр твёрдый, яйца перепелиные, маслины сушёные."
  },
  {
    id: 41,
    category: "salads",
    name: "Ахиру сарада",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8825a4a-08c6-11f1-9206-d63c32c7fa61_fbd400f54764bc0b50e2b377889c7843.jpeg",
    price: 59000,
    sub: "Утка, яблоко, соус тайский, кинза",
    desc: "Утка, огурцы, помидоры, лук красный, яблоки, чипсы рисовые, листья салата, соус тайский, соус хойсин, кинза, чеснок, мята, кунжут."
  },
  {
    id: 42,
    category: "salads",
    name: "Фила сарада",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8825a4a-08c6-11f1-9206-d63c32c7fa61_fbd400f54764bc0b50e2b377889c7843.jpeg",
    price: 69000,
    sub: "Говядина терияки, рукола, груша",
    desc: "Говядина терияки, рукола, помидоры черри, груша консервированная, сыр сливочный, крем бальзамический, масло оливковое, специи."
  },
  {
    id: 43,
    category: "salads",
    name: "Эби сарада",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8825a4a-08c6-11f1-9206-d63c32c7fa61_fbd400f54764bc0b50e2b377889c7843.jpeg",
    price: 72000,
    sub: "Тигровые креветки, болгарский перец",
    desc: "Тигровые креветки, помидоры, огурцы, перец болгарский, листья салата, соус фирменный, фреш лимонный, базилик, маслины сушёные."
  },
  {
    id: 44,
    category: "salads",
    name: "Салат из баклажанов",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8825a4a-08c6-11f1-9206-d63c32c7fa61_fbd400f54764bc0b50e2b377889c7843.jpeg",
    price: 44000,
    sub: "Баклажаны жареные, помидоры, кимчи",
    desc: "Баклажаны жареные, помидоры, сыр сливочный, соус кимчи, соус сладкий чили, кинза, масло базиликовое, маслины сушёные."
  },

  /* ── СУПЫ ── */
  {
    id: 45,
    category: "soups",
    name: "Том Ям с курицей",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8e6a90a-08c6-11f1-9206-d63c32c7fa61_f96ebb369006657d46f2b26706d310ff.jpeg",
    price: 55000,
    sub: "Острый тайский суп, куриное филе",
    desc: "Классический согревающий острый тайский суп Том Ям с куриным филе, грибами, лемонграссом и кокосовым молоком."
  },
  {
    id: 46,
    category: "soups",
    name: "Том Ям с креветками",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8e6a90a-08c6-11f1-9206-d63c32c7fa61_f96ebb369006657d46f2b26706d310ff.jpeg",
    price: 69000,
    sub: "Острый тайский суп, тигровые креветки",
    desc: "Классический Том Ям с тигровыми креветками, грибами, лемонграссом и кокосовым молоком."
  },
  {
    id: 47,
    category: "soups",
    name: "Фо Бо",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8d8e8e2-08c6-11f1-9206-d63c32c7fa61_8ec0d14c1996d6d91def7d0186398ee6.jpeg",
    price: 52000,
    sub: "Говяжий бульон, рисовая лапша, говядина",
    desc: "Фо Бо на насыщенном говяжьем бульоне с рисовой лапшой, говядиной, зеленью и специями."
  },
  {
    id: 48,
    category: "soups",
    name: "Кукси",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e52303407ee28823c5ab4/d09a1a68-17b7-11f1-9379-2aa583e5b3d5_5f08c6c0ec6512193408fafc876edf21.jpeg",
    price: 47000,
    sub: "Говядина, лапша, омлет, огурцы · холодный",
    desc: "Говядина, мурри, огурцы, помидоры, капуста белокочанная, омлет, лапша, кочи-тирими, амоя, уксус."
  },

  /* ── ГОРЯЧИЕ БЛЮДА ── */
  {
    id: 49,
    category: "hot",
    name: "Донбури с курицей",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a88dad46-08c6-11f1-9206-d63c32c7fa61_16184d1cae37bded4b849a3f5a5509c5.jpeg",
    price: 39000,
    sub: "Куриное филе, рис, корейская морковь",
    desc: "Куриное филе, огурцы битые, морковь-ча, кимчи, соус тайский, кинза, кунжут, рис."
  },
  {
    id: 50,
    category: "hot",
    name: "Сэндвич классический",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/ada44970-08c6-11f1-9206-d63c32c7fa61_c81cbe45e5f82f334c97f641b7f8434a.jpeg",
    price: 45000,
    sub: "Куриное филе, тостерный хлеб, сыр плавленый",
    desc: "Куриное филе, хлеб тостерный, листья салата, помидор, сыр плавленый, соус сливочный, соус фирменный, кляр жареный."
  },
  {
    id: 51,
    category: "hot",
    name: "Бургер Chicken Chick",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/ada44970-08c6-11f1-9206-d63c32c7fa61_c81cbe45e5f82f334c97f641b7f8434a.jpeg",
    price: 49000,
    sub: "Куриное филе, ананас, соус фирменный",
    desc: "Булочка, филе куриное, огурцы, ананас консервированный, листья салата, соус фирменный, кетчуп."
  },
  {
    id: 52,
    category: "hot",
    name: "Чизбургер",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e517225a884930bffa5be/da6ab86a-1300-11f1-84e7-22442c5c7f22_4db6799bb503380fc403b5227a7bf64d.jpeg",
    price: 52000,
    sub: "Говяжья котлета, сыр чеддер, айсберг",
    desc: "Булочка, котлета говяжья, огурцы солёные, помидоры, салат айсберг, сыр чеддер, соус фирменный, соус астория."
  },
  {
    id: 53,
    category: "hot",
    name: "Сакана чиппу",
    emoji: "https://imageproxy.wolt.com/menu/menu-images/669e4f0eef3eb5a6b64fbe59/a8866aa4-08c6-11f1-9206-d63c32c7fa61_859eece53da2f7f934631e624c09ee3e.jpeg",
    price: 69000,
    sub: "Судак, картофель по-деревенски, рукола",
    desc: "Судак, картофель по-деревенски, соус фирменный, перец чёрный, перец красный, чеснок молотый, рукола, лимон."
  },
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
    showToast(`🍣 ${item.name} добавлен`);
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