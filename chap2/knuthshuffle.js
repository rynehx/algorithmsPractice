var shuffle = function(arr){
  arr.forEach(function(el,i){
    var r = Math.floor(Math.random()*i);
    swap(arr,i,r);
  });

  return arr;
};

var swap = function(arr, i, j){
 var temp = arr[i];
 arr[i] = arr[j];
 arr[j] = temp;
};



console.log(shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));
