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
  <img id="${i}"src="${url}" alt="immagine" class="${messaggio}"  >
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


function picAfter (){
  //quando ci clicco voglio che l'immagine attiva non lo sia più
  removeActive(contatore);
  //aumento il contatore di 1 
  contatore += 1;
  addActive(contatore);
  //voglio rendere attiva l'immagine con il nuovo contatore
}

arrowUp.addEventListener("click", function(){
  removeActive(contatore);
  if(contatore == 0){
    contatore = 4;
  }else{
    contatore -= 1;
  }
  addActive (contatore);
});
arrowDown.addEventListener("click", function(){
  removeActive(contatore);
  if(contatore == 4){
    contatore = 0;
  }else{
    contatore += 1;
  }
  addActive (contatore);
});
console.log(bigImmagine);
