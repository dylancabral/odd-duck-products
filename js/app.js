'use strict'
//window into the dom
let myContainer = document.querySelector('section');
let results = document.querySelector('ul');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let votesPer = document.getElementById('results');
let getImages = document.getElementById('images')
let resultsButton = document.getElementById('resultsButton')

let maxVotes = 25;
let numUserVotes = 0;

let AllDucks = [];

function OddDuck(name, fileExtension) {
  this.name = name;
  this.fileExtension = fileExtension;
  this.src = `images/${this.name}.${this.fileExtension}`;
  this.score = 0;
  this.views = 0;
  AllDucks.push(this)
}

let bag = new OddDuck('bag', 'jpg');
let banana = new OddDuck('banana', 'jpg');
let bathroom = new OddDuck('bathroom', 'jpg');
let boots = new OddDuck('boots', 'jpg');
let breakfast = new OddDuck('breakfast', 'jpg');
let bubblegum = new OddDuck('bubblegum', 'jpg');
let chair = new OddDuck('chair', 'jpg');
let cthulhu = new OddDuck('cthulhu', 'jpg');
let dogDuck = new OddDuck('dogDuck', 'jpg');
let dragon = new OddDuck('dragon', 'jpg');
let pen = new OddDuck('pen', 'jpg');
let petSweep = new OddDuck('petSweep', 'jpg');
let scissors = new OddDuck('scissors', 'jpg');
let shark = new OddDuck('shark', 'jpg');
let sweep = new OddDuck('sweep', 'png');
let tauntaun = new OddDuck('tauntaun', 'jpg');
let unicorn = new OddDuck('unicorn', 'jpg');
let waterCan = new OddDuck('waterCan', 'jpg');
let wineGlass = new OddDuck('wineglass', 'jpg');

// console.log(AllDucks);


// image2.src = allGoats[0].src;
function selectRandomDuck() {
  //random number between 0 and .length of array
  // not inclusive
  return Math.floor(Math.random() * AllDucks.length);

}

//randomly selecting 3 images
function renderDucks() {
  let img1 = selectRandomDuck();
  let img2 = selectRandomDuck();
  let img3 = selectRandomDuck();
  console.log(img1, img2, img3);
  // seriouslt consider using an array
  //remember how do you find out if an array includes something Google it 

  while (img1 === img2 || img1 === img3 || img2 === img3) {
    img2 = selectRandomDuck();
    img3 = selectRandomDuck();

  }
  console.log(image1)
  image1.src = AllDucks[img1].src;
  image1.alt = AllDucks[img1].name;
  AllDucks[img1].views++
  image2.src = AllDucks[img2].src;
  image2.alt = AllDucks[img2].name;
  AllDucks[img2].views++
  image3.src = AllDucks[img3].src;
  image3.alt = AllDucks[img3].name;
  AllDucks[img3].views++
}

//talying votes
function DisplayVotes(){
  for(let i = 0; i < AllDucks.length; i++){
    let li = document.createElement('li');
    li.textContent = `${AllDucks[i].name}: ${AllDucks[i].score} votes`;
    results.appendChild(li);
  }

}


function handleClick(event) {
  if (event.target === myContainer ) {
    alert('please click on an image');
  }

console.log('click')
  console.log(event.target.alt);
  numUserVotes++;
  let clickedImg = event.target.alt;

  for (let i = 0; i < AllDucks.length; i++) {
    if (clickedImg === AllDucks[i].name) {
      console.log(AllDucks[i]);
      AllDucks[i].score++;
      break;
    }
  }

  if (maxVotes === numUserVotes) {
    myContainer.removeEventListener('click',handleClick);
    resultsButton.className='clicks-allowed';
    resultsButton.addEventListener('click',DisplayVotes);
    alert('submit button now available')
    } else {
      renderDucks();
    }
}


myContainer.addEventListener('click', handleClick);
renderDucks();

// let maxVotes = 25;
// let numUserVotes = 0;