// welcome
var name = prompt('Enter your name'); 
alert('Hello, ' + name);

console.log('Hello, ' + name);

// triangleArea
var base = prompt("podaj podstawe a"),
    height = prompt("podaj wysokosc h"),
    triangleArea = (base * height) / 2;

alert('Pole wynosi:' + triangleArea);

console.log('Triangle field with base a: ' + base + ' and height h: ' + h + ' is equal to: ' + triangleArea);

// boolean values and logical operators
var a = prompt("podaj wartosc dla a"),
    b = prompt("podaj wartosc dla b");

if (!isNaN(a) && !isNaN(b)) {
    var value = (a * a) + (2 * a * b) - (b * b);
    if (value > 0) {
        console.log('Wynik jest dodatni');
        alert('Wynik jest dodatni:' + value);
    } else if (value < 0) {
        console.log('Wynik jest ujemny');
        alert('Wynik jest ujemny:' + value);
    } else {
    console.log('Wynik równa się 0');
    alert('Wynik rowny 0:' + value);
    }
}
else {
    alert('Podano zla wartosc')
}
