var firstname = "Collin";
var familyname = "van der vorst";
var fullname = firstname + "\"the big one\" " + familyname;
var age = 31;
var height = 1.94;
var isAwesome = true;

var person = {
    firstname: "Collin",
    familyname: "Van der Vorst",
    age: 31,
    height: 1.94,
    isAwesome: true,
    partner: {
        firstname: "Lisa",
        familyname: "Van der Vorst"
    }
};
console.log(person.firstname + " loves " + person.partner.firstname);

var goats = ["t-rex", "connie", "clyde"];

for (var index = 0; index < goats.length; index++) {
    console.log(goats[index]);
}

for (var index in goats) {
    console.log(goats[index]);
}

/*
 ECMASCRIPT 6 ES6
 JAVASCRIPT IN ES5
*/
goats.forEach((goat) => {
    console.log(goat);
});


var goats = [
    {
        name: "T-rex",
        age: 3
    },
    {
        name: "Clyde",
        age: 3
    },
    {
        name: "Connie",
        age: 5
    },
];

/*
    IF/ELSE
*/
var age = parseInt(prompt());

if (age > 18) {
    console.log("enter the disco");
} else if (age > 12) {
    console.log("go to the ballpark");
} else {
    console.log("you can not enter");
}

/*
    SWITCH
*/
var fruit = prompt();

switch (fruit.toLowerCase()) {
    case "apple":
        console.log("me gusta");
        break;
    case "pineapple":
        console.log("don't like");
        break;
    default:
        console.log("I don't know the fruit");
        break;
}


/*
    While loop
    p: password123
*/
var password = prompt();

while (password != "password123") {
    password = prompt();
}

/*
    Do while loop
*/

var password;

do {
    password = prompt();
} while (password != "password123");