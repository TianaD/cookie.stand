'use strict'
//random function between max and min input
// let hoursOfOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let headings = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];
// console.log(headings[3]); //this will display "Paris"
function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}
//declare empty object
let object = {
    //add property called name
    name: "Tiana"

}
let hoursOfOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
let seattle = {
    min: 23,
    max: 65,
    avg: 6.3,



    // a method is a function attached to an object
    randomCustPerHr: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOfOperation.length; i++) {
            let randomAmtOfCustomers = Math.random() * (this.max-this.min) + this.min //this can only be used inside of an object, it ref. the object
            randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
            // //console.log ("random amt of cust.0", randomAmtOfCustomers);
            custPerHour.push (randomAmtOfCustomers)
        }
        return custPerHour;
    },
   // 3. Calculate and store the simulated amounts of cookies 
    //         purchased for each hour at each location using average 
    //         cookies purchased and the random number of customers generated.*/
    //     cookiesPerHour: [],
    cookieSales: function() {
        let cookiesPerHour = [];
        let customersAtEachHour = this.randomCustPerHr()
        for (let i = 0; i < customersAtEachHour.length; i++) {
            let cookiesSold = customersAtEachHour[i] * this.avg + " cookies"
            cookiesPerHour.push (cookiesSold)
        }
        console.log(cookiesPerHour)
        return cookiesPerHour

    }


    /* 4. Store the results for each location in a separate array… 
perhaps as a property of the object representing that location. */

}

// 5. Display the values of each array as unordered lists in the browser.
//to select an element, use getElement...

let displaySeattleHeading = document.getElementById("Seattle");
let displaySeattle = document.getElementById("outputSeattle");
// let listItem = document.createElement("li")
// listItem.innerHTML = "6am:, 7am:, 8am:, 9am:, 10am:, 11am:, 12pm:, 1pm:, 2pm:, 3pm:, 4pm:, 5pm:, 6pm:, 7pm:"
let seattleCookiesPerHour = seattle.cookieSales();
displaySeattleHeading.append(headings[0]);
for (let i =0; i < hoursOfOperation.length; i++){
    let chickFilA = document.createElement("li");
    chickFilA.innerHTML = `${hoursOfOperation[i]}: ${seattleCookiesPerHour[i]}`;
    displaySeattle.append(chickFilA); //a method in javascript is a function attached to an object that performs a needed task
}

// console.log(seattle.cookieSales());


//=====================================================================================================Sales For Tokyo=====================================================================================================

let tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,


    randomCustPerHr: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOfOperation.length; i++) {
            let randomAmtOfCustomers = Math.random() * (this.max-this.min) + this.min //this can only be used inside of an object, it ref. the object
            randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
            //console.log ("random amt of cust.0", randomAmtOfCustomers);
            custPerHour.push (randomAmtOfCustomers)
        }
        return custPerHour;
    },

    cookieSales: function() {
        let cookiesPerHour = [];
        let customersAtEachHour = this.randomCustPerHr()
        for (let i = 0; i < customersAtEachHour.length; i++) {
            let cookiesSold = customersAtEachHour[i] * this.avg + " cookies"
            cookiesPerHour.push (cookiesSold)
        }
        return cookiesPerHour
    }
}
    let displayTokyoHeading = document.getElementById("Tokyo");
    let displayTokyo = document.getElementById("outputTokyo");
    let tokyoCookiesPerHour = tokyo.cookieSales()
    displayTokyoHeading.append(headings[1]);
    for (let i = 0; i < hoursOfOperation.length; i++){
        // console.log(hoursOfOperation.length)
        let thirtyPieceNugget = document.createElement("li")
        thirtyPieceNugget.innerHTML = `${hoursOfOperation[i]}: ${tokyoCookiesPerHour[i]}`
        displayTokyo.append(thirtyPieceNugget);
    }



//=====================================================================================================Sales For Dubai=====================================================================================================

