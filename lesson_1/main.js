
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