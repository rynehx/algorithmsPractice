var arrayDiff = function(arr1,arr2){
    var a1 = arr1.sort(function(a,b){return a-b;});
    var a2 = arr2.sort(function(a,b){return a-b;});



    var i = 0;
    var j = 0;

    var result = [];

    while(i<a1.length && j < a2.length){
      if(a1[i]===a2[j]){ //increment both to the next element
i = increment(a1, i, a1[i]);
j = increment(a2, j, a2[j]);
      }else if( a1[i] < a2[j]){ // add a1[i] to result and increment a1[i]
           result.push(a1[i]);
	i+=1;
      }else{ // when a1[i] > a2[i] // add a2[j] and increment a2[j]
        	result.push(a2[j]);
j+=1;
      }
    }

while(i<a1.length){
	result.push(a1[i]);
	i+=1;
}

while(j<a2.length){
result.push(a2[j]);
j+=1;
}
	return result;
};


function increment(arr, idx, key){
	var newIdx = idx;
while( arr[newIdx] === key){
	newIdx+=1;
}
	return newIdx;
}



arrayDiff([5,5,6,5,6,5,3,2,3,1,2,3,2,1,6,5,2,1,6,2],[9,9,8,7,8,7,6,5,5,4,4,4,3,3,3,6,7,7,3,2,2,1,1]);
