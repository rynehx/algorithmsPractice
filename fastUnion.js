//quick union set joining
//uses forrest
//union append the second object to the root of the first object
//root is slow O(n) long tree


var QuickUnion = function(size){
  this.store = new Array(size);
  for (var i =0; i < this.store.length; i++){
    this.store[i]=i;
  }
};


QuickUnion.prototype.union = function(idx1, idx2){
  this.store[this.root(idx2)]= this.root(idx1);
};


QuickUnion.prototype.root = function(idx){
  var parentIdx = this.store[idx];
  if(parentIdx===idx){
    return idx;
  }else{
    return this.root(parentIdx);
  }
};

QuickUnion.prototype.connected = function(n1, n2){
  return this.root(n1) === this.root(n2);
};


var set = new QuickUnion(10);
