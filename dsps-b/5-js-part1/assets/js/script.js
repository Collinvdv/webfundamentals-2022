var firstName = "Collin";
var lastName = "Van der Vorst";
// O: Collin "The Big One" Van der Vorst
var fullname = firstName + " \"The Big One\" " + lastName;
var age = 31;
var length = 1.94;
var isAwesome = true;

var personCollin = {
    firstname: "Collin",
    lastname: "Van der Vorst",
    age: 31,
    length: 1.94,
    isAwesome: true,
    partner: {
        firstname: "Lisa",
        lastname: "Van der Vorst"
    },
    goats: [
        {
            name: "T-rex",
            age: 3
        },
        {
            name: "Clyde",
            age: 3
        },
        {
            name: "Conny",
            age: 5
        }
    ]
};

// IF STATEMENTS 
var age = 31;

// &&: ALL CONDITIONS SHOULD BE TRUE
// ||: at least 1 condition should be true
if (age > 18 ) {
    console.log("Enter my club, wizkid");
} else if (age > 12) {
    console.log("Go to the kids-disco");
} else {
    console.log("You can not enter");
}


var fruit = "apple";

switch (fruit.toLowerCase()) {
    case "grapefruit":
        console.log("something with wine");
        break;
    case "apple":
        console.log("something with cider");
        break;
    default:
        console.log("I don't know the fruit");
};
console.log("5" == 5); // true
console.log("5" === 5); // false


// 
var goats = ["trex", "conny", "clyde"];

for (var index = 0; index < goats.length; index++) {
    console.log(goats[index]);
}

for (var index in goats) {
    console.log(goats[index]);
}


goats.forEach((goat) => {
    console.log(goat);
});

// WHILE LOOPS 
var password = prompt();

while (password != "ilovewizzkid") {
    password = prompt();
}

// WHILE LOOPS
var password;

do {
    password = prompt();
} while (password != "ilovewizzkid")