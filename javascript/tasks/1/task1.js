//numbers
var a = 5;
var value1 = document.getElementById("value1");
value1.innerHTML = typeof a;

var b = 6.5;
var value2 = document.getElementById("value2");
value2.innerHTML = typeof b;

var ab = a + b;
var value3 = document.getElementById("value3");
value3.innerHTML = typeof ab;



//boolean
var greater = (a === b);
var value4 = document.getElementById("value4");
value4.innerHTML = typeof greater;

var c = true;
var value5 = document.getElementById("value5");
value5.innerHTML = typeof c;

//string
var lname = 'Ivanov';
var value6 = document.getElementById("value6");
value6.innerHTML = typeof lname;
var value7 = document.getElementById("value7");
value7.innerHTML = 'Ivan' + ' ' + lname;


var name = 'Mitko' + ' ' + 'Kirilov';
var value8 = document.getElementById("value8");
value8.innerHTML = typeof name;
var value9 = document.getElementById("value9");
value9.innerHTML = 'Mitko' + ' ' + 'Kirilov';


var quotedText = "'How you doin?', Joey said";
var value10 = document.getElementById("value10");
value10.innerHTML = typeof quotedText;
var value11 = document.getElementById("value11");
value11.innerHTML = '"How you doin?", Joey said';


var str = '';
var value12 = document.getElementById("value12");
value12.innerHTML = typeof str;

//undefined
var y = undefined;
var value13 = document.getElementById("value13");
value13.innerHTML = typeof y;

var z;
var value14 = document.getElementById("value14");
value14.innerHTML = typeof z;

//object
var x = null;
var value15 = document.getElementById("value15");
value15.innerHTML = typeof x;

var arr = [];
var value16 = document.getElementById("value16");
value16.innerHTML = typeof arr;

var obj = {};
var value17 = document.getElementById("value17");
value17.innerHTML = typeof {};

var abc = 3;
abc = null;
var value18 = document.getElementById("value18");
value18.innerHTML = typeof abc;

var d = 9;
var d = new Number(2);
var value19 = document.getElementById("value19");
value19.innerHTML = typeof d;
