const myName = "Austin";
const numberOfStates = 50;
var sum = 5 + 4;


// If first letter of myName is after 'L', then "Back of the line!"
if (myName.charCodeAt(0) >= 65 && myName.charCodeAt(0) <= 76) {
    console.log('Next!');
} else if (myName.charCodeAt(0) >= 77 && myName.charCodeAt(0) <= 90) {
    console.log("Back of the line!"); 
} else if (myName.charCodeAt(0) >= 97 && myName.charCodeAt(0) <= 108) {
    console.log('Next!')
} else if (myName.charCodeAt(0) >= 109 && myName.charCodeAt(0) <= 122) {
    console.log("Back of the line!");
} else {
    console.log('Error');
}


/* My initial attempt to parse the string, LOL...

const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var i = 0;
while (i < 26) {
    validName = false;
    if (myName[0] == alphabetLower[i] && i > 11) {
        console.log('Back of the line!');
    }   else if (myName[0] == alphabetUpper[i] && i > 11) {
        console.log('Back of the line!');
    }   else if (myName[0] == alphabetLower[i] || myName[0] == alphabetUpper[i]) {
        console.log('Next!');
    }
    i++;
}

*/

function sayHello() {
    console.log('Hello World!');
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry', name,'you are not old enough to view this page.');
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

var veggies = ['carrots','broccoli','brussels sprouts','celery','eggplant','zucchini','squash'];

for (let i = 0; i < veggies.length; ++i) {
    console.log(veggies[i]);
};

let austin = {name: 'Austin', age: 27};
let daniel = {name: 'Daniel', age: 30};
let cynthia = {name: 'Cynthia', age: 18};
let joel = {name: 'Joel', age: 20};
let katie = {name : 'Katie', age: 21};

let people = [austin, daniel, cynthia, joel, katie];

for (let i = 0; i < people.length; ++i) {
    checkAge(people[i].name, people[i].age);
};

function getLength(word) {
    var stringLength = word.length;
    return stringLength;
}

getLength('Hello World');

console.log(getLength('Hello World'), 'characters');


function isEven(x) {
    if (x % 2 == 0) {
        return true
    } else if (Math.abs(x % 2) ==1) {
        return false
    } else {
        return null
    }
};

console.log(isEven(getLength('Hello World')))

if (isEven(getLength('Hello World')) == true ) {
    console.log('The world is nice and even!');
} else if (isEven(getLength('Hello World')) == false) {
    console.log('The world is an odd place!');
} else {
    console.log('Error');
};


console.log('End Program');