const apis = {
  products: [
    {
      id: 1,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      type: "men's clothing",
      price: 349,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    },
    {
      id: 2,
      name: "mens casual premium slim fit t-shirts",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      type: "men's clothing",
      price: 110,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    },
    {
      id: 3,
      name: "mens cotton jacket",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      type: "men's clothing",
      price: 500,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day",
    },
    {
      id: 4,
      name: "mens casual slim fit",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      type: "men's clothing",
      price: 87,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description",
    },
    {
      id: 5,
      name: " Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      route: "/products/5",
      type: "jewelary",
      price: 1509,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection",
    },
    {
      id: 6,
      name: "solid gold petite micropave",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      type: "jewelary",
      price: 724,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days",
    },
    {
      id: 7,
      name: "white gold plated princess",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      type: "jewelary",
      price: 2000,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    },
    {
      id: 8,
      name: "piered owl rose gold plated stainess steel double",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      type: "jewelary",
      price: 1298,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    },
    {
      id: 9,
      name: "WD 2TB ELEMENTS PORTABLE EXTERNAL HARD DRIVE - USB 3.0",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      type: "electronics",
      price: 4117,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    },
    {
      id: 10,
      name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      type: "electronics",
      price: 2140,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    },
    {
      id: 11,
      name: "SILICON POWER 256GB SSD 3D NAND A55 SLC CACHE PERFORMANCE BOOST SATA ",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      type: "electronics",
      price: 1999,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability",
    },
    {
      id: 12,
      name: "WD 4TB GAMING DRIVE WORKS WITH PLAYSTATION 4 PORTABLE EXTERNAL HARD DRIVE",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      type: "electronics",
      price: 1329,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    },
    {
      id: 13,
      name: "ACER SB220Q BI 21.5 INCHES FULL HD (1920 X 1080) IPS ULTRA-THIN",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      type: "electronics",
      price: 6753,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    },
    {
      id: 14,
      name: "SAMSUNG 49-INCH CHG90 144HZ CURVED GAMING MONITOR (LC49HG90DMNXZA) ",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      type: "electronics",
      price: 8325,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    },
    {
      id: 15,
      name: "BIYLACLESEN WOMEN'S 3-IN-1 SNOWBOARD JACKET WINTER COATS",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      type: "women's clothing",
      price: 1999,
      description:
        "The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    },
    {
      id: 16,
      name: "LOCK AND LOVE WOMEN'S REMOVABLE HOODED FAUX LEATHER MOTO BIKER JACKET",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      type: "women's clothing",
      price: 1148,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    },
    {
      id: 17,
      name: "RAIN JACKET WOMEN WINDBREAKER STRIPED CLIMBING ",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      type: "women's clothing",
      price: 896,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look",
    },
    {
      id: 18,
      name: "MBJ WOMEN'S SOLID SHORT SLEEVE BOAT NECK V",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      type: "women's clothing",
      price: 70,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    },
    {
      id: 19,
      name: "OPNA WOMEN'S SHORT SLEEVE MOISTURE",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      type: "women's clothing",
      price: 55,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    },
    {
      id: 20,
      name: "DANVOUY WOMENS T SHIRT CASUAL COTTON SHORT",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      type: "women's clothing",
      price: 310,
      description:
        "95%Cotton,5%Spandex, description: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter",
    },
  ],
  selectValues: [
    {
      key: 1,
      option: "all",
    },
    {
      key: 2,
      option: "electronics",
    },
    {
      key: 3,
      option: "jewelary",
    },
    {
      key: 4,
      option: "men's clothing",
    },
    {
      key: 5,
      option: "women's clothing",
    },
  ],
};
export default apis;
