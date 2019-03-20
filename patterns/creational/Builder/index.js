/**
 * 'Builder' pattern allows you have main class, which uses another class with properties.
 * Properties add new opportunities for main class
 */

// class with additional properties
class GreenColor{
  getColor(){
    return 'green color'
  }
}

// class with additional properties
class RedColor{
  getColor(){
    return 'red color'
  }
}

// main class which uses properties of additional class
class Short{
  constructor(color){
    this.color = color;
  }

  getDescription(){
    console.log(`Short with ${this.color.getColor()}`);
  }
}

// main class which uses properties of additional class
class Shoes{
  constructor(color){
    this.color = color;
  }
  getDescription(){
      console.log(`Shoes with ${this.color.getColor()}`);
  }
}

let greenColor = new GreenColor();
let redColor = new RedColor();

let redShoes = new Shoes(redColor).getDescription();
let greenShort = new Short(greenColor).getDescription();

