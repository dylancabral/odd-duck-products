'use strict'

let myContainer = document.querySelector('section');
let results = document.querySelector('ul')
let image1 = documet.querySelector('section img:first-child')
let image2 = document.querySelector('section img:nth-child(2)');

let Goats = goatConstructor{}

function Goats(name, fileExtension = 'jpg') {
  this.name = name;
  this.fileExtension = fileExtension; 
  this.src = `images/${this.name},${this.fileExtension}`;
  this.score = 0;
  this.views = 0;
}

let cruisin = new Goats
let float = new Goats
let hand = new Goats
let kissing = new Goats
let sassy = new Goats
let smile = new Goats
let sweater = new Goats


let AllGoats= [cruisin,float.hand,kissing,sassy,smile,sweater];

// image2.src = allGoats[0].src;
function selectRandomGoat() {
  //random number between 0 and .length of array
  // not inclusive
  return Math.floor(Math.random() * AllGoats.length);

}
function renderGoats() {
  let goat1 = selectRandomGoat();
  let goat2 = selectRandomGoat();
  console.log(goat1,goat2);
  // seriouslt consider using an array
  //remember how do you find out if an array includes something Google it 

  while (goat1 === goat2) {
    goat2= selectRandomGoat();
  }

  image.src=AllGoats[goat1].src;
  image.src=AllGoats[goat2].src;

}
renderGoats();
