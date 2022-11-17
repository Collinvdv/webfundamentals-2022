var person1 = {
    firstname: "Collin",
    lastname: "Van der Vorst",
    age: 31,
    height: 1.94,
    isUgly: true,
    partner: {
        firstname: "Lisa",
        lastname: "Van der Vorst"
    }
};

person1.firstname = "lisa";

var goats = [
    "T-rex",
    "Conny",
    "Clyde",
    "Collin",
    "Messi"
];

for (var index = 0; index < goats.length; index++) {
    console.log(goats[index]);
}
