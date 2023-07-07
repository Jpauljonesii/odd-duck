'use strict';
function Product(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allProductsArray.length);
}

const state = {
  allProductsArray: []
};

let clicks = 0;
let maxClicksAllowed = 25;

let bag = new Product ('bag', 'img/bag.jpg');
let banana = new Product ('banana', 'img/banana.job');
let bathroom = new Product ('bathroom', 'img/bathroom.jpg');
let boots = new Product ('boots', 'img/boots.jpg');
let breakfast = new Product ('breakfast', 'img/breakfast.jpg');
let bubblegum = new Product ('bubblegum', 'img/bubblegum.jpg');
let chair = new Product ('chair', 'img/chair.jpg');
let cthulhu = new Product ('cthulhu', 'img/cthulhu.jpg');
let dogduck = new Product ('dog-duck', 'img/dog-duck.jpg');
let dragon = new Product ('dragon', 'img/dragon.jpg');
let pen = new Product ('pen', 'img/pen.jpg');
let petsweep = new Product ('pet-sweep', 'img/pet-sweep.jpg');
let scissors = new Product ('scissors', 'img/scissors.jpg');
let shark = new Product ('shark', 'img/shark.jpg' );
let sweep = new Product ('sweep', 'img/swee.jpg');
let tauntaun = new Product ('tauntaun', 'img/tauntaun.jpg');
let unicorn = new Product ('unicorn', 'img/unicorn.jpg');
let watercan = new Product ('water-can', 'img/water-can.jpg');
let wineglass = new Product ('wine-glass', 'img/wine-glass.jpg');