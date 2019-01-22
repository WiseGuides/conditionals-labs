// Conditionals Labs
// Rev. 21Jan2019

/*
1. Write a switch statement that evaluates chosenColor below. Each case should log to the console the color chosen. (You should have five cases, one for each color). 
*/

let colors = ["black", "gold", "tourquoise", "aqua", "lemon"];
let chosenColor = colors[Math.floor(Math.random() * colors.length)];

/*
2. Write a switch statement that evaluates a player level and outputs the rewards gained.
Bronze: free parking
Silver: free parking and 5% discount on products
Gold: free parking, 5% discount on products, and 3-night free stay
Platinum: free parking, 5% discount on products, 3-night free stay, and free tickets to special events.
Try to avoid repeating the same code ("free parking", for example).
*/

let letterGrades = ["A+", "A", "B+", "B", "C+", "C", "D", "F"];
let chosenGrade = letterGrades[Math.floor(Math.random() * letterGrades.length)];

/*
3. Write a switch statement that outputs "Honor Roll" if chosenGrade is an A+, A, or B+. For B and C+, output "Try harder". For anything else, output "Not too good".
*/
