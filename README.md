# FreshlyBaked by Welmas — website

A fast, static website for **FreshlyBaked by Welmas**, a premium bakery in Ngwaritsi, Limpopo (est. 2018).
No build step and no server — just HTML, CSS and a little JavaScript.

## Pages
| Page | What's on it |
|---|---|
| `index.html` | Home: hero, services, favourites, story teaser, kiddies setups, how ordering works |
| `menu.html` | Full menu with prices, the **cake designer** (live guide price), tubs, meals, sweets, platters, setups |
| `celebrations.html` | Kiddies & romantic setups, gallery, event enquiry form |
| `story.html` | Meet Lerato, training, behind-the-scenes gallery |

## How ordering works
Customers add items to an **order basket** (it stays in their browser between pages). Tapping
**Send order on WhatsApp** opens WhatsApp to 076 793 7517 with the whole order, date and notes
already written out. There's an email fallback too. No payments or customer data are stored by the site.

## Updating prices and products
Everything lives in **`js/catalog.js`** — prices, products, cake sizes, premium flavours, contact details.
Change it there and every page, the basket and the WhatsApp message update together.

- `price: null` shows "Price on request"
- `from: true` shows "from R…"
- `featured: true` puts the item in the home-page favourites
- add a photo to `assets/img/` and set `img: "assets/img/your-photo.jpg"`

## Publishing
Turn on **GitHub Pages** (Settings → Pages → Deploy from branch → root) or drag the folder onto
Netlify / Cloudflare Pages. A custom domain such as `freshlybakedbywelmas.co.za` can be pointed at either.

## Design notes
Cream and plum with the violet-to-orchid glow from Welmas's own price lists; Cormorant Garamond
headlines, Pinyon Script accents and Jost body text (self-hosted in `assets/fonts`, SIL Open Font License).
