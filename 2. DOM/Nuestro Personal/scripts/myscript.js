// Datos del Personal
const personal = [
  {
    id: 0,
    nombre: "Sara Alonso",
    trabajo: "Diseñadora UX",
    foto:
      "./persona-1.jpeg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti incidunt alias porro. Dolores possimus dolorum saepe beatae alias repudiandae.",
  },
  {
    id: 1,
    nombre: "Ana Lopez",
    trabajo: "Desarrolladora Web",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    nombre: "Rosa Martinez",
    trabajo: "Desarrolladora Web",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    nombre: "Pedro Rodriguez",
    trabajo: "Becario",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    nombre: "Marcos Alonso",
    trabajo: "El Jefe",
    foto:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const $d=document,
      $personaImg = $d.querySelector("#persona-img"),
      $nombre = $d.querySelector("#nombre"),
      $trabajo = $d.querySelector("#trabajo"),
      $info = $d.querySelector("#info"),
      $prevBtn = $d.querySelector(".prev-btn"),
      $nextBtn = $d.querySelector(".next-btn"),
      $boton = $d.querySelector(".random-btn");

function renderEmpleado(empleadoId) {
   //$nombre.textContent=personal[empleadoId].nombre
   $nombre.innerHTML=personal[empleadoId].nombre
   $trabajo.innerHTML=personal[empleadoId].trabajo
   $info.innerHTML=personal[empleadoId].text
   $personaImg.src=personal[empleadoId].foto
}

let empleadoId=0

//Imprimimos
$d.addEventListener("DOMContentLoaded",e=>{
  renderEmpleado(empleadoId)
})

//Botón Siguiente
$nextBtn.addEventListener("click",e=>{
  empleadoId++
  if (empleadoId==personal.length)
    empleadoId=0
  renderEmpleado(empleadoId)
})

//Botón Anterior
$prevBtn.addEventListener("click",e=>{
  empleadoId--
  if (empleadoId<0)
     empleadoId=personal.length-1
  renderEmpleado(empleadoId)
})


//Botón Sorpréndeme (ALEATORIO)
const aleatorio=(min,max)=>Math.floor(Math.random()*(max-min)+min)

$boton.addEventListener("click",e=>{
  let id
  do {
    id=aleatorio(0,personal.length)
  } while (id==empleadoId)
  empleadoId=id
  renderEmpleado(empleadoId)
})

