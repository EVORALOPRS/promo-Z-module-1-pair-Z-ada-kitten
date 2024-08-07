'use strict';
const list = document.querySelector ('.js-list');
const kittenOne = `<li class="card">
            <article>
              <img
                class="card_img"
                src="https://dev.adalab.es/gato-siames.webp"
                alt="siames-cat"
              />
              <h3 class="card_title">Anastacio</h3>
              <h4 class="card_race">Siamés</h4>
              <p class="card_description">
                Porte elegante, su patrón de color tan característico y sus ojos
                de un azul intenso, pero su historia se remonta a Asía al menos
                hace 500 años, donde tuvo su origen muy posiblemente.
              </p>
            </article>
          </li>`;
const kittenTwo = ` <li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/sphynx-gato.webp"
              alt="sphynx-cat"
            />
            <h3 class="card_title">Fiona</h3>
            <h4 class="card_race">Sphynx</h4>
            <p class="card_description">
              Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.
            </p>
          </li>`;
const kittenThree = ` <li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/maine-coon-cat.webp"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">Cielo</h3>
            <h4 class="card_race">Maine Coon</h4>
            <p class="card_description">
              Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.
            </p>
          </li>`;
list.innerHTML = kittenOne + kittenTwo + kittenThree

/*quitar la clase de collapsed de la section form*/
const formSection = document.querySelector ('.js-new-form');
//formSection.classList.remove('collapsed');
 
// llamamos a + del header y a la sección con la constante element
const element = document.querySelector ('.js-btn-add');
element.addEventListener ("click", (event)=>{
  formSection.classList.toggle('collapsed')
});

// esta acción es para ocultar el formulario cuando pulsemos en botón de cancelar
const buttonSearch = document.querySelector ('.js_button-search');

const description = document.querySelector ('.js_in_search_desc');

buttonSearch.addEventListener ('click', (event)=>{
event.preventDefault();
const descriptiontext = description.value;
console.log (descriptiontext);

// al colocar lis.innerHTML = '' estamos diciendo que limpie la pág despues de darle click para que solo aparezcan los gatos selccionados
list.innerHTML = ''

if (kittenOne.includes(descriptiontext)) {
  list.innerHTML = kittenOne
  //Completa el código
}
// += es un acumulador si tenemos varios elementos en la lista.

if (kittenTwo.includes(descriptiontext)) {
  list.innerHTML += kittenTwo
  //Completa el código
}

if (kittenThree.includes(descriptiontext)) {
  list.innerHTML += kittenThree
  //Completa el código
}


});

/*En tu fichero main.js crea las variables necesarias para almacenar la información de cada gatito (recuerda que tenemos tres gatitos de momento):

Una variable para la URL de la foto.

Una variable para el nombre.

Una variable para la descripción.

Una variable para la raza.*/

const imgKitten1 = 'https://dev.adalab.es/gato-siames.webp';
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
const descriptionKitten3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';






  




