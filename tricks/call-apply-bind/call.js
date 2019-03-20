/* Вызов func.call(context, a, b...) – то же, что обычный вызов func(a, b...),
 * но с явно указанным this(=context)
 */

function showFullName(age) {
    alert(this.firstName + " " + this.lastName + " " + age);
}

var user = {
    firstName: "Василий",
    lastName: "Петров"
};

// функция вызовется с this=user
showFullName.call(user, 28) // "Василий Петров"