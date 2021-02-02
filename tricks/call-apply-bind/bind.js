var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
};

//setTimeout(user.sayHi.bind(user), 1000); // Save the context
setTimeout(user.sayHi, 1000); // Won't work - undefined
