var pas = function(n){
	var res = [];

	for(var j = 1; j <= n; j++){
		var temp = [];
		if(j<=2){
			for(var k = 0; k < j; k++){
				temp.push(1);
			}
		}else{
			temp.push(1);
			for(var k = 0; k < j-2; k++){

				temp.push(res[res.length-1][k] + res[res.length-1][k+1]);
			}
			temp.push(1);
		}

		res.push(temp);
		temp = [];
	}
	return res;
};

pas(5);
