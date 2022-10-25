// var firstname = "Collin", familyname = "Vdv";
// var lastname = "Van der Vorst";
// var fullname = firstname + " " + lastname;
// var nickname = "The awesome teacher";
// var fullnameWithNickname = firstname + " \"" + nickname + "\" " + lastname;

// var isAwesome = true;
// var age = 31;
// var length = 1.94;

// console.log(typeof(firstname));
// console.log(typeof(isAwesome));
// console.log(typeof(age));

// length = "collin";

// O: Collin "The awesome teacher" Van der Vorst

var firstname = "Collin";
var lastname = "Van der Vorst"
var age = 31;
var length = 1.94;
var isMarried = true;

var person = {
    "firstname": "Collin",
    "lastname": "Van der Vorst",
    "age": 31,
    "height": 1.94,
    "isMarried": true,
    "partner" : {
        "firstname": "Lisa",
        "lastname": "Van der Vorst",
        "age" : 26
    },
    "hobbies": [
        "gardening",
        "boxing",
        "music"
    ],
    "children": [
        {
            "name": "John",
            "age": 2
        },
        {
            "name": "Not christiano",
            "age": 3
        },
    ]
};

// console.log(person.children[0].name);

// O: Collin Van der Vorst partner is Lisa Van der Vorst
// console.log(person.firstname + " " + person.lastname + " partner is " + person.partner.firstname + " " + person.partner.lastname);

// ARRAY (PYTHON: LIST, C#: ARRAY)
// var kid1 = "Jebus";
// var kid2 = "John";
// var kid3 = "Lionel";

// var children = ["Jebus", "John", "Lionel"];
// console.log(children[0]); // Jebus
// console.log(children.length);

// console.log(children[2]);

var number1 = 5;
var number2 = 10;

// console.log(number1 <= number2); // true 
// console.log(number1 == number2); // false
// console.log(number1 != number2); // true

// console.log("5" == 5); // true
// console.log("5" === 5); // true

// var number1 = 5;
// if (number1 < 10) {
//     // TRUE LANE
//     console.log("Number 1 is indeed smaller then 10");
// } else if(number1 < 100) {
//     // True lane 
//     console.log("Number 1 is indeed smaller then 100 but higher then 10");
// } else {
//     // FALSE LANE
//     console.log("Number will be bigger then 100")
// }





// BOUNCER APPLICATION
// Ask the age, and only let people enter when they are older then 18 
// All the people older then 30 don't let the in 
// ONLY FEMALES
// ACCEPT BRIBE MONEY, WHEN IT IS MORE THEN 100 EURO

// && -> AND
// || -> OR
// 
// I: F
// I: 19
// O: enter

// I: M
// I: 19
// O: get away
// var inputAge = parseInt(prompt("What is your age?"));
// var inputGender = prompt("What is your gender?"); // f or m
// var inputBribeMoney = parseInt(prompt("Can you give me some money?"));

// if (
//     (
//         inputAge >= 18  && inputAge < 30 && inputGender =="f"
//     )
//     ||
//     inputBribeMoney >= 100
// ) {
//     console.log("enter");
// } else {
//     console.log("no enter");
// }

// var inputFruit = prompt("Can give me your favorite fruit");

// switch(inputFruit) {
//     case "orange":
//         console.log("How do you know the orange was bullied? Because it was beaten to a pulp.")
//         break;
//     case "apple":
//         console.log("What kind of apple isn’t an apple? A pineapple.");
//         break;
//     default: 
//         console.log("I don't know that fruit");
// }

// if (inputFruit === "orange") {
//     console.log("orange joke");
// } else if (inputFruit === "apple") {
//     console.log("apple joke");
// } else {
//     console.log("don't know the fruit");
// }

var children = ["John", "Michael", "Aisha"];
// var crazyArra = ["Collin", 10, true];
// O: John
// O: Michael
// O: Aisha

// console.log(children[0]);
// console.log(children[1]);
// console.log(children[2]);

// for (var childIndex = 0; childIndex < children.length; childIndex++) {
//     console.log(children[childIndex]);
// }

// for (var childIndex in children) {
//     console.log(children[childIndex]);
// }


// JAY Z 
// CREATE A PLATFORM 
// ADD PASSWORD
// P: beyonce
// WHEN THEY DON'T TYPE beyonce ASK IT AGAIN 
// THE CAN ONLY TRY 3 TIMES
var password = "beyonce";
var inputPassword = prompt("GIVE ME YOUR PASSWORD");
var amountOfTries = 1;

// while (password != inputPassword && amountOfTries < 3) {
//     amountOfTries++;
//     inputPassword = prompt("GIVE ME YOUR PASSWORD");
// }

while (password != inputPassword) {
    amountOfTries++;
    if (amountOfTries == 3) {
        break;
    }
    
    inputPassword = prompt("GIVE ME YOUR PASSWORD");
}

// for (var tries = 0; tries < 3; tries++) {

// }


