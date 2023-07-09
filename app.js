'use strict';

let productContainer = document.querySelector('section');
/*let resultButton = document.querySelector('section + div');*/
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:last-child');

let clicks = 0;
let maxClicksAllowed = 25;
let uniqueImageCount = 6;

const state = {
  allProductsArray: [],
  indexArray:[],
};


function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allProductsArray.length);
}


function renderProducts() {
  while (state.indexArray.length < uniqueImageCount) {
    let randomNumber = getRandomNumber();
    if (!state.indexArray.includes(randomNumber)) {
      state.indexArray.push(randomNumber);
    }
  }
  let product1 = state.indexArray.shift();
  let product2 = state.indexArray.shift();
  let product3 = state.indexArray.shift();

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
}

function handleProductClick(event){
  if (event.target === productContainer) {
    alert('Please click on an image');
  }
  clicks++;

  let clickProduct = event.target.alt;
  for (let i = 0; i < state.allProductsArray.length; i++) {
    if (clickProduct === state.allProductsArray[i].name) {
      state.allProductsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener('click', handleProductClick);
    renderChart();
    /*resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    productContainer.className = 'no-voting';*/
  } else {
    renderProducts();
  }
}
function renderChart() {
  let productName = [];
  let productClick = [];
  let productView = [];

  for (let i = 0; i < state.allProductsArray.length; i++) {
    productName.push(state.allProductsArray[i].name);
    productClick.push(state.allProductsArray[i].clicks);
    productView.push(state.allProductsArray[i].views);
  }

  const chartData = {
    labels: productName,
    datasets: [
      {
        label: 'Views',
        data: productView,
        backgroundColor: ['green'],
        borderColor: ['black)'],
        borderWidth: 1,
      },
      {
        label: 'Click(s)',
        data: productClick,
        backgroundColor: ['blue'],
        borderColor: ['rgb(black)'],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  let chartCanvas = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(chartCanvas, config);
}



/*function renderResults () {
  let ul = document.querySelector('ul');
  for (let i = 0; i < state.allProductsArray.length; i++){
    console.log('test');
    let li = document.createElement('li');
    li.textContent = `${state.allProductsArray[i].name} had ${state.allProductsArray[i].views} views and was clicked ${state.allProductsArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}*/

let bag = new Product ('bag', 'img/bag.jpg');
let banana = new Product ('banana', 'img/banana.jpg');
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
let sweep = new Product ('sweep', 'img/sweep.png');
let tauntaun = new Product ('tauntaun', 'img/tauntaun.jpg');
let unicorn = new Product ('unicorn', 'img/unicorn.jpg');
let watercan = new Product ('water-can', 'img/water-can.jpg');
let wineglass = new Product ('wine-glass', 'img/wine-glass.jpg');

state.allProductsArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);

renderProducts();

productContainer.addEventListener('click', handleProductClick);

