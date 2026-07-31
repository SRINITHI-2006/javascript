
 1. IF / ELSE
    
      if (age >= 18) {
        console.log("Adult");
      } else {
        console.log("Minor");
      }
 
2. ELSE IF
   
     if (score >= 90) {
       console.log("A");
     } else if (score >= 75) {
       console.log("B");
     } else {
       console.log("Fail");
     }
     -> checks top to bottom, stops at first match
 
3. SWITCH
   
     switch (day) {
       case "Mon":
         console.log("Start of week");
         break;
       default:
         console.log("Regular day");
     }
     -> always include break, or it "falls through" to the next case
 
4. FOR LOOP
   
     for (let i = 1; i <= 5; i++) {
       console.log(i);
     }
     -> initialization; condition; increment
 
5. WHILE vs DO...WHILE
    
     while (condition) { ... }        // checks condition first
     do { ... } while (condition);    // runs once before checking
 
11. TRUTHY / FALSY
    
     Falsy values: false, 0, "", null, undefined, NaN
     Everything else is truthy.
     if (username) { ... }  // common shortcut for "is not empty"
