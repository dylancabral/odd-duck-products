'use strict'

let myContainer = document.querySelector('section');
let results = document.querySelector('ul')
let image1 = documet.querySelector('section img:first-child')
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:last-child')


function OddDuck(name, fileExtension = 'jpg') {
  this.name = name;
  this.fileExtension = fileExtension; 
  this.src = `images/${this.name},${this.fileExtension}`;
  this.score = 0;
  this.views = 0;
}

let bag = new Goats
let banana = new Goats
let bathroom = new Goats
let boots = new Goats
let breakfast = new Goats
let bubblegum = new Goats
let chair = new Goats
let cthulhu = new Goats
let dogDuck = new Goats
let dragon = new Goats
let pen = new Goats
let petSweep = new Goats
let scissors = new Goats
let shark = new Goats
let sweep = new Goats
let tauntaun = new Goats
let unicorn = new Goats
let waterCan = new Goats
let wineGlass = new Goats


let AllDucks= [cruisin,float.hand,kissing,sassy,smile,sweater];

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
