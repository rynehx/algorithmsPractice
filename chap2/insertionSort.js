var insertionSort = function(arr,cb){
  var i = 1;
  while(i<arr.length){
    var j = i;

    while(cb(arr[i],arr[j-1])===1 && j>0){

      j-=1;
    }

    if(j!==i){
      shift(arr,j,i);
    }

    i+=1;
  }
  return arr;
};


var shift = function(arr,idx1,idx2){ //puts idx2 item right if idx1 and shifts all ofter items
  var pivot = arr[idx2];
  for(var i=idx2; i>=idx1; i--){
    arr[i]=arr[i-1];
  }
  arr[idx1]=pivot;
};




console.log(insertionSort([9,7,99,6,7,5,4,3,6,5,4,3,2,1], function(a, b){

  if(a>b){
    return -1;
  }else if (a===b){
    return 0;
  }else{
    return 1;
  }

}));
