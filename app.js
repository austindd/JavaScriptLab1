const myName = "Austin";
const numberOfStates = 50;
var sum = 5 + 4;

// 'L' is #11 in the alphabet.

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


console.log('')
console.log('End Program');