HI,

This is how I tackled the problem - 
 1. Before diving into the code, I added some tests and expectations based on the current code.
 2. Add functionality/code for Conjured Mana Cake.
 3. Replace current if/else with switch statement. It was hard to make sense of the current code with so many if statements and it was very easy to add buggy code as more items were added. Replacing the if statements with the switch helps in easy understanding and updation of code in the future. While I was adding cases inside switch, I added 1 case statement first, commented the current code inside updateQuantity, ran all the tests for that Item to make sure the code for that item still works. Then go on to add more cases inside switch.
 4. Added 2 utility methods. I would go 1 extra step and put them in a util file to keep the GildedRose class clean, if I had more time.
 5. Add more test cases to increase coverage and confidence in code. If I had more time, I would add more tests to achieve a coverage of 100%. 