let dubai = {
    min: 11,
    max: 38,
    avg: 3.7,


    randomCustPerHr: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOfOperation.length; i++) {
            let randomAmtOfCustomers = Math.random() * (this.max-this.min) + this.min //this can only be used inside of an object, it ref. the object
            randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
            // //console.log ("random amt of cust.0", randomAmtOfCustomers);
            custPerHour.push (randomAmtOfCustomers)
        }
        return custPerHour;
    },

    cookieSales: function() {
        let cookiesPerHour = [];
        let customersAtEachHour = this.randomCustPerHr()
        for (let i = 0; i < customersAtEachHour.length; i++) {
            let cookiesSold = customersAtEachHour[i] * this.avg + " cookies"
            cookiesPerHour.push (cookiesSold)
        }
        return cookiesPerHour
    }
}
    let displayDubaiHeading = document.getElementById("Dubai");
    let displayDubai = document.getElementById("outputDubai");
    let dubaiCookiesPerHour = dubai.cookieSales();
    displayDubaiHeading.append(headings[2]);
    for (let i =0; i < hoursOfOperation.length; i++){
        let maniaFor = document.createElement("li")
        maniaFor.innerHTML = `${hoursOfOperation[i]}: ${dubaiCookiesPerHour[i]}`
        displayDubai.append(maniaFor);
    }


//=====================================================================================================Sales For Paris=====================================================================================================

let paris = {
    min: 20,
    max: 38,
    avg: 2.3,


    randomCustPerHr: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOfOperation.length; i++) {
            let randomAmtOfCustomers = Math.random() * (this.max-this.min) + this.min //this can only be used inside of an object, it ref. the object
            randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
            // //console.log ("random amt of cust.0", randomAmtOfCustomers);
            custPerHour.push (randomAmtOfCustomers)
        }
        return custPerHour;
    },

    cookieSales: function() {
        let cookiesPerHour = [];
        let customersAtEachHour = this.randomCustPerHr()
        for (let i = 0; i < customersAtEachHour.length; i++) {
            let cookiesSold = customersAtEachHour[i] * this.avg + " cookies"
            cookiesPerHour.push (cookiesSold)
        }
        return cookiesPerHour
    }
}

let displayParisHeading = document.getElementById("Paris");
let displayParis = document.getElementById("outputParis")
let parisCookiesPerHour = paris.cookieSales()
displayParisHeading.append(headings[3]);
for (let i =0; i < hoursOfOperation.length; i++){
    let jerryBoy = document.createElement("li")
    jerryBoy.innerHTML = `${hoursOfOperation[i]}: ${parisCookiesPerHour[i]}`
    displayParis.append(jerryBoy);
}



//=====================================================================================================Sales For Lima=====================================================================================================

let lima = {
    min: 2,
    max: 16,
    avg: 4.6,



    randomCustPerHr: function () {
        let custPerHour = [];
        for (let i = 0; i < hoursOfOperation.length; i++) {
            let randomAmtOfCustomers = Math.random() * (this.max-this.min) + this.min //this can only be used inside of an object, it ref. the object
            randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
            // //console.log ("random amt of cust.0", randomAmtOfCustomers);
            custPerHour.push (randomAmtOfCustomers)
        }
        return custPerHour;
    },

    cookieSales: function() {
        let cookiesPerHour = [];
        let customersAtEachHour = this.randomCustPerHr()
        for (let i = 0; i < customersAtEachHour.length; i++) {
            let cookiesSold = customersAtEachHour[i] * this.avg + " cookies"
            cookiesPerHour.push (cookiesSold)
        }
        return cookiesPerHour
    }
}

let displayLimaHeading = document.getElementById("Lima");
let displayLima = document.getElementById("outputLima")
let limaCookiesPerHour = lima.cookieSales()
displayLimaHeading.append(headings[4]);
for (let i =0; i < hoursOfOperation.length; i++){
    let herNameIsShelly = document.createElement("li")
    herNameIsShelly.innerHTML = `${hoursOfOperation[i]}: ${limaCookiesPerHour[i]}`
    displayLima.append(herNameIsShelly);
}









