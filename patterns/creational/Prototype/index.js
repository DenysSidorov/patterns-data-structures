/**
 * 'Prototype' pattern allows you have class for cloning from prototype-class, and get new instances
*/

/** Using 1/5*/

// simple class with arguments in constructor
function Bus(wheels, paleces, hight) {
    this.wheels = wheels || 14;
    this.paleces = paleces || 60;
    this.hight = hight || 2;

    Bus.prototype.toString = function () {
      console.log( `I have ${this.wheels} wheels, ${this.paleces} paleces and ${this.hight}m of hight`);
    }
}

// main approach for creating new clones
function ChelseaAvto(proto, constrFu) {
  this.proto = proto;
  this.clone = function () {
    var newAvto = new constrFu();
    return newAvto;
  }
}

// create class-prototype
var busPrototype = new Bus();

// add class-prototype and constructor in class-for-cloning
var chelseaAvtoPark = new ChelseaAvto(busPrototype, Bus);

// create new instance-clones
var chelseaAvto_N1 = chelseaAvtoPark.clone();
var chelseaAvto_N2 = chelseaAvtoPark.clone();

// there are not the same
console.log(chelseaAvto_N1 == chelseaAvto_N2);
console.log(chelseaAvto_N1.constructor.name);
console.log(chelseaAvto_N2.constructor.name);