const topicContent = {
  preparacion: {
    kicker: "01 · PREVENCIÓN",
    title: "Preparación ante emergencias",
    lead: "La preparación comienza antes de que ocurra una emergencia. Conocer los riesgos del entorno y conversar un plan ayuda a responder con mayor organización.",
    paragraphs: [
      "Cada hogar y comunidad tiene necesidades diferentes. Por eso, la preparación debe considerar las amenazas del territorio, las características de las personas y los recursos disponibles.",
      "SENAPRED propone que las familias identifiquen amenazas, definan zonas de seguridad, acuerden roles, mantengan contactos útiles y practiquen su plan."
    ],
    bullets: [
      "Reconocer amenazas presentes en la vivienda y el entorno.",
      "Conversar cómo se comunicarán y dónde se reunirán los integrantes del grupo.",
      "Preparar los elementos necesarios considerando las características de cada familia.",
      "Revisar la información oficial y practicar el plan periódicamente."
    ],
    prompt: "Para conversar: ¿Qué riesgo de nuestro entorno deberíamos conocer mejor y qué información nos falta para prepararnos?",
    sources: [
      { label: "SENAPRED · Familia preparada", url: "https://www.senapred.cl/familia-preparada/" },
      { label: "SENAPRED · Kit de emergencia", url: "https://www.senapred.cl/kit-de-emergencia/" },
      { label: "SENAPRED · Recomendaciones", url: "https://senapred.cl/recomendaciones/" }
    ]
  },
  electricidad: {
    kicker: "02 · PREVENCIÓN DE RIESGOS",
    title: "Riesgos eléctricos e incendios",
    lead: "La electricidad facilita la vida cotidiana, pero una instalación deteriorada, un equipo defectuoso o una intervención inadecuada puede generar riesgos para las personas y los bienes.",
    paragraphs: [
      "La prevención comienza por reconocer señales de deterioro, utilizar productos autorizados y evitar sobrecargar instalaciones. Las reparaciones o modificaciones eléctricas deben quedar en manos de personal autorizado por la SEC.",
      "El objetivo de esta ficha es promover la observación y la consulta de fuentes técnicas oficiales; no enseñar a intervenir instalaciones ni reemplazar la evaluación de un especialista."
    ],
    bullets: [
      "Prestar atención a cables, enchufes o artefactos con daños visibles o funcionamiento anormal.",
      "Verificar que los productos eléctricos cuenten con la certificación correspondiente cuando aplique.",
      "No realizar reparaciones o modificaciones eléctricas por cuenta propia.",
      "Consultar a un instalador eléctrico autorizado por la SEC ante una intervención o revisión de la instalación."
    ],
    prompt: "Para conversar: ¿Qué señales de riesgo eléctrico podemos aprender a reconocer sin exponernos ni manipular una instalación?",
    sources: [
      { label: "SEC · Consejos para un invierno seguro", url: "https://www.sec.cl/consejos-calefaccion/?view_full_site=true" },
      { label: "SEC · Reglamento de instalaciones de consumo", url: "https://www.sec.cl/reglamento-de-seguridad-de-las-instalaciones-de-consumo-de-energia-electrica-decreto-08/" },
      { label: "SEC · Instaladores eléctricos autorizados", url: "https://www.sec.cl/area-instaladores/instaladores-electricos/" }
    ]
  },
  "primeros-auxilios": {
    kicker: "03 · SALUD Y BIENESTAR",
    title: "Primeros auxilios y bienestar",
    lead: "Conocer los principios de los primeros auxilios permite comprender la importancia de actuar con responsabilidad, pedir ayuda y acceder a formación impartida por instituciones competentes.",
    paragraphs: [
      "La ayuda inicial debe considerar la seguridad de quien auxilia y de la persona afectada, además de la activación oportuna de los servicios de emergencia cuando corresponda.",
      "Este portal no entrega certificación ni sustituye cursos prácticos. Para aprender técnicas como RCP, manejo de DEA u otras maniobras, es necesario acudir a formación especializada y seguir las indicaciones de personal capacitado."
    ],
    bullets: [
      "Priorizar la seguridad de las personas presentes.",
      "Solicitar apoyo de los servicios de emergencia ante una situación grave o incierta.",
      "Evitar realizar procedimientos para los que no se tiene formación.",
      "Buscar capacitación práctica en instituciones reconocidas."
    ],
    prompt: "Para conversar: ¿Qué conocimientos básicos nos gustaría aprender mediante una capacitación presencial y certificada?",
    sources: [
      { label: "Cruz Roja Chilena · Capacitación", url: "https://www.cruzroja.cl/capacitacion/" },
      { label: "ONU · ODS 3 Salud y bienestar", url: "https://chile.un.org/es/sdgs/3" }
    ]
  },
  comunidad: {
    kicker: "04 · PREPARACIÓN COLECTIVA",
    title: "Una comunidad preparada",
    lead: "La preparación no depende solamente de cada persona. Compartir información, reconocer capacidades locales y organizarse puede fortalecer la respuesta de una comunidad.",
    paragraphs: [
      "Las redes de apoyo, la comunicación y el conocimiento del territorio son parte de una cultura preventiva. La comunidad puede identificar recursos, necesidades y fuentes oficiales de información para prepararse de manera colaborativa.",
      "El proyecto busca abrir espacios de tertulia y aprendizaje donde las personas puedan compartir preguntas y experiencias, sin sustituir la coordinación de las autoridades ni los planes oficiales."
    ],
    bullets: [
      "Identificar espacios, recursos y servicios relevantes del entorno.",
      "Conversar sobre necesidades de niñas y niños, personas mayores, personas con discapacidad y otros grupos que puedan requerir apoyo.",
      "Compartir información verificada y evitar difundir rumores.",
      "Promover ejercicios y actividades educativas coordinadas con instituciones competentes."
    ],
    prompt: "Para conversar: ¿Qué conocimientos o recursos de nuestro barrio podrían ser útiles para otras personas?",
    sources: [
      { label: "SENAPRED · Plan Familia Preparada", url: "https://www.senapred.cl/familia-preparada/" },
      { label: "SENAPRED · Visor Chile Preparado", url: "https://www.senapred.cl/visor-preparado/" },
      { label: "ONU · ODS 16 Paz, justicia e instituciones sólidas", url: "https://chile.un.org/es/sdgs/16" }
    ]
  },
  portal: {
    kicker: "05 · PROTOTIPO E INNOVACIÓN",
    title: "El portal como prototipo",
    lead: "El prototipo es una página web sencilla e interactiva que organiza conocimientos en seis temas. La persona selecciona una tarjeta y accede al contexto, ideas clave y fuentes para profundizar.",
    paragraphs: [
      "El objetivo general del prototipo es desarrollar un portal web interactivo, claro y accesible que acerque conocimientos integrales y de emergencia a la comunidad, para fomentar el aprendizaje autónomo, la prevención y la preparación individual y colectiva.",
      "La innovación propuesta está en adaptar contenidos que pueden resultar técnicos a una presentación visual y comprensible, y conectar el acceso digital con espacios presenciales de conversación, tutoría y práctica.",
      "El sitio se construye con HTML, CSS y JavaScript y puede publicarse gratuitamente en GitHub Pages. Su diseño responsive permite consultarlo desde computadores y teléfonos móviles."
    ],
    bullets: [
      "Seis tarjetas temáticas con apertura de información ampliada.",
      "Fuentes oficiales y enlaces externos para profundizar.",
      "Diseño adaptable a pantallas grandes y pequeñas.",
      "Estructura simple que permite actualizar y ampliar el contenido."
    ],
    prompt: "Para conversar: ¿Qué tema de prevención o emergencia debería incorporarse en una próxima versión del portal?",
    sources: [
      { label: "GitHub Pages · Documentación oficial", url: "https://docs.github.com/es/pages" },
      { label: "ONU · Objetivos de Desarrollo Sostenible", url: "https://chile.un.org/es/sdgs" }
    ]
  },
  kit: {
    kicker: "06 · SOLUCIÓN INTEGRAL",
    title: "Kit integral y tertulia",
    lead: "La solución global no es solamente el sitio web: es un kit amplio de conocimiento que reúne materiales, experiencias y espacios para aprender y compartir.",
    paragraphs: [
      "A partir del conocimiento y material reunido por el equipo, se busca compartir contenidos seleccionados con la comunidad y abrir espacios de tertulia, tutoría, debate y práctica.",
      "El portal cumple la función de prototipo digital y punto de acceso a una parte de ese material. Las actividades presenciales permiten conversar, resolver dudas, contrastar información y fomentar el aprendizaje colectivo.",
      "La propuesta puede crecer de manera progresiva mediante nuevos contenidos, colaboración con organizaciones y participación de la comunidad."
    ],
    bullets: [
      "Material de conocimiento integral y de emergencia organizado por temas.",
      "Portal web como fuente gratuita de difusión y consulta por contactos.",
      "Tertulias y tutorías para explicar conceptos y promover el debate.",
      "Actividades prácticas o derivación a capacitaciones realizadas por instituciones competentes."
    ],
    prompt: "Para conversar: ¿Qué formato permitiría que el conocimiento siga circulando después de la feria: una tertulia, una guía, un taller o una colaboración local?",
    sources: [
      { label: "ONU · ODS 3 Salud y bienestar", url: "https://chile.un.org/es/sdgs/3" },
      { label: "ONU · ODS 4 Educación de calidad", url: "https://chile.un.org/es/sdgs/4" },
      { label: "ONU · ODS 16 Paz, justicia e instituciones sólidas", url: "https://chile.un.org/es/sdgs/16" }
    ]
  }
};

