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
    totalSold: 0,

    getCustomer: function () {

        for (let i = 0; i < workingHours.length; i++) {


            let cookies = Math.ceil(randomNo(this.minCst, this.maxCst) * this.avgCookiesSale);

            this.cookiesPerHour.push(cookies);

            this.totalSold += cookies;

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
        listItem.textContent = `Total: ${this.totalSold} cookies`


    }





}

seattleShop.getCustomer();
seattleShop.render();

// 1.2 creating object for Tokyo Shop

let tokyoShop = {
    location: 'Tokyo',
    minCst: 3,
    maxCst: 24,
    avgCookiesSale: 1.2,
    cookiesPerHour: [],
    totalSold: 0,

    getCustomer: function () {

        for (let i = 0; i < workingHours.length; i++) {


            let cookies = Math.ceil(randomNo(this.minCst, this.maxCst) * this.avgCookiesSale);

            this.cookiesPerHour.push(cookies);

            this.totalSold += cookies;

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
        listItem.textContent = `Total: ${this.totalSold} cookies`


    }





}

tokyoShop.getCustomer();
tokyoShop.render();

// 1.3 creating object for Dubai Shop
let dubaiShop = {
    location: 'Dubai',
    minCst: 11,
    maxCst: 38,
    avgCookiesSale: 3.7,
    cookiesPerHour: [],
    totalSold: 0,

    getCustomer: function () {

        for (let i = 0; i < workingHours.length; i++) {


            let cookies = Math.ceil(randomNo(this.minCst, this.maxCst) * this.avgCookiesSale);

            this.cookiesPerHour.push(cookies);

            this.totalSold += cookies;

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
        listItem.textContent = `Total: ${this.totalSold} cookies`


    }





}

dubaiShop.getCustomer();
dubaiShop.render();

// 1.4 creating object for Paris Shop
let parisShop = {
    location: 'Paris',
    minCst: 20,
    maxCst: 38,
    avgCookiesSale: 2.3,
    cookiesPerHour: [],
    totalSold: 0,

    getCustomer: function () {

        for (let i = 0; i < workingHours.length; i++) {


            let cookies = Math.ceil(randomNo(this.minCst, this.maxCst) * this.avgCookiesSale);

            this.cookiesPerHour.push(cookies);

            this.totalSold += cookies;

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
        listItem.textContent = `Total: ${this.totalSold} cookies`


    }





}

parisShop.getCustomer();
parisShop.render();

// 1.5 creating object for Lima Shop
let limaShop = {
    location: 'Lima',
    minCst: 2,
    maxCst: 16,
    avgCookiesSale: 4.6,
    cookiesPerHour: [],
    totalSold: 0,

    getCustomer: function () {

        for (let i = 0; i < workingHours.length; i++) {


            let cookies = Math.ceil(randomNo(this.minCst, this.maxCst) * this.avgCookiesSale);

            this.cookiesPerHour.push(cookies);

            this.totalSold += cookies;

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
        listItem.textContent = `Total: ${this.totalSold} cookies`


    }





}

limaShop.getCustomer();
limaShop.render();









// Define a function to give random number for the hours 

function randomNo(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
