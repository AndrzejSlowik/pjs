// moje działania i zadania

console.log("działa");

// zadania

// 1

// Utworz funkcje ktora przyjmuje jako parametry 3 liczby - dodaje pierwwsza z druga i dzieli przez 3, pamietaj o warunku ktory sprawdza czy nie dzielimy przez 0
// jezeli:
// nie dzielimy przez 0 to zwroc wynik
// - dzielimy przez 0 zwroc undefined
// pamietamy o kolejnosci wykonywania dzialan

const oblicz = (liczba1, liczba2, liczba3) => {
// Sprawdzenie warunku dzielenia przez 0
if (liczba3 === 0) {
return undefined;
}

// Dodanie pierwszej i drugiej liczby, a następnie podzielenie przez trzecią
const wynik = (liczba1 + liczba2) / liczba3;
  
// Zwrócenie wyniku
return wynik;
};

// Przykładowe użycie funkcji
console.log(oblicz(5, 10, 3)); // Wyświetli: 5
console.log(oblicz(0, 10, 2)); // Wyświetli: 5
console.log(oblicz(5, 0, 3)); // Wyświetli: undefined


// 2

// Utworz funkcje strzalkowa ktora przyjmuje 2 parametry oraz  zwroci nam wieksza liczbe

const wiekszaLiczba = (liczba1, liczba2) => {
return liczba1 > liczba2 ? liczba1 : liczba2;
};
  
// Przykładowe użycie funkcji
console.log(wiekszaLiczba(5, 10)); // Wyświetli: 10
console.log(wiekszaLiczba(20, 5)); // Wyświetli: 20
console.log(wiekszaLiczba(-3, -8)); // Wyświetli: -3


// 3

// Utworz funkcje ktora zwraca tablice skladajaca sie z dwóch zmiennych

const utworzTablice = (zmienna1, zmienna2) => {
return [zmienna1, zmienna2];
};
  
// Przykładowe użycie funkcji
const mojaTablica = utworzTablice('wartosc1', 'wartosc2');
console.log(mojaTablica); // Wyświetli: ['wartosc1', 'wartosc2']



// 4

// Utworz funkcje ktora zwraca tablice 5 elementów
// - nastepnie odczytaj element 1 i 4 za pomoca destrukturyzacji tablicowej

const funkcjaTablicowa = () => {
// Zwraca tablicę pięciu elementów
return [1, 2, 3, 4, 5];
};
  
// Wywołanie funkcji i przypisanie wyniku do zmiennej
const mojaTablica1 = funkcjaTablicowa();
  
// Destrukturyzacja tablicowa dla odczytu elementów pierwszego i czwartego
const [elementPierwszy, , , elementCzwarty] = mojaTablica1;
  
// Wyświetlenie odczytanych elementów
console.log(elementPierwszy); // Wyświetli: 1
console.log(elementCzwarty); // Wyświetli: 4



// 5

// utworz h1 z klasa main-header, pobierz go w JS i nadpisz mu rozmiar czcionki na 80

// Pobieramy element h1 z klasą "main-header"
const header = document.querySelector('.main-header');

// Nadpisujemy rozmiar czcionki na 80 pikseli
header.style.fontSize = '80px';
















// wykład

const value = 0;
const object = {};
const tab = [];
var varValue;

// gdzies tam w kodzie
varValue = 0;

// nie mozna
// object = { name: "tekst" };
// tab = [1, 2, 3];

// mozna
// sposób na obiekty, dorzucenie wartosci za pomoca properties
// sposób na tablice > metody tablicowe

// console.log(typeof value);
// console.log(tab);

// metody tablicowe

// zwracaja tablice
// map => [] - sluzy do modyfikacji elementow w tablicy
const items = ["grabie", "szczotka", "grzebien", "durszlak"];
// tak nie robimy
const modifiedItems = items.map((item) => {
  // jezeli item ma wiecej niz 6 znakow to zwroc item-dodatek
  if (item.length > 6) return `${item}-dodatek`;

  // w innym wypadku zwroc item
  return item;
});
// console.log(modifiedItems);

// filter => [] - sluzy do przefiltrowawnia tablicy po warunku
// tablica.filter(() => warunek)
// 1 iteracja
// const item = items[0]
// 2 iteracja
// const item = items[1]
// 3 iteracja
// const item = items[2]
const filteredItems = items.filter((item) => item.length > 6);
// console.log("przefiltrowana tablica", filteredItems);

// nic nie zwracaja
// forEach => undefined
const secondTab = [];
items.forEach((item) => {
  // dzieki iteracji dodajemy kazdy element do nowej tablicy
  secondTab.push(item);
  // console.log(item);
});

