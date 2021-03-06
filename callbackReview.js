/* Declare and Define the functions here that will make the function calls below work properly */

function first(arr, cb){
  cb(arr[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function last(names, cb){
  cb(names[names.length - 1]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.

function contains(theName, names, cb){
  var inNames = false;
  names.forEach(function(input, i){
    debugger;
    if(input === theName){
      inNames = true;
    }
  })

  cb(inNames)
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


function map2(arr, cb){
  var newArr = [];
  arr.forEach(function(number){
    newArr.push(cb(number));
  });
      return newArr;
}


var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map2(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var uniq2 = function(arr, cb){
  var uniqueArr = [];
  arr.forEach(function(input, i){
    if (uniqueArr.length === 0){
      uniqueArr.push(input);
    } else {
      var inArray = false;
      uniqueArr.forEach(function(input2, i2){
        if(input === input2){
          inArray = true;
        }
      })
      if (inArray === false){
        uniqueArr.push(input);
      }
    }
  })
  cb(uniqueArr)
}



function uniq(names, cb){
  var uniqueArr = [];
  names.forEach(function(name){
    var nameFound = false;
    uniqueArr.forEach(function(newName){
      if (name === newName){
        nameFound = true;
      }
    });
      if (nameFound === false){
        uniqueArr.push(name);
      }
  });
  return cb(uniqueArr);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
function each(names, cb){
  names.forEach(function(name, i){
    cb(name, i);
  });
};



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function getUserById(userID, arr, cb){
  arr.forEach(function(input, i){
    if(input.id === userID){
      cb(users[i]);
    }
  })
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function find(arr, cb){
  for(var i = 0; i < arr.length; i++){
    var result = cb(arr[i]);
    if(result){
      return arr[i];
    }
  };
}


//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
var result = find(numbers, function(num){
  return num % 2 == 0; //should return 2
});

console.log(result);
