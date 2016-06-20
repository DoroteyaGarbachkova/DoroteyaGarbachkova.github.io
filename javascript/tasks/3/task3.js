//Problem 1
console.log("Problem 1");

function exchangeIfGreater(a,b) {
    var greater;
    if (a > b) {
        greater = a;
        a = b;
        b = greater;
      
        
        console.log(a, b);
    } else {
        console.log(a, b);
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

function numberAsWords(n) {
    var Ones = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
        "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var ones = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var Tens = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    var tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    var n;
    var hundred = parseInt(n/ 100);
	var tenth = parseInt((n / 10) % 10);
	var unit = parseInt(n % 10);
    var result="";
    if (n >= 0 && n <= 19) {
        console.log(Ones[n]);
    }

    if (n >= 20 && n <= 99) {
        console.log(Tens[Math.floor(n / 10)] + "-" + ones[unit]);
    }

    if (n >= 100) {
        if (hundred >= 0 && hundred <= 19) {
			result+=Ones[hundred];
        }

        if ((n % (hundred * 100) <= 19) && (n % (hundred * 100) >= 1)) {
            result+=" hundred and " + ones[n - hundred * 100];
        }

        if ((n % (hundred * 100) == 0) || (n % (hundred * 100) >= 20) && (n % (hundred * 100) <= 99)) {
            result+=" hundred " + tens[tenth] + " " + ones[unit];
        }

        console.log(result);
    }
}
numberAsWords(0);
numberAsWords(9);
numberAsWords(10);
numberAsWords(12);
numberAsWords(19);
numberAsWords(25);
numberAsWords(98);
numberAsWords(98);
numberAsWords(273);
numberAsWords(400);
numberAsWords(501);
numberAsWords(617);
numberAsWords(711);
numberAsWords(999);
