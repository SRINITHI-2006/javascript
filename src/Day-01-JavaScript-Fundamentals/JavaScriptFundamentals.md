JavaScript:
   JavaScript is a dynamically-typed, interpreted programming language used to add interactivity and logic to web pages. It runs in browsers and, via Node.js, on servers too.

   
1. VARIABLES
   - const  -> value never changes (use by default)
   - let    -> value can change
   - var    -> old way, avoid (leaks out of blocks)
 
   const name = "Alex";
   let age = 25;
   age = 26; // allowed with let

 
           const name = "Srinithi";
           let age = 20;
           console.log("Name:", name);
           console.log("Age:", age);
 
3. DATA TYPES
   - string, number, boolean, undefined, null
   - check type with: typeof value

           console.log(typeof "Hello");
           console.log(typeof 100);
           console.log(typeof true);
           console.log(typeof undefined);
           console.log(typeof null);
 
   let city = "Chennai";      // string
   let score = 100;           // number
   let isDone = true;         // boolean
 
4. TYPE CONVERSION
   - Number("42") -> converts string to number
   - String(42)   -> converts number to string
   - "5" + 1 -> "51" (string concatenation)
   - "5" - 1 -> 4   (converted to number(-,*,/))

         // String Concatenation (+)
           let result1 = "5" + 1;
           console.log("Result of '5' + 1:", result1);//o/p:51

         // String to Number Conversion (-)
            let result2 = "5" - 1;
            console.log("Result of '5' - 1:", result2);//o/p:4
 
5. OPERATORS
   - Arithmetic: + - * / % **
   - Comparison: == (compares values only) vs === (compares values and datatypes)
   - Logical: && (and), || (or), ! (not)
 
6. STRINGS & TEMPLATE LITERALS
   - "hello".length, .toUpperCase(), .slice(0, 3)
   - Template literal: `My name is ${name}` (backticks + ${})
       
          Instead of:
                let name = "Alex";
                console.log("My name is " + name);
           Use:
                let name = "Alex";
                console.log(`My name is ${name}`);
