var getMin = function(arr,store){
  if(store[arr[0]]>store[arr[1]]){
    return [store[arr[1]], arr[1]];
  }else{
    return [store[arr[0]], arr[0]];
  }
};

var getMax = function(arr){
  if(arr[0]<arr[1]){
    return [arr[1], 1];
  }else{
    return [arr[0], 0];
  }
};


var Heap = function(type){
  if(type.toLowerCase()==="min" || type.toLowerCase() === "max"){
    this.type = type;
    this.store=[];
  }else{
    console.log("invalid type, use min or max");
  }
};

Heap.prototype.length = function(){
  return this.store.length;
};

Heap.prototype.min = function(){
  if(this.type === "min"){
    return this.store[0];
  }else{
    console.log("this is a max heap!");
  }
};

Heap.prototype.max = function(){
  if(this.type === "max"){
    return this.store[0];
  }else{
    console.log("this is a min heap!");
  }
};

Heap.prototype.removeMin = function(){
  if(this.type === "min"){
    var min = this.store[0];
    this.store[0] = this.store.pop();
    this.heapifyDown(0);
    return min;
  }else{
    console.log("this is a max heap!");
  }
};


Heap.prototype.removeMax = function(){
  if(this.type === "max"){
    var max = this.store[0];
    this.store[0] = this.store.pop();
    this.heapifyDown(0);
    return max;
  }else{
    console.log("this is a min heap!");
  }
};


Heap.prototype.insert = function(val){
  this.store.push(val);
  this.heapifyUp(this.length()-1);
  return val;
};


Heap.prototype.heapifyUp = function(idx){
  if(this.type==="min"){
    if(this.store[idx] < this.store[this.parent(idx)]){
        var current = this.store[idx];
        this.store[idx] = this.store[this.parent(idx)];
        this.store[this.parent(idx)] = current;
        this.heapifyUp(this.parent(idx));
    }
  }else if(this.type==="max"){
    if(this.store[idx] > this.store[this.parent(idx)]){
        var current = this.store[idx];
        this.store[idx] = this.store[this.parent(idx)];
        this.store[this.parent(idx)] = current;
        this.heapifyUp(this.parent(idx));
    }
  }else{
    console.log("heap type error!");
  }
};

Heap.prototype.heapifyDown = function(idx){
  if(this.store[idx]){
    if(this.type==="min"){
      var child = getMin(this.children(idx),this.store);
      if(this.store[idx]>child[0]){
        var current = this.store[idx];
        this.store[idx] = child[0];
        this.store[child[1]] = current;
        this.heapifyDown(child[1]);
      }
    }else if(this.type==="max"){
      var child = getMax(this.children(idx),this.store);
      if(this.store[idx]<child[0]){
        var current = this.store[idx];
        this.store[idx] = child[0];
        this.store[child[1]] = current;
        this.heapifyDown(child[1]);
      }
    }else{
      console.log("heap type error!");
    }
  }
};



Heap.prototype.parent = function(i){
  return Math.floor((i-1)/2);
};

Heap.prototype.children = function(i){
  return [2*i+1, 2*i+2];
};

Heap.prototype.visual = function(){
  var out = {};

  var _subVisual = function(idx,depth){
    if(this.store[idx]){ // if i exist than I will save myself and call my children
      if(!out[depth]){out[depth]="";}
      out[depth]+=" "+this.store[idx]+" ";

      var children = this.children(idx);
      _subVisual(children[0],depth+1);
      _subVisual(children[1],depth+1);
    }
  }.bind(this);
  _subVisual(0,0);

  return out;
};

var heap = new Heap("min");
for(var i =0; i<20;i++){
  heap.insert(Math.floor(Math.random()*50)+50);
}

heap.visual();

for(var i =0; i<10;i++){
  console.log(heap.removeMin());
}







console.log(heap.visual());
