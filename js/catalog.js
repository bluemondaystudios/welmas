/*
 * FreshlyBaked by Welmas: the whole catalogue lives here.
 *
 * To change a price, add a product or hide one, edit this file only:
 * every page (home, menu, celebrations, the order basket and the WhatsApp
 * message) reads from it.
 *
 *   price:   a number in rand, or null for "price on request"
 *   options: sizes / variations, each with its own price
 *   from:    true shows the price as "from R…"
 */
window.WELMAS = {
  business: {
    name: "FreshlyBaked by Welmas",
    whatsapp: "27767937517",          // international format, no + or spaces
    phoneDisplay: "076 793 7517",
    email: "leemo991007@gmail.com",
    instagram: "https://www.instagram.com/freshlybakedbywelmas",
    facebook: "https://www.facebook.com/freshlybakedbywelmas",
    location: "Ngwaritsi, Limpopo, South Africa",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ngwaritsi%2C+Limpopo%2C+South+Africa",
  },

  categories: [
    { id: "cakes",       name: "Celebration Cakes",   blurb: "Layered, hand-finished and designed around your day." },
    { id: "tubs",        name: "Biscuits & Scones",   blurb: "Family-sized tubs for funerals, weddings, stokvels and every gathering in between." },
    { id: "bakery",      name: "From the Oven",       blurb: "Cupcakes, scones and everyday bakes." },
    { id: "meals",       name: "Meals",               blurb: "Burgers and sandwiches, made fresh." },
    { id: "sweet",       name: "Milkshakes & Desserts", blurb: "Something cold, something sweet." },
    { id: "platters",    name: "Platters",            blurb: "Generous boards for sharing." },
    { id: "setups",      name: "Setups & Décor",      blurb: "Kiddies parties and romantic setups, styled end to end." },
  ],

  // Build-your-own cake pricing (from the official price list)
  cakeSizes: [
    { id: "6-1", label: '6" · one flavour',    servings: "6 to 10 servings",  price: 500,  sticker: 550 },
    { id: "6-2", label: '6" · two flavours',   servings: "6 to 12 servings",  price: 650,  sticker: 700 },
    { id: "6-3", label: '6" · three flavours', servings: "8 to 15 servings",  price: 850,  sticker: 900 },
    { id: "7-2", label: '7" · two flavours',   servings: "15 to 20 servings", price: 950,  sticker: 1000 },
    { id: "7-3", label: '7" · three flavours', servings: "20 to 24 servings", price: 1050, sticker: 1100 },
  ],
  // These carry an extra charge, confirmed on the quote
  premiumFlavours: ["Red Velvet", "Chocolate", "Carrot", "Marula", "Blueberry", "Lemon Poppyseed", "Black Forest", "Biscoff"],
  extras: ["Fresh flowers", "Glitter", "Artificial balls", "Gold leaf", "Topper", "Wafer-paper sheet"],

  products: [
    // ── Cakes ──────────────────────────────────────────────
    { id: "cake-rainbow",    cat: "cakes", name: "Rainbow Butterfly",   img: "assets/img/cake-rainbow.jpg",    price: 450,  from: true, note: "Pastel buttercream, rainbow topper, butterflies & personalised name.", featured: true },
    { id: "cake-butterfly",  cat: "cakes", name: "Ocean Butterfly",     img: "assets/img/cake-butterfly.jpg",  price: 600,  from: true, note: "Painted blue buttercream, pearl spheres and lilac butterflies.", featured: true },
    { id: "cake-mickey",     cat: "cakes", name: "Character Cake",      img: "assets/img/cake-mickey.jpg",     price: 550,  from: true, note: "Your child's favourite character, name and age.", featured: true },
    { id: "cake-oreo",       cat: "cakes", name: "Cookies & Cream",     img: "assets/img/cake-oreo.jpg",       price: 800,  from: true, note: "Tall white cake crowned with Oreos and gold dragées.", featured: true },
    { id: "cake-strawberry", cat: "cakes", name: "Strawberry Crown",    img: "assets/img/cake-strawberry.jpg", price: 900,  from: true, note: "Chocolate crumb, fresh strawberries and gold leaf.", featured: true },
    { id: "cake-fairy",      cat: "cakes", name: "Little Fairy",        img: "assets/img/cake-fairy.jpg",      price: 1000, from: true, note: "Hand-placed character art, rainbow and personalised name.", featured: true },
    { id: "cake-drip",       cat: "cakes", name: "Caramel Drip",        img: "assets/img/cake-drip.jpg",       price: 850,  from: true, note: "Three flavours, caramel drip and cookie-crumb base." },

    // ── Tubs ───────────────────────────────────────────────
    { id: "melting-moments", cat: "tubs", name: "Melting Moments", img: "assets/img/melting-moments.jpg", featured: true,
      note: "Buttery piped biscuits with jam and chocolate centres.",
      options: [{ label: "5 litre", price: 400 }, { label: "9 kg", price: 700 }, { label: "20 litre", price: 1000 }] },
    { id: "ginger-biscuits", cat: "tubs", name: "Ginger Biscuits", img: "assets/img/ginger-biscuits.jpg",
      note: "Sandwiched, sugar-dusted ginger rings.",
      options: [{ label: "5 litre", price: 500 }, { label: "9 kg", price: 750 }, { label: "20 litre", price: 1050 }] },
    { id: "jam-tarts", cat: "tubs", name: "Jam Tarts", img: "assets/img/jam-tarts.jpg",
      note: "Crumbly squares with a ribbon of jam.",
      options: [{ label: "5 litre", price: 500 }, { label: "9 kg", price: 650 }, { label: "20 litre", price: 1150 }] },
    { id: "scones", cat: "tubs", name: "Scones", img: "assets/img/scones.jpg", featured: true,
      note: "Golden, soft and best with butter and jam.",
      options: [{ label: "5 litre", price: 400 }, { label: "9 kg", price: 550 }, { label: "20 litre", price: 800 }] },

    // ── From the oven ──────────────────────────────────────
    { id: "cupcakes", cat: "bakery", name: "Cupcakes",            price: null, note: "Swirled buttercream, matched to your theme. Sold by the dozen." },
    { id: "biscuits", cat: "bakery", name: "Biscuits by the box", price: null, note: "Smaller quantities of our tub favourites." },

    // ── Meals ──────────────────────────────────────────────
    { id: "burgers",    cat: "meals", name: "Burgers",    price: null, note: "Freshly made, filled generously." },
    { id: "sandwiches", cat: "meals", name: "Sandwiches", price: null, note: "Great for lunches, meetings and events." },

    // ── Sweet ──────────────────────────────────────────────
    { id: "milkshakes", cat: "sweet", name: "Milkshakes", price: null, note: "Thick, cold and topped high." },
    { id: "desserts",   cat: "sweet", name: "Desserts",   price: null, note: "Ask about this week's sweet treats." },

    // ── Platters ───────────────────────────────────────────
    { id: "platters", cat: "platters", name: "Platters", price: null, note: "Sweet or savoury boards, sized to your guest list." },

    // ── Setups ─────────────────────────────────────────────
    { id: "kiddies-setup",  cat: "setups", name: "Kiddies Party Setup", img: "assets/img/kiddies-candy-cart.jpg", price: 3500, from: true, featured: true,
      note: "Tables, chairs, draping, candy cart, balloons and themed styling." },
    { id: "romantic-setup", cat: "setups", name: "Romantic Setup", price: null,
      note: "Proposals, anniversaries and date nights. Flowers, candles and something sweet." },
  ],
};
