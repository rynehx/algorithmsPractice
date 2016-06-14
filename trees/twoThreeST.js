var TreeNode = function(key,content,leftChild,rightChild, parent, tree){

  this.type = 2;

  this.key = key;
  this.content = content;

  // this.keyLeft = null;
  // this.contentLeft = null;
  // this.keyRight = null;
  // this.contentRight = null;

  this.parent = parent;
  this.leftChild = leftChild;
  this.rightChild = rightChild;

  this.tree = tree;
  // this.midChild = null;

  // this.midRightChild = null;
  // this.midLeftChild = null;
  //
  // this.keyMid = null;
  // this.contentMid = null;
};


TreeNode.prototype.insert = function(key, content){
  if(this.type===2){
    ///treat as 2 node
    this.process2(key, content);
  }else{
    //threat as 3 node
    this.process3(key, content);
  }
};


TreeNode.prototype.process2 = function(key, content){

  if(this.leftChild){

    if(key > this.key){
      this.rightChild.insert(key, content);
    }else if(key < this.key){
      this.leftChild.insert(key, content);
    }else{
      //key is equal
    }

  }else{

    if(key > this.key){
      this.addRightVal(key, content);
    }else if(key < this.key){
      this.addLeftVal(key, content);
    }else{
      //key is equal
    }

  }

};



TreeNode.prototype.addRightVal = function(key, content){
  this.keyLeft = this.key;
  this.contentLeft = this.content;
  this.keyRight = key;
  this.contentRight = content;

  this.key = null;
  this.content = null;
  this.type = 3;
};


TreeNode.prototype.addLeftVal = function(key, content){
  this.keyLeft = key;
  this.contentLeft = content;
  this.keyRight = this.key;
  this.contentRight = this.content;

  this.key = null;
  this.content = null;
  this.type = 3;
};


TreeNode.prototype.process3 = function(key, content){

  if(this.leftChild){//not a leaf so go down the tree

    if(key > this.keyRight){
      this.rightChild.insert(key, content);
    }else if(key < this.keyLeft){
      this.leftChild.insert(key, content);
    }else if(key < this.keyRight && key > this.keyLeft){
      this.midChild.insert(key,content);
    }

  }else{ // hit a leaf node - put the new down and push the updated middle key to the parent

    if(key > this.keyRight){
      this.keyMid = this.keyRight;
      this.contentMid = this.contentRight;
      this.keyRight = key;
      this.contentRight = content;

    }else if(key < this.keyLeft){
      this.keyMid = this.keyLeft;
      this.contentMid = this.contentLeft;
      this.keyLeft = key;
      this.contentLeft = content;
    }else if(key < this.keyRight && key > this.keyLeft){
      this.keyMid = key;
      this.contentMid = content;
    }

    if(this.parent){
      this.parent.handleSplit(this);
    }else{
      this.makeRoot();
    }
  }
};


TreeNode.prototype.handleSplit = function(child){
//ON SPLIT MAKE SURE TO CHANGE THE TYPE INTO 2!

  if(this.type === 2){ // if the node is 2 branches

    if(this.leftChild === child){//left child
      this.addLeftVal(child.keyMid,child.contentMid);
      //right and left child
      this.midChild = child;
      this.leftChild =  child.split(this);
    }else{
      this.addRightVal(child.keyMid,child.contentMid);
      //right and left child
      this.midChild = child.split(this);
      this.rightChild =  child;
    }


  }else{ // if node is 3 branch

    if(this.leftChild === child){
      this.keyMid = this.keyLeft;
      this.contentMid = this.contentLeft;
      this.keyLeft = child.keyMid;
      this.contentLeft = child.contentMid;

      this.midRightChild = this.midChild;
      this.midLeftChild = child;
      this.leftChild = child.split(this);

      this.midChild = undefined;

    }else if(this.midChild === child){

      this.keyMid = child.keyMid;
      this.contentMid = child.contentMid;

      this.midRightChild = child;
      this.midLeftChild =   child.split(this);
      this.midChild = undefined;

    }else if(this.rightChild === child){

      this.keyMid = this.keyRight;
      this.contentMid = this.contentRight;
      this.keyRight = child.keyMid;
      this.contentRight = child.contentMid;


      this.midLeftChild = this.midChild;
      this.rightChild = child;
      this.midRightChild = child.split(this);
      this.midChild = undefined;

    }

    if(this.parent){
      this.parent.handleSplit(this);
    }else{
      this.makeRoot();
    }

    //check parent and recurse
  }

  //make into 4 branch node
  // join the split nodes onto the for branch by checking this (left, mid, or right)
  //check if parent exists or is 2 or 3 branch
    //if yes recursive call
    //if not create a new node attach the split(link as middle child and then split as 2 branch node not recursive)
};


TreeNode.prototype.makeRoot = function(){
    var newRoot = new TreeNode(this.keyMid,this.contentMid, undefined, undefined, undefined, this.tree);

    newRoot.rightChild = this;
    newRoot.leftChild = this.split(newRoot);

    this.tree.root = newRoot;

};


TreeNode.prototype.split = function(parent){
  var newNode = new TreeNode(this.keyLeft,this.contentLeft,this.leftChild,this.midLeftChild,parent); // new left -- original is right
  this.key = this.keyRight;
  this.content = this.contentRight;
  this.leftChild = this.midRightChild;
  this.type = 2;
  this.parent = parent;


  // this.keyRight = undefined;
  // this.keyLeft = undefined;
  // this.contentRight = undefined;
  // this.contentLeft = undefined;
  // this.midRightChild = undefined;
  // this.midLeftChild = undefined;
  // this.keyMid = undefined;
  // this.contentMid =  undefined;

  delete this.keyRight;
  delete this.keyLeft;
  delete this.contentRight;
  delete this.contentLeft;
  delete this.midRightChild;
  delete this.midLeftChild;
  delete this.keyMid;
  delete this.contentMid;


  return newNode;
};





var TwoThreeST = function(){
  this.root;
};



TwoThreeST.prototype.insert = function(key,obj){
  var newNode = new TreeNode(key, obj, undefined, undefined, undefined, this);

  if(!this.root){
    this.root = newNode;
    return;
  }


  this.root.insert(key,obj);


};


var tree = new TwoThreeST();

tree.insert(5, {content: "i am a object"});
tree.insert(2, {content: "i am a object"});
tree.insert(7, {content: "i am a object"});
 tree.insert(9, {content: "i am a object"});
 tree.insert(8, {content: "i am a object"});
 tree.insert(10, {content: "i am a object"});
tree.insert(15, {content: "i am a object"});
// tree.insert(16, {content: "i am a object"});
// tree.insert(14, {content: "i am a object"});
// tree.insert(13, {content: "i am a object"});
// tree.insert(12, {content: "i am a object"});
// tree.insert(17, {content: "i am a object"});
  console.log(tree)

//
//
// TwoThreeST.prototype.find = function(){
//
// };
//
//
// TwoThreeST.prototype.Delete = function(){
//
// };
