'use strict';

let productContainer = document.querySelector('section');
/*let resultButton = document.querySelector('section + div');*/
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:last-child');

/*const context = document.getElementById('myChart').getContext('2d');
const dataSet = JSON.parse(localStorage.chartData);
const itemNames = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass];
const chartColors = [green, black, blue];
*/

/*const myChart = new Chart (context, {
  type: 'bar',
  data:{
    labels: itemNames,
    datasets: [{
      label: '# of Votes',
      data: dataSet,
      backgroundColor: chartColors
    }]
  },
  options: {
    scales:{
      yAxes:[{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
*/

let clicks = 0;
let maxClicksAllowed = 25;
let uniqueImageCount = 6;

const state = {
  allProductsArray: [],
  indexArray: [],
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
  let localInfo = JSON.parse(localStorage.getItem('myProd'));
  if (localInfo) {
    localInfo[product1].views++;
    localInfo[product2].views++;
    localInfo[product3].views++;
    localStorage.setItem('myProd', JSON.stringify(localInfo));
  } else {
    state.allProductsArray[product1].views++;
    state.allProductsArray[product2].views++;
    state.allProductsArray[product3].views++;
  }
}

function handleProductClick(event) {
  let localInfo = JSON.parse(localStorage.getItem('myProd'));
  if (event.target === productContainer) {
    alert('Please click on an image');
  }
  clicks++;

  let clickProduct = event.target.alt;
  for (let i = 0; i < state.allProductsArray.length; i++) {
    if (clickProduct === state.allProductsArray[i].name) {
      if (localInfo) {
        localInfo[i].clicks++;
        localStorage.setItem('myProd', JSON.stringify(localInfo));
        //break;
      }

      state.allProductsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener('click', handleProductClick);
    /*resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    productContainer.className = 'no-voting';*/
    if (!localInfo) {
      let stringifiedProd = JSON.stringify(state.allProductsArray);
      localStorage.setItem('myProd', stringifiedProd);
    }
    //let stringifiedProd = JSON.stringify(state.allProductsArray);
    renderChart();
    //localStorage.setItem('myProd', stringifiedProd);
  } else {
    renderProducts();
  }
}
function renderChart() {
  let productName = [];
  let productClick = [];
  let productView = [];
  let localInfo = JSON.parse(localStorage.getItem('myProd'));
  for (let i = 0; i < localInfo.length; i++) {
    productName.push(localInfo[i].name);
    productClick.push(localInfo[i].clicks);
    productView.push(localInfo[i].views);
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
let retrievedProdArray = localStorage.getItem('state.allProdArray');
let parsedProdArray = JSON.parse(retrievedProdArray);

/*function saveStatsToLocalStorage(dataSet){
  const chartData = [];
  for(let i = 0; i < dataSet.length; i++){
    chartData.push(dataSet[i]);
  }
  console.log(typeof chartData, chartData);
  localStorage.chartData = JSON.stringify(chartData);
  console.log(typeof localStorage.chartData);
}
saveStatsToLocalStorage();*/

/*function renderResults () {
  let ul = document.querySelector('ul');
  for (let i = 0; i < state.allProductsArray.length; i++){
    console.log('test');
    let li = document.createElement('li');
    li.textContent = `${state.allProductsArray[i].name} had ${state.allProductsArray[i].views} views and was clicked ${state.allProductsArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}*/

let bag = new Product('bag', 'img/bag.jpg');
let banana = new Product('banana', 'img/banana.jpg');
let bathroom = new Product('bathroom', 'img/bathroom.jpg');
let boots = new Product('boots', 'img/boots.jpg');
let breakfast = new Product('breakfast', 'img/breakfast.jpg');
let bubblegum = new Product('bubblegum', 'img/bubblegum.jpg');
let chair = new Product('chair', 'img/chair.jpg');
let cthulhu = new Product('cthulhu', 'img/cthulhu.jpg');
let dogduck = new Product('dog-duck', 'img/dog-duck.jpg');
let dragon = new Product('dragon', 'img/dragon.jpg');
let pen = new Product('pen', 'img/pen.jpg');
let petsweep = new Product('pet-sweep', 'img/pet-sweep.jpg');
let scissors = new Product('scissors', 'img/scissors.jpg');
let shark = new Product('shark', 'img/shark.jpg');
let sweep = new Product('sweep', 'img/sweep.png');
let tauntaun = new Product('tauntaun', 'img/tauntaun.jpg');
let unicorn = new Product('unicorn', 'img/unicorn.jpg');
let watercan = new Product('water-can', 'img/water-can.jpg');
let wineglass = new Product('wine-glass', 'img/wine-glass.jpg');

state.allProductsArray.push(
  bag,
  banana,
  bathroom,
  boots,
  breakfast,
  bubblegum,
  chair,
  cthulhu,
  dogduck,
  dragon,
  pen,
  petsweep,
  scissors,
  shark,
  sweep,
  tauntaun,
  unicorn,
  watercan,
  wineglass
);

renderProducts();

productContainer.addEventListener('click', handleProductClick);