// console.log("second tab", secondTab);

// funkcja - function
// console.log("zmienna var", secondName);
// var secondName = "test";

const thirdValue = 0;
// console.log(thirdValue);

function add(a, b) {
  // console.log(a + b);

  // slowko kluczowe - return - mowi nam o tym co chcemy zwrocic z funkcji
  if (a + b > 3) return 4;

  return a + b;
}

// wywolanie funkcji - uruchomienie
const addValue = add(5, 2); // -> add zwraca nam a+b czyli 3 i mozemy to przypisac jako wartosc do zmiennej;

// console.log("addValue", addValue);

// funkcja anonimowa
// (a, b) => { return a+b }
// callback jest funkcja zwrotna ? nie zwracamy wartosci ale zwracamy funkcje

// gdy nie ma klamerek to  slowko return jest domyslnie po strzalce
// gdy zwracamy obiekt bez slowka "return" musimy owinac nawiasami => ({})
const someFunction = (a, b) => ({});

// console.log("some function", someFunction(3, 4));

const secondSomeFunction = function addValues(a, b) {
  return a + b;
};
secondSomeFunction(5, 6);

// zadanie 2 za pomoca operatora trojskladnikowego > warunek ? jesli true : jesli false

// przed
const biggerValue = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

// po

const betterBiggerValue = (a, b) => (a > b ? a : b);

// console.log(typeof betterBiggerValue(1, 2));

// switch

// obiekty

// deklaracja obiekty
const person = {
  name: "tadek",
  lastName: "norek",
  age: 30,
  isMan: true,
};

// odczyt danych w starym stylu
// console.log(person.name, person.lastName, person.age, person.isMan);

// odczyt danych w nowym stylu
// destrukturyzacja obiektów
// wyciaganie wlasciwosci z obiektu - obieranie owoca ze skóry

// wytlumaczenie destrukturyzacji
// const name = person.name;
// const lastName = person.lastName;
// const age = person.age;

const age = 10;

// const {co wyciagamy} = z_czego_wyciagamy
// jezeli nie mamy pewnosci przy odczycie wlasciwosci obiektu - mozna dodac parametr domyslny "weight = 0"
const { name: personName, lastName, age: personAge, weight = 0 } = person;
// const personName = person.name

// console.log(personName, lastName, personAge, weight);

// 1 sposob na odczyt, zmiane i dodanie wlasciwwosci - za pomoca kropki "."

// console.log(person.name);
// przypisywanie wartosci
person.name = "Andrzej";

// tworzenie nowej wlasciwosci w obiekcie

person.height = 120;

// chcemy utworzyc wlasciosc person-id

// II sposob na odczyt, zmiane i dodanie wlasciwwosci - za pomoca tablicy

// odczyt
// console.log(person["person-id"]);

// zmiane wartosci

person['age'] = 1125

const input = {
  name: 'email',
  value: 'test@gmail.com',
}
// dodanie wlasciwosci
person['person-id'] = 'id person'

// dodanie wartosci input po kluczu (name)
person[input.name] = input.value;
// console.log(person);

// destrukturyzacja tablicowa => const [el1, el2,, el4] = tablica;
const bigTab = ['Janek', 'Tolek', 'Anatol'];

const getBigTab = () => ['Janek', 'Tolek', 'Anatol'];

const getBigTabValue = getBigTab()

const [namePerson1, namePerson2] = getBigTab(); // const [namePerson1, namePerson2] = bigTab

// to samo co:
// const namePerson1 = bigTab[0]
// const namePerson2 = bigTab[1]

// wybieranie elementu z pominieciem kolejnych za pomoca pustych pól
const [,,namePerson3] = bigTab;

// to samo co:
// const namePerson3 = bigTab[2]

// console.log(namePerson3)

// zadanie z destrukturyzacja tablicy
const getState = () => {
  const value = 1000;
  const tab = ['123',2,3];

  return [value, tab];
}

const stateValue = getState();
// console.log('state value',stateValue)
// console.log('///')
// console.log('wartosci state value', stateValue[0], stateValue[1])

const [firstItem, secondItem] = getState();
// to samo co:
// const [firstItem, secondItem] = stateValue;
// console.log('////')
const emailInput = document.querySelector('html body div');
const tabOfElements = document.querySelectorAll('.klasa');

// starsze podejscie
const oldEmailInputByID = document.getElementById('emailID');
const oldEmailInputByClass = document.getElementsByClassName('email');
console.log(emailInput.value);
console.log(oldEmailInputByID)
console.log(oldEmailInputByClass)