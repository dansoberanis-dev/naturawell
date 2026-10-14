/* ============================================================
   NATURAWELL: interações
   Para trocar o WhatsApp da clínica, altere APENAS esta linha:
   ============================================================ */
const WHATSAPP_NUMBER = "5541995530376"; // (41) 99553-0376

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Ano atual ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- Header ao rolar + flutuantes ---------- */
const header = $("#header"), whatsFloat = $("#whatsFloat"), toTop = $("#toTop"), progress = $("#scrollProgress");
function onScroll() {
  const y = window.scrollY;
  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  }
  header.classList.toggle("scrolled", y > 8);
  const show = y > 420;
  whatsFloat.classList.toggle("show", show);
  toTop.classList.toggle("show", show);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));

/* ---------- Menu mobile ---------- */
const menuBtn = $("#menuBtn"), nav = $("#nav");
function closeMenu() {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "Abrir menu");
}
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
$$("a", nav).forEach(a => a.addEventListener("click", closeMenu));
document.addEventListener("click", e => {
  if (nav.classList.contains("open") && !nav.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
window.addEventListener("resize", () => { if (window.innerWidth >= 1120) closeMenu(); });

/* ---------- Revelar ao rolar ---------- */
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); revealIO.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach(el => revealIO.observe(el));

/* ---------- Contadores animados ---------- */
function animateCount(el) {
  const target = Number(el.dataset.count);
  if (reducedMotion) { el.textContent = target; return; }
  const dur = 1100, t0 = performance.now();
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}
const countIO = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { animateCount(en.target); countIO.unobserve(en.target); } });
}, { threshold: 0.6 });
$$("[data-count]").forEach(el => countIO.observe(el));

