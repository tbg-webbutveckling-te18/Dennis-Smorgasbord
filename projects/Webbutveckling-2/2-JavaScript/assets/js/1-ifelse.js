// Greater than
var age = 33;
if (age >= 18) {
	console.log('Du får ta körkortet.');
} else {
	console.log();
}

// If something is equal too
var lesson = 'Web development';
if (lesson == 'History') {
	console.log('We have: ' + lesson);
} else if (lesson == 'Web development') {
	console.log('We have: ' + lesson);
} else {
	console.log('Spare time!');
}

var isSunny = false;
if (isSunny == true) {
	console.log('Put on some shorts today.');
} else {
	console.log('Put on some warm clothes today.');
}

// Step 1
var d = new Date();
if (d.getHours() < 18) {
	console.log('Good day!');
} else {
	console.log('Good evening!');
}

// Step 2
if (d.getHours() < 10) {
	console.log('Good morning!');
} else if (d.getHours() < 18) {
	console.log('Good day!');
} else {
	console.log('Good evening!');
}

// Step 3
if (d.getHours() < 10) {
	if (d.getMonth() > 9 || d.getMonth() < 2) {
		console.log('Go ahead and sleep like a bear!');
	} else {
		console.log('Good morning!');
	}
} else if (d.getHours() < 18) {
	console.log('Good day!');
} else {
	console.log('Good evening!');
}

/*
You can use multiple if...else…if statements, as in the previous chapter, 
to perform a multiway branch. However, this is not always the best solution, 
especially when all of the branches depend on the value of a single variable.
*/

var grade = 'A';
switch (grade) {
	case 'A':
		console.log('Great job!');
		break;
	case 'B':
		console.log('Good job!');
		break;
	case 'C':
		console.log('Allright!');
		break;
	case 'D':
		console.log('Good!');
		break;
	case 'E':
		console.log('OK!!');
		break;
	case 'F':
		console.log('You did not pass!');
		break;

	default:
		console.log('Unknown grade!');
}

// Switch statement with week days
switch (d.getDay()) {
	case 0:
		console.log('Sunday');
		break;

	case 1:
		console.log('Monday');
		break;

	case 2:
		console.log('Tuesday');
		break;

	case 3:
		console.log('Wednesday');
		break;

	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;

	case 6:
		console.log('Saturday');
		break;

	default:
		console.log('What day?');
}
