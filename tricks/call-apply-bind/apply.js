/* Вызов функции при помощи func.apply работает аналогично func.call,
 * но принимает массив аргументов вместо списка
 */

var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);
arr.push(4);

// получить максимум из элементов arr
alert( Math.max.apply(null, arr) ); // 5