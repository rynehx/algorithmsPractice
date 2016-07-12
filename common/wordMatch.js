var search = function(arr,words){
	var hash = decoder(arr);

	var result=[];

	words.forEach(
	function(word){

		for(var i = 0;i < word.length; i++){

		}
	});

	return result;

};

var decoder = function(arr){
	var hash = [];

	arr.forEach(function(el){
		if(hash[el]){
			hash[el]+=1;
		}else{
			hash[el]=1;
		}
	})
	return hash;
};
