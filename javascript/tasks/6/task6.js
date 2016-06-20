console.log("Problem 1");

function englishDigit(n) {
    var digit = n % 10;
    switch (digit) {
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('one');
            break;
        case 2:
            console.log('two');
            break;
        case 3:
            console.log('three');
            break;
        case 4:
            console.log('four');
            break;
        case 5:
            console.log('five');
            break;
        case 6:
            console.log('six');
            break;
        case 7:
            console.log('seven');
            break;
        case 8:
            console.log('eight');
            break;
        case 9:
            console.log('nine');
            break;
        default:
            console.log('not a digit');
            break;
    }
}
englishDigit(512);
englishDigit(1024);
englishDigit(12309);

console.log("Problem 2");

function reverseNumber(n) {
    var reversed = n.toString().split('').reverse().join('');
    var numberReversed = Number(reversed);
    console.log(numberReversed);
}
reverseNumber(256);
reverseNumber(123.45);

console.log("Problem 3");

function occurrencesOfWord(pattern) {
    var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
    var pattern = /the/gi;
    var matches = text.match(pattern);
    console.log(matches);
}
occurrencesOfWord();

console.log("Problem 4");

function numberOfElements(){
    var count;
    count = document.getElementsByTagName('div').length;
    return count;
}
console.log(numberOfElements());


console.log("Problem 5");

function appearanceCount() {
    var arr = [4, 6, 1, 7, 4, 9, 6, 0, 6];
    var number = 6;
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            counter++;

        }
    }
    console.log(counter);

}
appearanceCount();

console.log("Problem 6");

function largerThanNeighbours(i) {
    var arr = [4, 7, 2, 5, 9, 10];
    var i;
    if ((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
        return "True";
    } else {
        return "False";
    }
}
console.log(largerThanNeighbours(1));

console.log("Problem 7");

function firstLargerThanNeighbours(arr) {
    
    for (var i = 0; i<arr.length; i++) {
        if ((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
            return i;
        } 
    }
    return-1;
}
console.log(firstLargerThanNeighbours([4, 7, 2, 5, 9, 10]));