//an object is a data type. i can store other data types in objects
//object definition for a location
//======================================================================Starting Data=========================================================
/*
Location	Min/Cust	Max/Cust	AvgCookie/Sale
Seattle	    23	        65	        6.3
*/
// const seattle = {
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     location: 'Seattle',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//         //======================================================================Customers Per Hour=========================================================
//         /*2. Use a method of that object to generate a 
//         random number of customers per hour. */
//     customersPerHour: function() {
//         // //console.log(this.max);
//         // //console.log(this.min);
//         return getRandom(this.max, this.min);
//     },
//         //======================================================================Cookies Per Hour=========================================================
//         /* 3. Calculate and store the simulated amounts of cookies 
//         purchased for each hour at each location using average 
//         cookies purchased and the random number of customers generated.*/
//     cookiesPerHour: [],
//     getCookies: function() {
//         for(let i = 0; i < this.hoursOfOperation.length; i++) {
//             //console.log('seattle avg cookies/sale', this.avg);
//             //console.log('seattle avg customers/hour', this.customersPerHour());
//             this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//         }
//         return this.cookiesPerHour;
//     }



// }

//     seattle.getCookies();

// //object definition for a location
//         //======================================================================Starting Data=========================================================
//         /*
//         Location	Min/Cust	Max/Cust	AvgCookie/Sale
//         Tokyo	    3	        24	        1.2
//         */
// const Tokyo = {
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     location: 'Tokyo',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//         //======================================================================Customers Per Hour=========================================================
//         /*2. Use a method of that object to generate a 
//         random number of customers per hour. */
//     customersPerHour: function() {
//         // //console.log(this.max);
//         // //console.log(this.min);
//         return getRandom(this.max, this.min);
//     },
//         //======================================================================Cookies Per Hour=========================================================
//         /* 3. Calculate and store the simulated amounts of cookies 
//         purchased for each hour at each location using average 
//         cookies purchased and the random number of customers generated.*/
//     cookiesPerHour: [],
//     getCookies: function() {
//         for(let i = 0; i < this.hoursOfOperation.length; i++) {
//             //console.log('tokyo avg cookies/sale', this.avg);
//             //console.log('tokyo avg customers/hour', this.customersPerHour());
//             this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//         }
//         return this.cookiesPerHour;
//     }



// }

//     Tokyo.getCookies();

// //object definition for a location
//         //======================================================================Starting Data=========================================================
//         /*
//         Location	Min/Cust	Max/Cust	AvgCookie/Sale
//         Dubai	    11	        38	        3.7
//         */
// const dubai = {
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     location: 'Dubai',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//         //======================================================================Customers Per Hour=========================================================
//         /*2. Use a method of that object to generate a 
//         random number of customers per hour. */
//     customersPerHour: function() {
//         // //console.log(this.max);
//         // //console.log(this.min);
//         return getRandom(this.max, this.min);
//     },
//         //======================================================================Cookies Per Hour=========================================================
//         /* 3. Calculate and store the simulated amounts of cookies 
//         purchased for each hour at each location using average 
//         cookies purchased and the random number of customers generated.*/
//     cookiesPerHour: [],
//     getCookies: function() {
//         for(let i = 0; i < this.hoursOfOperation.length; i++) {
//             //console.log('dubai avg cookies/sale', this.avg);
//             //console.log('dubai avg customers/hour', this.customersPerHour());
//             this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//         }
//         return this.cookiesPerHour;
//     }



// }

//     dubai.getCookies();

// //object definition for a location
//         //======================================================================Starting Data=========================================================
//         /*
//         Location	Min/Cust	Max/Cust	AvgCookie/Sale
//         Paris	    20	        38	        2.3
//         */
// const paris = {
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     location: 'Paris',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//         //======================================================================Customers Per Hour=========================================================
//         /*2. Use a method of that object to generate a 
//         random number of customers per hour. */
//     customersPerHour: function() {
//         // //console.log(this.max);
//         // //console.log(this.min);
//         return getRandom(this.max, this.min);
//     },
//         //======================================================================Cookies Per Hour=========================================================
//         /* 3. Calculate and store the simulated amounts of cookies 
//         purchased for each hour at each location using average 
//         cookies purchased and the random number of customers generated.*/
//     cookiesPerHour: [],
//     getCookies: function() {
//         for(let i = 0; i < this.hoursOfOperation.length; i++) {
//             //console.log('paris avg cookies/sale', this.avg);
//             //console.log('paris avg customers/hour', this.customersPerHour());
//             this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//         }
//         return this.cookiesPerHour;
//     }



// }

