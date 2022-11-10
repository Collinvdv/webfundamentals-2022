var person = {
    firstname : "Collin",
    familyname : "Van der Vorst",
    age : 31,
    height : 1.94,
    isUgly: true,
    partner: {
        firstname: "Lisa",
        familyname: "Van der Vorst"
    },
    goats: [
        "T-rex",
        "Connie",
        "Clyde",
        "Collin"
    ]
};

var goats = [
    "T-rex",
    "Connie",
    "Clyde",
    "Collin",
    "Lisa"
];

for (var index = 0; index < goats.length; index++) {
    console.log(goats[index]);
}

