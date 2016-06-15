//Problem 1
console.log("Problem 1");

function exchangeIfGreater(a2, b2) {
    var temp = a2;
    if (a2 > b2) {
        a2 = b2;
        b2 = temp;
        console.log(a2, b2);
    } else {
        console.log(a2, b2);
    }

}
exchangeIfGreater(5, 2);
exchangeIfGreater(3, 4);
exchangeIfGreater(5.5, 4.5);
//Problem 2
console.log("Problem 2");

function multiplicationSign(a1, b1, c1) {
    if (a1 > 0 && b1 > 0 && c1 > 0) {
        console.log('+');
    } else if (a1 < 0 && b1 < 0 && c1 > 0) {
        console.log('+');
    } else if (a1 < 0 && b1 > 0 && c1 > 0) {
        console.log('-');
    } else if (a1 < 0 && b1 < 0 && c1 < 0) {
        console.log('-');
    } else {
        console.log(0);
    }
}
multiplicationSign(5, 2, 2);
multiplicationSign(-2, -2, 1);
multiplicationSign(-2, 4, 3);
multiplicationSign(0, -2.5, 4);
multiplicationSign(-1, -0.5, -5.1);
//Problem 3
console.log("Problem 3");

function theBiggestOfThree(num1, num2, num3) {
    var max = 0;
    if ((num1 >= num2) && (num1 >= num3)) {
        max = num1;
    } else if ((num2 >= num1) && (num2 >= num3)) {
        max = num2;
    } else {
        max = num3;
    }
    console.log(max);
}
theBiggestOfThree(5, 2, 2);
theBiggestOfThree(-2, -2, 1);
theBiggestOfThree(-2, 4, 3);
theBiggestOfThree(0, -2.5, 5);
theBiggestOfThree(-0.1, -0.5, -1.1);

//Problem 4
console.log("Problem 4");

function sort3numbers(numbers1, numbers2, numbers3) {

    if ((numbers1 > numbers2) && (numbers1 > numbers3)) {
        if (numbers2 > numbers3) {
            console.log(numbers1, numbers2, numbers3);
        } else {
            console.log(numbers1, numbers3, numbers2);
        }
    } else if ((numbers2 > numbers1) && (numbers2 > numbers3)) {
        if (numbers1 > numbers2) {
            console.log(numbers2, numbers1, numbers3);
        } else {
            console.log(numbers2, numbers3, numbers1);
        }
    } else if ((numbers3 > numbers1) && (numbers3 > numbers2)) {
        if (numbers1 > numbers2) {
            console.log(numbers3, numbers1, numbers2);
        } else {
            console.log(numbers3, numbers2, numbers1);
        }
    }
}
sort3numbers(5, 1, 2);
sort3numbers(-2, -2, 1);
sort3numbers(-2, 4, 3);
sort3numbers(0, -2.5, 5);
sort3numbers(-1.1, -0.5, -0.1);
sort3numbers(10, 20, 30);
sort3numbers(1, 1, 1);

//Problem 5
console.log("Problem 5");

function digitAsWord(digit) {
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
        case 5:
            console.log('five');
            break;
        case 9:
            console.log('nine');
            break;
        default:
            console.log('not a digit');
            break;
    }

}
digitAsWord(2);
digitAsWord(1);
digitAsWord(0);
digitAsWord(5);
digitAsWord(-0.1);
digitAsWord('hi');
digitAsWord(9);
digitAsWord(10);

//Problem 6
console.log("Problem 6");

function quadraticEquation(a, b, c) {

    var f = (Math.pow(b, 2) - (4 * a * c));
    var x1 = (-b + Math.sqrt(f)) / 2 * a;
    var x2 = (-b - Math.sqrt(f)) / 2 * a;
    if (f < 0) {
        console.log("Non real roots");
    } else if (f === 0) {
        x1 = (-b) / (2 * a);
        console.log("X1=X2=" + x1);
    } else {
        x1 = (-b - Math.sqrt(f)) / (2 * a);
        x2 = (-b + Math.sqrt(f)) / (2 * a);
        console.log("X1=" + x1 + "  " + "X2=" + x2);
    }
}
quadraticEquation(2, 5, -3);
quadraticEquation(-1, 3, 0);
quadraticEquation(-0.5, 4, -8);
quadraticEquation(5, 2, 8);
//Problem 7
console.log("Problem 7");

function theBiggestOfFiveNumbers(num1, num2, num3, num4, num5) {
    var max = 0;
    if ((num1 >= num2) && (num1 >= num3) && (num1 >= num4) && (num1 >= num5)) {
        max = num1;
    } else if ((num2 >= num1) && (num2 >= num3) && (num2 >= num4) && (num2 >= num5)) {
        max = num2;
    } else if ((num3 >= num1) && (num3 >= num2) && (num3 >= num4) && (num3 >= num5)) {
        max = num3;
    } else if ((num4 >= num1) && (num4 >= num2) && (num4 >= num3) && (num4 >= num5)) {
        max = num4;
    } else {
        max = num5;
    }
    console.log(max);
}
theBiggestOfFiveNumbers(5, 2, 2, 4, 1);
theBiggestOfFiveNumbers(-2, -22, 1, 0, 0);
theBiggestOfFiveNumbers(-2, 4, 3, 2, 0);
theBiggestOfFiveNumbers(0, -2.5, 0, 5, 5);
theBiggestOfFiveNumbers(-3, -0.5, -1.1, -2, -0.1);

//Problem 8
console.log("Problem 8");

function numberAsWords(number) {
    var result;
    if (number >= 0 && number <= 9) {
        switch (number) {
            case 0:
                console.log('zero');
                break;
            case 1:
                console.log('one');
                break;
            case 2:
                console.log('two');
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
        }
        console.log(result);

    } else if (number >= 10 && number <= 19) {
        switch (number) {
            case 10:
                result = "ten";
                break;
            case 11:
                result = "eleven";
                break;
            case 12:
                result = "twelve";
                break;
            case 13:
                result = "thirteen";
                break;
            case 14:
                result = "fourteen";
                break;
            case 15:
                result = "fiveteen";
                break;
            case 16:
                result = "sixteen";
                break;
            case 17:
                result = "seventeen";
                break;
            case 18:
                result = "eighteen";
                break;
            case 19:
                result = "nineteen";
                break;
        }
        console.log(result);
    } else if (number >= 20 && number < 100) {
        switch (number) {
            case 20:
                result = "twenty";
                break;
            case 30:
                result = "thirty";
                break;
            case 40:
                result = "fourty";
                break;
            case 50:
                result = "fifty";
                break;
            case 60:
                result = "sixty";
                break;
            case 70:
                result = "seventy";
                break;
            case 80:
                result = "eighty";
                break;
            case 90:
                result = "ninety";
                break;
        }
        console.log(result);

    }
}
numberAsWords(90);

