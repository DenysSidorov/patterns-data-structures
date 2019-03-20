/* var wrapper = func.bind(context[, arg1, arg2...]) */

var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};

//setTimeout(user.sayHi.bind(user), 1000); // Запомнили контекст и привязались
setTimeout(user.sayHi, 1000); // Работать не будет - undefined