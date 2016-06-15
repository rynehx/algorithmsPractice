var search = function(arr,el,start,ending){

  if(!start){
    start = 0;
    ending = arr.length-1;
  }

  if(ending-start<0){
    return -1;
  }

  if(ending===start){
    if(arr[start] === el){
      return start;
    }else{
      return -1;
    }
  }


  var mid = Math.floor((ending-start)/2)+start;

  if(el===arr[mid]){
    return mid;
  }else if (el < arr[mid]){
    return search(arr, el, 0, mid-1);
  }else{
    return search(arr, el, mid+1, arr.length-1);
  }


};


console.log(search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],20));
