/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - is in the golbal scope and it points to the window object.
* 2. Implicit Binding - when  the this keyword has a dot after the this key word points to the function to its left.
* 3. New Binding - is used to creat a new object based  on a constructor function.
* 4. Explicit binding - when call or apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);


// Principle 2

// code example for Implicit Binding
const parent = {
    name: 'Susan',
    age: 70,
    speak: function() {
    console.log( `Hello, my name is ${this.name}`);
   }
}

console.log(parent.speak());

// Principle 3

// code example for New Binding
function Person(id, email, name, gender){
    this.id = id;
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

const mitzi = new Person(1,'mmelloy0@psu.edu','Mitzi','F');

console.log(mitzi.name);


// Principle 4

// code example for Explicit Binding

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }