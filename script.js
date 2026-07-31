const projects = {
  "mecanica-randon": {
    index: "PROJECT / 01",
    title: "Mecánica Randon",
    summary: "Sistema visual industrial para un taller mecánico con foco en confianza, visibilidad y aplicaciones de alto impacto.",
    challenge: "Ordenar una identidad con muchos puntos de contacto: fachada, lona interior, flyers, redes y tarjetas, manteniendo lectura rápida y presencia técnica.",
    solution: "Se trabajó una paleta sobria con acento naranja, composición modular y recursos de señalética mecánica para construir una marca robusta, directa y reconocible.",
    media: [
      {
        title: "Branding",
        images: ["img/tarjeta-randon-frente.jpeg", "img/tarjeta-randon-dorso.jpeg"]
      },
      {
        title: "Aplicaciones de espacio",
        images: [
          "img/fachada-mecanica-randon.png",
          "img/lona-interior-taller-mecanica-randon.png",
          "img/lona-interior-m-randon.png"
        ]
      },
      {
        title: "Piezas digitales",
        images: ["img/flyer-servicios-mecanica-randon.png", "img/flyer-horarios-mecanica-randon.png"]
      },
      {
        title: "Mockups",
        images: ["img/mockup-ig-story-mecanicarandon.png", "img/mockup-tarjetas-mecanicarandon.jpeg"]
      }
    ]
  },
  "almacen-7030": {
    index: "PROJECT / 02",
    title: "70-30 Almacén",
    summary: "Identidad comercial para almacén de bebidas, resuelta con una estética frontal, popular y de lectura inmediata.",
    challenge: "Trasladar una marca gráfica con personalidad a soportes reales de fachada y cartelería lateral sin perder legibilidad.",
    solution: "Se consolidó un sistema de contraste alto, jerarquías grandes y piezas horizontales pensadas para distancia, tránsito y reconocimiento local.",
    media: [
      {
        title: "Branding",
        images: ["img/70-30-almacen-logo.jpeg"]
      },
      {
        title: "Aplicaciones de local",
        images: ["img/70-30-fachada-montaje.jpeg", "img/70-30-fachada-foto.png", "img/70-30-lateral.jpeg"]
      }
    ]
  },
  "zona-descanso": {
    index: "PROJECT / 03",
    title: "Zona Descanso",
    summary: "Marca orientada a descanso y confort, con aplicaciones limpias, indumentaria, papelería y piezas digitales.",
    challenge: "Crear una identidad suave y recordable que funcionara en soportes muy distintos: logo, indumentaria, tarjetas y comunicación social.",
    solution: "Se construyó un logotipo expresivo de alto contraste, apoyado por variantes de color y aplicaciones de marca pensadas para conservar claridad en formatos físicos y digitales.",
    media: [
      {
        title: "Branding",
        images: ["img/logo-zona-descanso.jpeg"]
      },
      {
        title: "Aplicaciones textiles",
        images: [
          "img/zona-descanso-manual-p16-05.png",
          "img/zona-descanso-manual-p16-06.png",
          "img/zona-descanso-manual-p16-07.png"
        ]
      },
      {
        title: "Papelería",
        images: ["img/zona-descanso-manual-p17-02.png"]
      },
      {
        title: "Piezas digitales",
        images: ["img/zona-descanso-manual-p18-01.png"]
      }
    ]
  },
  "wizzbot": {
    index: "PROJECT / 04",
    title: "Wizzbot",
    summary: "Identidad para una herramienta impulsada por IA, con un símbolo lúdico y sistema de versiones para distintos fondos.",
    challenge: "Combinar cercanía, tecnología y memorabilidad en una marca que pudiera vivir en formatos horizontales y verticales.",
    solution: "Se diseñó una identidad compacta con contraste violeta, tipografía amable y variantes preparadas para usos digitales.",
    media: [
      {
        title: "Branding",
        images: ["img/wizzbot-logo-vert-y-horiz.jpeg"]
      },
      {
        title: "Piezas digitales",
        images: ["img/flyer-wizzbot.jpg"]
      },
      {
        title: "Mockups",
        images: ["img/wizzbot-mockups.png"]
      }
    ]
  },
  "paperprint": {
    index: "PROJECT / 05",
    title: "PaperPrint",
    summary: "Identidad gráfica para servicios de impresión con énfasis en claridad, color y reproducción visual.",
    challenge: "Sintetizar una marca simple para un rubro donde la legibilidad y la recordación son centrales.",
    solution: "Se priorizó una composición directa con gesto cromático puntual, apta para piezas comerciales y comunicación cotidiana.",
    media: [
      {
        title: "Branding",
        images: ["img/paperprint-logo.jpeg"]
      },
      {
        title: "Mockups",
        images: ["img/paperprint-mockups.png"]
      }
    ]
  },
  "chona-cars": {
    index: "PROJECT / 06",
    title: "Chona Cars",
    summary: "Marca para concesionaria con lenguaje deportivo, compacto y orientado a presencia comercial.",
    challenge: "Lograr una identidad veloz y contundente sin sacrificar lectura en aplicaciones horizontales.",
    solution: "Se resolvió un wordmark de alto peso visual, contraste rojo y estructura preparada para cartelería, redes y papelería.",
    media: [
      {
        title: "Branding",
        images: ["img/chona-cars-concesionaria.jpeg"]
      },
      {
        title: "Mockups y aplicaciones",
        images: ["img/chona-cars-mockups.png"]
      }
    ]
  }
};

