console.log('Problem 1')
function reverseWord(word) {
    var reversed = word.split('').reverse().join('');
    var wordReversed = String(reversed);
    console.log(wordReversed);
}
reverseWord('sample');