//     paris.getCookies();


// //object definition for a location
//         //======================================================================Starting Data=========================================================
//         /*
//         Location	Min/Cust	Max/Cust	AvgCookie/Sale
//         Lima	      2	          16	        4.6
//         */
// const lima = {
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     location: 'Lima',
//     hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
//         //======================================================================Customers Per Hour=========================================================
//         /*2. Use a method of that object to generate a 
//         random number of customers per hour. */
//     customersPerHour: function() {
//         // //console.log(this.max);
//         // //console.log(this.min);
//         return getRandom(this.max, this.min);
//     },
//         //======================================================================Cookies Per Hour=========================================================
//         /* 3. Calculate and store the simulated amounts of cookies 
//         purchased for each hour at each location using average 
//         cookies purchased and the random number of customers generated.*/
//     cookiesPerHour: [],
//     getCookies: function() {
//         for(let i = 0; i < this.hoursOfOperation.length; i++) {
//             //console.log('lima avg cookies/sale', this.avg);
//             //console.log('lima avg customers/hour', this.customersPerHour());
//             this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
//         }
//         return this.cookiesPerHour;
//     }



// }

//     lima.getCookies();



//customers per hour
/* 4. Store the results for each location in a separate array… 
perhaps as a property of the object representing that location. */


// 5. Display the values of each array as unordered lists in the browser.
/*
Calculating the sum of these hourly totals; your output for each location should look like this:
*/
// let hoursOfOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemo = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
// let hoursArray = document.querySelector('.output');
// for(let i = 0; i < hoursOfOperation.length; i++) {
//     //hoursOfOperation[i].innerHTML
//     let variable = document.createElement("li");
//     variable.innerHTML = `${hoursOfOperation[i]}: ${cookiesPerHour[i]} cookies`;
//     hoursArray.append(variable);
// }




//==================================================================Creating a Prototype==================================================================


// function cookieStandLocation(min, max, avg, location, hours) {
//     // let tblDemo = document.createElement('table');
//     let stand = {};
//     stand.min = min;
//     stand.max = max;
//     stand.avg = avg;
//     stand.location = location;
//     stand.cookiesPerHour = [];
//     stand.hoursOfOperation = hours;
//     stand.getCustomers = function () {
//         //console.log(`Stand Max: ${stand.max} || this Max : ${this.max}`);
//         return getRandom(this.max, this.min);
//     }

//     stand.getCookies = function getCookies() {
//         for (let i = 0; i < this.hoursOfOperation.length; i++) {
//             //console.log('seattle avg cookies/sale', this.avg);
//             // //console.log('seattle avg customers/hour', this.customersPerHour());
//             this.cookiesPerHour.push(Math.ceil(this.avg * this.getCustomers()));
//             return getCookies();

//         };
//         return this.cookiesPerHour;

//     }
// }
// // let hoursOfOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
// let cookieDemo = Seattle.getCookies(this.cookiesPerHour);
// let hoursArray = document.querySelector('.output')

// stand.render = function () {
//     let row = document.createElement('tr');
//     let localeTD = document.createElement('td');
//     let thDemo = document.createElement('th');
//     localeTD.innerHTML = this.location;
//     row.append(localeTD);
//     document.getElementById('jsTbl').append(row);

//     for (let i = 0; i < this.hoursOfOperation.length; i++) {
//         let thDemo = document.createElement('th');
//         tdDemo.innerHTML = this.cookiesPerHour[i];
//         document.getElementById("cookietb").append(thDemo);
//     }

//     for (let i = 0; i < this.hoursOfoperation.length; i++) {
//         let tdDemo = document.createElement('td')
//         tdDemo.innerHTML = this.cookiesPerHour[i];
//         Row.append(tdDemo);

//     }

//     return stand;
// }


//creating objects each with unique data

// const seattle = cookieStandLocation(23, 65, 6.3, 'Seattle', hoursOfOperation);
// seattle.getCustomers();
// seattle.getCookies();
// seattle.render();

// const tokyo = cookieStandLocation(3, 24, 1.2, 'Tokyo', hoursOfOperation);
// tokyo.getCustomers();
// tokyo.getCookies();
// tokyo.render();

/*
Seattle
6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies
*/




