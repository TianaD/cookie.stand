'use strict'
//random function between maxNumberofCustomers and minNumberofCustomers input
// let hoursOfOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"
let headings = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];
// ////console.log(headings[3]); //this will display "Paris"
function getRandom(maxNumberofCustomers, minNumberofCustomers) {
    return Math.ceil(Math.random() * (maxNumberofCustomers - minNumberofCustomers) + minNumberofCustomers);
    // 0 >= random #  <= 1  * limit
}
//declare empty object
let object = {
    //add property called name
    name: "Tiana"

}

// let hoursOfOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
// let seattle = {
//     minNumberofCustomers: 23,
//     maxNumberofCustomers: 65,
//     avgNumberOfCookiesSoldPerCustomer: 6.3,



//     // a method is a function attached to an object (i.e. push, random, floor, ceil, log, append, createElement, getElementByID)
//     randomCustPerHr: function () {
//         let custPerHour = [];
//         for (let i = 0; i < hoursOfOperation.length; i++) {
//             let randomAmtOfCustomers = Math.random() * (this.maxNumberofCustomers-this.minNumberofCustomers) + this.minNumberofCustomers //this can only be used inside of an object, it ref. the object
//             randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
//             // //////console.log ("random amt of cust.0", randomAmtOfCustomers);
//             custPerHour.push (randomAmtOfCustomers)
//         }
//         return custPerHour;
//     },
//    // 3. Calculate and store the simulated amounts of cookies 
//     //         purchased for each hour at each location using average 
//     //         cookies purchased and the random number of customers generated.*/
//     //     cookiesPerHour: [],
//     cookieSales: function() {
//         let cookiesPerHour = [];
//         let customersAtEachHour = this.randomCustPerHr()
//         for (let i = 0; i < customersAtEachHour.length; i++) {
//             let cookiesSold = customersAtEachHour[i] * this.avgNumberOfCookiesSoldPerCustomer + " cookies"
//             cookiesPerHour.push (cookiesSold)
//         }
//         ////console.log(cookiesPerHour)
//         return cookiesPerHour

//     }


//     /* 4. Store the results for each location in a separate array… 
// perhaps as a property of the object representing that location. */

// }

// // 5. Display the values of each array as unordered lists in the browser.
// //to select an element, use getElement...

// let displaySeattleHeading = document.getElementById("Seattle");
// let displaySeattle = document.getElementById("outputSeattle");
// // let listItem = document.createElement("li")
// // listItem.innerHTML = "6am:, 7am:, 8am:, 9am:, 10am:, 11am:, 12pm:, 1pm:, 2pm:, 3pm:, 4pm:, 5pm:, 6pm:, 7pm:"
// let seattleCookiesPerHour = seattle.cookieSales();
// displaySeattleHeading.append(headings[0]);
// for (let i =0; i < hoursOfOperation.length; i++){
//     let chickFilA = document.createElement("li");
//     chickFilA.innerHTML = `${hoursOfOperation[i]}: ${seattleCookiesPerHour[i]}`; //.innerHTML is a property
//     displaySeattle.append(chickFilA); //a method in javascript is a function attached to an object that performs a needed task
// }

// // ////console.log(seattle.cookieSales());


// //=====================================================================================================Sales For Tokyo=====================================================================================================

// let tokyo = {
//     minNumberofCustomers: 3,
//     maxNumberofCustomers: 24,
//     avgNumberOfCookiesSoldPerCustomer: 1.2,


//     randomCustPerHr: function () {
//         let custPerHour = [];
//         for (let i = 0; i < hoursOfOperation.length; i++) {
//             let randomAmtOfCustomers = Math.random() * (this.maxNumberofCustomers-this.minNumberofCustomers) + this.minNumberofCustomers //this can only be used inside of an object, it ref. the object
//             randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
//             //////console.log ("random amt of cust.0", randomAmtOfCustomers);
//             custPerHour.push (randomAmtOfCustomers)
//         }
//         return custPerHour;
//     },