/* ---------- Filtro de tratamentos ---------- */
const filters = $$(".filter"), cards = $$("#cards .card");
filters.forEach(btn => btn.addEventListener("click", () => {
  filters.forEach(b => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-selected", String(b === btn)); });
  const f = btn.dataset.filter;
  let visibleCount = 0;
  cards.forEach(card => {
    const show = f === "todos" || card.dataset.cat === f;
    if (show) {
      card.classList.remove("hide");
      card.style.opacity = "0"; card.style.transform = "translateY(14px)";
      requestAnimationFrame(() => requestAnimationFrame(() => {
        card.style.opacity = ""; card.style.transform = "";
      }));
    } else card.classList.add("hide");
    if (show) visibleCount++;
  });
  const status = $("#filterStatus");
  if (status) {
    const labels = { todos: "Mostrando todos os tratamentos", facial: "Mostrando tratamentos faciais", corporal: "Mostrando tratamentos corporais", integrativo: "Mostrando cuidados integrativos" };
    status.textContent = `${labels[f]} (${visibleCount})`;
  }
}));

/* Pré-seleciona tratamento/unidade ao clicar nos cards e unidades */
$$("[data-treatment]").forEach(a => a.addEventListener("click", () => {
  const sel = $("#fTreatment");
  [...sel.options].forEach(o => { if (o.text === a.dataset.treatment) sel.value = o.value || o.text; });
  sel.value = a.dataset.treatment;
}));
$$("[data-unit]").forEach(a => a.addEventListener("click", () => {
  const sel = $("#fUnit");
  [...sel.options].forEach(o => { if (o.text.startsWith(a.dataset.unit.split(" (")[0])) sel.selectedIndex = o.index; });
}));

/* ---------- Antes & Depois (arrastar) ---------- */
const ba = $("#beforeAfter"), baRange = $("#baRange"),
      baWrap = $("#baBeforeWrap"), baHandle = $("#baHandle");
function setBA(v) {
  baWrap.style.width = v + "%";
  baHandle.style.left = v + "%";
  /* mantém a imagem interna com a largura total do container */
  const img = $("img", baWrap);
  if (img) img.style.width = ba.offsetWidth + "px";
}
if (ba) {
  baRange.addEventListener("input", () => setBA(baRange.value));
  window.addEventListener("resize", () => setBA(baRange.value));
  setBA(baRange.value);
}

/* ---------- Depoimentos (carrossel) ---------- */
const quotes = [
  {
    text: "“Eu cheguei achando que precisava de um procedimento. Saí com um plano e, pela primeira vez, entendi a minha pele. O resultado veio, mas a confiança veio antes.”",
    author: "Paciente de harmonização",
    meta: "Atendida na unidade Sete de Setembro"
  },
  {
    text: "“Nada de exagero. A Cristina Samy olha para o seu rosto e propõe exatamente o que combina com você. Minhas amigas notaram que eu estava ‘mais bonita’. Ninguém sabia dizer o quê.”",
    author: "Paciente de bioestimulador",
    meta: "Atendida na unidade Av. do Batel"
  },
  {
    text: "“Comecei pelas massagens, por causa da tensão. Hoje faço o protocolo completo, com a parte integrativa junto. Meu corpo desinchou, e minha cabeça também.”",
    author: "Paciente de protocolo corporal",
    meta: "Atendida na unidade Sete de Setembro"
  },
  {
    text: "“Aos 50 e poucos, eu não queria parecer outra pessoa. Queria me reconhecer no espelho. Foi exatamente isso que encontrei aqui: cuidado, técnica e muito acolhimento.”",
    author: "Paciente de tratamento facial",
    meta: "Atendida na unidade Av. do Batel"
  }
];
let qi = 0, qTimer;
const qText = $("#quoteText"), qAuthor = $("#quoteAuthor"), qMeta = $("#quoteMeta"), qDots = $("#quoteDots");
quotes.forEach((_, i) => { const d = document.createElement("i"); if (i === 0) d.className = "on"; qDots.appendChild(d); });
function showQuote(i) {
  qi = (i + quotes.length) % quotes.length;
  const box = qText.closest(".testimonial");
  box.style.opacity = "0";
  setTimeout(() => {
    qText.textContent = quotes[qi].text;
    qAuthor.textContent = quotes[qi].author;
    qMeta.textContent = quotes[qi].meta;
    $$("i", qDots).forEach((d, di) => d.classList.toggle("on", di === qi));
    box.style.opacity = "";
  }, reducedMotion ? 0 : 220);
}
function quoteAuto() { clearInterval(qTimer); if (!reducedMotion) qTimer = setInterval(() => showQuote(qi + 1), 6500); }
$("#quoteNext").addEventListener("click", () => { showQuote(qi + 1); quoteAuto(); });
$("#quotePrev").addEventListener("click", () => { showQuote(qi - 1); quoteAuto(); });
qText.closest(".testimonial").style.transition = "opacity .25s ease";
quoteAuto();

/* ---------- FAQ (acordeão) ---------- */
$$(".faq-item").forEach((item, idx) => {
  const btn = $(".faq-q", item), panel = $(".faq-a", item);
  const panelId = `faq-panel-${idx + 1}`;
  panel.id = panelId;
  panel.setAttribute("role", "region");
  btn.setAttribute("aria-controls", panelId);
  btn.addEventListener("click", () => {
    const open = item.classList.contains("open");
    $$(".faq-item.open").forEach(o => { o.classList.remove("open"); $(".faq-q", o).setAttribute("aria-expanded", "false"); $(".faq-a", o).style.maxHeight = null; });
    if (!open) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

/* ---------- Períodos do formulário ---------- */
let period = "Manhã";
$$("#periods .period").forEach(b => b.addEventListener("click", () => {
  $$("#periods .period").forEach(x => x.classList.toggle("is-active", x === b));
  period = b.dataset.period;
}));

/* ---------- Formulário → WhatsApp ---------- */
$("#bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#fName").value.trim();
  const err = $("#formError");
  if (!name) {
    err.hidden = false;
    $("#fName").focus();
    $("#fName").style.borderColor = "#C96A62";
    return;
  }
  err.hidden = true;
  const success = $("#formSuccess");
  if (success) { success.hidden = false; success.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest" }); }
  const unit = $("#fUnit").value;
  const treatment = $("#fTreatment").value;
  const extra = $("#fMsg").value.trim();
  const msg =
`Olá! Meu nome é ${name} e vim pelo site da Naturawell.

Quero agendar uma avaliação:
• Unidade: ${unit}
• Interesse: ${treatment}
• Melhor período: ${period}${extra ? `\n• Observação: ${extra}` : ""}

Pode me passar os horários disponíveis? Obrigada!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});

/* ---------- Lightbox da galeria de tratamentos ---------- */
const lightbox = $("#lightbox"), lbImg = $("#lightboxImg"), lbCap = $("#lightboxCaption");
$$(".card figure img").forEach(img => img.addEventListener("click", () => {
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbCap.textContent = img.alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  $("#lightboxClose").focus();
}));
function closeLightbox() { lightbox.hidden = true; document.body.style.overflow = ""; }
$("#lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });

/* ---------- Parallax suave da foto de fundo do hero ---------- */
if (!reducedMotion) {
  const heroBg = $(".hero-bg");
  if (heroBg) {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y < 900) heroBg.style.transform = `translateY(${y * 0.16}px)`;
    }, { passive: true });
  }
}

/* ---------- Menu acompanha a seção visível (scrollspy) ---------- */
const spyLinks = $$("#nav a[href^='#']");
const spyMap = new Map(spyLinks.map(a => [a.getAttribute("href").slice(1), a]));
const spyIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    spyLinks.forEach(a => a.classList.remove("active"));
    const link = spyMap.get(en.target.id);
    if (link) link.classList.add("active");
  });
}, { rootMargin: "-38% 0px -55% 0px" });
["inicio","filosofia","tratamentos","dra","resultados","unidades","duvidas"].forEach(id => {
  const el = document.getElementById(id);
  if (el) spyIO.observe(el);
});
