(function () {
  "use strict";

  const imageBase = "assets/images/";
  const pageName = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const isRenders = pageName.includes("renders");
  const isChecklist = pageName.includes("checklist");
  const isConclusion = pageName.includes("conclusion");

  const pages = [
    ["Главная", "index.html"],
    ["Паспорт", "passport.html"],
    ["Команда", "team.html"],
    ["Стандарт", "standard.html"],
    ["Аудит и фото", "audit.html"],
    ["Закупка", "procurement.html"],
    ["Эргономика", "ergonomics.html"],
    ["AI-визуализация", "renders.html"],
    ["Чек-лист", "checklist.html"],
    ["Структура", "structure.html"],
    ["Итоги", "conclusion.html"],
    ["Печать", "print.html"]
  ];

  const renderCards = [
    {
      title: "Аудитория без студентов и с проводной системой",
      file: "classroom-after-wired-empty.webp",
      path: "img/renders/01_classroom_wired_empty.jpg",
      prompt: "AI-визуализация аудитории без студентов: сохранены рабочие места, добавлена проводная система, мягкий свет и аккуратная организация пространства.",
      purpose: "Показать чистый вид аудитории после модернизации без людей, чтобы хорошо читались мебель, проходы, свет и центральная проводная линия.",
      proof: "Изображение доказывает, что проводная система может быть встроена без визуального хаоса и без ощущения временного решения.",
      result: "Этот кадр подходит как базовый референс результата: пространство выглядит собранным, современным и пригодным для регулярной учебной работы."
    },
    {
      title: "Модернизированная аудитория: вид спереди",
      file: "modern-classroom-front.webp",
      path: "img/renders/02_modern_front.png",
      prompt: "Фотореалистичный вид аудитории спереди: студенты за ноутбуками, единая посадка, интерактивная зона, техника и зона отдыха на заднем плане.",
      purpose: "Показать основной учебный сценарий, где аудитория работает как современный компьютерный класс.",
      proof: "Видно, что техника, мебель и хранение не конфликтуют между собой, а собираются в понятную образовательную среду.",
      result: "Кадр показывает итог для занятий: студентам удобно работать, преподавателю проще вести материал, а пространство выглядит цельно."
    },
    {
      title: "Интеграция проводной системы",
      file: "wired-system-integration.webp",
      path: "img/renders/03_wired_system.jpg",
      prompt: "Широкий ракурс аудитории с интегрированной проводной системой: кабельные каналы, рабочие места, свет, интерактивная панель и комфортная зона.",
      purpose: "Показать, как электропитание и кабель-менеджмент становятся частью интерьера, а не случайными проводами на полу.",
      proof: "Кадр подтверждает, что проводка может быть читаемой, безопасной и визуально аккуратной при сохранении проходов.",
      result: "Это ключевой аргумент для закупки кабель-менеджмента и модульных рабочих мест: без этой системы аудитория быстро потеряет порядок."
    },
    {
      title: "Модернизированная аудитория без студентов",
      file: "modern-classroom-empty.webp",
      path: "img/renders/04_modern_empty.jpg",
      prompt: "Пустая модернизированная аудитория: ноутбуки на столах, мягкая зона, вода, растения, светильники, аккуратная геометрия рядов.",
      purpose: "Показать пространство после обновления без людей, чтобы можно было оценить планировку, ширину проходов и общую эстетику.",
      proof: "Кадр показывает, что аудитория остаётся функциональной и визуально спокойной даже без активного учебного процесса.",
      result: "Такой вид нужен для презентации проекта администрации: он показывает готовую среду, а не просто набор предметов."
    },
    {
      title: "Модернизированная аудитория: вид сзади",
      file: "modern-classroom-back.webp",
      path: "img/renders/05_modern_back.jpg",
      prompt: "Вид аудитории сзади: преподаватель у экрана, студенты работают за ноутбуками, сохранена логика рядов и добавлен комфорт.",
      purpose: "Проверить, как пространство воспринимается с задних мест и насколько хорошо видна демонстрационная зона.",
      proof: "Изображение доказывает, что модернизация не ломает учебную посадку, а усиливает видимость, свет и атмосферу.",
      result: "Кадр подтверждает, что задние ряды становятся полноценными рабочими местами, а не слабой зоной аудитории."
    },
    {
      title: "Стойка с кулером и рабочая зона",
      file: "cooler-stand.webp",
      path: "img/renders/06_cooler_zone.png",
      prompt: "Фрагмент аудитории со стойкой, кулером, растениями и посадочными местами вдоль стены.",
      purpose: "Показать небольшую сервисную зону, которая делает аудиторию удобнее во время длинных занятий и перерывов.",
      proof: "Даже малый элемент инфраструктуры повышает комфорт и не требует капитальной перепланировки.",
      result: "Кулер и стойка относятся к недорогим улучшениям, которые быстро дают ощущение более продуманного пространства."
    },
    {
      title: "Зона отдыха",
      file: "lounge-zone.webp",
      path: "img/renders/07_lounge_zone.png",
      prompt: "Мягкая зона отдыха с диваном, столиком, телевизором, холодильником-витриной и стеллажом для снеков.",
      purpose: "Показать, как часть аудитории может работать не только как учебная, но и как восстановительная зона на перерывах.",
      proof: "Кадр доказывает, что зона отдыха может быть аккуратной, современной и не превращать аудиторию в хаотичное помещение.",
      result: "Это эмоциональный акцент проекта: именно он сильнее всего меняет ощущение аудитории и делает финальный образ запоминающимся."
    }
  ];

  function injectCss() {
    if (document.getElementById("codex-working-fixes-css")) return;
    const style = document.createElement("style");
    style.id = "codex-working-fixes-css";
    style.textContent = `
      .codex-dropdown-menu{position:fixed;z-index:9999;min-width:230px;padding:10px;border:1px solid hsl(var(--border));border-radius:18px;background:hsl(var(--card)/.96);box-shadow:0 18px 50px rgba(0,0,0,.25);backdrop-filter:blur(18px)}
      .codex-dropdown-menu a{display:block;padding:10px 12px;border-radius:12px;font-weight:700;color:hsl(var(--foreground));text-decoration:none}
      .codex-dropdown-menu a:hover{background:hsl(var(--primary)/.12);color:hsl(var(--primary))}
      .codex-card-media-fixed{cursor:zoom-in;background:hsl(var(--secondary))!important}
      .codex-card-media-fixed>img{width:100%;height:100%;object-fit:cover}
      .codex-lightbox-fix{position:fixed;inset:0;z-index:10000;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(2,4,15,.86);backdrop-filter:blur(12px)}
      .codex-lightbox-fix.open{display:flex}
      .codex-lightbox-fix figure{position:relative;margin:0;max-width:min(1120px,96vw);max-height:92vh}
      .codex-lightbox-fix img{max-width:100%;max-height:84vh;border-radius:22px;box-shadow:0 30px 90px rgba(0,0,0,.45)}
      .codex-lightbox-fix button{position:absolute;top:-16px;right:-16px;width:42px;height:42px;border-radius:999px;background:#fff;color:#111;font-size:24px;font-weight:800;box-shadow:0 10px 40px rgba(0,0,0,.3)}
      .codex-lightbox-fix figcaption{margin-top:10px;text-align:center;color:#fff;font-weight:700}
      .codex-new-empty-card{border:1px solid hsl(var(--border));border-radius:24px;overflow:hidden;background:var(--gradient-card);box-shadow:var(--shadow-card)}
      .codex-new-empty-media{position:relative;aspect-ratio:16/10;border:1px solid hsl(var(--primary)/.25);border-radius:22px;margin:0;background:linear-gradient(135deg,#eaa48f,#74e0a4);display:grid;place-items:center;color:hsl(var(--primary));overflow:hidden}
      .codex-new-empty-media img{width:100%;height:100%;object-fit:cover}
      .codex-new-empty-badge{position:absolute;top:12px;left:12px;padding:7px 10px;border-radius:999px;background:#fff;color:#111;font-size:11px;font-weight:800;text-transform:uppercase}
      .codex-new-empty-upload{position:absolute;right:12px;bottom:12px;padding:9px 14px;border-radius:999px;background:hsl(var(--primary));color:#fff;font-weight:800}
      .codex-new-empty-body{padding:22px}
      .codex-new-empty-body h3{font-size:20px;font-weight:800;margin-bottom:14px}
      .codex-new-empty-body button{color:hsl(var(--primary));font-weight:800}
      .codex-active-check{border-color:hsl(var(--primary))!important;background:hsl(var(--primary)/.12)!important}
      .codex-active-check span:first-child{background:hsl(var(--primary));border-color:hsl(var(--primary))!important}
      .codex-active-check span:first-child:after{content:"";width:10px;height:6px;border-left:2px solid white;border-bottom:2px solid white;transform:rotate(-45deg);display:block;margin-top:-2px}
      .codex-active-check span:last-child{text-decoration:line-through;color:hsl(var(--muted-foreground))}
      .codex-launch-modal{position:fixed;inset:0;z-index:10000;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(4,5,18,.82);backdrop-filter:blur(16px)}
      .codex-launch-modal.open{display:flex}
      .codex-launch-card{position:relative;width:min(1080px,96vw);max-height:92vh;overflow:auto;border:1px solid rgba(255,255,255,.18);border-radius:28px;background:linear-gradient(145deg,#121427,#1a1230);box-shadow:0 30px 100px rgba(0,0,0,.48);color:#fff}
      .codex-launch-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:24px 24px 12px}
      .codex-launch-close{width:38px;height:38px;border-radius:999px;background:rgba(255,255,255,.1);font-size:24px}
      .codex-launch-body{padding:0 24px 24px}
      .codex-launch-bar{height:10px;border-radius:999px;background:rgba(255,255,255,.12);overflow:hidden;margin:18px 0}
      .codex-launch-bar span{display:block;height:100%;width:0;background:linear-gradient(90deg,#8b5cf6,#ec4899);transition:width .22s ease}
      .codex-compare{position:relative;display:none;aspect-ratio:16/9;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.16);touch-action:none;background:#111}
      .codex-compare.ready{display:block}
      .codex-compare img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
      .codex-compare-after{clip-path:inset(0 0 0 50%)}
      .codex-compare-handle{position:absolute;top:0;bottom:0;left:50%;width:3px;background:#fff;box-shadow:0 0 24px rgba(255,255,255,.75)}
      .codex-compare-handle:after{content:"↔";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#6d28d9;font-weight:900;box-shadow:0 12px 36px rgba(0,0,0,.35)}
      .codex-compare-label{position:absolute;top:14px;padding:8px 12px;border-radius:999px;background:rgba(0,0,0,.55);font-weight:900}
      .codex-compare-label.before{left:14px}.codex-compare-label.after{right:14px}
      @media(max-width:700px){.codex-launch-head,.codex-launch-body{padding-left:16px;padding-right:16px}.codex-compare{aspect-ratio:4/5}.site-editor-toolbar{left:8px!important;right:8px!important;transform:none!important;justify-content:center;flex-wrap:wrap}}
    `;
    document.head.appendChild(style);
  }

  function textOf(el) {
    return ((el && (el.value || el.textContent)) || "").trim();
  }

  function findButton(match) {
    return [...document.querySelectorAll("button,a,label")].find((el) => textOf(el).includes(match) || el.getAttribute("aria-label")?.includes(match) || el.getAttribute("title")?.includes(match));
  }

  function findCardByTitle(title) {
    const nodes = [...document.querySelectorAll("h1,h2,h3,h4,input,textarea,p,span,div")].filter((el) => textOf(el).includes(title));
    const node = nodes.find((el) => !el.closest(".project-media-section") && !el.closest(".codex-dropdown-menu"));
    return node && (node.closest("article") || node.closest("figure") || node.closest(".glass-card"));
  }

  function mediaFor(card) {
    return card && (card.querySelector("[class*='aspect-']") || card.querySelector("img")?.parentElement || card.firstElementChild);
  }

  function setCardImage(title, file) {
    const card = findCardByTitle(title);
    const media = mediaFor(card);
    if (!card || !media || media.dataset.codexFixed === "1") return;
    const badge = media.querySelector("span.absolute")?.outerHTML || "";
    const src = imageBase + file;
    media.dataset.codexFixed = "1";
    media.dataset.codexLightbox = src;
    media.dataset.codexCaption = title;
    media.classList.add("codex-card-media-fixed");
    media.innerHTML = `<img src="${src}" alt="${escapeHtml(title)}" loading="lazy">${badge}`;
  }

  function setupTopButtons() {
    document.querySelectorAll("button").forEach((btn) => {
      const label = textOf(btn) || btn.getAttribute("aria-label") || btn.getAttribute("title") || "";
      if ((label.includes("PDF") || label.includes("Сохранить весь проект")) && !btn.dataset.codexPdf) {
        btn.dataset.codexPdf = "1";
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          window.print();
        });
      }
      if ((label.includes("Светлая") || btn.getAttribute("aria-label") === "Светлая") && !btn.dataset.codexTheme) {
        btn.dataset.codexTheme = "light";
        btn.addEventListener("click", () => setTheme("light"));
      }
      if ((label.includes("Темная") || btn.getAttribute("aria-label") === "Темная") && !btn.dataset.codexTheme) {
        btn.dataset.codexTheme = "dark";
        btn.addEventListener("click", () => setTheme("dark"));
      }
      if ((label.includes("Системная") || btn.getAttribute("aria-label") === "Системная") && !btn.dataset.codexTheme) {
        btn.dataset.codexTheme = "system";
        btn.addEventListener("click", () => setTheme("system"));
      }
    });
    setTheme(localStorage.getItem("auditoria-theme") || "dark", true);
  }

  function setTheme(mode, silent) {
    const dark = mode === "dark" || (mode === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("auditoria-theme", mode);
    if (!silent) toast(mode === "light" ? "Светлая тема включена" : mode === "dark" ? "Темная тема включена" : "Системная тема включена");
  }

  function setupDropdown() {
    const trigger = [...document.querySelectorAll("button,a")].find((el) => textOf(el).startsWith("Разделы"));
    if (!trigger || trigger.dataset.codexDropdown === "1") return;
    trigger.dataset.codexDropdown = "1";
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.querySelector(".codex-dropdown-menu")?.remove();
      const menu = document.createElement("nav");
      menu.className = "codex-dropdown-menu";
      pages.forEach(([label, href]) => {
        const a = document.createElement("a");
        a.href = href;
        a.textContent = label;
        menu.appendChild(a);
      });
      document.body.appendChild(menu);
      const r = trigger.getBoundingClientRect();
      menu.style.left = `${Math.min(r.left, innerWidth - 250)}px`;
      menu.style.top = `${r.bottom + 8}px`;
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".codex-dropdown-menu") && e.target !== trigger) document.querySelector(".codex-dropdown-menu")?.remove();
    });
  }

  function setupEditorToolbar() {
    const bar = document.querySelector(".site-editor-toolbar");
    if (!bar || bar.dataset.codexToolbar === "1") return;
    bar.dataset.codexToolbar = "1";
    let edit = localStorage.getItem("auditoria-edit-mode") === "1";
    const editable = () => [...document.querySelectorAll("[data-site-edit-key], h1,h2,h3,p,li,input,textarea")].filter((el) => !el.closest("header") && !el.closest("footer") && !el.closest(".site-editor-toolbar"));
    const apply = () => {
      editable().forEach((el) => {
        if (el.matches("input,textarea")) el.readOnly = !edit;
        else el.contentEditable = edit ? "true" : "false";
      });
      bar.querySelector("[data-site-edit-toggle]") && (bar.querySelector("[data-site-edit-toggle]").textContent = edit ? "Готово" : "Редактировать");
    };
    apply();
    bar.querySelector("[data-site-edit-toggle]")?.addEventListener("click", (e) => {
      e.preventDefault();
      edit = !edit;
      localStorage.setItem("auditoria-edit-mode", edit ? "1" : "0");
      apply();
      toast(edit ? "Редактирование включено" : "Редактирование выключено");
    });
    bar.querySelector("[data-site-export]")?.addEventListener("click", (e) => {
      e.preventDefault();
      const data = editable().map((el, i) => ({ i, tag: el.tagName, text: el.matches("input,textarea") ? el.value : el.textContent }));
      downloadJson(`auditoria-${pageName.replace(".html", "")}.json`, data);
    });
    bar.querySelector("[data-site-import]")?.addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const data = JSON.parse(await file.text());
        const els = editable();
        data.forEach((item) => {
          const el = els[item.i];
          if (!el) return;
          if (el.matches("input,textarea")) el.value = item.text || "";
          else el.textContent = item.text || "";
        });
        toast("JSON импортирован");
      } catch {
        toast("Не удалось прочитать JSON");
      }
    });
    bar.querySelector("[data-site-reset]")?.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("auditoria-edit-mode");
      location.reload();
    });
  }

  function setupCollapsibles() {
    document.querySelectorAll("[data-collapsible-content]").forEach((content) => {
      const wrap = content.parentElement;
      const btn = wrap && [...wrap.children].find((el) => el.tagName === "BUTTON" || textOf(el).includes("Подробнее"));
      if (!btn || btn.dataset.codexCollapse === "1") return;
      btn.dataset.codexCollapse = "1";
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        content.classList.toggle("hidden");
        content.classList.toggle("collapsible-hidden");
        const open = !content.classList.contains("hidden");
        btn.querySelector("svg")?.style.setProperty("transform", open ? "rotate(180deg)" : "rotate(0deg)");
      });
    });
  }

  function setupLightbox() {
    if (!document.querySelector(".codex-lightbox-fix")) {
      const box = document.createElement("div");
      box.className = "codex-lightbox-fix";
      box.innerHTML = `<figure><button type="button" aria-label="Закрыть">×</button><img alt=""><figcaption></figcaption></figure>`;
      document.body.appendChild(box);
      box.addEventListener("click", (e) => {
        if (e.target === box || e.target.tagName === "BUTTON") box.classList.remove("open");
      });
    }
    document.addEventListener("click", (e) => {
      const target = e.target.closest("[data-codex-lightbox], img");
      if (!target || target.closest(".site-editor-toolbar") || target.closest(".codex-lightbox-fix") || target.closest("button")) return;
      const src = target.dataset.codexLightbox || target.currentSrc || target.src;
      if (!src) return;
      e.preventDefault();
      const box = document.querySelector(".codex-lightbox-fix");
      box.querySelector("img").src = src;
      box.querySelector("figcaption").textContent = target.dataset.codexCaption || target.alt || "";
      box.classList.add("open");
    }, true);
  }

  function setupAddCards() {
    document.querySelectorAll("button").forEach((btn) => {
      const t = textOf(btn);
      const isAddPhoto = t.includes("Добавить фото");
      const isAddRender = t.includes("Добавить визуализацию");
      if ((!isAddPhoto && !isAddRender) || btn.dataset.codexAdd === "1") return;
      btn.dataset.codexAdd = "1";
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const count = document.querySelectorAll(".codex-new-empty-card, article.glass-card").length + 1;
        const card = createEmptyCard(isAddRender ? "визуализацию" : "фото", count);
        btn.parentElement.insertBefore(card, btn);
      });
    });
  }

  function createEmptyCard(kind, count) {
    const card = document.createElement("article");
    card.className = "codex-new-empty-card";
    const title = kind === "визуализацию" ? "Новая визуализация — добавьте подпись" : "Новое фото — добавьте подпись";
    card.innerHTML = `
      <div class="codex-new-empty-media">
        <span class="codex-new-empty-badge">${kind === "визуализацию" ? "Визуализация" : "Фото"} ${String(count).padStart(2, "0")}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
        <button type="button" class="codex-new-empty-upload">Загрузить</button>
      </div>
      <div class="codex-new-empty-body">
        <h3 contenteditable="true">${title}</h3>
        <button type="button">Подробнее⌄</button>
        <div data-collapsible-content="true" class="hidden mt-3 text-sm text-muted-foreground leading-relaxed space-y-2 border-l-2 border-primary/30 pl-4">
          <div><b>Описание</b><textarea rows="3" class="w-full bg-secondary/40 rounded-lg px-3 py-2 mt-1">Добавьте описание изображения и что на нём важно показать.</textarea></div>
          <div><b>Вывод</b><textarea rows="3" class="w-full bg-secondary/40 rounded-lg px-3 py-2 mt-1">Запишите, какой вывод подтверждает это изображение.</textarea></div>
        </div>
        <button type="button" class="mt-4 text-muted-foreground">Удалить</button>
      </div>`;
    const media = card.querySelector(".codex-new-empty-media");
    card.querySelector(".codex-new-empty-upload").addEventListener("click", (e) => {
      e.stopPropagation();
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = () => {
        const file = input.files && input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          media.innerHTML = `<img src="${reader.result}" alt="${title}"><span class="codex-new-empty-badge">${kind === "визуализацию" ? "Визуализация" : "Фото"} ${String(count).padStart(2, "0")}</span><button type="button" class="codex-new-empty-upload">Заменить</button>`;
          media.dataset.codexLightbox = reader.result;
          media.dataset.codexCaption = title;
          setupAddCards();
        };
        reader.readAsDataURL(file);
      };
      input.click();
    });
    card.querySelector(".codex-new-empty-body > button").addEventListener("click", (e) => {
      const box = card.querySelector("[data-collapsible-content]");
      box.classList.toggle("hidden");
    });
    card.querySelector(".codex-new-empty-body button:last-child").addEventListener("click", () => card.remove());
    return card;
  }

  function setupRenders() {
    if (!isRenders) return;
    cleanupGeneratedSections();
    const addBtn = findButton("Добавить визуализацию");
    const grid = addBtn?.parentElement || document.querySelector("main .grid");
    if (!grid) return;
    const existing = [...grid.querySelectorAll("article.glass-card")];
    renderCards.forEach((item, i) => {
      let card = existing[i];
      if (!card) {
        card = createRenderCard(i + 1);
        grid.insertBefore(card, addBtn || null);
      }
      fillRenderCard(card, item, i + 1);
    });
  }

  function createRenderCard(num) {
    const article = document.createElement("article");
    article.className = "glass-card rounded-3xl overflow-hidden flex flex-col";
    article.innerHTML = `
      <div class="aspect-[16/10] relative overflow-hidden rounded-2xl border border-border group"></div>
      <div class="p-6 flex-1 flex flex-col gap-4">
        <input class="w-full bg-transparent font-semibold text-xl outline-none focus:bg-secondary/50 rounded px-2 -mx-2 py-1" value="">
        <div><button type="button" class="no-print inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">Подробнее</button>
        <div data-collapsible-content="true" class="mt-3 text-sm text-muted-foreground leading-relaxed space-y-2 border-l-2 border-primary/30 pl-4 hidden"></div></div>
        <button type="button" class="no-print mt-auto self-start inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors">Удалить</button>
      </div>`;
    article.querySelector("button:last-child").addEventListener("click", () => article.remove());
    return article;
  }

  function fillRenderCard(card, item, num) {
    const media = mediaFor(card);
    const input = card.querySelector("input");
    if (input) input.value = item.title;
    media.dataset.codexFixed = "";
    media.innerHTML = `<img src="${imageBase + item.file}" alt="${escapeHtml(item.title)}" loading="lazy"><span class="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-background/85 backdrop-blur text-foreground z-10">Визуализация ${String(num).padStart(2, "0")}</span>`;
    media.classList.add("codex-card-media-fixed");
    media.dataset.codexLightbox = imageBase + item.file;
    media.dataset.codexCaption = item.title;
    const details = card.querySelector("[data-collapsible-content]");
    if (details) {
      details.innerHTML = `
        <div><div class="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">Ссылка / путь к изображению</div><input class="w-full bg-secondary/40 rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40 font-mono" value="${item.path}"></div>
        <div><div class="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">Промпт или метод создания</div><textarea rows="3" class="w-full bg-secondary/40 rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40 resize-none leading-relaxed">${item.prompt}</textarea></div>
        <div><div class="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">Назначение изображения</div><textarea rows="3" class="w-full bg-secondary/40 rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40 resize-none leading-relaxed">${item.purpose}</textarea></div>
        <div><div class="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">Что доказывает изображение</div><textarea rows="3" class="w-full bg-secondary/40 rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40 resize-none leading-relaxed">${item.proof}</textarea></div>
        <div><div class="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">Вывод</div><textarea rows="3" class="w-full bg-secondary/40 rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40 resize-none leading-relaxed">${item.result}</textarea></div>`;
    }
  }

  function setupChecklist() {
    if (!isChecklist) return;
    const key = "auditoria-checklist-state-v2";
    const buttons = [...document.querySelectorAll("main li > button")];
    const state = JSON.parse(localStorage.getItem(key) || "[]");
    buttons.forEach((btn, i) => {
      if (state[i]) btn.classList.add("codex-active-check");
      if (btn.dataset.codexCheck === "1") return;
      btn.dataset.codexCheck = "1";
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        btn.classList.toggle("codex-active-check");
        saveChecklist();
      });
    });
    findButton("Сбросить")?.addEventListener("click", (e) => {
      e.preventDefault();
      buttons.forEach((b) => b.classList.remove("codex-active-check"));
      saveChecklist();
    });
    findButton("Сохранить чек-лист")?.addEventListener("click", (e) => {
      e.preventDefault();
      const data = buttons.map((btn) => ({ text: textOf(btn), done: btn.classList.contains("codex-active-check") }));
      downloadJson("checklist-auditoria-6235.json", data);
    });
    saveChecklist(false);

    function saveChecklist(persist = true) {
      const done = buttons.filter((b) => b.classList.contains("codex-active-check")).length;
      const total = buttons.length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      if (persist) localStorage.setItem(key, JSON.stringify(buttons.map((b) => b.classList.contains("codex-active-check"))));
      const progressText = [...document.querySelectorAll(".gradient-text")].find((el) => el.textContent.includes("/"));
      if (progressText) progressText.innerHTML = `${done} / ${total} <span class="text-base text-muted-foreground font-medium">· ${pct}%</span>`;
      const bar = document.querySelector(".h-2\\.5 .hero-bg, .h-2 .hero-bg");
      if (bar) bar.style.width = `${pct}%`;
      document.querySelectorAll("main .glass-card").forEach((block) => {
        const blockButtons = [...block.querySelectorAll("li > button")];
        if (!blockButtons.length) return;
        const counter = [...block.querySelectorAll("span")].find((s) => /^\d+\/\d+$/.test(textOf(s)));
        if (counter) counter.textContent = `${blockButtons.filter((b) => b.classList.contains("codex-active-check")).length}/${blockButtons.length}`;
      });
    }
  }

  function setupConclusionLaunch() {
    if (!isConclusion) return;
    cleanupGeneratedSections();
    const btn = [...document.querySelectorAll("button")].find((b) => textOf(b).includes("Начать обновление"));
    if (!btn || btn.dataset.codexLaunch === "1") return;
    btn.dataset.codexLaunch = "1";
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openLaunchModal();
    });
  }

  function openLaunchModal() {
    let modal = document.querySelector(".codex-launch-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "codex-launch-modal";
      modal.innerHTML = `
        <div class="codex-launch-card">
          <div class="codex-launch-head">
            <div><h2 style="font-size:28px;font-weight:900">Запуск обновления аудитории</h2><p style="color:rgba(255,255,255,.72);margin-top:6px">Сейчас сайт покажет сравнение состояния до и после модернизации.</p></div>
            <button type="button" class="codex-launch-close">×</button>
          </div>
          <div class="codex-launch-body">
            <div class="codex-launch-status">Подготовка проекта... <b>0%</b></div>
            <div class="codex-launch-bar"><span></span></div>
            <div class="codex-compare">
              <img src="${imageBase}audit-back-before.webp" alt="До">
              <img class="codex-compare-after" src="${imageBase}modern-classroom-back.webp" alt="После">
              <span class="codex-compare-label before">До</span>
              <span class="codex-compare-label after">После</span>
              <span class="codex-compare-handle"></span>
            </div>
          </div>
        </div>`;
      document.body.appendChild(modal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.closest(".codex-launch-close")) modal.classList.remove("open");
      });
      setupCompareDrag(modal.querySelector(".codex-compare"));
    }
    modal.classList.add("open");
    const compare = modal.querySelector(".codex-compare");
    const bar = modal.querySelector(".codex-launch-bar span");
    const status = modal.querySelector(".codex-launch-status");
    compare.classList.remove("ready");
    const steps = [
      [10, "Подготовка проекта..."],
      [20, "Проверка разделов..."],
      [30, "Загрузка изображений..."],
      [50, "Запуск визуализации..."],
      [70, "Сравнение до / после..."],
      [90, "Финальная проверка..."],
      [100, "Готовый проект активирован"]
    ];
    let i = 0;
    bar.style.width = "0%";
    const tick = () => {
      const [pct, txt] = steps[i++];
      bar.style.width = `${pct}%`;
      status.innerHTML = `${txt} <b>${pct}%</b>`;
      if (i < steps.length) setTimeout(tick, 240);
      else setTimeout(() => compare.classList.add("ready"), 250);
    };
    setTimeout(tick, 120);
  }

  function setupCompareDrag(box) {
    if (!box || box.dataset.codexDrag === "1") return;
    box.dataset.codexDrag = "1";
    const after = box.querySelector(".codex-compare-after");
    const handle = box.querySelector(".codex-compare-handle");
    const set = (clientX) => {
      const r = box.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      handle.style.left = `${pct}%`;
    };
    box.addEventListener("pointerdown", (e) => {
      box.setPointerCapture(e.pointerId);
      set(e.clientX);
    });
    box.addEventListener("pointermove", (e) => {
      if (e.buttons) set(e.clientX);
    });
  }

  function setupDefaultImages() {
    const maps = {
      "Учебные столы модульные": "student-desk.webp",
      "Эргономичные стулья": "ergonomic-chairs.webp",
      "Преподавательский стол": "teacher-desk.webp",
      "Интерактивная панель": "interactive-panel.webp",
      "Проектор": "projector.webp",
      "Ноутбуки для студентов": "laptop.webp",
      "Маркерная магнитная доска": "magnetic-whiteboard.webp",
      "Осветительные панели LED": "led-panels.webp",
      "Кабель-менеджмент": "cable-management.webp",
      "Настенные светильники": "wall-lights.webp",
      "Телевизор": "tv.webp",
      "Диван": "sofa.webp",
      "Журнальный столик": "coffee-table.webp",
      "Кулер для воды": "water-cooler.webp",
      "Холодильник": "fridge.webp",
      "Стеллаж для снеков": "snack-rack.webp",
      "Зарядная станция": "charging-station.webp",
      "PlayStation 5": "ps5.webp",
      "Декоративные растения": "plants.webp",
      "Общий вид аудитории спереди": "audit-front-before.webp",
      "Общий вид аудитории сзади": "audit-back-before.webp"
    };
    Object.entries(maps).forEach(([title, file]) => setCardImage(title, file));
  }

  function toast(message) {
    let el = document.querySelector(".codex-toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "codex-toast";
      el.style.cssText = "position:fixed;right:18px;bottom:18px;z-index:10001;padding:12px 16px;border-radius:14px;background:#111827;color:#fff;font-weight:700;box-shadow:0 12px 40px rgba(0,0,0,.3);opacity:0;transition:.2s";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.style.opacity = "1";
    clearTimeout(el._timer);
    el._timer = setTimeout(() => (el.style.opacity = "0"), 1800);
  }

  function downloadJson(name, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  }

  function cleanupGeneratedSections() {
    document.querySelectorAll(".project-media-section,.project-launch-panel").forEach((el) => el.remove());
  }

  function watchOldEnhancements() {
    if (document.documentElement.dataset.codexCleanupWatcher === "1") return;
    document.documentElement.dataset.codexCleanupWatcher = "1";
    cleanupGeneratedSections();
    const observer = new MutationObserver(() => cleanupGeneratedSections());
    observer.observe(document.body, { childList: true, subtree: true });
    setInterval(cleanupGeneratedSections, 700);
  }

  function run() {
    injectCss();
    watchOldEnhancements();
    cleanupGeneratedSections();
    setupTopButtons();
    setupDropdown();
    setupEditorToolbar();
    setupCollapsibles();
    setupLightbox();
    setupAddCards();
    setupDefaultImages();
    setupRenders();
    setupChecklist();
    setupConclusionLaunch();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
  setTimeout(run, 250);
  setTimeout(run, 900);
})();
