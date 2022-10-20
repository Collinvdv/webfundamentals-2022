/*

*/
// var firstname = "Collin";
// var lastname = "Van der Vorst";
// var nickname ="The awesome one";
// var fullname = firstname + " " + lastname;

// var age = 31;
// var length = 1.94;

// var isAwesome = true;
// var is_awesome = true;

// console.log(typeof(firstname));
// console.log(typeof(age));
// console.log(typeof(length));
// console.log(typeof(isAwesome));

// var children = ["Willis", "Bob", "Calinne"];
// var grades = [5, 10, 20];
// var isAwsome = [false, true, false];
// var crazyArray = ["collin", true, 1.94];
// console.log(children[0]); // Willis
// console.log(children[1]); // Bob
// console.log(children[2]); // Calinne
// console.log(children[3]); // ERROR ALERT
// console.log(children.length); // 3 children


// Calinne as a person
// var personCalinne = {
//     "name": "Calinne",
//     "age": 19,
//     "length": 1.64,
//     "isAwesome": true,
//     "hobbies": [
//         "Programming",
//         "Violin",
//         "Singing"
//     ],
//     "favoriteArtist": {
//         "name": "WizKid",
//         "country": "Nigeria"
//     },
//     "children": [
//         {
//             "name": "Collin",
//             "age": 2
//         },
//         {
//             "name": "Maria",
//             "age": 5
//         }
//     ]
// };
// console.log(personCalinne.length); //1.64
// console.log(personCalinne.age); //19
// console.log(personCalinne.hobbies); // []
// console.log(personCalinne.hobbies[0]); // Programming
// console.log(personCalinne.favoriteArtist.country);

// var number1 = 10;
// var number2 = 20;

// console.log(number1 + number2);
// console.log(number1 - number2);
// console.log(number1 * number2);
// console.log(number1 / number2);
// console.log(number1 % number2);

// number1 += 1;
// number1 = number1 + 1;
// number1++;

// var number1 = 5;
// var number2 = 10;

// && and operator 
// ||

// console.log(number1 <= number2); //true
// console.log(number1 >= number2); //false
// console.log(number1 == number2); //false
// console.log(number1 === number2); //false
// console.log(number1 != number2); //true, not equal to 

// var age = 18;

// if (age >= 18) {
//     // This code will be triggered when condition is true
// } else if(age >=12) {
//     // this code will be triggered when age > 12
// }
// else {
//     // This code willbe triggered when condition is false
// }

/*
    Tomorrowland called me. 
    And I can only allow party animals older then 18
    But when they are older then 30 -> no enter
    Now only females between 18 and 30 can enter TML
    When they enter and give me 100 euros, i will let them in

    // I: 19
    // I: F
    // O: Enter

    // I: 20
    // I: M
    // O: No enter

    // I: 31
    // O: No enter
*/
// var inputAge = parseInt(prompt("Give me your age"));
// var inputGender = prompt("Give me your gender");
// var inputMoney= parseInt(prompt("What are you willing pay?"));

// if  (
//         (inputAge >= 18 && inputAge < 30 && inputGender === "F")
//         ||
//         inputMoney >= 100
//     ) {
//     console.log("Enter");
// } else {
//     console.log("No enter");
// }

// var fruit = prompt("What is your favorite fruit?");

// switch (fruit) {
//     case "apple":
//         console.log("What kind of apple isn't an apple? A pineapple.");
//         break;
//     case "orange":
//         console.log(" What happens when you rub two oranges against each other? You get Pulp Friction.");
//         break;
//     default: 
//         console.log("I don't know that fruit, man");
//         break;
// }

// if (fruit === "apple") {
//     console.log("what kind...");
// } else if (fruit === "orange") {
//     console.log("what happen ....");
// } else {
//     console.log("I don't know that fruit");
// }

// var children = ["Collin", "Lisa", "WizKid", "Jebus"];
// // O: Collin
// // O: Lisa
// // O: WizKid

// for (var index = 0; index < children.length; index++) {
//     console.log(index + " = " + children[index])
// }

// for (var index in children) {
//     console.log(index + " = " + children[index]);
// }

// Password
// You only have 3 changes to fill in the correct password, 
// if not then you don't enter

var password = "ilovewizkid";
var inputPassword = prompt("Give me the password to enter this page");
var amountOfMistakes = 0;

while (inputPassword != password ) {
    amountOfMistakes++;
    if (amountOfMistakes == 3) {
        break;
    }
    inputPassword = prompt("Give me the password to enter this page");
}