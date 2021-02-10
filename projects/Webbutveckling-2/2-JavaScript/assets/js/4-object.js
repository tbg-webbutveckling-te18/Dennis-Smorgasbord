var person = ['Sid', 33, 'Male', 'EagleShieldBay'];

person.shift();
// document.writeln(person[2]);

var personFriends = ['Bob', 'Dylan', 'Aiizee', 'Deezee'];

// Perfect use case of an object
var user = {
    name: 'The kid',
    city: 'HereSneezedDuck',
    age: 33,
    friends: ['Bob', 'Dylan', 'Aiizee', 'Deezee'],
    isEvil: false,
    shoutout: function() {
        alert(`Shoutout to y'all!`);
    },
    levelUp: function() {
        return this.age++;
    }
};

var levelUpBtn = document.querySelector(".aging");
levelUpBtn.addEventListener('click', function() {
    firstOutput.innerHTML = `<br>My name is ${user.name} and I am ${user.levelUp()} and I live in ${user.city}`;    
})

var firstOutput = document.getElementById("userInfo");

// user.shoutout();

for(var i = 0; i < user.friends.length; i++) {
    console.log(user.friends[i]);
}

// use forEach if array
user.friends.forEach(function(friend) {
    console.log(friend)
})

// console.log(user.age)
// user.age++;
// console.log(user.age)

var posts = [
    {
        author: "Dennis",
        comment: "Hey catz rules!"
    },
    {
        author: "Arnold",
        comment: "Nowai dude! Dogz rules!"
    },
    {
        author: "Kamala",
        comment: "Calm down. Both are equally nice."
    }
]

// HTML Reference
var postOutput = document.querySelector(".posts");

posts.forEach(function(post) {
    postOutput.innerHTML += `Author: ${post.author} <br> Commented: ${post.comment} <br><br>`;
})

var input = document.querySelector(".updateCity");
var city = document.querySelector(".posts .city")
input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        city.innerHTML = input.value;
        document.body.style.backgroundColor = '#007CF7';
        document.body.style.transform += "rotate(90deg)";
    }
})

var toggle = document.querySelector(".btnToggle");
toggle.addEventListener('click', function() {
    // Bad way
    // city.style.fontWeight = "bold";
    // city.style.fontSize = "32px";
    // city.style.color = "#639";
    // city.style.textShadow = "2px 24px 10px #000";

    // Good way
    // classList.add("")
    // classList.remove("")
    city.classList.toggle("changeText");
})

/*
***************************************
Create your own code - movieDB
***************************************
*/

// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate through the array with a forEach and print out something that looks like (print it out in a p element):
/* 
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/

// Array of objects
// forEach with logic
// print out in p element

var movies = [
	{
		title: 'Frozen',
		rating: 4.5,
		hasWatched: false
	},
	{
		title: 'Django',
		rating: 5,
		hasWatched: true
	},
	{
		title: 'Vaiana',
		rating: 5,
		hasWatched: true
	},
	{
		title: 'Shawshank Redemption',
		rating: 5,
		hasWatched: false
	}
];

movies.forEach(function(movie) {
    if (movie.hasWatched === false) {
        console.log(`You have not seen ${movie.title} : Rated with ${movie.rating} stars`)
    } else {
        console.log(`You have seen ${movie.title} : Rated with ${movie.rating} stars`)
    }
})

// Repetition on creating a method
var opc = document.querySelector("#outputCalc");
var countObj = {
    someText: 'This is some text',
    multiply: function(x, y) {
        return x * y;
    }, 
    divide: function(x, y) {
        return x / y;
    }
}

// opc.innerHTML = countObj.multiply(prompt("Tal 1"), prompt("Tal 2"));

// Our own animal sound library
var outputSound = document.querySelector(".animalSound");
var btnAnimal = document.querySelectorAll(".btnAnimal");

var animalSound = {
    dog: function() {
        outputSound.innerHTML = 'Voff Voff!';
    },
    cat: function() {
        outputSound.innerHTML = 'Meeeooow!'
    },
    wolf: function() {
        outputSound.innerHTML = 'Aooooouuuuuu!';
    },
    cow: function() {
        outputSound.innerHTML = 'Muuuuuu!'
    }
}

for(var i = 0; i < btnAnimal.length; i++) {
    btnAnimal[i].addEventListener('click', function() {
        switch (this.innerHTML) {
            case 'Dog': {
                animalSound.dog();
                break;
            }
            case 'Cat': {
                animalSound.cat();
                break;
            }
            case 'Wolf': {
                animalSound.wolf();
                break;
            }
            case 'Cow': {
                animalSound.cow();
                break;
            }
        }
    })
    btnAnimal[i].addEventListener('mouseover', function() {
        // this.style.backgroundColor = "Coral";
        this.classList.add("toggleBtnBG")
    })

    btnAnimal[i].addEventListener('mouseleave', function() {
        // this.style.backgroundColor = "";
        this.classList.remove("toggleBtnBG")
    })
}

var addFriend = document.querySelector(".friend");
var removeFriend = document.querySelector(".unfriend");

var users = {
    friends: ['Arnold', 'Stallone', 'Chuck'],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    removeFriend: function() {
        this.friends.pop();
    }
}

addFriend.addEventListener("click", function() {
    users.addFriend(prompt("Add friend's name:"));
    console.log('New friend added.')
});

removeFriend.addEventListener("click", function() {
    users.removeFriend();
    console.log('One friend removed.')

});

var btnDoomed = document.querySelector(".doomed");

// function youAreDoomed() {
//     // The function body
//     // What happends when you call youAreDoomed
// }

youAreDoomed = () => document.body.innerHTML = "HaHa! Owned!";

btnDoomed.addEventListener("click", youAreDoomed)