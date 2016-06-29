
///////////////////////////////////////////////////////////////////////////////
//letter to num
var letterToNum = {"a":1, "b":2, "c":3, "d":4, "e":5, "f":6, "g":7,
"h":8, "i":9, "j":10, "k":11, "l":12, "m":13, "n":14, "o":15, "p":16, "q":17,
"r":18, "s":19, "t":20, "u":21, "v":22, "w":23, "x":24, "y":25, "z":26};

//num to letter
 var numToLetter = {};
 Object.keys(letterToNum).forEach(function(el){
   numToLetter[letterToNum[el]] = el;
 });
///////////////////////////////////////////////////////////////////////////////

var decoder = function(string){
  var res = "";
  for(var i = 0; i<string.length; i++){
    res += letterToNum[string[i]];
  }
  return res;
};

var _scramble = function(string, current, i, arr){
  // console.log(current);

  if(i+2 <= string.length){
    if(numToLetter[string[i]]){
    _scramble(string, current + numToLetter[string[i]], i+1, arr);
    }
    if(numToLetter[string[i] + string[i + 1]]){
      _scramble(string, current + numToLetter[string[i] + string[i + 1]], i+2, arr);
    }

  }else if(i+1 <= string.length){
    if(numToLetter[string[i]]){
    _scramble(string, current + numToLetter[string[i]], i+1, arr);
    }

  }


  if(i===string.length){
    arr.push(current);
  }



};

var scrambleString = function(string,arr){
  var decoded = decoder(string);
  _scramble(decoded, "",  0, arr, 1);
};


var arr = [];
scrambleString("cee", arr);

console.log(arr);
