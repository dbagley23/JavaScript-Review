var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
function last(myArr){
  console.log(myArr[myArr.length -1]);
}
var threeItems = ["God", "Family", "Baseball"]
last(threeItems);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
function findEvens(myArr){
  for(var i = 0; i < myArr.length; i++){
    if(myArr[i]%2 !== 0) {
      myArr.splice(i, 1)
      i--;
    }
  }
  return console.log(myArr)
}
findEvens(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
function finder(random, nums){
  var found = false;
  for(var i = 0; i< nums.length; i++){
    if(nums[i] === random){
      console.log(random);
      found = true;
    }
  }
    return found
}
finder(getRandomArbitrary(), randomArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = [];

//code here
function copyAdd(first, second){
  for(var i = 0; i < first.length; i++){
    second.push(first[i]);
  }
  second.push(6,7);
}
copyAdd(first, second);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
function longest(sentence){
  var theLongestWord = ''
  var words = sentence.split(" ");
  debugger;
  for(var i = 0; i < words.length; i++){
    if(words[i].length > theLongestWord.length){
      theLongestWord = words[i];
    }
  }
  return theLongestWord;
}
longest(sentence);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
function capitalize(sentence){
  var words = sentence.split(" ");
  var newSentence = "";
  sentence = '';
  for(var i = 0; i < words.length; i++){
    words[i] =  words[i].charAt(0).toUpperCase() + words[i].slice(1);
    sentence =  sentence + words[i] + " ";
  }
  return sentence.trim()
}
capitalize(myPoem);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
function vowelCounter(sentence){
  var vCounter = 0;
  var vowels = ['a','e','i','o','u'];
  for(var i = 0; i < sentence.length; i++){
    for(var j = 0; j < vowels.length; j++){
      if(sentence.charAt(i).toUpperCase() === vowels[j].toUpperCase()){
        vCounter ++;
      }
    }
  }
  return vCounter;
}
vowelCounter(sentence);
