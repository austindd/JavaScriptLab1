const myName = "Zane";
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberOfStates = 50;
var sum = 5 + 4;

// 'L' is #11 in the alphabet.

var i = 0;
while (i < 26) {
    if (myName[0] == alphabetLower[i] && i > 11) {
        console.log('Back of the line!');
    }   else if (myName[0] == alphabetUpper[i] && i > 11) {
        console.log('Back of the line!');
    }   else if (myName[0] == alphabetLower[i] || myName[0] == alphabetUpper[i]) {
        console.log('Your name starts with ', myName[0], ', so you are ok.');
    }
    i++;

}


console.log('End Program')