// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
    //or
    // return str
    // .split('')
    // .reverse()
    // .join('');
    //or
    // let reversed = '';

    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    //     return reversed;
    //or
    // return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
