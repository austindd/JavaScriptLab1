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


/* My initial attempt to parse the string, LOL

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
        console.log('Sorry', name,'you are not old enough to view this page.')
    }
}
checkAge('Charles', 21)
checkAge('Abby', 27)
checkAge('James', 18)
checkAge('John', 17)





console.log('')
console.log('End Program');