//     cookieSales: function() {
//         let cookiesPerHour = [];
//         let customersAtEachHour = this.randomCustPerHr()
//         for (let i = 0; i < customersAtEachHour.length; i++) {
//             let cookiesSold = customersAtEachHour[i] * this.avgNumberOfCookiesSoldPerCustomer + " cookies"
//             cookiesPerHour.push (cookiesSold)
//         }
//         return cookiesPerHour
//     }
// }
//     let displayTokyoHeading = document.getElementById("Tokyo");
//     let displayTokyo = document.getElementById("outputTokyo");
//     let tokyoCookiesPerHour = tokyo.cookieSales()
//     displayTokyoHeading.append(headings[1]);
//     for (let i = 0; i < hoursOfOperation.length; i++){
//         // ////console.log(hoursOfOperation.length)
//         let thirtyPieceNugget = document.createElement("li")
//         thirtyPieceNugget.innerHTML = `${hoursOfOperation[i]}: ${tokyoCookiesPerHour[i]}`
//         displayTokyo.append(thirtyPieceNugget);
//     }



// //=====================================================================================================Sales For Dubai=====================================================================================================

// let dubai = {
//     minNumberofCustomers: 11,
//     maxNumberofCustomers: 38,
//     avgNumberOfCookiesSoldPerCustomer: 3.7,


//     randomCustPerHr: function () {
//         let custPerHour = [];
//         for (let i = 0; i < hoursOfOperation.length; i++) {
//             let randomAmtOfCustomers = Math.random() * (this.maxNumberofCustomers-this.minNumberofCustomers) + this.minNumberofCustomers //this can only be used inside of an object, it ref. the object
//             randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
//             // //////console.log ("random amt of cust.0", randomAmtOfCustomers);
//             custPerHour.push (randomAmtOfCustomers)
//         }
//         return custPerHour;
//     },

//     cookieSales: function() {
//         let cookiesPerHour = [];
//         let customersAtEachHour = this.randomCustPerHr()
//         for (let i = 0; i < customersAtEachHour.length; i++) {
//             let cookiesSold = customersAtEachHour[i] * this.avgNumberOfCookiesSoldPerCustomer + " cookies"
//             cookiesPerHour.push (cookiesSold)
//         }
//         return cookiesPerHour
//     }
// }
//     let displayDubaiHeading = document.getElementById("Dubai");
//     let displayDubai = document.getElementById("outputDubai");
//     let dubaiCookiesPerHour = dubai.cookieSales();
//     displayDubaiHeading.append(headings[2]);
//     for (let i =0; i < hoursOfOperation.length; i++){
//         let maniaFor = document.createElement("li")
//         maniaFor.innerHTML = `${hoursOfOperation[i]}: ${dubaiCookiesPerHour[i]}`
//         displayDubai.append(maniaFor);
//     }


// //=====================================================================================================Sales For Paris=====================================================================================================

// let paris = {
//     minNumberofCustomers: 20,
//     maxNumberofCustomers: 38,
//     avgNumberOfCookiesSoldPerCustomer: 2.3,


//     randomCustPerHr: function () {
//         let custPerHour = [];
//         for (let i = 0; i < hoursOfOperation.length; i++) {
//             let randomAmtOfCustomers = Math.random() * (this.maxNumberofCustomers-this.minNumberofCustomers) + this.minNumberofCustomers //this can only be used inside of an object, it ref. the object
//             randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
//             // //////console.log ("random amt of cust.0", randomAmtOfCustomers);
//             custPerHour.push (randomAmtOfCustomers)
//         }
//         return custPerHour;
//     },

//     cookieSales: function() {
//         let cookiesPerHour = [];
//         let customersAtEachHour = this.randomCustPerHr()
//         for (let i = 0; i < customersAtEachHour.length; i++) {
//             let cookiesSold = customersAtEachHour[i] * this.avgNumberOfCookiesSoldPerCustomer + " cookies"
//             cookiesPerHour.push (cookiesSold)
//         }
//         return cookiesPerHour
//     }
// }

// let displayParisHeading = document.getElementById("Paris");
// let displayParis = document.getElementById("outputParis")
// let parisCookiesPerHour = paris.cookieSales()
// displayParisHeading.append(headings[3]);
// for (let i =0; i < hoursOfOperation.length; i++){
//     let jerryBoy = document.createElement("li")
//     jerryBoy.innerHTML = `${hoursOfOperation[i]}: ${parisCookiesPerHour[i]}`
//     displayParis.append(jerryBoy);
// }



// //=====================================================================================================Sales For Lima=====================================================================================================

// let lima = {
//     minNumberofCustomers: 2,
//     maxNumberofCustomers: 16,
//     avgNumberOfCookiesSoldPerCustomer: 4.6,



