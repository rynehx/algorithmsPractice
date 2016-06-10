var selectionSort = function(arr,cb){
  var i =0; //starting point of partition

  while(i<arr.length){
    var current=i;

    for(var j = i+1;j <arr.length;j++){
      if(cb(arr[current],arr[j])>0){
        current = j;
      }
    }

    swap(arr,i,current);
    i+=1;
  }

  return arr;
};


var swap = function(arr, i1, i2){
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};


console.log(selectionSort([9,7,99,6,7,5,4,3,6,5,4,3,2,1], function(a, b){

  if(a>b){
    return -1;
  }else if (a===b){
    return 0;
  }else{
    return 1;
  }
  
}));
