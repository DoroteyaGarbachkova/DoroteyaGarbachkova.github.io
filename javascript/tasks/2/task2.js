//Problem 1
function oddOrEven() {
    var number;
    number = document.getElementById("number").value;
    if (number % 2 == 0) {
        text = "False";
    } else {
        text = "True";
    }
    document.getElementById("demo1").innerHTML = text;
}
//Problem 2
function divisible() {
    var number1;
    number1 = document.getElementById("number1").value;

    if ((number1 % 5 == 0) && (number1 % 7 == 0)) {
        text = "True";
    } else {
        text = "False";
    }
    document.getElementById("demo2").innerHTML = text;
}
//Problem 3
function rectangleArea() {
    var w;
    var h;
    var s;
    w = document.getElementById("w").value;
    h = document.getElementById("h").value;
    s = w * h;
    document.getElementById("demo3").innerHTML = s;
}
//Problem 4
function thirdDigit() {
    var number3; //vuvedenoto chislo
    number3 = document.getElementById("number3").value;
    var buffer = parseInt(number3 / 100);
    if (buffer % 10 == 7) {
        text = "True";
    } else {
        text = "False";
    }
    document.getElementById("demo4").innerHTML = text;
}
//Problem 5
function thirdBit() {
    var number5;
    number5 = document.getElementById("number5").value;
    //console.log((number5 >> 3) &1); 
    document.getElementById("demo5").innerHTML = (number5 >> 3) & 1;
}
//Problem 6
function pointInCircle() {
    var x;
    var y;
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    if (Math.pow(x, 2) + Math.pow(y, 2) <= 25) {
        //console.log(true);
        text = "True";
    } else {
        //console.log(false);
        text = "False";
    }
    document.getElementById("demo6").innerHTML = text;
}
//Problem 7
function prime() {
    var number4;
    var isPrime="True";
    number4 = document.getElementById("number4").value;
    if (number4 < 2) {
        isPrime = "False";
    } else {
        for (var i = 2; i < number4; i++) {
            if (number4 % i == 0) {
                //console.log(false);
                isPrime = "False";

            }
        }
        //isPrime = "True";
    }

    document.getElementById("demo7").innerHTML = isPrime;
}
//Problem 8
function trapezoidArea() {
    var a ;
    var b ;
    var h1;
    var s1;
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    h1 = document.getElementById("h1").value;
    s1 = ((parseInt(a) + parseInt(b)) / 2) * h1;
    document.getElementById("demo8").innerHTML = s1;

}
//Problem 9
function pointInCircleRectangle() {
    var x1;
    var y1;
    x1 = document.getElementById("x1").value;
    y1 = document.getElementById("y1").value;

    var inCircle = (x1 - 1) * (x1 - 1) + (y1 - 1) * (y1 - 1) <= 9;
    var outRectangle = x1 >= -1 && x1 <= 5 && y1 >= -1 && y1 <= 1;

    if (inCircle == true && outRectangle == false) {
        //console.log("yes");
        text = "Yes";
    } else {
        //console.log("no");
        text = "No";
    }
    document.getElementById("demo9").innerHTML = text;

}
