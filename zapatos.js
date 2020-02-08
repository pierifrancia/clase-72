const productos = [
    {
        nombre: 'Zapato negro',
        tipo: 'zapato',
        color: 'negro',
        img: './img/taco-negro.jpg',
    },
    {
        nombre: 'Zapato azul',
        tipo: 'zapato',
        color: 'azul',
        img: './img/taco-azul.jpg',
    },
    {
        nombre: 'Bota negra',
        tipo: 'bota',
        color: 'negro',
        img: './img/bota-negra.jpg',
    },
    { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './img/bota-azul.jpg' },
    {
        nombre: 'Zapato rojo',
        tipo: 'zapato',
        color: 'rojo',
        img: './img/zapato-rojo.jpg',
    },
];


const cards = document.getElementById('contenedorCards');
let todasLasCards = ""

productos.forEach((zapato, i) => {
    todasLasCards += `<div class="card">
      <div class="imgCard"><img src="${productos[i].img}"></div>
      <div class="textCard"><span>${productos[i].nombre}</span></div>
  </div>`
});

cards.innerHTML = todasLasCards;

const form = document.forms[0]



form.onsubmit = (e) => {
    e.preventDefault()
    const inputBusqueda = document.querySelector("input[type='text']");
    const valorBuscado = inputBusqueda.value
    let seleccion = ""

    productos.forEach((zapato, i) => {
        cards.innerHTML = ``
        if (valorBuscado === `${productos[i].color}` || valorBuscado === `${productos[i].tipo}`) {
            seleccion += `<div class="card">
       <div class="imgCard"><img src="${productos[i].img}"></div>
       <div class="textCard"><span>${productos[i].nombre}</span></div>
   </div>`
        }
        else if (valorBuscado === "" ) {
            seleccion = todasLasCards
        }
    });

    cards.innerHTML = seleccion;


    console.log(inputBusqueda)
    console.log(valorBuscado)
}






