// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //make an empty array 'words'
    const words = [];
    //split the input string by spaces to get an array of separate words
    //for each word in the array
    for (let word of str.split(' ')) {
        //uppercase the first letter of the word
        //join the first letter with the rest of the string
        //push result into 'words' array
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    //join words into a string and return it (the space between the quotes)
   return words.join(' ');
}

//OR

// function capitalize(str) {
//     //create 'result' which is the first character of the input string capitalized
//     let result = str[0].toUpperCase();
//     //for each character in the string
//     for (let i = 1; i < str.length; i++) {
//         //if the character to the left of a space
//         if (str[i - 1] === ' ') {
//             //capitalize it and add it to 'result'
//             result += str[i].toUpperCase();
//         } else {
//             //else add it to 'result'
//             result += str[i];
//         }
//     }
//     //RETURN THE DAMN THING
//     return result;
// }

module.exports = capitalize;
