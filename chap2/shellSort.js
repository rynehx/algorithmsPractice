var shellSort = function(arr,cb){
  var h=1;
  while(h<arr.length/3)
    h=h*3+1;


while(h>=1){
  for(var i = h; i < arr.length; i++){
    for(var j=i; j>=h && cb(arr[j], arr[j-h])===-1; j-=h ){
      swap(arr, j, j-h);
    }
  }
  h=Math.floor(h/3);
}


return arr;

};


var swap = function(arr,i1,i2){
    var temp = arr[i2];
    arr[i2] = arr[i1];
    arr[i1] = temp;
};


console.log(shellSort([9,7,99,6,7,5,4,3,6,5,4,3,2,1], function(a, b){

  if(a<b){
    return -1;
  }else if (a===b){
    return 0;
  }else{
    return 1;
  }

}));
