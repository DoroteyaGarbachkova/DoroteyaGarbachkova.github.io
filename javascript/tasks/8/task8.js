console.log("Problem 1")

function createPerson(fname, lname, age, gender) {
    return {
        firstname: fname,
        lastname: lname,
        age: age,
        gender: gender
    };
}

function createPeople() {
    var i,
        firstNames = ['Asen', 'Angel', 'Boris', 'Georgi', 'Marin', 'Ana', 'Eli', 'Elena', 'Gergana', 'Mariika'],
        lastNames = ['Ivanov', 'Dimitrov', 'Petrov', 'Georgiev', 'Nikolov', 'Borisova', 'Gigova', 'Atanasova', 'Ivanova', 'Georgieva'],
        arr = [];
    for (i = 0; i < 10; i += 1) {
        arr[i] = createPerson(firstNames[i], lastNames[i], (Math.random() * 100) | 0, (i > 4));
    }
    return arr;

}

var people = createPeople();

people.forEach(function(item) {
    //console.log(item);
    var result = [];
    for (var prop in item) {
        result += prop + ': ' + item[prop] + " ";
    }
    console.log(result);
});
console.log("Problem 2")

function peopleOfAge() {
    var people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 35 },
        { firstname: 'Ivan', lastname: 'Ivanov', age: 82 },
        { firstname: 'Asq', lastname: 'Georgieva', age: 21 }
    ];
    var result = people.every(function(item) {
        return item.age >= 18;
    });
    console.log(result);
}
peopleOfAge()

console.log("Problem 3")

function underagePeople() {
    var people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 15 },
        { firstname: 'Ivan', lastname: 'Ivanov', age: 16 },
        { firstname: 'Asq', lastname: 'Georgieva', age: 21 }
    ];
    var person = [];
    var result = people.filter(function(item) {
        return item.age < 18;
    }).forEach(function(item) {
        for (var prop in item) {
            person += prop + ': ' + item[prop] + "\n";

        }
    });

    console.log(person);


}
underagePeople();

console.log("Problem 4")

function averageAgeOfFemales() {
    var people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 15, gender: 'male' },
        { firstname: 'Ani', lastname: 'Ivanova', age: 16, gender: 'female' },
        { firstname: 'Asq', lastname: 'Georgieva', age: 21, gender: 'female' }
    ];
    var avg = 0;
    var result = people.filter(function(item) {
        return item.gender === 'female';
    }).reduce(function(s, number) {
        return (s + number.age) / 2
    }, 0);
    console.log("Avg: " + result);
}
averageAgeOfFemales();

console.log("Problem 5")

function youngestPerson() {
    var people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 35, gender: 'male' },
        { firstname: 'Ivan', lastname: 'Ivanov', age: 30, gender: 'male' },
        { firstname: 'Asq', lastname: 'Georgieva', age: 21, gender: 'female' }
    ];
    var result = people.sort(function(a, b) {
        return a.age - b.age;
    }).find(function(item) {
        return item.gender === 'male';
    });

    console.log(result);

}
youngestPerson()

console.log("Problem 6")

function groupPeople() {
    var people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 35, gender: 'male' },
        { firstname: 'Ivan', lastname: 'Ivanov', age: 30, gender: 'male' },
        { firstname: 'Asq', lastname: 'Georgieva', age: 21, gender: 'female' }
    ];

    var groups = people.reduce(function(gr, person) {
        var letter = person.firstname[0];

        if (!gr[letter]) {
            gr[letter] = [];
        }
        gr[letter].push(person);
        return gr;


    }, {});

    console.log(groups);
}

groupPeople()
