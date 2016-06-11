var _compare = function(a,b){
  if(a<b){
    return -1;
  }else if(a===b){
    return 0;
  }else{
    return 1;
  }
};



var quickSort = function(arr,cb){
  if(!cb){
    cb = _compare;
  }

  partition(arr,0,arr.length-1,cb);
  return arr;
};

var partition = function(arr,start,ending,cb){

  //randomize pivot for speed
  var pivot = Math.floor(Math.random()*(ending-start+1))+start;
  var pivotVal = arr[pivot];

  //swap pivot to start location before sorting
  var temp = arr[pivot];
  arr[pivot] = arr[start];
  arr[start] = temp;
  pivot = start; // put pivot idx to start

  for(var i =start+1; i<=ending;i++){
    if(cb(arr[i],arr[pivot])<0){
      var temp2 = arr[i];
      arr[i] = arr[pivot+1];
      arr[pivot+1] = arr[pivot];
      arr[pivot] = temp2;
      pivot+=1;
    }
  }

  if((pivot-1)>start){
    partition(arr, start, pivot-1, cb);
  }

  if(ending>(pivot+1)){
    partition(arr, pivot+1, ending, cb);
  }
};


console.log(quickSort([9,8,7,7,6,6,5,4,5,6,7,8,7,6,5,4,3,2,2,1,2,3]));
