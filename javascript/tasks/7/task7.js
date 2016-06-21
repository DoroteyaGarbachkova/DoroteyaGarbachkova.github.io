console.log("Problem 1")

function planarCoordinates(x1, x2, y1, y2) {
    var a = x1 - x2;
    var b = y1 - y2;
    var distance = Math.sqrt((a, 2) + (b, 2));
    if (a + b > distance) {
        console.log("True");
    } else {
        console.log("False");
    }
}
planarCoordinates(4, 2, 6, 4);
planarCoordinates(4, 2 - 6, 4);


console.log("Problem 2")

function removeElements(n) {
    var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            arr.splice(i, 1);
        }
    }

    console.log(arr);
}
removeElements(1);
removeElements(2);
removeElements(4);

console.log("Problem 3");

function clone(obj) {
    if (typeof obj != "object") {
        return obj;
    }

    var cloned = {};
    for (var attr in obj) {
        cloned[attr] = clone(obj[attr])
    }
    return cloned;
}
console.log('Mitko');
console.log({ firstname: 'Gosho', lastname: 'Petrov', age: 32 });



console.log("Problem 4");

function hasProperty(prop) {
    var people = { firstname: 'Gosho', lastname: 'Petrov', age: 32 };
    if (people.hasOwnProperty(prop)) {
        console.log("True");
    } else {
        console.log("False");
    }
}
hasProperty('age');
hasProperty('course');

console.log("Problem 5");

function youngestPerson() {
    var people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
        { firstname: 'Ivan', lastname: 'Ivanov', age: 82 },
        { firstname: 'Asq', lastname: 'Georgieva', age: 21 }
    ];
    var minAge = people[0].age;

    for (var i = 0; i < people.length; i++) {
        if (people[i].age < minAge) {
            minAge = people[i].age;
            console.log('The youngest person is ' + people[i].firstname + ' ' + people[i].lastname);

        }

    }
}
youngestPerson();

console.log("Problem 6");

function group() {
    var people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
        { firstname: 'Ivan', lastname: 'Ivanov', age: 21 },
        { firstname: 'Asq', lastname: 'Georgieva', age: 21 }
    ]

    var groups = {};
    for (var i = 0; i < people.length; i++) {
        var groupName = people[i].age;
        if (!groups[groupName]) {
            groups[groupName] = [];
        }
        groups[groupName].push(people[i].firstname);

    }
    people = [];
    for (var groupName in groups) {
        people.push({ age: groupName, firstname: groups[groupName] });
    }
    console.log(people);
}
group();
