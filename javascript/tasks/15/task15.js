/*globals Handlebars*/

////Task 1////
var templateHTML = document.getElementById('template').innerHTML;
var template = Handlebars.compile(templateHTML);
var data = {
    headers: ['Vendor', 'Model', 'OS'],
    items: [{
        col1: 'Nokia',
        col2: 'Lumia 920',
        col3: 'Windows Phone'
    }, {
        col1: 'LG',
        col2: 'Nexus 5',
        col3: 'Android'
    }, {
        col1: 'Apple',
        col2: 'iPhone 6',
        col3: 'iOS'
    }]
};

var result = template(data);
document.getElementById('result').innerHTML = result;

////Task 2////
var templateHTML2 = document.getElementById('template2').innerHTML;
var template2 = Handlebars.compile(templateHTML2);
var dataAnimals = {
    animals: [{
        name: 'Lion',
        url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
    }, {
        name: 'Turtle',
        url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
    }, {
        name: 'Dog'
    }, {
        name: 'Cat',
        url: 'http://i.imgur.com/Ruuef.jpg'
    }, {
        name: 'Dog Again'
    }]
}

var result1 = template2(dataAnimals);
document.getElementById('result1').innerHTML = result1;

////Task 3////

var listView = function() {
var templateHTML3 = document.getElementById('books-template').innerHTML;
var template3 = Handlebars.compile(templateHTML3);

var listView = {
    list: [{
        id: 1,
        title: 'JavaScript: The Good Parts'
    }, {
        id: 2,
        title: 'Secrets of the JavaScript Ninja'
    }, {
        id: 3,
        title: 'Core HTML5 Canvas'
    }, {
        id: 4,
        title: 'JavaScript Patterns'
    }]
}
var result3 = template3(listView);
document.getElementById('books-list').innerHTML = result3;
};
