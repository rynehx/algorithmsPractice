var ArrayList = function(){
	this.store = new Array(8);
	this.size = 8;
	this.prevIdx = -1;
	this.shiftIdx = 0;
	this.index = function(i){
		var mod = (this.shiftIdx + i)%(this.size);
		if(mod<0){ return this.size + mod;}
		return mod;
	};
	this.sizeUp = function(){
		if(this.prevIdx+1 >= this.size){
			var tempStore = new Array(this.size*2);

			for(var i = 0; i <= this.prevIdx; i++){
				tempStore[i] = this.store[this.index(i)];
			}
			this.store = tempStore;
			this.shiftIdx = 0;
			this.size*=2;
		}
	};
};

ArrayList.prototype.push = function(el){
	this.sizeUp();
	this.prevIdx++;
	this.store[this.index(this.prevIdx)] = el;
	return el;
};

ArrayList.prototype.pop = function(){
	if(this.prevIdx >= 0){
		var result = this.store[this.index(this.prevIdx)];
		this.store[this.index(this.prevIdx)] = undefined;
		this.prevIdx--;
		return result;
	}else{
		console.log("empty array");
	}

};

ArrayList.prototype.shift = function(){
	if(this.prevIdx >= 0){
		var result = this.store[this.index(0)];
		this.store[this.index(0)] = undefined;
		this.prevIdx--;
		this.shiftIdx++;
		return result;
	}else{
		console.log("empty array");
	}
};

ArrayList.prototype.unshift = function(el){
	this.sizeUp();
	this.store[this.index(-1)] = el;
	this.prevIdx++;
	this.shiftIdx--;
	return el;
};







var value = new ArrayList();

for(var i = 0; i < 5; i++){
	value.push(i+1);
}

for(var i = 0; i < 5; i++){
	value.unshift(-i);
}