const root = document.documentElement;
const modal = document.querySelector("#project-modal");
const modalPanel = modal.querySelector(".modal__panel");
const modalKicker = document.querySelector("#modal-kicker");
const modalTitle = document.querySelector("#modal-title");
const modalSummary = document.querySelector("#modal-summary");
const modalChallenge = document.querySelector("#modal-challenge");
const modalSolution = document.querySelector("#modal-solution");
const modalImages = document.querySelector("#modal-images");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const projectButtons = document.querySelectorAll("[data-project] .project-card__button");
let lastFocusedElement = null;

const randomBetween = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(randomBetween(min, max + 1));

function setRandomTechnicalDetails() {
  const guideX = randomBetween(12, 28).toFixed(2);
  const guideY = randomBetween(62, 78).toFixed(2);
  root.style.setProperty("--guide-x", `${guideX}%`);
  root.style.setProperty("--guide-y", `${guideY}%`);

  document.querySelectorAll("[data-coord]").forEach((element) => {
    const axis = element.dataset.coord;
    element.textContent = `${axis}:${randomInt(104, 928)}.${randomInt(10, 99)} / ${randomInt(18, 76)}deg`;
  });

  document.querySelectorAll("[data-random-coord]").forEach((element) => {
    element.textContent = `${randomInt(10, 89)}.${randomInt(100, 999)} / ${randomInt(10, 89)}.${randomInt(100, 999)}`;
  });
}

function animateLoadValue() {
  const loadValue = document.querySelector("[data-load-value]");
  let value = 0;
  const timer = window.setInterval(() => {
    value += randomInt(9, 18);
    loadValue.textContent = `${Math.min(value, 100).toString().padStart(2, "0")}%`;
    if (value >= 100) window.clearInterval(timer);
  }, 70);
}

function revealProjects() {
  document.querySelectorAll(".project-card").forEach((card) => {
    const delay = randomInt(80, 420);
    window.setTimeout(() => card.classList.add("is-visible"), delay);
  });
}

function renderMediaGroups(project) {
  return project.media
    .map((group) => {
      const images = group.images
        .map((image) => `<img src="${image}" alt="${project.title} - ${group.title}">`)
        .join("");

      return `
        <section class="modal__media-group">
          <h3 class="modal__media-title">${group.title}</h3>
          <div class="modal__media-grid">${images}</div>
        </section>
      `;
    })
    .join("");
}

function openProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  lastFocusedElement = document.activeElement;
  modalKicker.textContent = project.index;
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;
  modalChallenge.textContent = project.challenge;
  modalSolution.textContent = project.solution;
  modalImages.innerHTML = renderMediaGroups(project);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalPanel.focus();
}

function closeProject() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-project]");
    openProject(card.dataset.project);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeProject();
  }
});

window.addEventListener("load", () => {
  setRandomTechnicalDetails();
  animateLoadValue();
  revealProjects();
  window.setTimeout(() => {
    document.querySelector(".preloader").classList.add("is-hidden");
  }, randomInt(520, 860));
});
