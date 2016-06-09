var DynamicArray = function(){
  this.store= new Array(10);
  this.shift=0;
  this.size = 0;
};


DynamicArray.prototype.get = function(idx){
  if(idx<= this.size-1){
    return this.store[this.wrap(idx+this.shift)];
  }else{
    console.log("bad index");
  }
};

DynamicArray.prototype.wrap = function(idx){
  var res = (idx%(this.store.length));
  if (res<0){
    return res+this.store.length;
  }else{
    return res;
  }
};


DynamicArray.prototype.set = function(idx,val){

    this.store[this.wrap(idx+this.shift)]= val;

};

DynamicArray.prototype.shifts = function(){
  this.resize();
  var val = this.store[this.wrap(this.shift)];
  this.size-=1;
  this.shift+=1;
  return val;
};

DynamicArray.prototype.unshift = function(val){
  this.resize();
  this.store[this.wrap(this.store.length-1+this.shift)]=val;
  this.size+=1;
  this.shift-=1;
};

DynamicArray.prototype.pop = function(){
  this.resize();
  var val = this.store[this.wrap(this.size-1+this.shift)];
  this.size-=1;
  return val;
};

DynamicArray.prototype.push = function(val){
  this.resize();
  this.store[this.wrap(this.size+this.shift)] = val;
  this.size+=1;
};


DynamicArray.prototype.sizeUp = function(){
  var newArray = new Array(this.size*2);
  for(var i = 0; i< this.size;i++){
    newArray[i] = this.store[this.wrap(i+this.shift)];
  }

  this.shift = 0;
  this.store = newArray;
};

DynamicArray.prototype.sizeDown = function(){
  var newArray = new Array(this.size*Math.floor(1/2));
  for(var i = 0; i< this.size;i++){
    newArray[i] = this.store[this.wrap(i+this.shift)];
  }
  this.shift = 0;
  this.store = newArray;
};

DynamicArray.prototype.resize = function(){

  if(this.size >= this.store.length){
    this.sizeUp();
  }else if(this.size>10 &&  this.size === Math.floor(this.store.length/4)){
    this.sizeDown();
  }
};

var array = new DynamicArray;

array.push(1);
console.log(array.store);
array.push(2);
array.push(3);
array.push(4);
console.log(array.store);
array.pop();
array.pop();
array.pop();

array.unshift(5);
array.unshift(6);
array.unshift(7);
array.unshift(8);
array.unshift(9);
array.unshift(10);
array.unshift(11);
array.unshift(12);
array.unshift(13);
array.unshift(14);
array.shifts();
array.shifts();
array.shifts();
array.shifts();
array.shifts();
console.log(array.get(0));


// array.push(5);
// array.push(6);
// array.push(7);
// array.push(8);
// array.push(9);
// console.log(array.store);
// array.push(10);
// array.push(1);


// array.shift();
// array.shift();
// array.shift();
// array.shift();
// array.shift();
// array.shift();
// array.shift();
// array.shift();
// array.shift();
// array.shift();
// array.shift();
// console.log(array.size);
