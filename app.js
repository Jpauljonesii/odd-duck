'use strict';

let productContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child');
let image3 = document.querySelector('section img:last-child');

let clicks = 0;
let maxClicksAllowed = 25;

const state = {
  allProductsArray: []
};


function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.click = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allProductsArray.length);
}

function renderProducs() {
let product1 = getRandomNumber();
let product2 = getRandomNumber();
let product3 = getRandomNumber();
while (product1 === product2 || product2 === product3 || product3 === product1) {
  product2 = getRandomNumber();
} else if (product1 === product3){
  product3 = getRandomNumber();
}

}
console.log(product1, product2, product3);

image1.src = state.allProductsArray[product1].src;
image2.src = state.allProductsArray[product2].src;
image3.src = state.allProductsArray[product3].src;
image1.alt = state.allProductsArray[product1].name;
image2.alt = state.allProductsArray[product2].name;
image3.alt = state.allProductsArray[product3].name;
state.allProductsArray[product1].views++;
state.allProductsArray[product2].views++;
state.allProductsArray[product3].views++;

function handleProductClick(event){
  if (event.target === productContainer){
    alert('Please click on an image');
  }
  clicks++

  let clickProduct = event.target.alt;
  for (let i = 0; i < state.allProductsArray.length; i++) {
    if (clickProduct === state.allProductsArray[i].name) {
      state.allProductsArray[i].click++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener('click', handleProductClick)
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks allowed';
    productContainer.className = 'no voting';
} else {
  renderProducts();
}
}
function renderResults () {
  let ul = document.querySelector('ul');
  for (let i = 0; i < state.allProductsArray.length; i++){
    let li = document.createElement('li');
    li.textContent = ${state.allProductsArray[i].name} had ${state.allProductsArray[i].name} was click ${state.allProductsArray[i].click} times. ;
    ul.appendChild(li);
  }
}

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

state.allProductsArray.push

renderProducts();

productContainer.addEventListener('click', handleProductClick);