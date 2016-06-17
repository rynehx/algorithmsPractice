function oneAway(string1, string2){
	if(Math.abs(string1.length-string2.length)>1){
		return false;
	}
	var l1 = string1.length;
	var l2 = string2.length;

	var i1 = 0;
	var i2 = 0;
	var strike = false;

	while(i1 < l1 && i2 < l2){

		if(string1[i1]!==string2[i2]){
			if(strike){
				return false;
			}else{
				strike = true;
			}
			if(l1<l2){
				i2+=1;
			}else if(l1>l2){
				i1+=1;
			}else{
				i2+=1;
				i1+=1;
			}
		}else{
			i2+=1;
			i1+=1;
		}

	}
	return true;
}
