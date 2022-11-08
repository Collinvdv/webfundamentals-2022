var vierkant1 = {
    lengte: 10,
    breedte: 15
}

var oppervlakte = areaRect(vierkant1.lengte, vierkant1.breedte);
console.log(oppervlakte);

var vierkant2 = {
    lengte: 54,
    breedte: 12
}

var oppervlakte2 = areaRect(vierkant2.lengte, vierkant2.breedte);
console.log(oppervlakte2);


/*
    Handige functies
*/
function areaRect(lengte, breedte) {
    return lengte * breedte;
}