import b1 from "../assets/products/b1.jpg";
import b2 from "../assets/products/b2.jpg";
import b3 from "../assets/products/b3.jpg";
import b4 from "../assets/products/b4.jpg";
import s1 from "../assets/products/s1.jpg";
import s2 from "../assets/products/s2.png";
import d1 from "../assets/products/d1.jpg";
import d2 from "../assets/products/d2.jpg";
import d3 from "../assets/products/d3.jpg";
import c1 from "../assets/products/c1.jpg";
import c2 from "../assets/products/c2.jpg";
import s3 from "../assets/products/s3.png";
export const products = [
  // burgers
  {
    id: "b1",
    category: "burgers",
    name: {
      en: "Classic Smash Burger",
      ar: "كلاسيك سماش برجر",
    },
    description: {
      en: "Single smashed beef patty, cheddar cheese, pickles, onions, and Nesto secret sauce.",
      ar: "شريحة لحم بقري سماش، جبنة شيدر، مخلل، بصل، وصلصة نستو السرية.",
    },
    price: 6.5,
    image: b1,
    isBestseller: true,
    isSpicy: false,
  },
  {
    id: "b2",
    category: "burgers",
    name: {
      en: "Double Cheddar Monster",
      ar: "دبل شيدر مونستر",
    },
    description: {
      en: "Double smashed premium beef, double cheddar cheese, caramelized onions, and house burger sauce.",
      ar: "شريحتين من اللحم البقري الفاخر، قطعتين جبنة شيدر، بصل مكرمل، وصلصة البرجر الخاصة.",
    },
    price: 8.5,
    image: b2,
    isBestseller: true,
    isSpicy: false,
  },
  {
    id: "b3",
    category: "burgers",
    name: {
      en: "Swiss Truffle Smash",
      ar: "سويس ترافل سماش",
    },
    description: {
      en: "Smashed beef patty, melted Swiss cheese, grilled fresh mushrooms, and rich truffle aioli.",
      ar: "شريحة لحم بقري سماش، جبنة سويسرية ذائبة، فطر طازج مشوي، وصلصة مايونيز الترافل الغنية.",
    },
    price: 7.99,
    image: b3,
    isBestseller: false,
    isSpicy: false,
  },
  {
    id: "b4",
    category: "burgers",
    name: {
      en: "Spicy Crispy Chicken",
      ar: "كريبسي تشيكن الحار",
    },
    description: {
      en: "Crispy hand-breaded chicken breast, spicy buffalo glaze, jalapeños, and pepper jack cheese.",
      ar: "صدر دجاج مقرمش مغطى بخلطة البقسماط اليدوية، صلصة البافلو الحارة، قطع هلابينو، وجبنة فلفل جاك.",
    },
    price: 7.0,
    image: b4,
    isBestseller: false,
    isSpicy: true,
  },

  // sides
  {
    id: "s1",
    category: "sides",
    name: {
      en: "Loaded Cheddar Fries",
      ar: "بطاطا مغطاة بالشيدر",
    },
    description: {
      en: "Crispy golden french fries loaded with melted cheddar cheese sauce and chopped jalapeños.",
      ar: "بطاطس مقلية ذهبية مقرمشة مغطاة بصلصة جبنة الشيدر الذائبة وقطع الهلابينو.",
    },
    price: 3.5,
    image: s1,
    isBestseller: true,
    isSpicy: false,
  },
  {
    id: "s2",
    category: "sides",
    name: {
      en: "Crispy Onion Rings",
      ar: "حلقات البصل المقرمشة",
    },
    description: {
      en: "Thick-cut sweet onion rings beer-battered and fried to golden perfection, served with BBQ dip.",
      ar: "حلقات بصل حلوة سميكة مغطاة بعجينة مقرمشة ومقلية بلون ذهبي، تقدم مع صلصة الباربكيو.",
    },
    price: 3.0,
    image: s2,
    isBestseller: false,
    isSpicy: false,
  },
  {
    id: "s3",
    category: "sides",
    name: {
      en: "Gooey Mozzarella Sticks",
      ar: "أصابع الموزاريلا الذائبة",
    },
    description: {
      en: "Deep-fried breaded mozzarella cheese sticks served with warm, seasoned marinara dipping sauce.",
      ar: "أصابع جبنة الموزاريلا المغطاة بالبقسماط والمقلية تقدم مع صلصة المارينارا الدافئة والمتبلة.",
    },
    price: 4.0,
    image: s3,
    isBestseller: false,
    isSpicy: false,
  },

  // drinks
  {
    id: "d1",
    category: "drinks",
    name: {
      en: "Classic Coca-Cola",
      ar: "كوكا كولا كلاسيك",
    },
    description: {
      en: "Ice-cold refreshing Coca-Cola can to wash down your smash burger.",
      ar: "علبة كوكا كولا باردة ومنعشة لتكتمل بها متعة وجبة السماش.",
    },
    price: 1.5,
    image: d1,
    isBestseller: false,
    isSpicy: false,
  },
  {
    id: "d2",
    category: "drinks",
    name: {
      en: "Lemon Mint Mojito",
      ar: "موهيتو الليمون والنعناع",
    },
    description: {
      en: "Freshly squeezed lemon juice, muddled mint leaves, soda water, and ice.",
      ar: "عصير ليمون طازج مع أوراق النعناع المهروسة، مياه فوارة، وقطع الثلج.",
    },
    price: 2.5,
    image: d2,
    isBestseller: true,
    isSpicy: false,
  },
  {
    id: "d3",
    category: "drinks",
    name: {
      en: "Oreo Dream Milkshake",
      ar: "ميلك شيك أوريو دريم",
    },
    description: {
      en: "Thick vanilla milkshake blended with Oreo cookies, topped with whipped cream.",
      ar: "ميلك شيك الفانيليا الغني الممزوج بقطع بسكويت الأوريو، مغطى بالكريمة المخفوقة.",
    },
    price: 3.5,
    image: d3,
    isBestseller: false,
    isSpicy: false,
  },

  // combos
  {
    id: "c1",
    category: "combos",
    name: {
      en: "The Single Smash Combo",
      ar: "وجبة السماش الفردية",
    },
    description: {
      en: "Classic Smash Burger, salted french fries, and a choice of soft drink.",
      ar: "كلاسيك سماش برجر، بطاطس مقلية مملحة، واختيارك من المشروب الغازي.",
    },
    price: 9.99,
    image: c1,
    isBestseller: true,
    isSpicy: false,
  },
  {
    id: "c2",
    category: "combos",
    name: {
      en: "Nesto King Combo",
      ar: "وجبة نستو كينج",
    },
    description: {
      en: "Double Cheddar Burger, loaded cheese fries, and Oreo Dream milkshake.",
      ar: "دبل شيدر برجر، بطاطا مغطاة بالجبنة، وميلك شيك أوريو دريم.",
    },
    price: 13.99,
    image: c2,
    isBestseller: true,
    isSpicy: false,
  },
];

