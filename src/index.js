function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//var myRandom = randomRange(5, 15);
const magic = () => new Date();
console.log(magic);

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = arr => {
  const squaredIntegers = arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(x => x * x);

  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4, 5, 6)); // 6

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1];
})();
console.log(arr2);

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorrow } = avgTemperatures;

  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {
    tomorrow: { max: maxOfTomorrow }
  } = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Example of object insidie an object
var myMusic = [
  {
    singer: "Billy Joel",
    song: "Piano man",
    release_year: 1782,
    formats: ["Cd", "8T", "LP"],
    gold: true
  },
  {
    artist: "Beau",
    title: "Cereal man",
    music: "Pop",
    release_year: 1999,
    formats: ["Youtube", "Spotify"]
  }
];
console.log(myMusic);

//Nested arrays
var myPlants = [
  { type: "flowers", list: ["rose", "tulip", "flower"] },
  {
    types: "trees",
    list: ["fir", "pine", "birch"]
  }
];
var myFullPlants = myPlants[0].list[1];
console.log(myFullPlants);

// Setup
var collection = {
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    artist: "Robert Palmer",
    tracks: []
  },
  "5439": {
    album: "ABBA Gold"
  }
};

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(1245, "tracks", "Addicted to Love"));
console.log(updateRecords(1245, "album", "Riptide"));

var whileLoop = [];
var i = 0;
while (i < 25) {
  whileLoop.push(i);
  i++;
}
console.log(whileLoop);

var example = [];
var q = 0;
while (q < 5) {
  example.push(q);
  q++;
}
var anArray = [];
var j = 10;

do {
  anArray.push(j);
  j++;
} while (j < 5);

console.log(anArray);

var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Akira", "adress"));

function chekIfTrue(a, b) {
  return a === b ? "I am true" : "I am false";
}
console.log(chekIfTrue(2, 1));

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(19));

var age = 17;
var beverage = age > 21 ? "Beer" : "Juice";
console.log(beverage);

function greeting(person) {
  var name = person ? person.name : ",stranger!";
  return "Howdly " + name;
}
console.log(greeting({ name: "Mundo!" }));
console.log(greeting(null));

function example2(value) {
  return value === "Awesome day"
    ? "Lucky"
    : value === "Great day"
    ? "Not that lucky"
    : value === "bad day"
    ? "Unlucky"
    : "Your luck sucks";
}
console.log(example2("Awesome day"));

let catName = "Oliver";
let quote;
function sayMeow() {
  "use strict";
  catName = "Lucifer";
  quote = catName + " says Meow!";
  return quote;
}
console.log(sayMeow());

const localChanges = {
  today: { min: 32, max: 87 },
  tomorrow: { min: 32, max: 78 }
};

function getMaxOfTheTemp(forecast) {
  const {
    tomorrow: { max: maxOfTomorrow }
  } = forecast;
  return maxOfTomorrow;
}
console.log(getMaxOfTheTemp(localChanges));

const example4 = {
  today: { morning: "breakfast", noon: "meal" },
  tomorrow: { morning: "don´t know", noon: "meal" }
};

function example3(value) {
  const {
    today: { morning: whatIEat }
  } = value;
  return whatIEat;
}
console.log(example3(example4));

const [z, , x, y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let a = 5,
  b = 4;
(() => {
  [a, b] = [b, a];
})();
console.log(a);
console.log(b);

let c = 2,
  v = 8;
(() => {
  [c, v] = [5, 0];
})();
console.log(c);
console.log(v);
