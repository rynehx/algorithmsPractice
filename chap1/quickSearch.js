//quick find implementation
//run time for union of n objects is n^2
//bad algorithm

var QuickFind = function(size){
  this.store = new Array(size);
  for (var i =0; i < this.store.length; i++){
    this.store[i]=i;
  }
};


QuickFind.prototype.union = function(n1, n2){
  var set2 = this.store[n2];
  var set1 = this.store[n1];
  for (var i =0; i < this.store.length; i++){
    if(this.store[i]===set1){
      this.store[i]=set2;
    }
  }
};

QuickFind.prototype.connected = function(idx1, idx2){
  return (this.store[idx1] === this.store[idx2]);
};



var search = new QuickFind(10);
console.log(search.store);
search.union(8,0);
search.union(3,2);
search.union(7,2);
search.union(9,6);
search.union(4,8);
search.union(7,6);
console.log(search.store);
