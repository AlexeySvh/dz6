var mercedes = {
    name: "Mercedes",
    model: "GL450",
    engine: "4.0",
    year: 2015,
    color: "black",
    hp: 300,
    forSale: true
}
var bmw = {
    name: "BMW",
    model: "X6",
    engine: "3.0",
    year: 2023,
    color: "white",
    hp: 313,
    forSale: false
}

var audi = {
    name: "Audi",
    model: "Q7",
    engine: "3.0",
    year: 2025,
    color: "blue",
    hp: 249,
    forSale: true
}
var year = 2026;

mercedes.carAge = year - mercedes.year;
bmw.carAge = year - bmw.year;
audi.carAge = year - audi.year;

var names = mercedes.name + ": " + mercedes.model + ", " + bmw.name + ": " + bmw.model + ", " + audi.name + ": " + audi.model;

var averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;

var atLeastOneForSale;

if (mercedes.forSale || bmw.forSale || audi.forSale) {
    atLeastOneForSale = "ДА"
} else {
    atLeastOneForSale = "НЕТ";
}

var allYoungerThanFive;

if (mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5) {
    allYoungerThanFive = "ДА";
} else {
    allYoungerThanFive = "НЕТ";
}

var atLeastOneHasLittleHp;

if (mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250) {
    atLeastOneHasLittleHp = "ДА";
} else {
    atLeastOneHasLittleHp = "НЕТ";
}

alert("Марка и модель всех авто - " + names);
alert("Средний возраст всех авто - " + averageAge);
alert("Хотя бы один автомобиль продаётся? " + atLeastOneForSale);
alert("Все авто младше 5 лет? " + allYoungerThanFive);
alert("Хоть один автомобиль имеет менее 250 лошадиных сил? " + atLeastOneHasLittleHp);

var car = mercedes;

if (car.name === "Mercedes" && car.model === "GL450") {
    alert("Мой любимый мерседес!")
} else {
    alert("Это " + car.name + car.model)
}

if (car.carAge === 0) {
    alert("Новый автомобиль")
} else if (car.carAge <= 3) {
    alert("Свежий автомобиль")
} else {
    alert("Лет этому авто: " + car.carAge)
}

var consumption;

car.engine > 3.0 ? consumption = "Прожорливый автомобиль" : consumption = "Экономичный автомобиль";

alert(consumption);

var russianColor;

switch (car.color) {
    case "black":
        russianColor = "чёрный";
        break;
    case "silver":
        russianColor = "серебристый";
        break;
    case "red":
        russianColor = "красный";
        break;
    case "white":
        russianColor = "белый";
        break;
    case "gray":
        russianColor = "серый";
        break;
    case "blue":
        russianColor = "синий";
        break;
    default: russianColor = "Невозможно определить цвет автомобиля";
}

alert("Цвет автомобиля : "+ russianColor);