console.log('Problem 1');

function numbers(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
numbers('5');

console.log('Problem 2');

function numbersNotDivisible(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 7 === 0)
            console.log(i);
    }
}
numbersNotDivisible(35);
console.log('Problem 3');

/*function minMaxOfSequence(arr) {
	var arr=[4,8,1,9,23];
    var max = Math.max.apply(Math, arr);
    console.log("Max number: " + max + "<br/>");
    var min = Math.min.apply(Math, arr);
    console.log("Min number: " + min + "<br/>");
}
minMaxOfSequence(arr);*/
var arr = [4, 8, 1, 9, 23];
var max = Math.max.apply(Math, arr);
console.log("Max number: " + max);
var min = Math.min.apply(Math, arr);
console.log("Min number: " + min);


console.log('Problem 4');
