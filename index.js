// Conditionals Labs
// Rev. 21Jan2019

/*
1. Fix the code below

let x = true;
if {x} (console.log('true')
) else (
  console.log('not true')
)
*/

/*
2. The code below produces a random integer between 1 and 100. Create an else...if statement for the following conditions:
90 - 100: Outputs 'Stellar job'
80 - 89: Outputs 'Very good'
70 - 79: Outputs 'Could do better'
0 - 69: Outputs 'Hard to do worse'
*/
let randomInteger = Math.floor(Math.random() * 100) + 1;

/*
3. Which of these code examples will output 'Yes' if a variable, x, is true.

a. if (x) {console.log('Yes - a')}
b. if (x == true) {console.log('Yes - b')}
c. if (x === true) { console.log('Yes - c')}
d. x ? console.log('Yes - d') : console.log('No - d'); 
e. x && console.log('Yes - e')
*/

/*
4. Write a switch statement that evaluates chosenColor below. Each case should log to the console the color chosen. (You should have five cases, one for each color). 
*/

let colors = ["black", "gold", "tourquoise", "aqua", "lemon"];
let chosenColor = colors[Math.floor(Math.random() * colors.length)];

/*
5. Write a switch statement that evaluates a player level and outputs the rewards gained.
Bronze: free parking
Silver: free parking and 5% discount on products
Gold: free parking, 5% discount on products, and 3-night free stay
Platinum: free parking, 5% discount on products, 3-night free stay, and free tickets to special events.
Try to avoid repeating the same code ("free parking", for example).
*/

let letterGrades = ["A+", "A", "B+", "B", "C+", "C", "D", "F"];
let chosenGrade = letterGrades[Math.floor(Math.random() * letterGrades.length)];

/*
6. Write a switch statement that outputs "Honor Roll" if chosenGrade is an A+, A, or B+. For B and C+, output "Try harder". For anything else, output "Not too good".
*/

/*
7. Follow exercise 2 -- but this time, use a switch statement
*/
