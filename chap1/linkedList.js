var Node = function(val){
  this.val = val;
};

var LinkedList = function(){
  this.startNode = new Node();
  this.endNode = new Node();
  this.startNode.next = this.endNode;
  this.endNode.previous = this.startNode;
  this.start=function(){return this.startNode.next;};
  this.end = function(){return this.endNode.previous;};
  this.count=0;
};





// LinkedList.prototype.insert = function(node, newNode){
//   node.insertNext(newNode);
// };

//
// Node.prototype.insertNext = function(newNode){
//   newNode.next = this.next;
//   newNode.previous = this;
//   this.next.previous = newNode;
//   this.next = newNode;
// };


LinkedList.prototype.push = function(val){
  var node = new Node(val);
  node.next = this.start();
  node.previous = this.startNode;
  this.start().previous = node;
  this.startNode.next = node;

  this.count+=1;
};

LinkedList.prototype.pop = function(){
  if(this.start().val){
    var item = this.start();
    this.start().remove();
  }else{
    console.log("empty");
    return;
  }
  this.count-=1;
  return item;
};

LinkedList.prototype.empty = function(){
  if(this.start().next){
    return false;
  }else{
    return true;
  }
  //alternative
  //return this.count>0;
};



// LinkedList.prototype.remove = function(node){
//   node.remove();
// };

Node.prototype.remove = function(){
  this.previous.next = this.next;
  this.next.previous = this.previous;
  this.next = undefined;
  this.previous = undefined;
};


var list = new LinkedList();

list.push(3);

list.push(4);
list.push(5);
list.push(9);

console.log(list.pop());
list.empty();
list.pop();
list.pop();
console.log(list.count);
list.pop();
console.log(list.empty());
