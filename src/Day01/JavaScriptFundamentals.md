
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
 
   let city = "Chennai";      // string
   let score = 100;           // number
   let isDone = true;         // boolean
 
4. TYPE CONVERSION
   - Number("42") -> converts string to number
   - String(42)   -> converts number to string
   - "5" + 1 -> "51" (string concatenation)
   - "5" - 1 -> 4   (converted to number(-,*,/))
 
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
