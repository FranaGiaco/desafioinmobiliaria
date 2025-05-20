const propiedades_venta = [
    {
      nombre: "Casa Azul",
      src: "images/casaazul.png",
      descripcion: "Hermosa casa con fachada azul y amplio patio.",
      ubicacion: "Cajòn del Maipo",
      habitaciones: 3,
      costo: 120000,
      smoke: true,   // permite fumar
      pets: true,    // permite mascotas
    },
    {
      nombre: "Departamento Moderno",
      src: "images/casamoderna.png",
      descripcion: "Moderno departamento en el centro de la ciudad.",
      ubicacion: "Centro",
      habitaciones: 2,
      costo: 90000,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Villa Familiar",
      src: "images/casabeige.png",
      descripcion: "Villa amplia con jardín y estacionamiento privado.",
      ubicacion: "Zona Norte",
      habitaciones: 4,
      costo: 150000,
      smoke: false,
      pets: true,
    },

    {
        nombre: "Casa Piscina",
        src: "images/piscina.png",
        descripcion: "Casa amplia con piscina y estacionamiento privado.",
        ubicacion: "Zona Norte",
        habitaciones: 4,
        costo: 150000,
        smoke: false,
        pets: true,
      },
  ];
  
  const propiedades_alquiler = [
    {
      nombre: "Casa de Campo",
      src: "images/piedrabisque.png",
      descripcion: "Amplia casa de campo con jardín, ideal para familias.",
      ubicacion: "A las afueras de la ciudad",
      habitaciones: 4,
      costo: 1500,
      smoke: true,   // permite fumar
      pets: true,    // permite mascotas
    },
    {
      nombre: "Casa un Piso",
      src: "images/unpiso.png",
      descripcion: "Cómodo departamento con todos los servicios incluidos.",
      ubicacion: "Barrio Central",
      habitaciones: 1,
      costo: 800,
      smoke: false,
      pets: false,
    },
    {
      nombre: "Cabaña Rústica",
      src: "images/montana.png",
      descripcion: "Cabaña acogedora ideal para vacaciones.",
      ubicacion: "Montañas",
      habitaciones: 2,
      costo: 1200,
      smoke: false,
      pets: true,
    },

    {
        nombre: "Cabaña Azul",
        src: "images/cabanaazul.png",
        descripcion: "Cabaña acogedora ideal para vacaciones.",
        ubicacion: "Montañas",
        habitaciones: 2,
        costo: 1200,
        smoke: false,
        pets: true,
      },
  ];
  
  function renderPropiedades(tipo) {
    const container = document.getElementById(tipo === "venta" ? "venta-container" : "alquiler-container");
    container.innerHTML = "";
  
    const propiedades = tipo === "venta" ? propiedades_venta : propiedades_alquiler;
    const propiedadesMostrar = propiedades.slice(0, 3);
  
    propiedadesMostrar.forEach((prop) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <img src="${prop.src}" alt="${prop.nombre}">
        <h3>${prop.nombre}</h3>
        <p>${prop.descripcion}</p>
        <p>Ubicación: ${prop.ubicacion}</p>
        <p>Habitaciones: ${prop.habitaciones}</p>
        <p>Precio: $${prop.costo}</p>
        <p class="${prop.smoke ? "permitido" : "prohibido"}">
          <i class="fas fa-smoking${prop.smoke ? "" : "-ban"}"></i>
          ${prop.smoke ? "Permite fumar" : "No se permite fumar"}
        </p>
        <p class="${prop.pets ? "permitido" : "prohibido"}">
          <i class="fas fa-paw"></i>
          ${prop.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
        </p>
      `;
  
      container.appendChild(card);
    });
  }
  
  function verTodas(tipo) {
    const container = document.getElementById(tipo === "venta" ? "venta-container" : "alquiler-container");
    container.innerHTML = "";
  
    const propiedades = tipo === "venta" ? propiedades_venta : propiedades_alquiler;
  
    propiedades.forEach((prop) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <img src="${prop.src}" alt="${prop.nombre}">
        <h3>${prop.nombre}</h3>
        <p>${prop.descripcion}</p>
        <p>Ubicación: ${prop.ubicacion}</p>
        <p>Habitaciones: ${prop.habitaciones}</p>
        <p>Precio: $${prop.costo}</p>
        <p class="${prop.smoke ? "permitido" : "prohibido"}">
          <i class="fas fa-smoking${prop.smoke ? "" : "-ban"}"></i>
          ${prop.smoke ? "Permite fumar" : "No se permite fumar"}
        </p>
        <p class="${prop.pets ? "permitido" : "prohibido"}">
          <i class="fas fa-paw"></i>
          ${prop.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
        </p>
      `;
  
      container.appendChild(card);
    });
  }

  console.log("Script cargado");

function renderPropiedades(tipo) {
  console.log(`Renderizando propiedades tipo: ${tipo}`);
  const container = document.getElementById(tipo === "venta" ? "venta-container" : "alquiler-container");
  console.log("Container encontrado:", container);
  
  if (!container) {
    console.error("No se encontró el contenedor para tipo:", tipo);
    return;
  }
  
  container.innerHTML = "";

  const propiedades = tipo === "venta" ? propiedades_venta : propiedades_alquiler;
  const propiedadesMostrar = propiedades.slice(0, 3);

  propiedadesMostrar.forEach((prop) => {
    console.log("Agregando propiedad:", prop.nombre);
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${prop.src}" alt="${prop.nombre}">
      <h3>${prop.nombre}</h3>
      <p>${prop.descripcion}</p>
      <p>Ubicación: ${prop.ubicacion}</p>
      <p>Habitaciones: ${prop.habitaciones}</p>
      <p>Precio: $${prop.costo}</p>
      <p class="${prop.smoke ? "permitido" : "prohibido"}">
        <i class="fas fa-smoking${prop.smoke ? "" : "-ban"}"></i>
        ${prop.smoke ? "Permite fumar" : "No se permite fumar"}
      </p>
      <p class="${prop.pets ? "permitido" : "prohibido"}">
        <i class="fas fa-paw"></i>
        ${prop.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
      </p>
    `;

    container.appendChild(card);
  });
}

renderPropiedades("venta");
renderPropiedades("alquiler");

  
  // Inicializa mostrando las primeras 3 propiedades de cada tipo
  renderPropiedades("venta");
  renderPropiedades("alquiler");
  
  