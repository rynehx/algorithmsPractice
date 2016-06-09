//quick union set joining with weighting
//uses forrest



var QuickUnionWeight = function(size){
  this.size = new Array(size);
  this.store = new Array(size);
  for (var i =0; i < this.store.length; i++){
    this.store[i]=i;
  }
  for (var j =0; j < this.size.length; j++){
    this.size[j]=1;
  }
};


QuickUnionWeight.prototype.union = function(idx1, idx2){
  this.store[this.root(idx2)]= this.root(idx1);
};


QuickUnionWeight.prototype.root = function(idx){
  var parentIdx = this.store[idx];
  if(parentIdx===idx){
    return idx;
  }else{
    return this.root(parentIdx);
  }
};

QuickUnionWeight.prototype.connected = function(n1, n2){
  return this.root(n1) === this.root(n2);
};


var set = new QuickUnionWeight(10);
