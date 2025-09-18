
// var fullName = 'Tran Vu Dinh Huy';
// var age = 20;

// alert(fullName);
// alert(age);


function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}

writeLog('log1', 'log2', 'log3', 'log4');

var language = [
    'JavaScript',
    'PHP',
    'Ruby'
]

function User(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

var user = new User('Huy', 20, 'HCM');


// Làm bài tại đây
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        return firstName + ' ' + lastName;
    }
}

Student.prototype.getFullName = function(){
    return this.getFullName;
}



// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

for (var i = 0; i < 10; i++) {
    console.log(i);
}


var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function total(togold, sport){
    togold += sport.gold;
    return togold;
}

function getTotalGold(sport){
    var final = sport.reduce(total, 0);
    return final
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23


// function goldHandler(defauteValue, course) {
//     defauteValue +=  course.gold;
//     return defauteValue;
// }

// function getTotalGold(sports) {
//    var value =  sports.reduce(goldHandler, 0);
//    return value;
// }

// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23




