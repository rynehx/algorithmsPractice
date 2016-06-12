var pq = function(){
  this.store = [];
};

pq.prototype.find = function(arr,val,start,ending){

  var half = Math.floor((ending-start)/2)+start;
  if(start===ending){

    if(val<this.store[start]){
      return start;
    }else{
      return start+1;
    }

  }else{

    if(val===arr[half]){
      return half;
    }else if(val < arr[half]){
      if(half-1-start<0){
        return start;
      }else{

        return this.find(arr,val,start,half-1);
      }
    }else{
      if(ending-(half+1)<0){
        return ending+1;
      }else{
        return this.find(arr,val,half+1,ending);
      }
    }
  }
};

pq.prototype.insert = function(val){
  var idx = this.find(this.store,val,0,this.store.length);
  this.store.splice(idx,0,val);
  return val;
};

pq.prototype.min = function(){
  return this.store[0];
};

pq.prototype.takeMin = function(){
  return this.store.shift();
};


var pq1 = new pq();

pq1.insert(Math.random()*10);
pq1.insert(Math.random()*10);
pq1.insert(Math.random()*10);
pq1.insert(Math.random()*10);
pq1.insert(Math.random()*10);
pq1.insert(Math.random()*10);
console.log(pq1.store);
pq1.takeMin();

console.log(pq1.store);
