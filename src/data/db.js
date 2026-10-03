// products.js
// 50 sample e-commerce products across 6 categories.
// NOTE: The "image" fields below use a placeholder image service
// (https://placehold.co) as stand-ins. Exact official product photos
// are copyrighted by their brands/retailers, so swap these URLs with
// images you have the rights to use (your own product shoots, brand
// press-kit images you're licensed for, or a stock photo subscription).

export const products = [
  // ---------------- MOBILES ----------------
  {
    id: 1,
    name: "Samsung Galaxy S25 Ultra",
    category: "Mobiles",
    brand: "Samsung",
    price: 129999,
    rating: 4.6,
    specs: { display: "6.9\" Dynamic AMOLED 2X", ram: "12GB", storage: "256GB", battery: "5000mAh", camera: "200MP Quad" },
    image: "https://imgs.search.brave.com/C3d7De76t3YJo2G06_3sT_gQvR-pf2VgeqeP5-fVfzs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFoK1RiZUVuYUwu/anBn",
    description: "Samsung's flagship with a 200MP camera system, S Pen support, and a titanium frame."
  },
  {
    id: 2,
    name: "Apple iPhone 16 Pro Max",
    category: "Mobiles",
    brand: "Apple",
    price: 159900,
    rating: 4.7,
    specs: { display: "6.9\" Super Retina XDR", ram: "8GB", storage: "256GB", battery: "4685mAh", camera: "48MP Triple" },
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
    description: "Apple's top-tier iPhone with A18 Pro chip, titanium build, and pro-grade cameras."
  },
  {
    id: 3,
    name: "OnePlus 13",
    category: "Mobiles",
    brand: "OnePlus",
    price: 69999,
    rating: 4.5,
    specs: { display: "6.82\" LTPO AMOLED", ram: "16GB", storage: "512GB", battery: "6000mAh", camera: "50MP Hasselblad Triple" },
    image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg",
    description: "Flagship killer with Snapdragon 8 Elite, 100W fast charging, and Hasselblad-tuned cameras."
  },
  {
    id: 4,
    name: "Xiaomi 15 Pro",
    category: "Mobiles",
    brand: "Xiaomi",
    price: 64999,
    rating: 4.4,
    specs: { display: "6.73\" AMOLED", ram: "12GB", storage: "256GB", battery: "6100mAh", camera: "50MP Leica Triple" },
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-pro.jpg",
    description: "Leica-tuned optics, massive battery, and premium build at a competitive price."
  },
  {
    id: 5,
    name: "Google Pixel 9 Pro",
    category: "Mobiles",
    brand: "Google",
    price: 99999,
    rating: 4.5,
    specs: { display: "6.3\" LTPO OLED", ram: "16GB", storage: "128GB", battery: "4700mAh", camera: "50MP Triple" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcg6E6_hunGSu1jWIV4IpM_CH2t7YSYrDDeCQrDhZ29g&s=10",
    description: "Best-in-class computational photography with clean Android and Gemini AI features."
  },
  {
    id: 6,
    name: "Vivo X200 Pro",
    category: "Mobiles",
    brand: "Vivo",
    price: 89999,
    rating: 4.4,
    specs: { display: "6.78\" LTPO AMOLED", ram: "16GB", storage: "512GB", battery: "6000mAh", camera: "50MP Zeiss Triple" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjh0U9qVA7uWYEW7LeUZxWnV02gETD0QhE0NmznZEmag&s",
    description: "Zeiss co-engineered optics with a periscope telephoto lens and flagship performance."
  },
  {
    id: 7,
    name: "OPPO Find X8 Pro",
    category: "Mobiles",
    brand: "OPPO",
    price: 84999,
    rating: 4.3,
    specs: { display: "6.78\" AMOLED", ram: "16GB", storage: "256GB", battery: "5910mAh", camera: "50MP Hasselblad Quad" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDiVyaUquC9k_LNu3Snc-M02Fvb736dRGX4NqCE1Xzg&s=10",
    description: "Quad-camera setup with dual telephoto lenses and MediaTek Dimensity 9400 chip."
  },
  {
    id: 8,
    name: "Nothing Phone 3",
    category: "Mobiles",
    brand: "Nothing",
    price: 44999,
    rating: 4.2,
    specs: { display: "6.7\" AMOLED", ram: "12GB", storage: "256GB", battery: "5150mAh", camera: "50MP Triple" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJK9-P7ztshdMkJCBP7CqyoyUNA3T90T1zlmbGpvbp2w&s",
    description: "Distinctive transparent design with Glyph lighting and a clean software experience."
  },
  {
    id: 9,
    name: "Motorola Edge 60 Pro",
    category: "Mobiles",
    brand: "Motorola",
    price: 39999,
    rating: 4.1,
    specs: { display: "6.7\" pOLED", ram: "12GB", storage: "256GB", battery: "6000mAh", camera: "50MP Triple" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUKcOpuFegEZjNDhHo1I1-SfqYdSe7vr-bmjfa1WnsQ&s",
    description: "Curved pOLED display, IP69 rating, and fast 125W charging in a sleek body."
  },
  {
    id: 10,
    name: "Realme GT 7 Pro",
    category: "Mobiles",
    brand: "Realme",
    price: 54999,
    rating: 4.2,
    specs: { display: "6.78\" LTPO AMOLED", ram: "16GB", storage: "512GB", battery: "6500mAh", camera: "50MP Triple" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxaks5elNPYnxRFh8va6HUl4SLCTYV3IzDb_Iu7EqPQ&s=10",
    description: "Snapdragon 8 Elite performance with a massive silicon-carbon battery."
  },

  // ---------------- LAPTOPS ----------------
  {
    id: 11,
    name: "Apple MacBook Pro 14 (M4 Pro)",
    category: "Laptops",
    brand: "Apple",
    price: 199900,
    rating: 4.8,
    specs: { display: "14.2\" Liquid Retina XDR",gpu: "M4 Pro", ram: "18GB", storage: "512GB SSD", processor: "M4 Pro", battery: "Up to 18hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBzhWgKiFGuuAtdQT0dO2VkGQ0mg4M8t0TuqFK7gzig&s=10",
    description: "Pro-grade performance with a stunning XDR display and all-day battery life."
  },
  {
    id: 12,
    name: "Dell XPS 13",
    category: "Laptops",
    brand: "Dell",
    price: 124999,
    rating: 4.5,
    specs: { display: "13.4\" FHD+", ram: "16GB", storage: "512GB SSD",gpu: "RTX 3060", processor: "Intel Core Ultra 7", battery: "Up to 13hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQIzB4QQY4oaKGaE6x3mcxgIBd9OII3zojJfNuA6btg&s=10",
    description: "Ultra-premium ultrabook with an edge-to-edge InfinityEdge display."
  },
  {
    id: 13,
    name: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    brand: "ASUS",
    price: 179999,
    rating: 4.6,
    specs: { display: "14\" QHD+ 165Hz", ram: "32GB", storage: "1TB SSD", processor: "Ryzen 9", gpu: "RTX 4070", battery: "Up to 13hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42kcD2GuUWoWTQLjL5VgkcW6TCclDzkEv_4r5RoMj_A&s",
    description: "Compact gaming powerhouse with a high-refresh QHD+ display and RTX graphics."
  },
  {
    id: 14,
    name: "Lenovo ThinkPad X1 Carbon",
    category: "Laptops",
    brand: "Lenovo",
    price: 154999,
    rating: 4.5,
    specs: { display: "14\" 2.8K OLED", ram: "16GB", storage: "1TB SSD", processor: "Intel Core Ultra 7",gpu: "geForce 2030", battery: "Up to 15hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRu_sZwG3WU4aBW8lNx2tWVQhv0lMjX9H9B_NyEUFZg&s=10",
    description: "Business-class durability with a lightweight carbon-fiber chassis."
  },
  {
    id: 15,
    name: "HP Spectre x360 14",
    category: "Laptops",
    brand: "HP",
    price: 134999,
    rating: 4.4,
    specs: { display: "14\" 2.8K OLED Touch",gpu: "RTX 2030", ram: "16GB", storage: "1TB SSD", processor: "Intel Core Ultra 7", battery: "Up to 14hrs" },
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/t/x/-original-imahg5fxz9netyjz.jpeg?q=70",
    description: "Convertible 2-in-1 with a gem-cut design and vivid OLED touchscreen."
  },
  {
    id: 16,
    name: "Acer Predator Helios Neo 16",
    category: "Laptops",
    brand: "Acer",
    price: 149999,
    rating: 4.3,
    specs: { display: "16\" WQXGA 240Hz", ram: "16GB", storage: "1TB SSD", processor: "Intel Core i9", gpu: "RTX 4060", battery: "Up to 18hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdO8_O2n8AdMEWhK6e49wF6Cq5DQjpJZF6vD-iE_lmDQ&s=10",
    description: "High-refresh gaming laptop built for competitive esports titles."
  },
  {
    id: 17,
    name: "Microsoft Surface Laptop 7",
    category: "Laptops",
    brand: "Microsoft",
    price: 139999,
    rating: 4.4,
    specs: { display: "13.8\" PixelSense", ram: "16GB", storage: "512GB SSD", processor: "Snapdragon X Elite", battery: "Up to 20hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXm1W8hcRAlUIeAWLERrQzDtAgMG8deZFWx0n11mmBA&s",
    description: "ARM-powered Copilot+ PC with exceptional battery life and a sleek design."
  },
  {
    id: 18,
    name: "ASUS ZenBook 14 OLED",
    category: "Laptops",
    brand: "ASUS",
    price: 89999,
    rating: 4.3,
    specs: { display: "14\" 2.8K OLED", ram: "16GB",gpu: "GeForce 3040", storage: "512GB SSD", processor: "Intel Core Ultra 5", battery: "Up to 12hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-mN4l5xi_BL2kRLJPjjcmqnw7whUP34JUTQnq5sZ0Q&s=10",
    description: "Slim and light everyday laptop with a rich OLED display at a great price."
  },
  {
    id: 19,
    name: "Lenovo Legion Pro 7i",
    category: "Laptops",
    brand: "Lenovo",
    price: 249999,
    rating: 4.6,
    specs: { display: "16\" WQXGA 240Hz", ram: "32GB", storage: "1TB SSD", processor: "Intel Core i9", gpu: "RTX 4090", battery: "Up to 18hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uP0IrXuDbucAH2AfWZXkoWhhwZrldOlX_GdaHP4H9A&s=10",
    description: "Top-of-the-line gaming rig with desktop-class RTX 4090 graphics."
  },
  {
    id: 20,
    name: "Apple MacBook Air 15 (M3)",
    category: "Laptops",
    brand: "Apple",
    price: 134900,
    rating: 4.7,
    specs: { display: "15.3\" Liquid Retina", ram: "16GB",gpu: "M3", storage: "512GB SSD", processor: "M3", battery: "Up to 18hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAds_biZ0Syh5J_fRw6lXd7uElwhCFWAakG3k0u-ua4A&s=10",
    description: "Larger canvas of the fanless MacBook Air with all-day battery life."
  },

  // ---------------- TABLETS ----------------
  {
    id: 21,
    name: "Apple iPad Pro 13 (M4)",
    category: "Tablets",
    brand: "Apple",
    price: 129900,
    rating: 4.8,
    specs: { display: "13\" Ultra Retina XDR", ram: "8GB", storage: "256GB", processor: "M4", battery: "Up to 10hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0BMhdITOQXGNUtxPDQ5BzUEHNvw9O4m_J2P2v8Q9Ig&s=10",
    description: "The thinnest Apple product ever, with a stunning tandem OLED display."
  },
  {
    id: 22,
    name: "Samsung Galaxy Tab S10 Ultra",
    category: "Tablets",
    brand: "Samsung",
    price: 114999,
    rating: 4.6,
    specs: { display: "14.6\" Dynamic AMOLED 2X", ram: "12GB", storage: "256GB",processor : "Snapdragon 8 Elite" , battery: "11200mAh" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZrqO3d6y_7XYULjIIRZwOQU2hHNt9oLasasHJAYXpA&s=10",
    description: "Massive AMOLED canvas with S Pen included, ideal for creative work."
  },
  {
    id: 23,
    name: "Apple iPad Air (M2)",
    category: "Tablets",
    brand: "Apple",
    price: 59900,
    rating: 4.6,
    specs: { display: "11\" Liquid Retina", ram: "8GB", storage: "128GB", processor: "M2", battery: "Up to 10hrs" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhysVsIzvXtJyA7QM9VJDp1f80ji2wK-kgs-LIgP_6w&s=10",
    description: "M2-powered performance in a light and portable tablet form factor."
  },
  {
    id: 24,
    name: "Xiaomi Pad 7 Pro",
    category: "Tablets",
    brand: "Xiaomi",
    price: 39999,
    rating: 4.3,
    specs: { display: "12.2\" 3.2K LCD", ram: "12GB", storage: "256GB",processor: "Snapdragon X Elite", battery: "8600mAh" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyNpZTmiHBmHziKwsY3N90dmWINlA3rS6Xv7CRQqy0g&s=10",
    description: "High-resolution display and stylus support at a mid-range price."
  },
  {
    id: 25,
    name: "Lenovo Tab Extreme",
    category: "Tablets",
    brand: "Lenovo",
    price: 69999,
    rating: 4.2,
    specs: { display: "14.5\" 3K OLED", ram: "12GB", storage: "256GB", processor: "Snapdragon 9 Elite",  battery: "12300mAh" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DhyfRNi1E8dCID8e8rptxMdDOuj69AY2oOT8NVYLsg&s=10",
    description: "Large OLED tablet built for media consumption and productivity."
  },
  {
    id: 26,
    name: "Samsung Galaxy Tab S9 FE",
    category: "Tablets",
    brand: "Samsung",
    price: 34999,
    rating: 4.2,
    specs: { display: "10.9\" LCD", ram: "8GB", storage: "128GB",processor: "Snapdragon X Elite", battery: "8000mAh" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8VTZLrJd5lrHKT8DKlHGNn-6vwbJcD4AW8xLfaiBrw&s",
    description: "Affordable Tab S series option with water resistance and S Pen support."
  },
  {
    id: 27,
    name: "OnePlus Pad 2",
    category: "Tablets",
    brand: "OnePlus",
    price: 44999,
    rating: 4.1,
    specs: { display: "12.1\" 3.4K LCD", ram: "12GB", storage: "256GB", processor: "Snapdragon 9 Gen5", battery: "9510mAh" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyAV7IaeuWznw1SkNwZsn0N5Q3W2QAbTVBL3BoJU5KA&s=10",
    description: "Snapdragon 8 Gen 3 tablet with a sharp 144Hz display."
  },
  {
    id: 28,
    name: "Microsoft Surface Pro 11",
    category: "Tablets",
    brand: "Microsoft",
    price: 124999,
    rating: 4.4,
    specs: { display: "13\" PixelSense", ram: "16GB", storage: "512GB", processor: "Snapdragon X Elite", battery: "9510mAh" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUPw620m0UX4vsUBvwQmvtiUgUVIOwned2kuTrRCJeg&s=10",
    description: "2-in-1 tablet that runs full Windows with detachable keyboard support."
  },

  // ---------------- HEADPHONES ----------------
  {
    id: 29,
    name: "Sony WH-1000XM6",
    category: "Headphones",
    brand: "Sony",
    price: 34990,
    rating: 4.8,
    specs: { type: "Over-ear ANC", battery: "30hrs", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsfkKAolMAPUYNTl6d7w9Tc-uKnn7LcfwFvdcxn-K3Q&s=10",
    description: "Industry-leading noise cancellation with rich, detailed sound."
  },
  {
    id: 30,
    name: "Bose QuietComfort Ultra",
    category: "Headphones",
    brand: "Bose",
    price: 34900,
    rating: 4.7,
    specs: { type: "Over-ear ANC", battery: "24hrs", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0eboyQgQ6eZLUGcZ567ug7E8gSCDorA6sU0o2QxTzA&s=10",
    description: "Immersive spatial audio with best-in-class comfort for all-day wear."
  },
  {
    id: 31,
    name: "Apple AirPods Max",
    category: "Headphones",
    brand: "Apple",
    price: 59900,
    rating: 4.5,
    specs: { type: "Over-ear ANC", battery: "20hrs", connectivity: "Bluetooth 5.0" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnBNplr92uwrOZo8uNFf7AA1vneFP0BjUqU6adqJkoA&s=10",
    description: "Premium build quality with adaptive EQ and spatial audio for Apple devices."
  },
  {
    id: 32,
    name: "Sennheiser Momentum 4",
    category: "Headphones",
    brand: "Sennheiser",
    price: 29990,
    rating: 4.6,
    specs: { type: "Over-ear ANC", battery: "60hrs", connectivity: "Bluetooth 5.2" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSi2OKiQvrmN_KGy_PIHE6g6N7895hAmSprROO3pkrg&s=10",
    description: "Audiophile-grade sound signature with an exceptional 60-hour battery life."
  },
  {
    id: 33,
    name: "JBL Tour One M3",
    category: "Headphones",
    brand: "JBL",
    price: 19999,
    rating: 4.3,
    specs: { type: "Over-ear ANC", battery: "70hrs", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFFzfblDCfVEmJ_kwlLFqXhslUXBPF9QBFzv5rDaNhQ&s=10",
    description: "Adaptive noise cancellation with punchy JBL signature sound."
  },
  {
    id: 34,
    name: "Beats Studio Pro",
    category: "Headphones",
    brand: "Beats",
    price: 29900,
    rating: 4.3,
    specs: { type: "Over-ear ANC", battery: "24hrs", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOHCg0QTgwwUbHuj8trfphRk6HpzWsdcIfhqt3g2mfQ&s",
    description: "Signature Beats bass with seamless Apple and Android compatibility."
  },
  {
    id: 35,
    name: "Sony WH-CH720N",
    category: "Headphones",
    brand: "Sony",
    price: 8990,
    rating: 4.2,
    specs: { type: "Over-ear ANC", battery: "35hrs", connectivity: "Bluetooth 5.2" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GjtRTdoCRpIGtSqTcouF1FhTeSMTIz3gQe5B9Od-XA&s=10",
    description: "Lightweight and affordable ANC headphones with solid battery life."
  },
  {
    id: 36,
    name: "Boat Rockerz 550",
    category: "Headphones",
    brand: "Boat",
    price: 1999,
    rating: 4.0,
    specs: { type: "Over-ear", battery: "20hrs", connectivity: "Bluetooth 5.0" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LO-4heXnDd3aXAN10SRuFon3zeMtF4_GOQC2XJtomQ&s",
    description: "Budget-friendly wireless headphones with punchy bass for everyday use."
  },

  // ---------------- TWS ----------------
  {
    id: 37,
    name: "Apple AirPods Pro 3",
    category: "TWS",
    brand: "Apple",
    price: 24900,
    rating: 4.7,
    specs: { anc: "Yes", battery: "8hrs (30hrs w/ case)", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPZWsKrge8b9QNJfiG8Ov9DEgK98xeIgXBcWiqlrbeQ&s=10",
    description: "Compact ANC earbuds with adaptive audio and seamless Apple ecosystem integration."
  },
  {
    id: 38,
    name: "Samsung Galaxy Buds 3 Pro",
    category: "TWS",
    brand: "Samsung",
    price: 19999,
    rating: 4.5,
    specs: { anc: "Yes", battery: "7hrs (30hrs w/ case)", connectivity: "Bluetooth 5.4" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWR0HnVIEnI9zTOnjFQyDe4bfUISgRG5K5uNRydaoCvA&s=10",
    description: "Blade-style design with excellent ANC and Galaxy AI features."
  },
  {
    id: 39,
    name: "Sony WF-1000XM5",
    category: "TWS",
    brand: "Sony",
    price: 24990,
    rating: 4.7,
    specs: { anc: "Yes", battery: "8hrs (24hrs w/ case)", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDri77AHKFi0LKaEGRaYRMI33N9rSB_DRBFCHiIBZCPg&s=10",
    description: "Class-leading noise cancellation in a smaller, more comfortable shell."
  },
  {
    id: 40,
    name: "Bose QuietComfort Ultra Earbuds",
    category: "TWS",
    brand: "Bose",
    price: 26900,
    rating: 4.6,
    specs: { anc: "Yes", battery: "6hrs (24hrs w/ case)", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnP6kzvTgzsMuXU8WeJBa0niSdE6QZNDEu8N5Bfc5CZA&s",
    description: "Immersive audio mode with world-class noise cancellation."
  },
  {
    id: 41,
    name: "OnePlus Buds Pro 3",
    category: "TWS",
    brand: "OnePlus",
    price: 12999,
    rating: 4.3,
    specs: { anc: "Yes", battery: "6hrs (40hrs w/ case)", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_3xJwHs5TXoL_OtFIIjntCOBn0n1bBY4I6J678L4GA&s=10",
    description: "Dual-driver setup tuned with Dynaudio for punchy, detailed sound."
  },
  {
    id: 42,
    name: "boAt Airdopes 191",
    category: "TWS",
    brand: "Boat",
    price: 1499,
    rating: 4.0,
    specs: { anc: "No", battery: "6hrs (30hrs w/ case)", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemWZYAUYtpjGUFW0orz2BagUH5wqJj_zirS29izBprA&s",
    description: "Budget-friendly everyday earbuds with a compact charging case."
  },
  {
    id: 43,
    name: "Nothing Ear (a)",
    category: "TWS",
    brand: "Nothing",
    price: 7999,
    rating: 4.3,
    specs: { anc: "Yes", battery: "5.5hrs (42.5hrs w/ case)", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWG_tZSttMyuoTxkCXDM_o9cncOcPBHzyiNYwIJ_rhpw&s=10",
    description: "Transparent design with punchy sound and reliable ANC at a fair price."
  },
  {
    id: 44,
    name: "JBL Vibe Beam",
    category: "TWS",
    brand: "JBL",
    price: 3999,
    rating: 4.1,
    specs: { anc: "No", battery: "8hrs (32hrs w/ case)", connectivity: "Bluetooth 5.3" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWzYtRqwIPhfxIot1lxkuo8NrAy-SlBJbgkRKvPl_HQ&s=10",
    description: "Compact true wireless earbuds with signature JBL Deep Bass Sound."
  },

  // ---------------- MONITORS ----------------
  {
    id: 45,
    name: "LG UltraGear 27GR95QE",
    category: "Monitors",
    brand: "LG",
    price: 64999,
    rating: 4.6,
    specs: { size: "27\"", resolution: "QHD (2560x1440)", refreshRate: "240Hz", panel: "OLED" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSy7Iu-N_82ufQ7tawc-wu0dvjhSdQ8L010YSPK01HJA&s=10",
    description: "Blazing-fast OLED gaming monitor with near-instant response times."
  },
  {
    id: 46,
    name: "Samsung Odyssey G9",
    category: "Monitors",
    brand: "Samsung",
    price: 129999,
    rating: 4.5,
    specs: { size: "49\"", resolution: "DQHD (5120x1440)", refreshRate: "240Hz", panel: "QD-OLED" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bht49E0zf7rjYphpU3FkLZR4C7zPTbv2fIE3nxx4Ew&s",
    description: "Massive curved ultrawide display for an immersive gaming experience."
  },
  {
    id: 47,
    name: "Dell UltraSharp U2723QE",
    category: "Monitors",
    brand: "Dell",
    price: 54999,
    rating: 4.5,
    specs: { size: "27\"", resolution: "4K UHD (3840x2160)", refreshRate: "60Hz", panel: "IPS Black" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIIvUe1Gqocw_qOyuK_tICSlpaEkrAGmamcudGQ8vBg&s=10",
    description: "Color-accurate 4K display ideal for creative professionals."
  },
  {
    id: 48,
    name: "ASUS ROG Swift PG27AQDM",
    category: "Monitors",
    brand: "ASUS",
    price: 84999,
    rating: 4.6,
    specs: { size: "27\"", resolution: "QHD (2560x1440)", refreshRate: "240Hz", panel: "OLED" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXO2KWwTS62Ef-fuhssMPxTqQV1NgkimCpII-o4lLLA&s=10",
    description: "Premium OLED gaming monitor with G-Sync compatibility and vivid colors."
  },
  {
    id: 49,
    name: "BenQ PD2705U",
    category: "Monitors",
    brand: "BenQ",
    price: 44999,
    rating: 4.3,
    specs: { size: "27\"", resolution: "4K UHD (3840x2160)", refreshRate: "60Hz", panel: "IPS" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbi5UqFznF91yoRqUEpaMq_3wckpYrohI5rDrFRR1V_A&s=10",
    description: "Designer monitor with factory-calibrated colors for design and video work."
  },
  {
    id: 50,
    name: "Acer Nitro XV272U",
    category: "Monitors",
    brand: "Acer",
    price: 27999,
    rating: 4.2,
    specs: { size: "27\"", resolution: "QHD (2560x1440)", refreshRate: "170Hz", panel: "IPS" },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDY9u6ppv8THoSnp-oS6VNq_w-mxgdTXZhOL3R9A8Xfg&s=10",
    description: "Affordable high-refresh gaming monitor with sharp QHD resolution."
  }
];

// const Header = () => {
//   const categories = [
//     "Mobiles",
//     "Laptops",
//     "Tablets",
//     "Headphones",
//     "TWS",
//     "Monitors",
//   ];