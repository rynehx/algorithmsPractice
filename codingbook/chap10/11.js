function peak(arr){
	var c  = 0;
	var p = 0;


	while(c < arr.length){
		if(check(arr,c)){
			var temp = arr[p];
			arr[p] = arr[c];
			arr[c] = temp;
			p+=1;
		}
		c+=1;
	}


	return arr;
}


function check(arr,i){
	if(i<0 || i >arr.length-1){
		console.log("out of bounds");
		return;
	}

	if(i===0 ){
		return (arr[0]>=arr[1] || arr[0]<=arr[1]);
	}else if( i===arr.length-1){
		return (arr[arr.length-1]<=arr[arr.length-2] || arr[arr.length-1]>=arr[arr.length-2]);
	}else{
		if( (arr[i]>=arr[i+1] && arr[i]>=arr[i-1]) || (arr[i] <= arr[i+1] && arr[i] <= arr[i-1])){
			return true;
		}
	}

	return false;
}

peak([2,3,4,5,6,2,3]);
