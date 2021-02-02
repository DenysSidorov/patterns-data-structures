function showFullName(age) {
    alert(this.firstName + " " + this.lastName + " " + age);
}

var user = {
    firstName: "Den",
    lastName: "Dotti"
};

showFullName.call(user, 28); // "Den Dotti"
