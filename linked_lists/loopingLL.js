var LinkNode = function(store){//single linked node
  this.store = store;
  this.next = undefined;
};

var isLooping = function(root){
  var idx = 1;
  var slow = root;
  var fast = root;

  while(slow.next && fast.next && fast.next.next){
    if(slow===fast && idx>1){
      return idx;
    }

    slow = slow.next;
    fast = fast.next.next;
    idx+=1;

  }
  return false;
};




var seed = new LinkNode(1);
var oldNode = seed;
for(var i = 2; i<30; i++){
  var newNode = new LinkNode(i);
  if(i===20){
    var start = newNode;
  }
  oldNode.next = newNode;
  oldNode = newNode;
}
oldNode.next = start;




console.log(isLooping(seed));
