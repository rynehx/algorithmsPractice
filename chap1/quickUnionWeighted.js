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
  var root1 = this.root(idx1);
  var root2 = this.root(idx2);
  var size1 = this.size[root1];
  var size2 = this.size[root2];
  console.log(size1)
  console.log(size2)
  if(size1>=size2){
    this.store[root2]= root1;
    this.size[root1]+=size2;
  }else{
    this.store[root1]= root2;
    this.size[root2]+=size1;
  }
};


QuickUnionWeight.prototype.root = function(idx){
  var parentIdx = this.store[idx];
  if(parentIdx===idx){
    return idx;
  }else{
    return this.root(parentIdx);
  }
};


QuickUnionWeight.prototype.rootWithCompression = function(idx){
  var parentIdx = this.store[idx];
  if(parentIdx === idx){
    return idx;
  }else{
    var root = this.rootWithCompression(parentIdx);
    this.store[idx]=root;
    return root;
  }

};



QuickUnionWeight.prototype.connected = function(n1, n2){
  return this.root(n1) === this.root(n2);
};








var search = new QuickUnionWeight(10);
console.log(search.store);
search.union(7,6);
search.union(2,1);
search.union(4,9);
search.union(7,0);
search.union(6,8);
search.union(4,2);
search.union(8,5);
search.union(5,2);
search.union(3,1);
console.log(search.store);
