'use strict';
const list = document.querySelector ('.js-list');

/*const imgKitten1 = 'https://dev.adalab.es/gato-siames.webp';
const raceKitten1 = 'Siamés';
const nameKitten1 = 'Anastasio';
const descriptionKitten1 = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';

const raceKitten2 = 'Sphynx';
const imgKitten2 = 'https://dev.adalab.es/sphynx-gato.webp';
const nameKitten2 = 'Fiona';
const descriptionKitten2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño...hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';

const raceKitten3 = 'Maine Coon';
const imgKitten3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const nameKitten3 = 'Cielo';
const descriptionKitten3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';*/







//Objetos de cada Kitten (datos)
const kittenData_1 = {
 name:'Anastasio',
 race:'Siamés',
 imagen:'https://dev.adalab.es/gato-siames.webp',
 desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.'
};

const kittenData_2 = {
 name:'Fiona',
 race:'Sphynx',
 imagen:'https://dev.adalab.es/sphynx-gato.webp',
 desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño...hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.'

};

const kittenData_3 = {
 name:'Cielo',
 race:'Maine Coon',
 imagen:'https://dev.adalab.es/maine-coon-cat.webp',
 desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.'
};

//Array
const kittenDataList = [kittenData_1,kittenData_2,kittenData_3];






/* 
const kittenOne = `<li class="card">
            <article>
              <img
                class="card_img"
                src="${imgKitten1}"
                alt="siames-cat"
              />
              <h3 class="card_title">${nameKitten1}</h3>
              <h4 class="card_race">${raceKitten1}</h4>
              <p class="card_description">
                ${descriptionKitten1}
              </p>
            </article>
          </li>`;
const kittenTwo = ` <li class="card">
            <img
              class="card_img"
              src="${imgKitten2}"
              alt="sphynx-cat"
            />
            <h3 class="card_title">${nameKitten2}</h3>
            <h4 class="card_race">${raceKitten2}</h4>
            <p class="card_description">
              ${descriptionKitten2}
            </p>
          </li>`;
const kittenThree = ` <li class="card">
            <img
              class="card_img"
              src="${imgKitten3}"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${nameKitten3}</h3>
            <h4 class="card_race">${raceKitten3}</h4>
            <p class="card_description">
              ${descriptionKitten3}
            </p>
          </li>`;*/
// Kitten es un objeto con toda la información del gato 
function renderKitten(kitten) {
  return `<li class="card">
             <article>
                <img
                   class="card_img"
                   src="${kitten.imagen}"
                  alt="siames-cat"
                  />
              <h3 class="card_title">${kitten.name}</h3>
              <h4 class="card_race">${kitten.race}</h4>
              <p class="card_description">
                          ${kitten.desc}
              </p>
              </article>
              </li>`;
            
}
//Bucle con array

function renderKittenList(kittenDataList){
  for(const eachKitten of kittenDataList){
    list.innerHTML += renderKitten(eachKitten)
  }
}
//Llamamos a la función
renderKittenList(kittenDataList);

// list.innerHTML = renderKitten(kittenDataList[0]) + renderKitten(kittenDataList[1]) + renderKitten(kittenDataList[2]);



/*quitar la clase de collapsed de la section form*/
const formSection = document.querySelector ('.js-new-form');
//formSection.classList.remove('collapsed');
 
// llamamos a + del header y a la sección con la constante element
const element = document.querySelector ('.js-btn-add');
/*element.addEventListener ("click", (event)=>{
  formSection.classList.toggle('collapsed')
});*/

// esta acción es para ocultar el formulario cuando pulsemos en botón de cancelar
const buttonSearch = document.querySelector ('.js_button-search');

const description = document.querySelector ('.js_in_search_desc');

// Crear funcion Filterkitten

function filterKitten (event){
event.preventDefault();
const descriptiontext = description.value;
//console.log (descriptiontext);
list.innerHTML = ''
for(const itemKitten of kittenDataList){
  if (itemKitten.desc.includes(descriptiontext.toLowerCase())){
    list.innerHTML = renderKitten(itemKitten);
  }
}
};


// al colocar lis.innerHTML = '' estamos diciendo que limpie la pág despues de darle click para que solo aparezcan los gatos selccionados



//Funcion de toLowerCase (convertir textos del usuario a minúscula);

/*if (kittenDataList[0].desc.toLowerCase().includes(descriptiontext.toLowerCase())) {
  list.innerHTML = renderKitten(kittenDataList[0]);
  //Completa el código

}
// += es un acumulador si tenemos varios elementos en la lista.

if (kittenDataList[1].desc.toLowerCase().includes(descriptiontext.toLowerCase())) {
  list.innerHTML += renderKitten(kittenDataList[1]);
  //Completa el código
}

if (kittenDataList[2].desc.toLowerCase().includes(descriptiontext.toLowerCase())) {
  list.innerHTML += renderKitten(kittenDataList[2]);
}
  //Completa el códigolist

};*/

buttonSearch.addEventListener ('click',filterKitten)


/*En tu fichero main.js crea las variables necesarias para almacenar la información de cada gatito (recuerda que tenemos tres gatitos de momento):

Una variable para la URL de la foto.

Una variable para el nombre.

Una variable para la descripción.

Una variable para la raza.*/

/*Interpola los variables creadas anteriormente en variable con el li de cada gatito.(el ejercicio esta al principio de js).

  1. Crea dos funciones para mostrar u ocultar el formulario para añadir un nuevo gatito.

  2. Declara una función llamada showNewCatForm para mostrar el formulario y otra llamada hideNewCatForm para ocultar el formulario, que se ejecutarán cuando demos clic en el botón "+" de la aplicación.

  3. Piensa si estas funciones: ¿Necesitan recibir parámetros? ¿Devolverán algún valor?

  4. Crea el código ya programado para mostrar y ocultar el formulario y muevelo dentro de las funciones.*/

  // creamos  la funcion
  function showNewCatForm( ){
    //event.preventDefault();
    formSection.classList.remove ('collapsed')
    //console.log (hi)
  }
 
  function hideNewCatForm(){
    formSection.classList.add ('collapsed')

  }

  element.addEventListener ('click', handleClickNewCatForm);
  function handleClickNewCatForm(event){
    event.preventDefault();
    console.log (formSection.classList.contains ('collapsed'))

    if(formSection.classList.contains ('collapsed')){
      //llamamos o ejecutamos
      showNewCatForm();


    } else {
      hideNewCatForm();
    }
      
    }
/*Añadir un gatito asociado al evento click y la lista de gatitos, para que aparezca con una funcion la tarjeta para poder crear un gatito.
1- Crear clases en el botón, e input del formulario1
2- Llamamos al botón y a los input
3- Crear un evento sobre el botón añadir
4- Crear una función asociado al botón.
5- Sacar datos de lista
*/ 

const nameInput = document.querySelector ('.js-nameInput');const raceInput = document.querySelector ('.js-raceInput');const descInput = document.querySelector ('.js-descInput');const imgInput = document.querySelector ('.js-imgInput');
const addbutton = document.querySelector ('.js-addbutton');

const handleclick = (event)=> {
  event.preventDefault()

  /*const urlKittie= 
  const nameKittie= 
  const raceKittie= 
  const descKittie=*/

// devuelve una <li>
// Objeto de los datos de la lista kitten
  const kitten = {
  name:nameInput.value,
  race:raceInput.value,
  imagen:imgInput.value,
  desc: descInput.value
 };

 
  list.innerHTML += renderKitten(kitten) 


}

addbutton.addEventListener('click', handleclick);