//     randomCustPerHr: function () {
//         let custPerHour = [];
//         for (let i = 0; i < hoursOfOperation.length; i++) {
//             let randomAmtOfCustomers = Math.random() * (this.maxNumberofCustomers-this.minNumberofCustomers) + this.minNumberofCustomers //this can only be used inside of an object, it ref. the object
//             randomAmtOfCustomers = Math.floor(randomAmtOfCustomers);
//             // //////console.log ("random amt of cust.0", randomAmtOfCustomers);
//             custPerHour.push (randomAmtOfCustomers)
//         }
//         return custPerHour;
//     },

//     cookieSales: function() {
//         let cookiesPerHour = [];
//         let customersAtEachHour = this.randomCustPerHr()
//         for (let i = 0; i < customersAtEachHour.length; i++) {
//             let cookiesSold = customersAtEachHour[i] * this.avgNumberOfCookiesSoldPerCustomer + " cookies"
//             cookiesPerHour.push (cookiesSold)
//         }
//         return cookiesPerHour
//     }
// }

// let displayLimaHeading = document.getElementById("Lima");
// let displayLima = document.getElementById("outputLima")
// let limaCookiesPerHour = lima.cookieSales()
// displayLimaHeading.append(headings[4]);
// for (let i =0; i < hoursOfOperation.length; i++){
//     let herNameIsShelly = document.createElement("li")
//     herNameIsShelly.innerHTML = `${hoursOfOperation[i]}: ${limaCookiesPerHour[i]}`
//     displayLima.append(herNameIsShelly);
// }









//an object is a data type. i can store other data types in objects
//object definition for a location
//======================================================================Starting Data=========================================================
/*
Location	Min/Cust	Max/Cust	AvgCookie/Sale
Seattle	    23	        65	        6.3

// //object definition for a location
//         //======================================================================Starting Data=========================================================
//         /*
//         Location	Min/Cust	Max/Cust	AvgCookie/Sale
//         Tokyo	    3	        24	        1.2
//         */

//         //======================================================================Starting Data=========================================================
//         /*
//         Location	Min/Cust	Max/Cust	AvgCookie/Sale
//         Dubai	    11	        38	        3.7
//         */

// //object definition for a location
//         //======================================================================Starting Data=========================================================
//         /*
//         Location	Min/Cust	Max/Cust	AvgCookie/Sale
//         Paris	    20	        38	        2.3
//         */

// //object definition for a location
//         //======================================================================Starting Data=========================================================
//         /*
//         Location	Min/Cust	Max/Cust	AvgCookie/Sale
//         Lima	      2	          16	        4.6
//         */

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

//data types: numbers, strings, booleans (value that is either true/false), objects (stored data in properties; a person is an object. one who has eyes, that's a property. i can talk, that is a function), undefined, null

