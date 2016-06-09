

var FastUnionTree = function(size){
  this.store = new Array(size);
  this.store.each(function(el,i){
    this.store[i] = i;
  });
};


FastUnionTree.prototype.union = function(idx1, idx2){

};


FastUnionTree.prototype.root = function(idx){
  var parentIdx = this.store[idx];
  if(parentIdx===idx){
    return idx;
  }else{
    return this.root(parentIdx);
  }

};
