console.log("external js file");

var firstname = "Collin";
var lastname = "Van der Vorst";
var fullname = firstname + " " + lastname;
var nickname = "The big one";
var fullnameWithNickname = firstname + " \" " + nickname + " \" " + lastname;
var age = 31;
var length = 1.94;

age++; // +1 van uw age
age += 1; // +1 van uw age
age = age + 1; // +1 van uw age

var personCollin = {
    firstname: "Collin",
    lastname: "Van der Vorst",
    age: 31,
    height: 1.94,
    isMarried: true,
    children: ["Jos", "Maria"],
    female: {

    },
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    }
};

// Jos, Maria & Mo 
var children1 = "Jos";
var children2 = "Maria";
var children3 = "Mo";

var children = ["Jos", "Maria", "Mo"];
children.push("Anna");

// for (start; end; increment/decrement)
for (var index = 0; index < children.length; index++) {
    console.log("Kind " + (index + 1) + " : "+ children[index]);
};

for (var childIndex in children) {
    var childNbr = parseInt(childIndex) + 1;
    console.log("Kind " + childNbr + " : "+ children[childIndex]);
};

children.forEach((child) => {
    console.log(child);
});


/*
    while
    password: knockknock
*/

var password = prompt("Give me the password");

while (password != "knockknock") {
    password = prompt("Give me the password");
}


var password2;
do {
    password2 = prompt("Give me the password");
} while (password != "knockknock");


if (password == "knockknock" || password == "knickknick") {
    console.log("Je mag binnen");
} else if() {
    console.log("je mag niet binnen");
} else {

}

console.log("5" == 5); // true
console.log("5" === 5); // false

var fruit = "Orange"; 

switch (fruit.toLowerCase()) {
    case "orange":
        console.log("Mmmhhhh oranges");
        break;
    case "apple":
        console.log("Appels is niet ver van dendermonde");
        break;
    default:
        console.log("Ik ken dat niet fruitje niet");
        break;
}