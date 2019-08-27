/*
* Operators 
*
*   Operators are special characters that assign, compare, or perform arithmetic 
* on operands(values). Similar to mathematical arithmetic, operators in Javascript 
* can add, subtract, assign, compare, determine(logical), and many more other 
* actions on set operands. 
*
*   The control flow of operators follows a logical left => to right processing
of data. The types of operators that we can use in Javascript include :
        -Assignment operators 
        -Comparison operators
        -Arithmetic operators
        -Logical operators
        -String operators
        -Conditional(ternary) operators
        -Unary operators 
        
0. 
    Assignment Operators
        - this takes the form of the equal signs (=) but has many other 
forms including +=, -=, /=, %=. Simply put, this means that the value(operand)
on the left is equal to the value on the right.
    Ex : x = y. If x = 7. Therefore, y = 7 as well. 
    
1.  Comparison Operators 
        - this uses the same equals character, along with but not restricted 
to, !(bang) and (<)less than. These operators take into account whether or not 
the opposing values are truly equals to each other. If they are not, the expression
is defined as false. This is because of the Boolean(true/false) value that all 
values carry inherently. 
    Ex: x = 7. now we can text the comparison by saying x == 9, our code interpreter
    will return us the value of false because x's value is 7. 
        x == 7 will return true because yeah well you know, its true ! 

2.  Conditional (Ternary) Operator 
            - the conditional opertor assigns a value to a variable based on a
        condition. 
        EXAMPLE:    variableOne = (condition) ? 
                            valueX : valueY
            
                heightRequirement = (height < 182 ) ?
                            "shorty" : "tall enough"
            if the variable of height equates true than the value of variable 
            heightRequirement will render "shorty" and vice versa. 

3. Arithmetic Operators 
        These operators "do some math" on two or more values. They can add, multiply,
        subrtract and so forth and so on. 
        
        Example : console.log(5 + 7) //if we look on the console we print the
                                  // value of the addition of these two values, 12

4. Logical Operators 
        Logical operators take into account the logic between values.
        We use &&(And), ||(Or), and !(bang/not) operators to equivocate the values. 
    EXAMPLE : x = 3 and y = 7 
        now: console.log(x > 1 && y < 9) // returns true because both conditons are met.

5. String Operators
        String values can be manipulated with the addition operator. This operator
    takes two String values and returns one string that is the two previous Operand 
    strings put together. 
        EXAMPLE : var x = "Supreme";
                  var y = "Team";
                  console.log(a + " " + b); // returns "Supreme Team" to the console
6. Unary operators 
        Unary simply refers to the number(amount) of operands being altered or
        changed in the statement and or expressions. 
        
    */