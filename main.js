/*const priceA = 250;
const priceB = 250;

if (priceA < priceB) {
    console.log("дешевше в магазині А");
} else if (priceA > priceB) {
 console.log("дешевше в магазині B");
} else {
    console.log("ціни однакові");
}*/

/*______________________________
1 задание
______________________________
const name = "Kira";
const age = 16;
const parentConsent = true;

const registrationAllowed = name !== "" && (age >= 18 || parentConsent);
if (registrationAllowed) {
  console.log("Реєстрацію дозволено");
} else {
  console.log("Реєстрацію відхилено");
}*/

/*____________________________________
2 задание
______________________________________
const hasTicket = true;
const hasPassport = false;
const hasResult = hasTicket && hasPassport;

if (hasResult) {
  console.log("можно на посадку");
} else {
  console.log("посадку забороненно");
  console.log(true && true ? "Можна на посадку" : "Посадку заборонено");
  console.log(true && false ? "Можна на посадку" : "Посадку заборонено");
  console.log(false && true ? "Можна на посадку" : "Посадку заборонено");
  console.log(false && false ? "Можна на посадку" : "Посадку заборонено");
}*/

/*__________________________________
3 задание 
____________________________________
const paidByCard = false;
const paidByCash = true;
const isPaid = paidByCard || paidByCash;

console.log(isPaid ? "Заказ оплачен" : "Оплата не прошла");
console.log(true || true ? "Заказ оплачен" : "Оплата не прошла");
console.log(true || false ? "Заказ оплачен" : "Оплата не прошла");
console.log(false || true ? "Заказ оплачен" : "Оплата не прошла");
console.log(false || false ? "Заказ оплачен" : "Оплата не прошла")*/

/*___________________________________
4 задача
___________________________________

const age = 15;
const withParent = true;
const hasTicket = true;

const registrationAllowed = hasTicket !=="" && (age >= 16 || withParent);
if (registrationAllowed) {
    console.log("можна в кино");
} else {
    console.log("вхід заборонено");
}*/

/*___________________________________
1. Перепиши вираз 'Привіт, ' + name + '!' через шаблонні рядки.
_____________________________________
let name = "Оля";
console.log(`Привіт, ${name}!`);*/

/*________________________________
Створи змінні firstName і lastName та виведи в консоль рядок 'Повне ім'я: ...' через ${}.
__________________________________
const firstName = "Kira";
const lastName = "Bogdan";
console.log(`Повне ім'я: ${firstName} ${lastName}`);*/

/*______________________________

 Маючи ціну price і кількість qty, виведи рядок 'Сума: ${price * qty} грн' з обчисленням усередині ${}.
 _______________________________
const price = 24;
const qty = 4;
console.log(`Сумма:${price * qty} грн`);*/

/*________________________________
 Створи багаторядковий рядок (наприклад, адресу з кількох рядків), використовуючи зворотні лапки.
 ________________________________
let address = `Україна,
місто Дніпро
вул. Сокол, 2`;
 console.log(address);*/

/*_________________________
 Знжка в кав'ярні
 __________________________
const hasLoyaltyCard = false;
const isStudent = false;
const isPensioner = true;

if (hasLoyaltyCard && (isStudent || isPensioner)) {
  console.log("Знижка 10%");
} else {
  console.log("Повна ціна");

  }*/

/*_____________________________________
Безкоштовна 
доставка
______________________________________*/
/*const total = 850;
const isPremium = false;
const city = "Львів";

if ((total >= 1000 || isPremium) && (city === "Київ" || city === "Львів")) {
  console.log("доставка бесплтаня");
} else {
  console.log("Доствка платная");
}
*/
/*_______________________________
Чи 
можна 
на 
пробіжку
________________________________
const hour = 8;
const temp = 12;
const isRaining = true;
const hasRaincoat = false;

if (hour < 7 || hour > 20) {
  console.log("Темно");
} else if (temp < -5 || temp > 30) {
  console.log("Занадто холодно або спекотно");
} else if (isRaining && !hasRaincoat) {
  console.log("Дощ, а дощовика немає");
} else {
  console.log("Біжимо!");
}*/
/*_________________________
Завдання:

Перепиши message через шаблонний рядок. У ньому не має бути жодного + і жодного \n.
Суму порахуй прямо всередині ${}.
Бонус: додай четвертий рядок Вік 16+: так або Вік 16+: ні, залежно від змінної age.
______________________________*/

/*const movie = "Дюна";
const tickets = 2;
const price = 150;
const age = 17;

const message = `Фільм: ${movie} 
Квитки: ${tickets}
До сплати: ${tickets * price} грн
Вік 16+: ${age >= 16 ? "так": "ні"}`;

const message =
  "Фільм: " +
  movie +
  "\n" +
  "Квитків: " +
  tickets +
  "\n" +
  "До сплати: " +
  tickets * price +
  " грн";

console.log(message);*/

/*____________________________
1. Виведи в консоль рядок 'Hello!' 10 разів за допомогою циклу for.
______________________________

for (let i = 0; i < 10; i++) {
  console.log("Hello!", i);
}*/

/*_________________________
 Виведи в консоль числа від 10 до 1 у зворотному порядку (for).
 _________________________
for (let i = 10; i > 0; i--){
  console.log(i);
}*/

/*________________________________
3. Порахуй і виведи в консоль суму парних чисел у діапазоні від 1 до 20 (for).
___________________________________
let sum = 0;
for (let i = 2; i <= 20; i += 2) {
  sum += i;
  console.log(sum);
}*/

/*_________________________
4. Виведи в консоль таблицю множення для числа 5 (for).
__________________________

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}*/

/*___________________________
Використовуючи while, виводь число і зменшуй його на 1, поки воно більше за 0.
_____________________________*/

/*let count = 7;
while (count > 0) {
  console.log(count);
  count--;
}*/

/*____________________________
6. Поясни різницю між while і do...while та наведи приклад кожного.
______________________________
while — цикл, що перевіряє умову перед кожним виконанням.
do...while — цикл, що виконує тіло хоча б раз, перевіряючи умову після.*/

let count = 10;
do {
 console.log(count);
 count--;
} while (count >= 0);

