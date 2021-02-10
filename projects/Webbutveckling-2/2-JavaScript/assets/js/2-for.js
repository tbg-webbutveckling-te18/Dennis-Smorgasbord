/* 
The 'for' loop is the most compact form of looping. It includes the following three important parts −
The loop initialization where we initialize our counter to a starting value. 
The initialization statement is executed before the loop begins.
The test statement which will test if a given condition is true or not. 
If the condition is true, then the code given inside the loop will be executed, otherwise the control will come out of the loop.
The iteration statement where you can increase or decrease your counter.
*/
for (var i = 0; i <= 10; i++) {
	document.writeln('Count is: ' + i + '<br>');
}

document.writeln('--------------------------------------------<br>');

// Incremeny by 2 (or more)
// count += 2 this is equal to count = count + 2;
for (var count = 1; count < 13; count += 2) {
	document.writeln('Count is: ' + count + '<br>');
}

document.writeln('--------------------------------------------<br>');

// Loop through a list
var str = 'Hello World!';
// document.writeln(str[0]);
for (var i = 0; i < str.length; i++) {
	document.writeln(str[i]);
}

document.writeln('<br>--------------------------------------------<br>');

// Loop through an array
var codeArr = [ 'CSS', 'HTML', 'JS', 33, true ];
var len = codeArr.length;
for (var i = 0; i < len; i++) {
	document.writeln('Language: ' + codeArr[i] + '<br>');
}

document.writeln('--------------------------------------------<br>');

// The modulo operator returns the remainder of division
// != means not equal to
// !=== means not equal to AND CHECK IF SAME DATA TYPE
// == means equal to 12 == "12"
// === means equal to AND CHECK IF SAME DATA TYPE 12 === "12"
// for (var i = 1; i < 366; i++) {
// 	if (i % 2 !== 0) {
// 		document.writeln('Even dates: ' + i + '<br>');
// 	}
// }
// Excercise 1 - Explain the code
for (var i = 0; i < 16; i += 8) {
	console.log(i); // 0 8
}

// Excercise 2 - Explain the code
var str = 'xwhiqenblwmlypo';
for (var i = 2; i < str.length; i += 3) {
	console.log(str[i]); // hello
}

// Excercise 3 - Write on your own
// Print all numbers between -10 and 19
for (var i = -10; i <= 19; i++) {
	document.writeln(i);
}

document.writeln('<br>--------------------------------------------<br>');

// Excersise 4 - Write on your own
// Print all even numbers between 10 and 40
for (var i = 10; i < 41; i += 2) {
	if (i % 2 === 0) {
		document.writeln(i);
	}
}

document.writeln('<br>--------------------------------------------<br>');

// Excersise 5 - Write on your own
// Print all odd numbers between 300 and 333
for (var i = 300; i < 334; i++) {
	if (i % 2 !== 0) {
		document.writeln(i);
	}
}

document.writeln('<br>--------------------------------------------<br>');

// Excersise 6 - Write on your own
// Print all numbers divisible by 5 AND 3 between 5 and 50
// if(x < 10 && x < 20)
for (var i = 5; i <= 50; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		document.writeln(i);
	}
}
document.writeln('<br>--------------------------------------------<br>');

// Excersise 7: Multiplication table
// Write a for loop that iterates from 0 to 10.
// For each iteration of the loop it will multiply
// the number by 9 and log the result (e.g. "2 * 9 = 18").
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
	var result = i * multiplier;
	document.writeln(i + ' * ' + multiplier + ' = ' + result + '<br>');
}

// Nested for loops
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (var i = 0; i < 5; i++) {
	for (var j = 0; j < 5; j++) {
		document.writeln('*');
	}
	document.writeln('<br>');
}

// Bonus: Use a nested for loop to show the tables for every multiplier
// from 0 to 10 (100 results total).
/* ---------------------------------------- */
// Create an array to hold your top choices (colors, food, games, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.

// Create an array
// make a for loop and iterate through the array
// Output for each item
var choices = [ 'red', 'orange', 'pink', 'yellow' ];
for (var i = 0; i < choices.length; i++) {
	var choiceNum = i + 1;
	document.writeln('My #' + choiceNum + ' choice is ' + choices[i] + '<br>');
}

// Same as above BUT!
// Make some logic depending if its the first, second or third choice...
// 1st. 2nd, 3rd, 4th, 5th and so forth
choices.push('green');
for (var i = 0; i < choices.length; i++) {
	var choiceNum = i + 1;
	var suffix;

	if (choiceNum === 1) {
		suffix = 'st';
	} else if (choiceNum === 2) {
		suffix = 'nd';
	} else if (choiceNum === 3) {
		suffix = 'rd';
	} else {
		suffix = 'th';
	}
	document.writeln('My ' + choiceNum + suffix + ' choice is ' + choices[i] + '<br>');
}
