let FC = 'arsenal chelsea liverpool munchester';
let splited = FC.split(' '); 
console.log(splited); // ["arsenal", "chelsea", "liverpool", "munchester"]
let reversed = splited.reverse(); 
console.log(reversed); // ["munchester", "liverpool", "chelsea", "arsenal"]
let joined = reversed.join(', '); 
console.log(joined); // munchester, liverpool, chelsea, arsenal


function reverseSentence(str) {
    let result = str.split(' ').reverse().join(' ');
    return result;
}

function reverseWord(str) {
    let result = str.split('').reverse().join('');
    return result;
}

let example = reverseSentence('hello world');
console.log(example); // world hello

let example2 = reverseWord('hello')
console.log(example2); // olleh