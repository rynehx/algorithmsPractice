var Node = function(val){
  this.val = val;
};

var LinkedList = function(){
  this.start = new Node();
  this.end = new Node();
};


LinkedList.prototype.insert = function(node, newNode){
  node.insertNext(newNode);
};


Node.prototype.insertNext = function(newNode){
  newNode.next = this.next;
  newNode.previous = this;
  this.next.previous = newNode;
  this.next = newNode;
};

LinkedList.prototype.remove = function(node){
  node.remove();
};

Node.prototype.remove = function(){
  this.previous.next = this.next;
  this.next.previous = this.previous;
  this.next = undefined;
  this.previous = undefined;
};
