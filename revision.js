// zadania powtorzeniowe - 9.03

console.log('działa')

// Zadanie 1 - potwórzenie JS
// Zadeklaruj tablicę o nazwie "myAwesomeTab" zawierającą pięć elementów typu string.
// Następnie wyświetl drugi element tablicy w konsoli przeglądarki za pomocą destrukturyzacji tej
// tablicy.

// Deklaracja tablicy "myAwesomeTab" zawierającej pięć elementów typu string
const myAwesomeTab = ['element1', 'element2', 'element3', 'element4', 'element5'];

// Destrukturyzacja tablicowa do odczytu drugiego elementu
const [, drugiElement] = myAwesomeTab;

// Wyświetlenie drugiego elementu tablicy w konsoli przeglądarki
console.log(drugiElement);



// Zadanie 2 - powtórzenie JS
// . Stwórz obiekt o nazwie "person" zawierający następujące pola: "name", "lastName", "age" i
// "hobbies" - pole tablicy z zainteresowawniamitypu string. Zainicjuj te pola odpowiednimi
// wartościami dla dowolnej osoby. Następnie wyświetl w konsoli przeglądarki wiek i
// zainteresowania tej osoby za pomoca destrukturyzacji obiektu.

// Stworzenie obiektu "person" z wymienionymi polami
const person = {
name: 'Andrzej',
lastName: 'Słowik',
age: 38,
hobbies: ['sport', 'muzyka', 'podróże']
};
  
// Destrukturyzacja obiektu do odczytu wieku i zainteresowań
const { age, hobbies } = person;
  
// Wyświetlenie wieku i zainteresowań osoby w konsoli przeglądarki
console.log("Wiek:", age);
console.log("Zainteresowania:", hobbies);



// Zadanie 3 - powtórzenie JS
// Masz tablicę "numbers" zawierającą kilka liczb całkowitych. Dołącz liczbę 10 na koniec tej
// tablicy. Następnie masz obiekt "user" zawierający pola "name" i "email". Dodaj do obiektu
// "user" nowe pole "age" i przypisz mu wartość 25.

// Tablica "numbers" zawierająca kilka liczb całkowitych
const numbers = [1, 2, 3, 4, 5];

// Dołączenie liczby 10 na koniec tablicy "numbers"
numbers.push(10);

// Wyświetlenie zmodyfikowanej tablicy "numbers" w konsoli
console.log(numbers); // Wyświetli: [1, 2, 3, 4, 5, 10]

// Obiekt "user" zawierający pola "name" i "email"
const user = {
name: 'Andrzej',
email: 'andrzej.a.slowik@gmail.com'
};

// Dodanie nowego pola "age" do obiektu "user" i przypisanie mu wartości 25
user.age = 25;

// Wyświetlenie zmodyfikowanego obiektu "user" w konsoli
console.log(user); // Wyświetli: { name: 'John', email: 'john@example.com', age: 25 }



// Zadanie 4 - powtórzenie JS
// Utwórz funkcje strzałkową "add" która przyjmuje dwa parametry funkcji "a" oraz "b", następnie funkcja powinna
// zwracać sumę a+b

const add = (a, b) => {
return a + b;
};
  
// Przykładowe użycie funkcji
console.log(add(3, 5)); // Wyświetli: 8
console.log(add(-2, 7)); // Wyświetli: 5



// Zadanie 5
// Utwórz funkcje strzałkową "calculate" która przyjmuje 3 parametry a,b oraz referencja funkcji. Następnie w ciele funkcji
// utwórz zmienna do której przypiszesz wywołanie funkcji przekazanej jako parametr - pamiętaj o przekazaniu do niej
// parametrów. Na samym końcu zwróć wynik funkcji, czyli naszą zmienna wewnatrz funkcji.

const calculate = (a, b, funkcja) => {

// Utworzenie zmiennej i przypisanie wyniku wywołania funkcji
const wynik = funkcja(a, b);
    
// Zwrócenie wyniku funkcji
return wynik;
};
  
// Przykładowa funkcja, którą będziemy przekazywać jako parametr
const dodawanie = (x, y) => {
return x + y;
};
  
// Wywołanie funkcji "calculate" z przekazaniem funkcji dodawania
const wynik = calculate(3, 5, dodawanie);
console.log(wynik); // Wyświetli: 8



