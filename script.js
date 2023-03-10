const data = [
    {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];

//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
//Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.


//seleziono gli elementi che dovro targtettizzare 

let bigImmagine = document.querySelector(".immagine");
let smallImmagini = document.querySelector(".carosello");
let arrowUp = document.getElementById("prec");
let arrowDown = document.getElementById("next");
let messaggio = "active";

//la vado a riempire con tutte le foto la sezione grande

for(let i = 0 ; i < data.length ; i++){
  //mi seleziono i valori di ogni oggetto 
  
  let url = data[i].image;
  let titolo = data[i].title;
  let text = data[i].text;
  
  //li unisco alla sezione immagine
  if(i != 0){
    messaggio ="";
  }
  

  bigImmagine.innerHTML += `
  <img id="${i}"src="${url}" alt="immagine" class="${messaggio} ${i}"  >
  <div class="testo ${messaggio}" id="${i} testo">
    <h4>${titolo}</h4>
    <p>${text}</p>
  </div>`
  

}




//funzione per rimuovere la classe active



function removeActive (x){
  //voglio che dandogli l'indice della classe active mi rimuova la classe active
  //seleziono la classe active
  let attiva = document.getElementById(x); //dove x è l'idice della classe attiva
  attiva.classList.remove("active");
  
  let attivaTesto = document.getElementById(`${x} testo`);
  attivaTesto.classList.remove("active");
  
}

//funzione per aggiungere la classe active
function addActive (x){
  let attiva = document.getElementById(x); //dove x è l'idice della classe attiva
  attiva.classList.add("active");
  
  let attivaTesto = document.getElementById(`${x} testo`);
  attivaTesto.classList.add("active");
}

//creo una variabile per targhettizzare la foto active
let contatore = 0 ;


//creo la funzione per cambiare immagine in su

function picAfter (){
  
  removeActive(contatore);
  if(contatore == 4){
    contatore = 0;
  }else{
    contatore += 1;
    console.log(contatore)
  }
  addActive (contatore);
  
}

function picBefore (){
  
  removeActive(contatore);
  if(contatore == 0){
    contatore = 4;
  }else{
    contatore -= 1;
  }
  addActive (contatore);
  
}
//voglio creare una funzione che mi dia come return l'indice da attivare e mi faccia cambiare il contatore



//voglio creare una funzione che cliccando sulla immagine mi stampi in console il suo index
function selectIndex (){
  let variabile = this.id ;
  variabile = [...variabile];
  let index = parseInt(variabile[3]);
  //rimuovo la classe active 
  removeActive(contatore);
  contatore = index;
  addActive(contatore) ;
  console.log(contatore)

}
arrowUp.addEventListener("click", picBefore);
arrowDown.addEventListener("click", picAfter);

const spiderman = document.getElementById("th 0");

for (i=0 ; i < 5 ; i++ ){
  let selettore = document.getElementById(`th ${i}`)
  selettore.addEventListener("click", selectIndex);
}

