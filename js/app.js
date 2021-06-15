'use strict';

// Define a function to give random number for the hours 

function randomNo(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Working on Lab -07 

// for writing in th HTML 
let salmonCookie = document.getElementById('cookie');


// the working Hours Array 
let workingHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm']

// the construct functions 
let shops = [];

function Shop(location, minCst, maxCst, avgCookiesSale) {
    this.location = location;
    this.minCst = minCst;
    this.maxCst = maxCst;
    this.avgCookiesSale = avgCookiesSale;
    this.totalSold = 0;
    this.cookiesPerHour = [];
    shops.push(this);
}

Shop.prototype.getcustomer = function () {
    for (let i = 0; i < workingHours.length; i++) {

        let cookies = Math.ceil(randomNo(this.minCst, this.maxCst) * this.avgCookiesSale);

        this.cookiesPerHour.push(cookies);

        this.totalSold += cookies;
    }
}

let articleElement = document.createElement('article');
cookie.appendChild(articleElement);

// making the table 

let table = document.createElement('table');
articleElement.appendChild(table);

// making Header of table 

function headerTable() {



    let rawHeading = document.createElement('tr');
    table.appendChild(rawHeading);

    let th1 = document.createElement('th');
    rawHeading.appendChild(th1);
    th1.textContent = " ";

    for (let i = 0; i < workingHours.length; i++) {
        let th = document.createElement('th');
        rawHeading.appendChild(th);
        th.textContent = workingHours[i];

    }
 

    let th2 = document.createElement('th');
    rawHeading.appendChild(th2);
    th2.textContent = "Daily Location Total";

}

headerTable();

// making the inside of table 
Shop.prototype.render = function () {

    let rawInside = document.createElement('tr');
    table.appendChild(rawInside);


    let td = document.createElement('td');
    rawInside.appendChild(td);
    td.textContent = this.location;

    for (let i = 0; i < workingHours.length; i++) {

        let td1 = document.createElement('td');

        rawInside.appendChild(td1);

        td1.textContent = this.cookiesPerHour[i];
    }

    for (let i = 0; i < workingHours.length; i++) {
        this.totalSold += this.cookiesPerHour[i];

    }
    let td2 = document.createElement('td');

    rawInside.appendChild(td2);

    td2.textContent = this.totalSold;
}

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

for (let i = 0; i < shops.length; i++) {
    shops[i].getcustomer();
    shops[i].render();
}


let sumCookies = 0;
let result = 0;
let total = 0;

// making footer of table 
function footerTable(){
    let rowFooter = document.createElement('tr');
 
    table.appendChild(rowFooter);
    let th3 = document.createElement('th');
    rowFooter.appendChild(th3);
    th3.textContent = "Total";
 

    for (let i = 0; i < workingHours.length; i++) {
        sumCookies = 0;
        for (let j = 0; j < shops.length; j++) {
            sumCookies += shops[j].cookiesPerHour[i];
            result += shops[j].cookiesPerHour[i];
        }console.log(result);
        let th4 = document.createElement('th');
        rowFooter.appendChild(th4);
        th4.textContent = sumCookies;
    }
 
    for (let i = 0; i < shops.length; i++) {
        total += shops[i].totalSold;
    }
    let th5 = document.createElement('th');
    rowFooter.appendChild(th5);
    let totalS = total + result;
    th5.textContent = totalS;
}

footerTable();





