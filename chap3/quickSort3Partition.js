//quick sort using three way partion
var count = 0; // used to check how many times partion is called

var quickSort = function(arr,cb,start,ending){

  if(!start || !ending){
    start = 0;
    ending = arr.length-1;
  }

  if(!cb){
    cb = function(a,b){
      if(a<b){
        return -1;
      }else if(a>b){
        return 1;
      }else{
        return 0;
      }
    };
  }


  partition(arr, start, ending, cb);

  return arr;

};

var partitionCount = function(){
  console.log(count);
  count+=1;
};


var partition = function(arr, start, ending, cb){
  partitionCount();

  var pivot = start + Math.floor(Math.random()*(ending-start+1));

  var temp = arr[pivot];
  arr[pivot] = arr[start];
  arr[start] = temp;
  pivot = start;
  var equal = start;

  for(var i = start+1; i<=ending; i++){

    if(cb(arr[i],arr[pivot]) === -1){ //triple swap
      temp = arr[i];
      arr[i] = arr[pivot+1];
      arr[pivot+1] = arr[equal];
      arr[equal] = temp;
      pivot += 1;
      equal += 1;
    }else if(cb(arr[i],arr[pivot]) === 0){
      temp = arr[i];
      arr[i] = arr[pivot+1];
      arr[pivot+1] = temp;
      pivot+=1;
    }

  }

  if((pivot+1)<ending){
    partition(arr,pivot+1, ending,cb);
  }

  if(start< (equal-1)){
    partition(arr,start, equal-1,cb);
  }

};


var array=[];
for(var i =0; i< 1000000; i++){
  array.push( Math.floor(Math.random()*40));
}
quickSort(array);

// array.forEach(function(el){
//   console.log(el);
// });