// let cookiesPerHour = [];
let sum = 0; 
let hoursOfOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
function cookieStandLocation(minNumberofCustomers, maxNumberofCustomers, avgNumberOfCookiesSoldPerCustomer, location, hours) {
    // let tblDemo = document.createElement('table');
    let stand = {};
    stand.minNumberofCustomers = minNumberofCustomers;
    stand.maxNumberofCustomers = maxNumberofCustomers;
    stand.avgNumberOfCookiesSoldPerCustomer = avgNumberOfCookiesSoldPerCustomer;
    stand.location = location;
    stand.cookiesPerHour = [];
    stand.hoursOfOperation = hours;
    stand.getCustomers = function () {
        ////console.log(`Stand Max: ${stand.maxNumberofCustomers} || this Max : ${this.maxNumberofCustomers}`);
        return getRandom(this.maxNumberofCustomers, this.minNumberofCustomers);
    }

    stand.getCookies = function () {
        for (let i = 0; i < this.hoursOfOperation.length; i++) {
            // ////console.log('seattle avgNumberOfCookiesSoldPerCustomer cookies/sale', this.avgNumberOfCookiesSoldPerCustomer);
            // ////console.log('seattle avgNumberOfCookiesSoldPerCustomer customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avgNumberOfCookiesSoldPerCustomer * this.getCustomers()));
            
        };
        console.log(this.cookiesPerHour.length)
        return stand.cookiesPerHour;

    }
    // //console.log("This is ", cookiesPerHour.reduce());
// //console.log(`stand.getCookies() is the value for my whole number of cookiesPerHour:${stand.getCookies()}`);
    // let cookieDemo = Seattle.getCookies(this.cookiesPerHour);
    // let hoursArray = document.querySelector('.output')
    // //console.log(stand.getCookies().reduce);

    stand.render = function(locationsArray) {
        let row = document.createElement('tr'); //create new row
        let localeTD = document.createElement('td');
        let thDemo = document.createElement('th');
        localeTD.innerHTML = this.location;
        row.append(localeTD);
        document.getElementById('cookietb').append(thDemo);
        // console.log(this.cookiesPerHour)
        //loop through cookies per hour and pass into the table
        for (let i = 0; i < this.cookiesPerHour.length; i++) {
            let td = document.createElement("td")
            td.innerHTML = this.cookiesPerHour[i]
            row.append(td)
        } //use "this" when referring to stand inside of the method and stand when not inside of a stand method 
            for (let i = 0; i < this.cookiesPerHour.length; i++) {
                sum += this.cookiesPerHour[i];
                
            }
            
            
            let td2 = document.createElement("td")
                td2.innerHTML = sum 
                row.append(td2)
        

        table.append(row)

    }

    //////console.log(stand.render())
    return stand;

}
let table = document.getElementById('cookietb')
let tr = document.createElement('tr')
// let th = document.createElement('th')
// th.innerHTML = "6am"
// let th2 = document.createElement('th')
// th2.innerHTML = "7am"
let emptyTH = document.createElement('th')
tr.append(emptyTH)
for (let i = 0; i < hoursOfOperation.length; i++) {
    let th = document.createElement("th")
    th.innerHTML = hoursOfOperation[i]
    tr.append(th)

}
// tr.append(th)
// tr.append(th2)


table.append(tr)


//=========================================================================================Creating the Totals Row in the Table=========================================================================================
// const locationsArray = [seattle, tokyo, dubai, paris, lima];    
// for (let i = 0; i < this.locations.length; i++) {
//     let sum = 0;
//     let locations = document.createElement ('locations')
//     tr.append(locations)
// }






// creating objects each with unique data

const seattle = cookieStandLocation(23, 65, 6.3, 'Seattle', hoursOfOperation);
seattle.getCustomers(); //use a dot to access properties of an object
seattle.getCookies(); //parentheses after a function calls/invokes the function
seattle.render();

//example
// const animal = function(name, color, age){
//     this.name = name;
//     this.color = color;
//     this.age = age;

//     let speak = function(name){
//         ////console.log("Hi! I'm a " + name + "!");
//     }
// }

// const doggy = animal("Doggy", "purple", 3);
// doggy.speak()

const tokyo = cookieStandLocation(3, 24, 1.2, 'Tokyo', hoursOfOperation);
tokyo.getCustomers();
tokyo.getCookies();
tokyo.render();

const dubai = cookieStandLocation(11, 38, 3.7, 'Dubai', hoursOfOperation);
dubai.getCustomers();
dubai.getCookies();
dubai.render();

const paris = cookieStandLocation(20, 38, 2.3, 'Paris', hoursOfOperation);
paris.getCustomers();
paris.getCookies();
paris.render();

const lima = cookieStandLocation(2, 16, 4.6, 'Lima', hoursOfOperation);
lima.getCustomers();
lima.getCookies();
lima.render();


const locationsArray = [seattle, tokyo, dubai, paris, lima]; 
let emptyTD = document.createElement("td")
let footer = document.createElement("tfoot")
let totalsRow = document.createElement("tr")
totalsRow.append(emptyTD)
for (let i = 0; i < hoursOfOperation.length; i++) {
let hourlyTotals = 0;
for (let x = 0; x < locationsArray.length; x++) {
    hourlyTotals += locationsArray[x].cookiesPerHour[i];
}
let tdFoot = document.createElement("td")
tdFoot.innerHTML = hourlyTotals
totalsRow.append(tdFoot)
}
footer.append(totalsRow)
table.append(footer)




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



    // 7am: 20 cookies
    // 8am: 35 cookies
    // 9am: 48 cookies
    // 10am: 56 cookies
    // 11am: 77 cookies
    // 12pm: 93 cookies
    // 1pm: 144 cookies
    // 2pm: 119 cookies
    // 3pm: 84 cookies
    // 4pm: 61 cookies
    // 5pm: 23 cookies
    // 6pm: 42 cookies
    // 7pm: 57 cookies
    // Total: 875 cookies

