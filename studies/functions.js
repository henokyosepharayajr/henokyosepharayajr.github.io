/* 
*   
*   0. Functions
*           - Functions are a type of data that contain reusable code blocks.
*       They allow us to reuse that block of code however many more times and 
*       wherever else we see necessary. 
*           They take into account a sort of "logic" data in order to run. When 
*       we declare a function we simply create it. Whereas, invoking the fucntion
*       would "use" the code contained in it. 
*
*       Functions must be declared using the keyword function.
*           EXAMPLE: function(parameter name){
*                        //function body     
*                    }
*
*
*   1.  Functions can declared without a name, which makes them anonymous.
*   Functions can be written with functions inside of them. If we assign a 
* function to a variable it changes from anonymous to a function expression. 
* 
*
*
*   2.
*       Arguments are the values that are given to the parameters which we use 
* to later invoke(call). We refer to it by its name and expect its given values
* to run.
*    EXAMPLE : const add = function(numOne, numTwo){
*        return numOne + numTwo;
*    };
*    console.log(add(10, 5)); // prints to the console 15 
*/    