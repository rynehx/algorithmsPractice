function parent(num,string,open,close,res){

	if(open+close >= num*2){
		res.push(string);
		return;
	}

	if(close >= open){
		parent(num, string+"(",open+1,close,res);
	}else if (open===num){

		parent(num, string+")",open,close+1,res);
	}else{
			parent(num, string+"(",open+1,close,res);
			parent(num, string+")",open,close+1,res);
	}

	return res;
}


parent(6,"",0,0,[]);
