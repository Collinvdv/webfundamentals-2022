var rectangle1 = {
    height: 5,
    width: 10
}

var rectangle2 = {
    height: 15,
    width: 7
}

// perimeter 
// F: 2h + 2w 
var perimeterRectangle1 = calculatePerimeterForRectangle(rectangle1.width, rectangle1.height);
var perimeterRectangle2 = calculatePerimeterForRectangle(rectangle2.width, rectangle2.height);

console.log(perimeterRectangle1, perimeterRectangle2);

function calculatePerimeterForRectangle(width, height) {
    return (2 * width) + (2 * height);
}