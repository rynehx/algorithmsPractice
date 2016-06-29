var stringCompression = function(string){
  var result = "";
  var currentChar = string[0];
  var currentCount = 1;
  var compressed = false;

  for(var i = 1; i<string.length; i++){
    if(string[i] === currentChar){//did compress
      compressed = true;
      currentCount += 1;
    }else{//next series of char
      result += currentChar + currentCount;
      currentChar = string[i];
      currentCount=1;
    }
  }
     result += currentChar + currentCount;

  if(compressed){
    return result;
  }
  return string;

};


console.log(stringCompression("efheud"));
