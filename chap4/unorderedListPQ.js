var pq = function(){
  this.store = [];
};


pq.prototype.insert = function(val){
  this.store.push(val);
  return val;
};


pq.prototype.takeMin = function(){
  var min = this.min();
  this.store.splice(min[1],1);
  return min[0];
};



pq.prototype.min = function(){
  var min = this.store[0];
  var idx = 0;
  this.store.forEach(function(val,i){
    if(val<min){
      min = val;
      idx = i;
    }
  });

  return [min,idx];
};

pq.prototype.size = function(){
  return this.store.length;
};



var pq1= new pq();

// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.insert(Math.random()*10));
// console.log("   ");
// console.log(pq1.takeMin());
// console.log(pq1.takeMin());
// console.log("   ");
// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.insert(Math.random()*10));
// console.log(pq1.min());
