(function () {
  'use strict';

  /* ═══════════════════════════
     ДАННЫЕ — EVOS
     img: реальные фото с Wolt (imageproxy.wolt.com — фото EVOS)
  ═══════════════════════════ */
  const MENU = [

    /* ── ЛАВАШ ── */
    {
      id: 0, category: "lavash",
      name: "Лаваш с говядиной M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c19874da-16c0-11f1-b59b-8e0d0de908d3_cf13937e4755cf7fdd8f8f814d43d82b.png",
      price: 34000,
      sub: "Говядина гриль, помидоры, чипсы, томатный соус",
      desc: "Сочные кусочки говядины гриль и спелых помидоров, золотистые картофельные чипсы, томатный восточный соус со свежим луком и зеленью в классическом лаваше."
    },
    {
      id: 1, category: "lavash",
      name: "Лаваш с говядиной L",
      img: "https://imageproxy.wolt.com/menu/menu-images/686f8ebee7575f9ed7144ae9/4bd9c1a2-fabb-11f0-8998-067bb6c8da01_02b0e854219221a0c7c0213ffdbb4bea.png",
      price: 41000,
      sub: "Говядина гриль, помидоры, чипсы, томатный соус · большой",
      desc: "Большая версия. Сочные кусочки говядины гриль и спелых помидоров, золотистые картофельные чипсы, томатный восточный соус со свежим луком и зеленью в классическом лаваше."
    },
    {
      id: 2, category: "lavash",
      name: "Лаваш с говядиной и сыром M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c19c5bb8-16c0-11f1-b59b-8e0d0de908d3_e15ac836c4b233679618c85d685276b9.png",
      price: 37000,
      sub: "Говядина гриль, чипсы, сыр Чеддер",
      desc: "Сочные кусочки говядины гриль и спелых помидоров, золотистые картофельные чипсы, сыр Чеддер и томатный восточный соус со свежим луком и зеленью в сырном лаваше."
    },
    {
      id: 3, category: "lavash",
      name: "Лаваш с говядиной и сыром L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1aa2eaa-16c0-11f1-b59b-8e0d0de908d3_3a99a11a9c4caf41c03085c484aa6ea8.png",
      price: 44000,
      sub: "Говядина гриль, чипсы, сыр Чеддер · большой",
      desc: "Большая версия. Говядина гриль, помидоры, чипсы, сыр Чеддер в классическом лаваше."
    },
    {
      id: 4, category: "lavash",
      name: "Лаваш острый с говядиной L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1a63246-16c0-11f1-b59b-8e0d0de908d3_0a1c5a19dce2320592e9ca1d9b2c2130.png",
      price: 41000,
      sub: "Говядина гриль, чипсы, острый соус Калампир",
      desc: "Говядина гриль, помидоры, чипсы и острый соус Калампир в румяном ред-лаваше."
    },
    {
      id: 5, category: "lavash",
      name: "Лаваш с курицей M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c19ad95a-16c0-11f1-b59b-8e0d0de908d3_e1422cf60b343778af82ece8c0f85758.png",
      price: 31000,
      sub: "Курица гриль, помидоры, чипсы, томатный соус",
      desc: "Куриное мясо гриль, маринованное с восточными специями, помидоры, картофельные чипсы, томатный соус со свежим луком и зеленью в классическом лаваше."
    },
    {
      id: 6, category: "lavash",
      name: "Лаваш с курицей L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1a4b01a-16c0-11f1-b59b-8e0d0de908d3_0a9ee109abf3d76e362f19746d550fce.png",
      price: 37000,
      sub: "Курица гриль, помидоры, чипсы, томатный соус · большой",
      desc: "Большой лаваш с куриным мясом гриль, помидорами, чипсами и томатным соусом."
    },
    {
      id: 7, category: "lavash",
      name: "Лаваш с курицей и сыром M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c19e9e0a-16c0-11f1-b59b-8e0d0de908d3_6d0b736b1b773ca491e2794fd94f59a1.png",
      price: 34000,
      sub: "Курица гриль, помидоры, сыр Чеддер",
      desc: "Куриное мясо гриль с помидорами, чипсами, сыром Чеддер и томатным соусом."
    },
    {
      id: 8, category: "lavash",
      name: "Лаваш с курицей и сыром L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1aba4b0-16c0-11f1-b59b-8e0d0de908d3_d533a617aec951505e0d172ff64acf59.png",
      price: 40000,
      sub: "Курица гриль, сыр Чеддер · большой",
      desc: "Большой лаваш с куриным мясом гриль, сыром Чеддер, помидорами и томатным соусом."
    },
    {
      id: 9, category: "lavash",
      name: "Лаваш острый с курицей L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1a79fa0-16c0-11f1-b59b-8e0d0de908d3_744a101475a701b05c112d1ff14c6e59.png",
      price: 37000,
      sub: "Курица гриль, чипсы, острый соус Калампир",
      desc: "Пикантная курица гриль, помидоры, чипсы, острый соус Калампир в румяном ред-лаваше."
    },
    {
      id: 10, category: "lavash",
      name: "Лавашелло M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c19283e0-16c0-11f1-b59b-8e0d0de908d3_7866144fc5f04e1fd734169050e274d4.png",
      price: 31000,
      sub: "Новинка! Фирменный лаваш EVOS",
      desc: "Новинка! Фирменный лавашелло EVOS в среднем размере."
    },
    {
      id: 11, category: "lavash",
      name: "Лавашелло L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67c01ef6dd188551ae56b16a/20cba5aa-16ec-11f1-995c-32ee74478902_968187d2f058109eed884ccf93c9e2f0.png",
      price: 37000,
      sub: "Новинка! Фирменный лаваш EVOS · большой",
      desc: "Новинка! Фирменный лавашелло EVOS в большом размере."
    },
    {
      id: 12, category: "lavash",
      name: "Фиттер",
      img: "https://imageproxy.wolt.com/menu/menu-images/67ed437789f6ddcc9fa3d15d/e565f972-e64c-11f0-94b1-9a95ebe1aa90_87b09ef383f66cdb1a161d217cca7e5e.png",
      price: 36000,
      sub: "Курица гриль, айсберг, огурец, сыр Фетакса, соус Эко",
      desc: "Нежное куриное мясо гриль, салат Айсберг, помидор, огурец, мягкий сыр Фетакса, лёгкий сливочный соус Эко в зелёном лаваше Фиттер."
    },

    /* ── ШАУРМА ── */
    {
      id: 13, category: "shaurma",
      name: "Шаурма с говядиной L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1b9fb1e-16c0-11f1-b59b-8e0d0de908d3_10911e094aa583f81ffbeaaa17fd61bb.png",
      price: 39000,
      sub: "Говядина гриль, огурец, помидор, чипсы, томатный соус",
      desc: "Сочная говядина гриль, свежий огурец, помидор, хрустящие чипсы, томатный соус в булочке с кунжутом."
    },
    {
      id: 14, category: "shaurma",
      name: "Шаурма с говядиной M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1c360fa-16c0-11f1-b59b-8e0d0de908d3_cea263b95132dcc8913e26774890bf8b.png",
      price: 33000,
      sub: "Говядина гриль, огурец, помидор · средняя",
      desc: "Говядина гриль, огурец, помидор, чипсы и томатный соус в кунжутной булочке. Средний размер."
    },
    {
      id: 15, category: "shaurma",
      name: "Шаурма острая с говядиной L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1bf7ab2-16c0-11f1-b59b-8e0d0de908d3_d1c4d15bcf7023397b8208b3bf8a81b2.png",
      price: 39000,
      sub: "Говядина гриль, чипсы, острый томатный соус",
      desc: "Пикантная говядина гриль, огурец, помидор, чипсы, острый соус в кунжутной булочке."
    },
    {
      id: 16, category: "shaurma",
      name: "Шаурма острая с говядиной M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1c76c0e-16c0-11f1-b59b-8e0d0de908d3_5bea82fe1064b5e5e03895976a5cc5c8.png",
      price: 33000,
      sub: "Говядина гриль, острый соус · средняя",
      desc: "Говядина гриль с острым соусом, огурцом, помидором и чипсами. Средний размер."
    },
    {
      id: 17, category: "shaurma",
      name: "Шаурма с курицей L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1bdd554-16c0-11f1-b59b-8e0d0de908d3_2d2e26aa7ff0d55591bd7acd08bedade.png",
      price: 34000,
      sub: "Курица гриль, огурец, помидор, чипсы, соус",
      desc: "Румяная курица гриль, огурец, помидор, хрустящие чипсы, томатный соус в кунжутной булочке."
    },
    {
      id: 18, category: "shaurma",
      name: "Шаурма с курицей M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1c5037e-16c0-11f1-b59b-8e0d0de908d3_e953ed504adc2a2e7423b5f7b1bd4477.png",
      price: 30000,
      sub: "Курица гриль, огурец, помидор · средняя",
      desc: "Курица гриль с огурцом, помидором, чипсами и томатным соусом. Средний размер."
    },
    {
      id: 19, category: "shaurma",
      name: "Шаурма острая с курицей L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1c0e32a-16c0-11f1-b59b-8e0d0de908d3_e2770e5ff40fed4d5fd3ae57ff019777.png",
      price: 34000,
      sub: "Курица гриль, острый соус Калампир, чипсы",
      desc: "Курица гриль, огурец, помидор, чипсы, острый соус Калампир в кунжутной булочке."
    },
    {
      id: 20, category: "shaurma",
      name: "Шаурмито L",
      img: "https://imageproxy.wolt.com/menu/menu-images/6735d87cac6d58a2e325f602/a5dfbe70-d989-11f0-9816-762c572c19e3_1b466bda9de0ae715c867eedf055d24c.png",
      price: 34000,
      sub: "Новинка! Фирменная шаурмито EVOS",
      desc: "Новинка! Фирменная шаурмито EVOS в большом размере."
    },
    {
      id: 21, category: "shaurma",
      name: "Шаурмито M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67ed437789f6ddcc9fa3d15d/73b2af72-f77d-11f0-954e-767d1ae0b026_23dc60b1f44f0eb43216daca35f30437.png",
      price: 30000,
      sub: "Новинка! Фирменная шаурмито EVOS · средняя",
      desc: "Новинка! Фирменная шаурмито EVOS в среднем размере."
    },

    /* ── БУРГЕРЫ ── */
    {
      id: 22, category: "burgers",
      name: "Чикен Бургер L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1ce576c-16c0-11f1-b59b-8e0d0de908d3_0a1137b30c36e6d8c4682f8952f6d49c.png",
      price: 34000,
      sub: "Куриная котлета, сыр Чеддер, овощи, сливочный соус",
      desc: "Бургер с куриной котлетой, сыром Чеддер, свежими овощами и нежным сливочным соусом в мягкой булочке."
    },
    {
      id: 23, category: "burgers",
      name: "Гамбургер",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c1d2860c-16c0-11f1-b59b-8e0d0de908d3_93918d4f027f4e3d60269790e8b3ee58.png",
      price: 36000,
      sub: "Говяжья котлета, помидор, огурец, айсберг",
      desc: "Сочная говяжья котлета, помидор, огурец, салат Айсберг и соус в мягкой круглой булочке."
    },
    {
      id: 24, category: "burgers",
      name: "Чизбургер",
      img: "https://imageproxy.wolt.com/menu/menu-images/67ed437789f6ddcc9fa3d15d/6c69b4c0-00e9-11f1-a420-66f15c5e0e77_862c001ac9959913b15e40edf5b0aa08.png",
      price: 38000,
      sub: "Говяжья котлета, сыр Чеддер, помидор, огурец",
      desc: "Говяжья котлета, сыр Чеддер, помидор, огурец, айсберг, сливочно-томатный соус в мягкой булочке."
    },
    {
      id: 25, category: "burgers",
      name: "Даблбургер",
      img: "https://imageproxy.wolt.com/menu/menu-images/67ed437789f6ddcc9fa3d15d/53665f52-fabb-11f0-b3d6-ea0540d1efb6_c6496259a485c1b97ae00ca8b06395cb.png",
      price: 52000,
      sub: "Две говяжьи котлеты, айсберг, соус",
      desc: "Две сочных котлеты из натуральной говядины, помидор, огурец, салат Айсберг под сливочно-томатным соусом в мягкой булочке."
    },
    {
      id: 26, category: "burgers",
      name: "Даблчизбургер",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/97c4c360-dbde-11f0-ae66-42aa45745539_bbb9108c48b1348d24d3ad3216eb0c78.png",
      price: 57000,
      sub: "Две говяжьи котлеты, два ломтика сыра Чеддер",
      desc: "Две сочных котлеты, два ломтика сыра Чеддер, помидор, огурец, айсберг, сливочно-томатный соус в мягкой булочке."
    },

    /* ── ХОТ-ДОГ ── */
    {
      id: 27, category: "hotdog",
      name: "Хот-дог S",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c2001004-16c0-11f1-b59b-8e0d0de908d3_1e3dd34323860dc3a112f196c662ecea.png",
      price: 13000,
      sub: "Сосиска, кетчуп · мини",
      desc: "Нежная сосиска с кетчупом в мягкой булочке. Мини-размер — идеально для перекуса."
    },
    {
      id: 28, category: "hotdog",
      name: "Хот-дог M",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c201967c-16c0-11f1-b59b-8e0d0de908d3_2dfd5c2a900e9b97aacc257b1c0470b1.png",
      price: 20000,
      sub: "Сосиска, помидор, огурец, айсберг",
      desc: "Сосиска, помидор, огурец, листья айсберга и соус в мягкой булочке."
    },
    {
      id: 29, category: "hotdog",
      name: "Дабл Хот-дог",
      img: "https://imageproxy.wolt.com/menu/menu-images/67ed437789f6ddcc9fa3d15d/f03af78e-0344-11f1-9709-36b8b95f70f0_3df627256f6c5ba30779e52e6ced39ff.png",
      price: 28000,
      sub: "Две сосиски, помидор, огурец, сыр Чеддер",
      desc: "Две аппетитных сосиски, помидор, маринованный огурец, айсберг, сыр Чеддер под сливочным соусом в кунжутном багете."
    },
    {
      id: 30, category: "hotdog",
      name: "Саб с говядиной",
      img: "https://imageproxy.wolt.com/menu/menu-images/686f8ebee7575f9ed7144ae9/82b0a29c-f2c6-11f0-b990-32704ea63967_8052a8cb394a7f0a564d6193c20de26e.png",
      price: 26000,
      sub: "Говядина гриль, красный лук, соус барбекю",
      desc: "Говядина гриль, кольца красного лука, соус барбекю с дымком в удлинённой булочке."
    },
    {
      id: 31, category: "hotdog",
      name: "Саб с курицей",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c2081772-16c0-11f1-b59b-8e0d0de908d3_082a00de48c69ade78441d7515a09cd4.png",
      price: 23000,
      sub: "Курица гриль, красный лук, соус барбекю",
      desc: "Курица гриль, кольца красного лука, соус барбекю в удлинённой пышной булочке."
    },
    {
      id: 32, category: "hotdog",
      name: "Саб с говядиной и сыром",
      img: "https://imageproxy.wolt.com/menu/menu-images/6735d87cac6d58a2e325f602/cb30a58a-16c0-11f1-aa3c-422604dc0d0f_5b5f04b993d000e340a40bbf75b1a660.png",
      price: 29000,
      sub: "Говядина гриль, красный лук, сыр Чеддер, барбекю",
      desc: "Говядина гриль, красный лук, сыр Чеддер и соус барбекю в удлинённой булочке."
    },
    {
      id: 33, category: "hotdog",
      name: "Саб с курицей и сыром",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c20c98ce-16c0-11f1-b59b-8e0d0de908d3_4c09dfb97fbbefda938cc81450f2aad5.png",
      price: 26000,
      sub: "Курица гриль, красный лук, сыр Чеддер, барбекю",
      desc: "Курица гриль, красный лук, сыр Чеддер и соус барбекю в удлинённой булочке."
    },

    /* ── КАРТОФЕЛЬ ── */
    {
      id: 34, category: "potato",
      name: "Картофель Фри S",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c20e403e-16c0-11f1-b59b-8e0d0de908d3_539199e379aacfe878aeb3719bae9e56.png",
      price: 13000,
      sub: "Хрустящий картофель фри · мини",
      desc: "Золотистый хрустящий картофель фри. Мини-порция."
    },
    {
      id: 35, category: "potato",
      name: "Картофель Фри M",
      img: "https://imageproxy.wolt.com/menu/menu-images/686f8ebee7575f9ed7144ae9/dbb79076-f2df-11f0-b45d-b651253ef54d_fa2af9ebd7d4708ac21fe1679c7d6989.png",
      price: 20000,
      sub: "Хрустящий картофель фри · средний",
      desc: "Золотистый хрустящий картофель фри. Средняя порция."
    },
    {
      id: 36, category: "potato",
      name: "Картофель Фри L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c211c114-16c0-11f1-b59b-8e0d0de908d3_0b82ec365ea96354f59e6df268c3ca93.png",
      price: 26000,
      sub: "Хрустящий картофель фри · большой",
      desc: "Золотистый хрустящий картофель фри. Большая порция."
    },
    {
      id: 37, category: "potato",
      name: "Картофель по-деревенски",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c213ea0c-16c0-11f1-b59b-8e0d0de908d3_cf2e06a8c584fd2ac96d907b5fa5ae5a.png",
      price: 21000,
      sub: "Дольки картофеля со специями",
      desc: "Аппетитные дольки картофеля по-деревенски со специями. Хрустящие снаружи и мягкие внутри."
    },

    /* ── СНЕКИ ── */
    {
      id: 38, category: "snacks",
      name: "Наггетсы, 4 шт",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c2166840-16c0-11f1-b59b-8e0d0de908d3_413edf556c36e2cd6d1b2c00054659d6.png",
      price: 13000,
      sub: "Куриные наггетсы · 4 штуки",
      desc: "Сочные кусочки куриного филе в хрустящей панировке. 4 штуки."
    },
    {
      id: 39, category: "snacks",
      name: "Наггетсы, 8 шт",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c218f222-16c0-11f1-b59b-8e0d0de908d3_f54d86c8763f0d544fecf6b1e99af37f.png",
      price: 24000,
      sub: "Куриные наггетсы · 8 штук",
      desc: "Сочные кусочки куриного филе в хрустящей панировке. 8 штук."
    },
    {
      id: 40, category: "snacks",
      name: "Смайлики",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c21c930a-16c0-11f1-b59b-8e0d0de908d3_32e0d245f5c76ecb650339977fe8a324.png",
      price: 19000,
      sub: "Картофельные фигурки в форме смайликов",
      desc: "Весёлые хрустящие картофельные смайлики — любимое блюдо детей и взрослых!"
    },
    {
      id: 41, category: "snacks",
      name: "Стрипсы S",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c21e5c8a-16c0-11f1-b59b-8e0d0de908d3_f3e13363b9e1321e5561ff5b91bef1bf.png",
      price: 13000,
      sub: "Куриные стрипсы · мини",
      desc: "Длинные сочные кусочки куриного филе в хрустящем кляре. Мини-порция."
    },
    {
      id: 42, category: "snacks",
      name: "Стрипсы L",
      img: "https://imageproxy.wolt.com/menu/menu-images/67ed437789f6ddcc9fa3d15d/450dfcfa-f604-11f0-b207-aaee334df646_3040f6b11386264cc638a6e4169e0f4c.png",
      price: 26000,
      sub: "Куриные стрипсы · большие",
      desc: "Длинные сочные кусочки куриного филе в хрустящем кляре. Большая порция."
    },

    /* ── САЛАТЫ ── */
    {
      id: 43, category: "salads",
      name: "Салат",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c23220da-16c0-11f1-b59b-8e0d0de908d3_a60768755eaeaf6105f14105da17fe2a.png",
      price: 10000,
      sub: "Фирменный лёгкий салат",
      desc: "Фирменный лёгкий салат EVOS из свежих овощей."
    },
    {
      id: 44, category: "salads",
      name: "Салат Греческий",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c2336dd2-16c0-11f1-b59b-8e0d0de908d3_91d6e2787a65b6acc7e68aae9263f85f.png",
      price: 32000,
      sub: "Помидоры, огурцы, перец, маслины, сыр Фета",
      desc: "Свежий Греческий салат с помидорами черри, огурцами, болгарским перцем, маслинами и сыром Фета."
    },
    {
      id: 45, category: "salads",
      name: "Салат Цезарь",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c234b3c2-16c0-11f1-b59b-8e0d0de908d3_b26651e5634b923369bbebd0fe1b6f1c.png",
      price: 33000,
      sub: "Курица гриль, айсберг, крутоны, соус Цезарь",
      desc: "Классический Цезарь с куриным мясом гриль, айсбергом, хрустящими крутонами и соусом Цезарь."
    },

    /* ── НАПИТКИ ── */
    {
      id: 46, category: "drinks",
      name: "Мохито",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c24cea28-16c0-11f1-b59b-8e0d0de908d3_403d9c3c994a0eba9f593732106b97eb.png",
      price: 16000,
      sub: "Освежающий безалкогольный мохито",
      desc: "Освежающий безалкогольный мохито с мятой и лаймом."
    },
    {
      id: 47, category: "drinks",
      name: "Клубничный Мохито",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c24e2df2-16c0-11f1-b59b-8e0d0de908d3_969b3c4e09463e1e44df65d43036a054.png",
      price: 16000,
      sub: "Мохито с клубникой",
      desc: "Освежающий безалкогольный мохито с клубникой и мятой."
    },
    {
      id: 48, category: "drinks",
      name: "Пепси, стакан 0,4л",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c2522e34-16c0-11f1-b59b-8e0d0de908d3_2eb3c730fab4b6ab8424be6fcec7d11a.png",
      price: 10000,
      sub: "Разливной Pepsi · 400мл",
      desc: "Разливной Pepsi в фирменном бумажном стакане. 0,4л."
    },
    {
      id: 49, category: "drinks",
      name: "Пепси Zero, стакан 0,4л",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c2537fc8-16c0-11f1-b59b-8e0d0de908d3_e66342d963dac28964fde25359020bd9.png",
      price: 10000,
      sub: "Разливной Pepsi Zero без сахара · 400мл",
      desc: "Разливной Pepsi Zero без сахара в фирменном стакане. 0,4л."
    },
    {
      id: 50, category: "drinks",
      name: "Миринда, стакан 0,4л",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c254cb94-16c0-11f1-b59b-8e0d0de908d3_6c746d56f27a7836e3008131f63205be.png",
      price: 10000,
      sub: "Разливная Mirinda · 400мл",
      desc: "Разливная Mirinda в фирменном бумажном стакане. 0,4л."
    },
    {
      id: 51, category: "drinks",
      name: "7up разлив",
      img: "https://imageproxy.wolt.com/menu/menu-images/67a5ecdc7bdda979a0ef7822/c256138c-16c0-11f1-b59b-8e0d0de908d3_59ceb8a4becce20255d6bb02b7da7316.png",
      price: 10000,
      sub: "Разливной 7up · 400мл",
      desc: "Разливной 7up в фирменном бумажном стакане. 0,4л."
    }
  ];

  /* ═══════════════════════════
     РЕНДЕР МЕНЮ
     Вместо emoji — <img>
  ═══════════════════════════ */
  function renderMenu() {
    MENU.forEach(item => {
      const grid = document.getElementById(`${item.category}-grid`);
      if (!grid) return;

      grid.insertAdjacentHTML('beforeend', `
        <div class="ut-item"
             data-cat="${item.category}"
             data-id="${item.id}"
             data-name="${item.name}"
             data-img="${item.img}"
             data-price="${item.price}"
             data-desc="${item.desc}">
          <div class="ut-item__img-wrap">
            <img class="ut-item__img ut-item__img--photo"
                 src="${item.img}"
                 alt="${item.name}"
                 loading="lazy"
                 onerror="this.style.display='none';this.parentNode.innerHTML='<div class=\\'ut-item__img\\'>🌯</div>'" />
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
      cart[id] = { name: item.name, img: item.img, price: item.price, qty: 1 };
    }
    saveCart(cart);
    updateBadge();
    updateCardQty(id);
    showToast(`${item.name} добавлен`);
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

  /* ═══════════════════════════
     UI — бейдж в шапке
  ═══════════════════════════ */
  function updateBadge() {
    const badge = document.getElementById('ut-cartBadge');
    if (!badge) return;
    const count = totalCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }

  /* ═══════════════════════════
     UI — счётчик на карточке
  ═══════════════════════════ */
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

  /* ═══════════════════════════
     НАВЕШИВАЕМ СОБЫТИЯ
  ═══════════════════════════ */
  document.querySelectorAll('.ut-add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = Number(btn.closest('.ut-item').dataset.id);
      addItem(id);
    });
  });

  // Клик по карточке → модалка
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
      // Показываем картинку в модалке вместо emoji
      modalEmoji.innerHTML = `<img src="${item.img}" alt="${item.name}"
        style="width:100%;height:100%;object-fit:cover;border-radius:12px;"
        onerror="this.parentNode.textContent='🌯'" />`;
      modalName.textContent  = item.name;
      modalDesc.textContent  = item.desc;
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

  /* ═══════════════════════════
     ТАБЫ / ФИЛЬТР
  ═══════════════════════════ */
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

  /* ═══════════════════════════
     ТОСТ
  ═══════════════════════════ */
  const toast = document.getElementById('ut-toast');
  let toastTimer = null;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('ut-toast--show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('ut-toast--show'), 2000);
  }

  /* ═══════════════════════════
     УТИЛИТЫ
  ═══════════════════════════ */
  function fmt(n) {
    return n.toLocaleString('ru-RU') + ' сум';
  }

  /* ═══════════════════════════
     ИНИЦИАЛИЗАЦИЯ
  ═══════════════════════════ */
  Object.keys(loadCart()).forEach(id => updateCardQty(Number(id)));
  updateBadge();

  // Стили: картинка в карточке + счётчики
  const style = document.createElement('style');
  style.textContent = `
    .ut-item__img--photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
      display: block;
    }
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