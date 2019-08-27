/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use
 * variables.  Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another
 * data-type.  Variables are called so because once created, we can CHANGE the
 * value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name 
 * (id or alias) for our variable. We later learn that var is defunct for es6,
 * so we use Let keyword for certain instances and Const keyword for others.
 *
 * 2. There are 2 phases of using variables: declaration and initialization
 * (or assignment). Declaration is simply refering or creating the varaible, but
 * initializing is giving the variable a value. If a variable is declared but 
 * lacks a value, its given value would be Undefined or null, each of which 
 * has its key differences. A variables value can be changed at any point after
 * it has been declared. 
 *
 * 3. Hoisting 
 *  We are able to reuse and change variables after they have been declared due
 * to something called hoisting. Esentially this means that the interpreter can 
 * see the variable and its value outside from where it has been declared. It 
 * is best practice to always declare the variable at the beginning of the code
 * so that the scope and read it. 
 * 
 *
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have
  NOT initialized it to anything.
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

/* NOTE: We can assign and re-assign anything to a variable - we cannot do this
 with constants */
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