const dialog = document.getElementById("detailDialog");
const dialogKicker = document.getElementById("dialogKicker");
const dialogTitle = document.getElementById("dialogTitle");
const dialogBody = document.getElementById("dialogBody");
const closeButton = document.getElementById("dialogClose");
let previousTrigger = null;

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function openTopic(topicId, trigger) {
  const topic = topicContent[topicId];
  if (!topic) return;

  previousTrigger = trigger || document.activeElement;
  dialogKicker.textContent = topic.kicker;
  dialogTitle.textContent = topic.title;
  dialogBody.replaceChildren();

  dialogBody.append(makeElement("p", "dialog-lead", topic.lead));

  topic.paragraphs.forEach((paragraph) => {
    dialogBody.append(makeElement("p", "", paragraph));
  });

  if (topic.bullets && topic.bullets.length) {
    dialogBody.append(makeElement("h3", "", "Ideas clave"));
    const list = makeElement("ul");
    topic.bullets.forEach((item) => list.append(makeElement("li", "", item)));
    dialogBody.append(list);
  }

  if (topic.prompt) {
    dialogBody.append(makeElement("div", "dialog-callout", topic.prompt));
  }

  if (topic.sources && topic.sources.length) {
    dialogBody.append(makeElement("h3", "", "Fuentes para profundizar"));
    const sourceContainer = makeElement("div", "dialog-sources");
    topic.sources.forEach((source) => {
      const link = makeElement("a", "source-link", source.label);
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.append(makeElement("span", "", "↗"));
      sourceContainer.append(link);
    });
    dialogBody.append(sourceContainer);
  }

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    closeButton.focus();
  } else {
    // Fallback for browsers without the native dialog element.
    window.alert(`${topic.title}\n\n${topic.lead}`);
  }
}

document.querySelectorAll("[data-topic]").forEach((button) => {
  button.addEventListener("click", () => openTopic(button.dataset.topic, button));
});

closeButton.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

dialog.addEventListener("close", () => {
  if (previousTrigger && typeof previousTrigger.focus === "function") previousTrigger.focus();
});

// Abre el redactor de Gmail con destinatario, asunto y mensaje prellenados
document.querySelectorAll("[data-gmail-to]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const para = link.dataset.gmailTo;
    const asunto = link.dataset.gmailSubject || "Contacto";
    const cuerpo = "Hola, vi su proyecto en la Feria ODS 2026 y quisiera consultar sobre: ";

    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=" + encodeURIComponent(para) +
      "&su=" + encodeURIComponent(asunto) +
      "&body=" + encodeURIComponent(cuerpo);

    window.open(url, "_blank", "noopener");
  });
});
