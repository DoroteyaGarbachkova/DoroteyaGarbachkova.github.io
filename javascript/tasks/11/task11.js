var ul = document.getElementById('list');
ul.parentNode.removeChild(ul);
var vegetables = ['tomato', 'potato', 'carrot', 'cabbage', 'cucumber'];

function checkedArr() {
    if (Array.isArray(vegetables)) {
        console.log("Is array");
    } else {
        console.log("Is not array");
    }
}

function checkedArrEl() {
    var i;
    for ( i = 0; i < vegetables.length; i++) {

        if (typeof(vegetables[i]) !== 'string'  && typeof(vegetables[i]) !== 'number') {
           return console.log("Error");
        } 
    }
    return console.log("Is not error");
}

function chekedId() {
    if (ul == undefined) {
        console.log("Error");
    } else {
        console.log("Exist");
    }
}

function lists() {

    var list = '<ul>',
        count = 5,
        i;
    for (var i = 0; i < count; i++) {
        list += '<li>' + vegetables[i] + '</li>';
    }
    list += '</ul>';
    document.body.innerHTML += list;
}
lists()
checkedArr()
checkedArrEl()
chekedId()
