var Stack = function(){
	this.store = new Array(4);
	this.lastValue = -1;
	this.size = 4;
	this.resizeUp = function(){
		var newArray = new Array(this.size*2);
		this.store.forEach(function(el, i){
			newArray[i] = el;
		});
		this.store = newArray;
		this.size = this.size*2;
	};
	this.resizeDown = function(){
		console.log(Math.floor(this.size/2));
		var newArray = new Array(Math.floor(this.size/2));

		for(var i = 0; i < newArray.length; i++){
			newArray[i] = this.store[i];
		}


		this.store = newArray;
		this.size = Math.floor(this.size/2);
	};
};



Stack.prototype.push = function(item){
	if(this.lastValue+1 === this.size){
		this.resizeUp();
	}


	if(this.lastValue >= 0){
		this.store[this.lastValue+1] = item;
		this.lastValue++;
	}else{
		this.lastValue = 0;
		this.store[this.lastValue] = item;
	}
	return item;
};


Stack.prototype.pop = function(){


	if(this.lastValue >= 0){
		var popVal = this.store[this.lastValue];
		this.store[this.lastValue] = undefined;
		this.lastValue--;
		if(this.lastValue+1 === Math.floor(this.size/4) && Math.floor(this.size/4) > 4){
			this.resizeDown();
		}
		return popVal;
	}else{
		console.log("array is already empty");
	}
};







var myStack = new Stack();

for(var i = 0; i < 17; i++){
	myStack.push(i);
}

for(var i = 0; i < 9; i++){
	myStack.pop();
}
