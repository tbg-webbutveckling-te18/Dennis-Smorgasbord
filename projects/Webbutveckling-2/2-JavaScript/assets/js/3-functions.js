/* 
    function functionName(parameter1, parameter2) {
        // code block
    }
*/

// Blinka lilla stjärna
// document.writeln('Blinka lilla stjärna där <br>');
// document.writeln('hur jag undrar var du är <br>');
// document.writeln('Fjärran lockar du min syn <br>');
// document.writeln('lik en diamant i skyn <br>');

// document.writeln('<br>');

// Sjung den igen
// document.writeln('Blinka lilla stjärna där <br>');
// document.writeln('hur jag undrar var du är <br>');
// document.writeln('Fjärran lockar du min syn <br>');
// document.writeln('lik en diamant i skyn <br>');

// document.writeln('<br>');

// Detta är inte vad programmeringsvärlden skulle kalla DRY code!
// DRY - Do not Repeat Yourself
// Motsatsen till DRY är WET
// WET - Write Everything Twice

// Decalare a function without parameters
function twinkle() {
	document.writeln('Blinka lilla stjärna där <br>');
	document.writeln('hur jag undrar var du är <br>');
	document.writeln('Fjärran lockar du min syn <br>');
	document.writeln('lik en diamant i skyn <br>');

	document.writeln('<br>');
}

// Call a function (På svenska: anropa)
// twinkle();
// twinkle();

/*
***************************************
            Arguments
***************************************
*/

// Decalare a function with parameters
function square(num) {
	document.writeln(num * num);
}

// Call a function with one argument
square(10);
square(5);
square('A'); // NaN
square(''); // 0

/*
***************************************
           	 Return
***************************************
*/
function area(width, height) {
	return width * height;
}

document.writeln('<br> The area is: ' + area(5, 10));

var result = area(6, 9);

document.writeln(result);

function quadrupleMe(x) {
	return 4 * x;
}

var myNumber = quadrupleMe(4);

// Select element
var btnNumber = document.getElementsByClassName('myNumber')[0];

// Manipulate element
btnNumber.innerHTML = '<strong>My favourite</strong> number is: ' + myNumber;

// Funktion för att göra första bokstaven stor
function capitalize(str) {
	return str.charAt('').toUpperCase() + str.slice(1);
}

var city = 'stockholm';
var capital = capitalize(city);
document.writeln('<br> Capital of Sweden is: ' + capital);

/*
***************************************
			muntligt test
***************************************
*/
// Test 1
// Förklara vad som händer
function test1(x, y) {
	return y - x;
}

document.writeln(test1(10, 40));

// Test 2
// Förklara vad som händer
function test2(x) {
	return x * 2;
	document.writeln(x);
	return x / 2;
	document.writeln(x);
}

document.writeln(test2(40));

/*
*************************************** 
		skriftligt test
***************************************
*/

// Test 1
// Write a function isEven() which takes a single numeric
// argument and returns true if the number is even,
// and false otherwise
// Call the function a few times

// Test 2
// Write a function kebabToSnake() which takes
// a single kebab-cased string
// Argument and returns the snake_cased version
// Basically replace "-" with "_"
// Call the function a few times
// Example of kebab-case:
// Hej-jag-heter-Dennis --> Hej_jag_heter_Dennis

function kebabToSnake(str) {
	var snakeCasedStr = str.replaceAll('-', '_');
	return snakeCasedStr;
}

document.writeln(kebabToSnake('<br>' + 'Hej-jag-heter-Dennis'));

/*
***************************************
			JS Scope
***************************************
*/
var p = document.getElementById('scopes'); // global scope

// What happends in the function stays in the function

// declare
function localScope() {
	var x = 1;
	var localVar = 31;
	p.innerHTML = localVar;
}

// call
localScope();

var globalVar = 'This is a global variable';

p.innerHTML = globalVar;
p.style.fontSize = '20px';
p.style.color = '#639';

function changeGlobalVar() {
	var x = 2;
	globalVar = 'Ha ha I got a new value now!';
	p.innerHTML = globalVar;
}

// call
changeGlobalVar();

function tricky() {
	var x = 3;
	var globalVar = 'Am I a local variable?';
	p.innerHTML = globalVar;
}

// call
tricky();
p.innerHTML = globalVar;

/*
***************************************
	JS Scope - muntligt test
***************************************
*/

// Förklara vad som händer
var num = 8;
function doMath() {
	num += 1;
	if (num % 5 === 0) {
		return true;
	} else {
		return false;
	}
}

num += 1;
doMath();

// Förklara vad som händer
function hi() {
	var name = 'Dennis';
	console.log(name);
}

hi();

function bye() {
	console.log(name);
}

bye();

/*
***************************************
JS functions - higher order functions
Simple explanation: A function that can take another function as an argument
***************************************
*/

function myTimer() {
	var d = new Date();
	var clock = document.getElementById('clock');
	clock.innerHTML = d.toLocaleTimeString();
}

myTimer();

var seconds = setInterval(myTimer, 1000); // function name and interval in milliseconds
var btnStopTime = document.getElementsByClassName('stopTime')[0];
var doomsStr = document.getElementById('doomsMessage');

btnStopTime.addEventListener('click', function() {
	clearInterval(seconds);
	doomsStr.innerHTML = 'Ha Ha! Time is stopped forever!';
	doomsStr.style.transition = 'all .4s ease';
	doomsStr.style.fontSize = '20px';
	doomsStr.style.color = 'crimson';
});

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// Bonus:
// Make an array for each argument and insert a few values in each
// When a button is clicked randomize a value from each array and call the function with random values each time

var output = document.getElementById('tellFortune');
var btnFortune = document.getElementsByTagName('button')[2];

function tellFortune(job, city, partner, kids) {
	output.innerHTML += `You will be a ${job} in ${city} and married to ${partner} and have ${kids} kids <br>`;
}

var jobArr = ['Game Designer', 'Web Developer', 'Homeless', 'YouTuber', 'President'];
var cityArr = ['Lycksele', 'Stockholm', 'New York', 'Moscow', 'Kingston'];
var partnerArr = ['Kenneth', 'Leif', 'Susan', 'Michelle', 'Igor'];
var kidsArr = [0, 1, 2, 3, 1.5];

btnFortune.addEventListener('click', function() {
	var randomJob = jobArr[Math.floor(Math.random() * jobArr.length)];
	var randomCity = cityArr[Math.floor(Math.random() * cityArr.length)];
	var randomPartner = partnerArr[Math.floor(Math.random() * partnerArr.length)];
	var randomKids = kidsArr[Math.floor(Math.random() * kidsArr.length)];

	tellFortune(randomJob, randomCity, randomPartner, randomKids)
});

// You know how old your dog is in human years, but what about dog years? Calculate it!

// Step 1:
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function 

// Step 2:
// Add an additional argument to the function that takes the conversion rate of human to dog years.

// Solution:
function calculateDogAge(puppy, human) {
	var dogAge = puppy * 7;
	var humanAge = Math.round(human / 7);
	document.writeln(`<br>Your doggie is ${dogAge} years old in dog years! <br> And you, human, are ${humanAge} years old.`);
}

calculateDogAge(6, 33);

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Step 1:
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function

// Step 2:
// Accept floating point values for amount per day, and round the result to a round number.

// Solution:
function calculateSupply(age, amount) {
	var lifeLeft = 100 - age;
	var totalAmount = Math.round((lifeLeft * 365) * amount);

	document.writeln(`<br>You got ${lifeLeft} years left to live and need a total amount of ${totalAmount} steaks to survive.`)
}

calculateSupply(33, 5.5);