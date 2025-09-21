
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



var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];

function calculateRating(watchList){
  var isNolan = watchList.filter(function(list){
      return list.Director === 'Christopher Nolan'
  })
  var results = isNolan.reduce(function(total, movie){
      return total + parseFloat(movie.imdbRating);
      
}, 0);
return results / isNolan.length;
}





// Expected results
console.log(calculateRating(watchList)); // Output: 8.675







// ...existing code...

// Bài tập nhỏ: Tìm từ dài nhất trong chuỗi
function findLongestWord(str) {
    var words = str.split(' ');
    var longest = '';
    for (var word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Ví dụ sử dụng:
console.log(findLongestWord("Học lập trình JavaScript thật vui")); // Output: "JavaScript"

// ...existing code...// ...existing code...

// Bài tập nhỏ: Tìm từ dài nhất trong chuỗi
function findLongestWord(str) {
    var words = str.split(' ');
    var longest = '';
    for (var word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Ví dụ sử dụng:
console.log(findLongestWord("Học lập trình JavaScript thật vui")); // Output: "JavaScript"

// ...existing code...