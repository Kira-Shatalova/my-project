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
const total = 850;
const isPremium = false;
const city = "Львів";

if ((total >= 1000 || isPremium) && (city === "Київ" || city === "Львів")) {
  console.log("доставка бесплтаня");
}
else {
  console.log("Доствка платная");
}

/*_______________________________
Чи 
можна 
на 
пробіжку
________________________________*/
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
}
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
