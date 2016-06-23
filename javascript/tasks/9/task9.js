console.log('Problem 1')

function reverseWord(word) {
    var reversed = word.split('').reverse().join('');
    var wordReversed = String(reversed);
    console.log(wordReversed);
}
reverseWord('sample');

console.log('Problem 2')

function correctBrackets(formula) {
    var countBrackets = 0;
    for (var i = 0; i < formula.length; i++) {
        if (formula[i] == "(") { //if we have opening bracket it`s OK
            countBrackets++;
        }
        if (formula[i] == ")") {
            countBrackets--; //if we have closing bracket before opening one, it`s a mistake and countBrackets will be<0
        }
    }
    if (countBrackets < 0) {
        console.log("false");
    }
    if (countBrackets == 0) { //if in the end opening and closing brackets are the same number, the brackets are correctly p
        console.log("true");
    }

}

correctBrackets('((a+b)/5-d)');
correctBrackets(')(a+b))');

console.log('Problem 3')

function subStringInText() {
    var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
    var pattern = /im/g;
    var matches = text.match(pattern);
    console.log(matches);
    var n = matches.length;
    console.log("The result is: " + n);
}
subStringInText();

console.log('Problem 4')

function parseTags() {
    var input = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
    var strArr = [];
    var i;
    var stringType = "normal";
    for (i = 0; i < input.length; i++) {
        if (input.substr(i, 8) == "<upcase>") {
            i += 8;
            stringType = "toUpper";
        } else if (input.substr(i, 9) == "<mixcase>") {
            i += 9;
            stringType = "toMix";
        } else if (input.substr(i, 9) == "<lowcase>") {
            i += 9;
            stringType = "toLower";
        } else if (input.substr(i, 9) == "</upcase>") {
            i += 9;
            stringType = "normal";
        } else if (input.substr(i, 10) == "</mixcase>" || input.substr(i, 10) == "</lowcase>") {
            i += 10;
            stringType = "normal";
        }
        if (stringType == "normal") {
            strArr.push(input.substr(i, 1));
        } else if (stringType == "toUpper") {
            strArr.push(input.substr(i, 1).toUpperCase());
        } else if (stringType == "toLower") {
            strArr.push(input.substr(i, 1).toLowerCase());
        } else if (stringType == "toMix") {
            // random
            if (Math.floor(Math.random() * 2) == 0) {
                strArr.push(input.substr(i, 1).toUpperCase());
            } else {
                strArr.push(input.substr(i, 1).toLowerCase());
            }
        }
    }
    console.log(strArr.join(''));
}
parseTags()

console.log('Problem 5')

function nbsp() {
    var text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    var result = text.replace(/ /g, '&nbsp');
    console.log(result);

}
nbsp();

/*console.log('Problem 6')

function extractTextFromHTML() {
    var html = document.getElementById("txt").innerHTML;
    document.getElementById("txt").innerHTML = html.replace(/<[^>]*>/g, "");
}
console.log(extractTextFromHTML());*/

console.log('Problem 7')

function parseURL() {
    var url = 'http://telerikacademy.com/Courses/Courses/Details/239';
    var result = {};
    var protocol = url.substring(0, url.indexOf(":"));
    var server = url.substring(url.indexOf(":") + 3, url.indexOf("/", url.indexOf(":") + 3));
    var resource = url.substr(url.indexOf("/", url.indexOf(":") + 3));
    console.log("protocol: " + protocol);
    console.log("server: " + server);
    console.log("resource: " + resource);
}
parseURL();

console.log('Problem 8')

function replaceTags() {
    var tag = '<a href="#">teya</a> </br> <a href="#">mitko</a>';
    tag = tag.replace(/<a/g, "[URL");
    tag = tag.replace(/">/g, "]");
    tag = tag.replace(/<\/a/g, "[/URL]");
    console.log(tag);
}
replaceTags()

console.log('Problem 9')

function extractEmails() {
    var email = "My e-mail is:d.teya@gmail.com and your email is:m.dedi@gmail.com";
    var emailSearch = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    var result = email.match(emailSearch);
    console.log(result);
}
extractEmails();

console.log('Problem 10')

function findPalindromes(str) {
    if (str === str.split('').reverse().join('')) {
        console.log("True");
    } else {
        console.log("False");
    }

}
findPalindromes("ABBA");
findPalindromes("lamal");
findPalindromes("exe");
findPalindromes("exen");

console.log('Problem 11')

function format() {
    var format = stringFormat('Hello {0}! How {1} you?', "Peter", "are");
    return format;
}

function stringFormat(input) {
    for (var i = 0; i < 30; i++) {
        var regex = new RegExp("[{]" + i + "[}]", "gi");
        input = input.replace(regex, arguments[i + 1]);
    }
    return input;
}
console.log(format());

console.log('Problem 12')

var template = document.getElementById('list-item').innerHTML;
var peopleList = "";
var temp = '';
function generateList() {
    var people = [{ name: 'Peter', age: 14 }, { name: "Pavel Nedved", age: 38 }];
    var len = people.length;

    for (var i = 0; i < len; i++) {
        var temp = '';
        peopleList += "<li>";
        temp = template.replace(/-{name}-/, people[i].name);
        temp = temp.replace(/-{age}-/, people[i].age);
        peopleList += temp;
        peopleList += "</li>";
    }
    var result = "<ul>" + peopleList + "</ul>";
    return result;
}
document.getElementById("list-item").innerHTML = generateList();




