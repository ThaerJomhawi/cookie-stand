'use strict';

let salmonCookie = document.getElementById('cookie');

// Define the working Hours 

let workingHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']


//1. create separate JS object literals for each shop

// 1.1 creating object for Seattle Shop

let seattleShop = {
    location: 'Seattle',
    minCst: 23,
    maxCst: 65,
    avgCookiesSale: 6.3,
    cookiesPerHour: [],
    randomCostumer: [],
    totalSold: 0,

    getRandomCostumer: function () {
        for (let i = 0; i < workingHours.length; i++) {
            let rand = randomNo(this.MinCst, this.MaxCst);
            this.randomCostumer[i] = rand;


        }


    },

    cookiesPerRandom: function () {
        let total = 0;

        for (let i = 0; i < workingHours.length; i++) {
            let cookies = (this.randomCostumer[i] * this.avgCookiesSale);
            this.cookiesPerHour[i] = cookies;
            total = total + this.cookiesPerHour[i];
            console.log(cookies);
        }

    },


    render: function () {



        let articleElement = document.createElement('article');

        cookie.appendChild(articleElement);

        let cityTitle = document.createElement('h2');
        articleElement.appendChild(cityTitle);
        cityTitle.textContent = this.location;


        let hourList = document.createElement('ul');
        articleElement.appendChild(hourList);

        for (let i = 0; i < workingHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }

        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.TotalSold} cookies`


    }





}

console.log(seattleShop.randomCostumer);
console.log(seattleShop.cookiesPerHour);
console.log(seattleShop.minCst);
console.log(seattleShop.maxCst);
console.log(seattleShop.location);
console.log(seattleShop.avgCookiesSale);
console.log(seattleShop.totalSold);
console.log(randomNo(seattleShop.minCst, seattleShop.maxCst))

seattleShop.getRandomCostumer();
seattleShop.cookiesPerRandom();
seattleShop.render();



// 1.2 creating object for Tokyo Shop
let tokyoShop = {
    location: 'Tokyo',
    minCst: 3,
    maxCst: 24,
    avgCookiesSale: 1.2,
    cookiesPerHour: [],
    randomCostumer: [],
    totalSold: 0,

    getRandomCostumer: function () {
        for (let i = 0; i < workingHours.length; i++) {
            let rand = randomNo(this.MinCst, this.MaxCst);
            this.randomCostumer[i] = rand;


        }


    },

    cookiesPerRandom: function () {
        let total = 0;

        for (let i = 0; i < workingHours.length; i++) {
            let cookies = (this.randomCostumer[i] * this.avgCookiesSale);
            this.cookiesPerHour[i] = cookies;
            total = total + this.cookiesPerHour[i];
            console.log(cookies);
        }

    },


    render: function () {



        let articleElement = document.createElement('article');

        cookie.appendChild(articleElement);

        let cityTitle = document.createElement('h2');
        articleElement.appendChild(cityTitle);
        cityTitle.textContent = this.location;


        let hourList = document.createElement('ul');
        articleElement.appendChild(hourList);

        for (let i = 0; i < workingHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }

        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.TotalSold} cookies`


    }





}

tokyoShop.getRandomCostumer();
tokyoShop.cookiesPerRandom();
tokyoShop.render();




// 1.3 creating object for Dubai Shop
let dubaiShop = {
    location: 'Dubai',
    minCst: 11,
    maxCst: 38,
    avgCookiesSale: 3.7,
    cookiesPerHour: [],
    randomCostumer: [],
    totalSold: 0,

    getRandomCostumer: function () {
        for (let i = 0; i < workingHours.length; i++) {
            let rand = randomNo(this.MinCst, this.MaxCst);
            this.randomCostumer[i] = rand;


        }


    },

    cookiesPerRandom: function () {
        let total = 0;

        for (let i = 0; i < workingHours.length; i++) {
            let cookies = (this.randomCostumer[i] * this.avgCookiesSale);
            this.cookiesPerHour[i] = cookies;
            total = total + this.cookiesPerHour[i];
            console.log(cookies);
        }

    },


    render: function () {



        let articleElement = document.createElement('article');

        cookie.appendChild(articleElement);

        let cityTitle = document.createElement('h2');
        articleElement.appendChild(cityTitle);
        cityTitle.textContent = this.location;


        let hourList = document.createElement('ul');
        articleElement.appendChild(hourList);

        for (let i = 0; i < workingHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }

        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.TotalSold} cookies`


    }





}

dubaiShop.getRandomCostumer();
dubaiShop.cookiesPerRandom();
dubaiShop.render();



// 1.4 creating object for Paris Shop
let parisShop = {
    location: 'Paris',
    minCst: 20,
    maxCst: 38,
    avgCookiesSale: 2.3,
    cookiesPerHour: [],
    randomCostumer: [],
    totalSold: 0,

    getRandomCostumer: function () {
        for (let i = 0; i < workingHours.length; i++) {
            let rand = randomNo(this.MinCst, this.MaxCst);
            this.randomCostumer[i] = rand;


        }


    },

    cookiesPerRandom: function () {
        let total = 0;

        for (let i = 0; i < workingHours.length; i++) {
            let cookies = (this.randomCostumer[i] * this.avgCookiesSale);
            this.cookiesPerHour[i] = cookies;
            total = total + this.cookiesPerHour[i];
            console.log(cookies);
        }

    },


    render: function () {



        let articleElement = document.createElement('article');

        cookie.appendChild(articleElement);

        let cityTitle = document.createElement('h2');
        articleElement.appendChild(cityTitle);
        cityTitle.textContent = this.location;


        let hourList = document.createElement('ul');
        articleElement.appendChild(hourList);

        for (let i = 0; i < workingHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }

        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.TotalSold} cookies`


    }





}

parisShop.getRandomCostumer();
parisShop.cookiesPerRandom();
parisShop.render();



// 1.5 creating object for Lima Shop


let limaShop = {
    location: 'Lima',
    minCst: 2,
    maxCst: 16,
    avgCookiesSale: 4.6,
    cookiesPerHour: [],
    randomCostumer: [],
    totalSold: 0,

    getRandomCostumer: function () {
        for (let i = 0; i < workingHours.length; i++) {
            let rand = randomNo(this.MinCst, this.MaxCst);
            this.randomCostumer[i] = rand;


        }


    },

    cookiesPerRandom: function () {
        let total = 0;

        for (let i = 0; i < workingHours.length; i++) {
            let cookies = (this.randomCostumer[i] * this.avgCookiesSale);
            this.cookiesPerHour[i] = cookies;
            total = total + this.cookiesPerHour[i];
            console.log(cookies);
        }

    },


    render: function () {



        let articleElement = document.createElement('article');

        cookie.appendChild(articleElement);

        let cityTitle = document.createElement('h2');
        articleElement.appendChild(cityTitle);
        cityTitle.textContent = this.location;


        let hourList = document.createElement('ul');
        articleElement.appendChild(hourList);

        for (let i = 0; i < workingHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${workingHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }

        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.TotalSold} cookies`


    }





}

limaShop.getRandomCostumer();
limaShop.cookiesPerRandom();
limaShop.render();



// Define a function to give random number for the hours 

function randomNo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
