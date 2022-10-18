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
function selectRandomDuck() {
  //random number between 0 and .length of array
  // not inclusive
  return Math.floor(Math.random() * AllGoats.length);

}
function renderGoats() {
  let img1 = selectRandomDuck();
  let img2 = selectRandomDuck();
  let img3 = selectRandomGDuck();
  console.log[img1,img2,img3];
  // seriouslt consider using an array
  //remember how do you find out if an array includes something Google it 

  while (img1 === img2) {
    goat2= selectRandomDuck();
  }

  image.src=AllGoats[img1].src;
  image.src=AllGoats[img2].src;
  image.src= AllGoats[img3].src;
}
renderDucks();
