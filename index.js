// Task 1

// function delay(ms) {
//     return new Promise((resolve, reject) => setTimeout(() => resolve, ms));
// };
// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// Task 2
let promise = new Promise(function(resolve, reject) {
    // resolve(1);
    setTimeout(() => reject(2), );
  });
  
promise.then(alert);

/* 1 шығады. Тек бірінші resolve/reject орындалады, ал қалғандары орындалмайды.
Егер resolve(1) екінші жазылса да жауап 1 болады. Себебі callStack–қа resolve(1)
бірінші болып түседі.
*/

// Task 3

const f1 = () => alert("f1");
const f2 = () => alert("f2");

promise.then(f1).catch(f2);
// Егер promise орындалса, f1 функциясы шақырылады, болмаса f2 (error)

promise.then(f1, f2);
// Егер promise орындалса, f1 функциясы да, f2 функция да орындалады.
// Бірақ catch() блогы болмағандықтан, Uncaught деген қателік шығады.
