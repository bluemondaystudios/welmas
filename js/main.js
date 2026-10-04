/* FreshlyBaked by Welmas — shared site behaviour */
(function () {
  "use strict";

  const W = window.WELMAS;
  const B = W.business;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  document.documentElement.classList.remove("no-js");

  const rand = (n) => "R" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const waLink = (text) => `https://wa.me/${B.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;

  const icon = {
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6a11.8 11.8 0 0 0 5.6 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z"/></svg>',
  };

  /* ---------- Shared chrome ---------- */
  const page = document.body.dataset.page || "";
  const navItems = [
    ["index.html", "Home", "home"],
    ["menu.html", "Menu", "menu"],
    ["menu.html#build", "Design a Cake", "build"],
    ["celebrations.html", "Celebrations", "celebrations"],
    ["story.html", "Our Story", "story"],
  ];

  function renderChrome() {
    const header = $("#site-header");
    if (header) {
      header.outerHTML = `
      <div class="ribbon">Orders open 24/7 on WhatsApp · <a href="${waLink("Hi Welmas! I'd like to place an order.")}" target="_blank" rel="noopener">${B.phoneDisplay}</a></div>
      <header class="site-header">
        <div class="wrap nav">
          <a class="brand" href="index.html" aria-label="${esc(B.name)} — home">
            <img src="assets/img/logo-ink.png" alt="" width="52" height="52">
            <span class="brand-name"><span class="bn-long">FreshlyBaked <em>by</em> </span>Welmas<small>Premium bakery · Est. 2018</small></span>
          </a>
          <ul class="nav-links" id="nav-links">
            ${navItems.map(([href, label, key]) => `<li><a href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
          </ul>
          <div class="nav-actions">
            <button class="basket-btn" type="button" data-open-basket aria-label="Open order basket">
              ${icon.bag}<span class="label">Order</span><span class="basket-count" data-basket-count>0</span>
            </button>
            <button class="menu-toggle" type="button" aria-controls="nav-links" aria-expanded="false" aria-label="Menu">${icon.menu}</button>
          </div>
        </div>
      </header>`;
    }

    const footer = $("#site-footer");
    if (footer) {
      footer.outerHTML = `
      <footer class="site-footer">
        <div class="wrap">
          <div class="footer-grid">
            <div class="footer-brand">
              <img src="assets/img/logo-cream.png" alt="FreshlyBaked by Welmas — Premium bakery, est. 2018, made with love" width="150" height="150">
              <p>A premium home bakery in Ngwaritsi, Limpopo. Cakes, biscuits, meals and full celebration setups — made with love since 2018.</p>
              <div class="socials">
                <a href="${B.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon.instagram}</a>
                <a href="${B.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon.facebook}</a>
                <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon.whatsapp}</a>
              </div>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>${navItems.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>
            </div>
            <div>
              <h4>Order</h4>
              <ul>
                <li><a href="${waLink("Hi Welmas!")}" target="_blank" rel="noopener">WhatsApp ${B.phoneDisplay}</a></li>
                <li><a href="tel:+${B.whatsapp}">Call ${B.phoneDisplay}</a></li>
                <li><a href="mailto:${B.email}">${B.email}</a></li>
              </ul>
            </div>
            <div>
              <h4>Visit</h4>
              <ul>
                <li><a href="${B.mapUrl}" target="_blank" rel="noopener">${B.location}</a></li>
                <li>Orders received 24 hours a day</li>
              </ul>
            </div>
          </div>
          <div class="footer-word" aria-hidden="true">made with love</div>
          <div class="footer-bottom">
            <span>© ${new Date().getFullYear()} ${esc(B.name)}</span>
            <span>Prices are a guide; final price depends on your design.</span>
          </div>
        </div>
      </footer>`;
    }

    document.body.insertAdjacentHTML("beforeend", `
      <div class="drawer-backdrop" data-close-basket></div>
      <aside class="drawer" id="basket" role="dialog" aria-modal="true" aria-labelledby="basket-title" aria-hidden="true">
        <div class="drawer-head">
          <h2 id="basket-title">Your <em>order</em></h2>
          <button class="icon-btn" type="button" data-close-basket aria-label="Close">${icon.close}</button>
        </div>
        <div class="drawer-body" data-basket-body></div>
        <div class="drawer-foot" data-basket-foot></div>
      </aside>
      <div class="toast" role="status" aria-live="polite"><span data-toast-text></span><button type="button" data-open-basket>View order</button></div>
      <a class="wa-float" href="${waLink("Hi Welmas! I'd like to place an order.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon.whatsapp}</a>
    `);
  }

  /* ---------- Basket ---------- */
  const KEY = "welmas-basket-v1";
  let basket = [];
  try { basket = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { basket = []; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(basket)); } catch (e) { /* storage unavailable */ } };

  function addToBasket(item) {
    const existing = !item.unique && basket.find((b) => b.key === item.key);
    if (existing) existing.qty += 1;
    else basket.push(Object.assign({ qty: 1 }, item));
    save();
    renderBasket();
    toast(`${item.name}${item.option ? " · " + item.option : ""} added`);
  }

  function basketTotals() {
    let total = 0, quoted = false;
    basket.forEach((b) => { if (typeof b.price === "number") total += b.price * b.qty; if (b.quoted) quoted = true; });
    return { total, quoted, count: basket.reduce((n, b) => n + b.qty, 0) };
  }

  function renderBasket() {
    const { total, quoted, count } = basketTotals();
    $$("[data-basket-count]").forEach((el) => { el.textContent = count; el.dataset.empty = count === 0; });
    const body = $("[data-basket-body]");
    const foot = $("[data-basket-foot]");
    if (!body) return;

    if (!basket.length) {
      body.innerHTML = `<div class="empty"><img src="assets/img/logo-ink.png" alt=""><p>Your order is empty — let's fix that.</p><a class="btn btn-primary btn-sm" href="menu.html">Browse the menu</a></div>`;
      foot.innerHTML = `<a class="btn btn-ghost" href="${waLink("Hi Welmas! I'd like to ask about an order.")}" target="_blank" rel="noopener">${icon.whatsapp} Just chat to us</a>`;
      return;
    }

    body.innerHTML = basket.map((b, i) => `
      <div class="line-item">
        <div class="thumb">${b.img ? `<img src="${esc(b.img)}" alt="">` : `<img class="mark" src="assets/img/logo-ink.png" alt="">`}</div>
        <div>
          <h4>${esc(b.name)}</h4>
          <div class="meta">${[b.option, b.details].filter(Boolean).map(esc).join("\n")}</div>
          <div class="qty" role="group" aria-label="Quantity">
            <button type="button" data-qty="${i}" data-d="-1" aria-label="Fewer">−</button>
            <output>${b.qty}</output>
            <button type="button" data-qty="${i}" data-d="1" aria-label="More">+</button>
          </div>
        </div>
        <div>
          <div class="lp">${typeof b.price === "number" ? (b.from ? '<small style="font-size:.6em">from </small>' : "") + rand(b.price * b.qty) : '<em style="font-size:.85em">Quote</em>'}</div>
          <button class="remove" type="button" data-remove="${i}">Remove</button>
        </div>
      </div>`).join("");

    const prevName = $("#order-name") ? $("#order-name").value : "";
    const prevDate = $("#order-date") ? $("#order-date").value : "";
    const prevNotes = $("#order-notes") ? $("#order-notes").value : "";
    foot.innerHTML = `
      <div class="total-row"><span>Estimated total</span><b>${rand(total)}${quoted ? "+" : ""}</b></div>
      <p class="fine">${quoted ? "Some items are priced on request. " : ""}Final price is confirmed by Welmas once your design is agreed.</p>
      <div class="two">
        <label>Your name<input class="text-input" id="order-name" autocomplete="name" value="${esc(prevName)}"></label>
        <label>Needed on<input class="text-input" id="order-date" type="date" value="${esc(prevDate)}"></label>
      </div>
      <label>Notes<input class="text-input" id="order-notes" placeholder="Collection or delivery, theme, colours…" value="${esc(prevNotes)}"></label>
      <a class="btn btn-glow" data-send-order href="#" target="_blank" rel="noopener">${icon.whatsapp} Send order on WhatsApp</a>
      <a class="btn btn-ghost btn-sm" data-email-order href="#">Or send by email</a>`;
  }

  function orderMessage() {
    const name = ($("#order-name") || {}).value || "";
    const date = ($("#order-date") || {}).value || "";
    const notes = ($("#order-notes") || {}).value || "";
    const { total, quoted } = basketTotals();
    const lines = basket.map((b) => {
      const price = typeof b.price === "number" ? ` — ${b.from ? "from " : ""}${rand(b.price * b.qty)}` : " — price on request";
      return `• ${b.qty} × ${b.name}${b.option ? " (" + b.option + ")" : ""}${price}${b.details ? "\n   " + b.details.replace(/\n/g, "\n   ") : ""}`;
    });
    return [
      `Hi Welmas! 🎂 I'd like to place an order${name ? " — this is " + name : ""}.`,
      "",
      ...lines,
      "",
      `Estimated total: ${rand(total)}${quoted ? " + quoted items" : ""}`,
      date ? `Needed on: ${new Date(date + "T00:00").toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}` : "",
      notes ? `Notes: ${notes}` : "",
      "",
      "Sent from freshlybakedbywelmas.co.za",
    ].filter((l, i, a) => l !== "" || a[i - 1] !== "").join("\n");
  }

  let lastFocus = null;
  function openBasket() {
    lastFocus = document.activeElement;
    clearTimeout(toastTimer);
    $(".toast").classList.remove("show");
    document.body.classList.add("drawer-open");
    $("#basket").setAttribute("aria-hidden", "false");
    setTimeout(() => { const c = $("#basket [data-close-basket]"); if (c) c.focus(); }, 50);
  }
  function closeBasket() {
    document.body.classList.remove("drawer-open");
    $("#basket").setAttribute("aria-hidden", "true");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  let toastTimer;
  function toast(text) {
    const t = $(".toast");
    $("[data-toast-text]", t).textContent = text;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
  }

  /* ---------- Product cards ---------- */
  function priceHTML(p, opt) {
    const price = opt ? opt.price : p.price;
    if (typeof price !== "number") return `<span class="price quote">Price on request</span>`;
    return `<span class="price">${p.from ? "<small>from</small>" : ""}${rand(price)}</span>`;
  }

  function cardHTML(p) {
    const cat = W.categories.find((c) => c.id === p.cat);
    const media = p.img
      ? `<div class="card-media"><img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">${cat ? `<span class="tag">${esc(cat.name)}</span>` : ""}</div>`
      : `<div class="card-media placeholder"><img src="assets/img/logo-ink.png" alt="" loading="lazy">${cat ? `<span class="tag">${esc(cat.name)}</span>` : ""}</div>`;
    const select = p.options
      ? `<select class="opt-select" data-opt aria-label="Choose a size for ${esc(p.name)}">${p.options.map((o, i) => `<option value="${i}">${esc(o.label)} — ${rand(o.price)}</option>`).join("")}</select>`
      : "";
    return `
      <article class="card" data-product="${esc(p.id)}">
        ${media}
        <div class="card-body">
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.note || "")}</p>
          ${select}
          <div class="card-foot">
            <span data-price>${priceHTML(p, p.options && p.options[0])}</span>
            <button class="add-btn" type="button" data-add="${esc(p.id)}">${icon.plus}${typeof p.price === "number" || p.options ? "Add" : "Ask"}</button>
          </div>
        </div>
      </article>`;
  }

  function renderProducts() {
    $$("[data-products]").forEach((el) => {
      const q = el.dataset.products;
      let list = W.products;
      if (q === "featured") list = list.filter((p) => p.featured);
      else if (q.startsWith("cat:")) { const ids = q.slice(4).split(","); list = list.filter((p) => ids.includes(p.cat)); }
      el.innerHTML = list.map(cardHTML).join("");
    });
  }

  /* ---------- Cake builder ---------- */
  function initBuilder() {
    const form = $("#cake-builder");
    if (!form) return;
    $("[data-sizes]", form).innerHTML = W.cakeSizes.map((s, i) => `
      <label class="choice"><input type="radio" name="size" value="${s.id}"${i === 0 ? " checked" : ""}><span><b>${s.label}</b><i>${s.servings} · from ${rand(s.price)}</i></span></label>`).join("");
    $("[data-premium]", form).innerHTML = W.premiumFlavours.map((f) => `<label class="pill"><input type="checkbox" name="premium" value="${esc(f)}"><span>${esc(f)}</span></label>`).join("");
    $("[data-extras]", form).innerHTML = W.extras.map((f) => `<label class="pill"><input type="checkbox" name="extras" value="${esc(f)}"><span>${esc(f)}</span></label>`).join("");

    function state() {
      const fd = new FormData(form);
      const size = W.cakeSizes.find((s) => s.id === fd.get("size"));
      const deco = fd.get("deco");
      return {
        size, deco,
        price: deco === "sticker" ? size.sticker : size.price,
        premium: fd.getAll("premium"),
        extras: fd.getAll("extras"),
        flavours: (fd.get("flavours") || "").trim(),
        theme: (fd.get("theme") || "").trim(),
        message: (fd.get("message") || "").trim(),
      };
    }

    function detailText(s) {
      return [
        `${s.size.servings}, ${s.deco === "sticker" ? "with sticker/character" : "standard decoration"}`,
        s.flavours && `Flavours: ${s.flavours}`,
        s.premium.length && `Premium: ${s.premium.join(", ")}`,
        s.extras.length && `Extras: ${s.extras.join(", ")}`,
        s.theme && `Theme/colours: ${s.theme}`,
        s.message && `Writing: "${s.message}"`,
      ].filter(Boolean).join("\n");
    }

    function update() {
      const s = state();
      const extra = s.premium.length || s.extras.length;
      $("[data-total]").innerHTML = `<small>from</small>${rand(s.price)}${extra ? "+" : ""}`;
      $("[data-summary]").innerHTML = [
        ["Size", s.size.label],
        ["Serves", s.size.servings],
        ["Finish", s.deco === "sticker" ? "Sticker / character" : "Standard decoration"],
        ["Premium flavour", s.premium.length ? s.premium.join(", ") + " · quoted" : "—"],
        ["Extras", s.extras.length ? s.extras.join(", ") + " · quoted" : "—"],
      ].map(([k, v]) => `<li><span>${k}</span><span>${esc(v)}</span></li>`).join("");
      $("[data-builder-wa]").href = waLink(`Hi Welmas! 🎂 I'd like a quote for a custom cake:\n\n${s.size.label} — from ${rand(s.price)}\n${detailText(s)}\n\nSent from freshlybakedbywelmas.co.za`);
    }

    form.addEventListener("input", update);
    form.addEventListener("change", update);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const s = state();
      addToBasket({
        key: "custom-" + Date.now(), unique: true, id: "custom-cake", name: "Custom Cake",
        option: s.size.label, price: s.price, from: true, quoted: !!(s.premium.length || s.extras.length),
        img: "assets/img/slice-four-layer.jpg", details: detailText(s),
      });
      openBasket();
    });
    update();
  }

  /* ---------- Menu page: price table + scrollspy ---------- */
  function initMenu() {
    const table = $("[data-cake-table]");
    if (table) {
      table.innerHTML = W.cakeSizes.map((s) => `
        <tr><td><strong>${s.label}</strong><span>Buttercream or fresh cream</span></td><td>${s.servings}</td><td class="num">${rand(s.price)}</td><td class="num">${rand(s.sticker)}</td></tr>`).join("");
    }
    const links = $$(".menu-nav a");
    if (!links.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
        const active = $(".menu-nav a.active");
        if (active) active.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((a) => { const sec = $(a.getAttribute("href")); if (sec) io.observe(sec); });
  }

  /* ---------- Events ---------- */
  function bindEvents() {
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-open-basket],[data-close-basket],[data-add],[data-qty],[data-remove],[data-send-order],[data-email-order],[data-rail],[data-quick]");
      if (!t) return;

      if (t.matches("[data-open-basket]")) { $(".toast").classList.remove("show"); openBasket(); }
      else if (t.matches("[data-close-basket]")) closeBasket();
      else if (t.matches("[data-add]")) {
        const p = W.products.find((x) => x.id === t.dataset.add);
        const card = t.closest(".card");
        const sel = card && $("[data-opt]", card);
        const opt = p.options ? p.options[sel ? +sel.value : 0] : null;
        addToBasket({
          key: p.id + (opt ? "|" + opt.label : ""), id: p.id, name: p.name, img: p.img,
          option: opt ? opt.label : "", price: opt ? opt.price : p.price, from: !!p.from,
          quoted: typeof (opt ? opt.price : p.price) !== "number",
        });
        t.classList.add("added"); t.innerHTML = icon.check + "Added";
        setTimeout(() => { t.classList.remove("added"); t.innerHTML = icon.plus + (typeof p.price === "number" || p.options ? "Add" : "Ask"); }, 1600);
      }
      else if (t.matches("[data-quick]")) {
        const p = W.products.find((x) => x.id === t.dataset.quick);
        addToBasket({ key: p.id, id: p.id, name: p.name, img: p.img, price: p.price, from: !!p.from, quoted: typeof p.price !== "number" });
        openBasket();
      }
      else if (t.matches("[data-qty]")) {
        const b = basket[+t.dataset.qty];
        b.qty += +t.dataset.d;
        if (b.qty < 1) basket.splice(+t.dataset.qty, 1);
        save(); renderBasket();
      }
      else if (t.matches("[data-remove]")) { basket.splice(+t.dataset.remove, 1); save(); renderBasket(); }
      else if (t.matches("[data-send-order]")) { t.href = waLink(orderMessage()); }
      else if (t.matches("[data-email-order]")) {
        e.preventDefault();
        location.href = `mailto:${B.email}?subject=${encodeURIComponent("Order request — website")}&body=${encodeURIComponent(orderMessage())}`;
      }
      else if (t.matches("[data-rail]")) {
        const rail = $(t.dataset.rail);
        rail.scrollBy({ left: (t.dataset.dir === "prev" ? -1 : 1) * rail.clientWidth * 0.8, behavior: "smooth" });
      }
    });

    document.addEventListener("change", (e) => {
      if (!e.target.matches("[data-opt]")) return;
      const card = e.target.closest(".card");
      const p = W.products.find((x) => x.id === card.dataset.product);
      $("[data-price]", card).innerHTML = priceHTML(p, p.options[+e.target.value]);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("drawer-open")) closeBasket();
    });

    const toggle = $(".menu-toggle");
    const links = $("#nav-links");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open);
        toggle.innerHTML = open ? icon.close : icon.menu;
      });
      links.addEventListener("click", (e) => { if (e.target.closest("a")) { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.innerHTML = icon.menu; } });
    }
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Enquiry forms → WhatsApp ---------- */
  function initEnquiryForms() {
    $$("form[data-wa-form]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const lines = $$("[name]", form)
          .filter((f) => f.value.trim() && (f.type !== "radio" || f.checked))
          .map((f) => `${f.dataset.label || f.name}: ${f.value.trim()}`);
        window.open(waLink(`${form.dataset.waForm}\n\n${lines.join("\n")}\n\nSent from freshlybakedbywelmas.co.za`), "_blank", "noopener");
      });
    });
  }

  /* ---------- Fill contact links declared in HTML ---------- */
  function fillLinks() {
    $$("[data-wa]").forEach((a) => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
    $$("[data-ig]").forEach((a) => { a.href = B.instagram; a.target = "_blank"; a.rel = "noopener"; });
  }

  renderChrome();
  renderProducts();
  initBuilder();
  initMenu();
  initEnquiryForms();
  fillLinks();
  renderBasket();
  bindEvents();
  initReveal();
})();
