/*
    Oefeningske

    4 variable (firstname, nickname, lastname, fullname)
    O: Collin "The awesome one" Van der Vorst
*/
// var firstname = prompt("Give me your firstname");
// var nickname = prompt("Give me your nickname");
// var lastname = prompt("Give me your lastname");
// var fullname = firstname + " \" " + nickname + " \" " + lastname;

// console.log(fullname);



/*
    Klas met 4 studentjs
    Mo
    John
    Mike
    Anna
*/

// var imsStudents = ["Mo", "John", "Mike", "Anna"];
// var imsAmountOfStudents = imsStudents.length; // 4 
// console.log(imsStudents[0]);
// console.log(imsStudents[1]);
// console.log(imsStudents[2]);
// console.log(imsStudents[3]);

// Optie 1
// for (var index = 0; index <= (imsAmountOfStudents - 1); index++) {
//     console.log(imsStudents[index]);
// }

// Optie 2 (Optimaler)
// for (var index = 0; index < imsAmountOfStudents ; index++) {
//     console.log(imsStudents[index]);
// }
// var collin = {
//     "firstname" : "Collin",
//     "lastname" : "Van der Vorst",
//     "age" : 31,
//     "hobbies" : [
//         "gaming",
//         "running"
//     ],
//     "jobs" : [
//         {
//             "function" : "web developer",
//             "company" : "freelance"
//         },
//         {
//             "function" : "docent",
//             "company" : "thomas more"
//         },
//     ]
// };

// for (var jobIndex = 0; jobIndex < collin.jobs.length; jobIndex++) {
//     var job = collin.jobs[jobIndex];
//     console.log(job.function + " - " + job.company);
// }
// Web developer - freelance
// Docent - thomas more


// var number1 = parseInt(prompt("Give me number1"));
// var number2 = parseInt(prompt("Give me number2"));

// console.log(number1 + number2);
// console.log(number1 * number2);
// console.log(number1 - number2);
// console.log(number1 / number2);
// console.log(number1 % number2); // rest waarde

// var number3 = 5;

// number3 = number3 * 5;
// number3 *= 5;
// number3++; // + 1


// 
// TOMORROWLAND 
// LEEFTIJD VRAGEN
// >=18 -> dan mogen ze binnen
// prompt -> give me your age
// >= 65 -> no enter

// I: 17
// I: M
// I: 100
// O: ENTER

// I: 19
// I: F
// I: 0
// O: ENTER

// var inputAge = parseInt(prompt("Give me your age"));
// var inputGender = prompt("Give me your gender (F or M)");

// if (inputAge >= 18 && inputAge <=30 && inputGender == "F") {
//     console.log("Enter");
// }
// else {
//     var inputMoney = parseInt(prompt("Give me your money"));

//     if (inputMoney >= 100) {
//         console.log("Enter");
//     } else {
//         console.log("No enter");
//     }
// }

// var fruit = prompt("Wat is jouw favoriet fruitje?");

// apple => the apple doesn't fall far from the tree
// orange => orange is the new black
// default => Ik ken dat fruitje niet

// switch (fruit) {
//     case "apple":
//         console.log("the apple doesn't fall far from the tree");
//         break;
//     case "orange":
//         console.log("orange is the new black");
//         break;
//     default:
//         console.log("Ik kan dat fruitje niet");
//         break;
// }

// if (fruit == "apple") {
//     //
// } else if (fruit === "orange") {
//     // ...
// } else {
//     // ..
// }


//
// PASSWORD: xoxo70
// Elke gebruiker mag maar 3 proberen
// Als ze meer dan 3x foute passwoord hebben gegeven -> alert NO ENTER
// 

var inputPassword = prompt("Give me your password");
var countMismatch = 1;

while (inputPassword != "xoxo70" && countMismatch < 3) {
    countMismatch++;
    console.log("countMismatch", countMismatch);
    inputPassword = prompt("Give me your password");
}

if (countMismatch >= 3) {
    alert("NO ENTER");
}