export const offers = [
  {
    id: "off1",
    title: {
      en: "Buy 1 Get 1 Free Smash",
      ar: "اشترِ 1 سماش واحصل على 1 مجاناً",
    },
    description: {
      en: "Buy any Double Smash Burger on Mondays and get a second one absolutely free! Double the smash, double the flavor.",
      ar: "اشترِ أي دبل سماش برجر يوم الاثنين واحصل على البرجر الثاني مجاناً بالكامل! ضاعف السماش، ضاعف المتعة.",
    },
    promoCode: "BOGO-MONDAY",
    discountPercent: 50,
    image: b1,
    badge: {
      en: "Monday Special",
      ar: "مميز الاثنين",
    },
  },
  {
    id: "off2",
    title: {
      en: "Mega Weekend Party Pack",
      ar: "حزمة الحفلات الميجا للويكند",
    },
    description: {
      en: "Get 4 Classic Smash Burgers, 2 Loaded Cheddar Fries, and 4 Soft Drinks for a special price. Perfect for family and friends.",
      ar: "احصل على 4 كلاسيك سماش برجر، 2 بطاطا مغطاة بالشيدر، و 4 مشروبات غازية بسعر خاص جداً. مثالية للأصدقاء والعائلة.",
    },
    promoCode: "WEEKEND-MEGA",
    price: 24.99,
    discountPercent: 30,
    image: c2,
    badge: {
      en: "Save 30%",
      ar: "وفر 30%",
    },
  },
  {
    id: "off3",
    title: {
      en: "Free Mojito with Truffle Burger",
      ar: "موهيتو مجاني مع برجر الترافل",
    },
    description: {
      en: "Order our signature Swiss Truffle Smash Burger and get a fresh Lemon Mint Mojito completely free of charge.",
      ar: "اطلب برجر سويس ترافل سماش المميز لدينا واحصل على موهيتو الليمون والنعناع الطازج مجاناً بالكامل.",
    },
    promoCode: "TRUFFLE-MOJITO",
    discountPercent: 20,
    image: d2,
    badge: {
      en: "Limited Time",
      ar: "لفترة محدودة",
    },
  },
];
