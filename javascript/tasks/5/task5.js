console.log('Problem 1');
var i,
    multiplied = [],
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (i = 0; i < arr.length; i++) {
    multiplied[i] = arr[i] * 5;
}
console.log(multiplied);
///////////////////////////
console.log('Problem 2');

//Returns -1 if str1 is sorted before str2
//Returns 0 if the two strings are equal
//Returns 1 if str1 is sorted after str2
var myWord = 'car';
var otherWord = 'car';
var comp = myWord.localeCompare(otherWord);
console.log(comp);
var myWord1 = 'CAR';
var otherWord1 = 'car';
var comp1 = myWord1.localeCompare(otherWord1);
console.log(comp1);
var myWord3 = 'car';
var otherWord3 = 'CAR';
var comp3 = myWord3.localeCompare(otherWord3);
console.log(comp3);
////////////////////////////////////////////////////////////////////////////
console.log('Problem 3');


function maximalSequence(arr) {
    var currentSequence = 1;
    var longestSequence = 0;
    var number = 0;
   
 for (var i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            currentSequence++;
            if (currentSequence > longestSequence) {
                longestSequence = currentSequence;
                number = arr[i];
            }
        } else {
            currentSequence = 1;
        }
    }
    var result="";
    for (var i = 0; i < longestSequence; i++) {
        result+=number;
        if (i < longestSequence - 1) {
            result+=",";
        }
    }
    console.log(result);
}
maximalSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

////////////////////////////////////////////////////////////////////////////
console.log('Problem 4');

function maximalIncreasingSequence(arr) {
    var currentSequence = 1;
    var longestSequence = 0;
    var number = 0;
    
 for (var i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] == 1) {

            number = arr[i - currentSequence];
            currentSequence++;
            if (currentSequence > longestSequence) {
                longestSequence = currentSequence;
               
            }
        } else {
            currentSequence = 1;
        }
    }
    var result = "";
    for (var i = 0; i < longestSequence; i++) {
        result += number;
        number++;
        if (i < longestSequence - 1) {
            result += ",";
        }
    }
    console.log(result);
}
maximalIncreasingSequence([3, 2, 3, 4, 2, 2, 4]);

////////////////////////////////////////////////////////////////////////////
console.log('Problem 5');

var arr = [5, 9, 30, 1, 3, 23, 7, 8];
var sort = arr.sort(function(a, b) {
    return a - b
});
console.log(sort);
///////////////////////////
console.log('Problem 6');

var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
var currentSequence = 1,
    longestSequence = 1,
    mostFrequentNum = arr[0];


for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
        currentSequence++;
        if (longestSequence <= currentSequence) {
            longestSequence = currentSequence;
            mostFrequentNum = arr[i];

        } else {
            currentSequence = 1;
        }

    }
}
console.log("Most frequent number: " + mostFrequentNum);


///////////////////////////////////////////
console.log('Problem 7');

var arr = [5, 9, 30, 1, 3, 23, 7, 8, 21, 78, 0];
var sort = arr.sort(function(a, b) {
    var end = sort.length - 1;
    return a - b
});
console.log(sort);
var x = 30;
var start = 0;
var endd = arr.length - 1;
var mid;

while (start <= endd && arr[mid] != x) {
    mid = parseInt((start + endd) / 2);

    if (x < arr[mid]) {
        endd = mid - 1;

    }
    if (x > arr[mid]) {
        start = mid + 1;

    }


}

console.log("Index:" + mid);
//////////////////////////////////
