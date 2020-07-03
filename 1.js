/**
 * Задача 1.
 *
 * Добавьте всем функциям в прототип метод delay(ms).
 *
 * При вызове этого метода, функция, на которой этот метод вызывают,
 * должна быть вызвана отложено, через указанное количество миллисекунд.
 *
 * Если функция, на которой вызывается метод delay(ms) нуждается в аргументах,
 * то их нужно пробросить в аргументы функции, которую возвращает метод delay(ms).
 *
 * func.delay(1000)('value 1', 'value 2').
 *
 * В примере выше аргументы 'value 1' и 'value 2' станут первым и вторым
 * аргументами для функции func.
 *
 * Условия:
 * - количество миллисекунд указывается в первом аргументе метода delay(ms);
 * - возвращаемая методом delay функция должна быть необязательной;
 * - в реализации метода delay(ms) обязательно использовать setTimeout.
 */

function sayHello() {};

sayHello.prototype.postponed = function() {
    console.log('Hello!');
}

sayHello.prototype.delay = function(ms){
    setTimeout(sayHello.prototype.postponed, ms);
}

let say_hello = new sayHello();

say_hello.delay(1000); /* Выведет "Hello!" через 1 секунду */

function sum(a, b) {}

sum.prototype.postponed  = function(a, b) {
    console.log(a + b);
}

sum.prototype.delay = function(ms){
    return (a, b) => setTimeout(sum.prototype.postponed, ms, a, b);
}

let sum_obj = new sum();
sum_obj.delay(1000)(5, 2); /* Выведет 7 через 1 секунду. */
