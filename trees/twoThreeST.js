var TreeNode = function(key,content){

  this.type = 2;

  this.key = key;
  this.content = content;

  this.keyLeft = null;
  this.contentLeft = null;
  this.keyRight = null;
  this.contentRight = null;

  this.parent = null;
  this.leftChild = null;
  this.rightChild = null;
  this.middle = null;

  this.midRight = null;
  this.midLeft = null;

  this.keyMid = null;
  this.contentMid = null;
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
};


TreeNode.prototype.addLeftVal = function(key, content){
  this.keyLeft = key;
  this.contentLeft = content;
  this.keyRight = this.key;
  this.contentRight = this.content;

  this.key = null;
  this.content = null;
};


TreeNode.prototype.process3 = function(key, content){
  
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


var TwoThreeST = function(){
  this.root;
};

TwoThreeST.prototype.insert = function(key,obj){
  var newNode = new TreeNode(key,obj);

  if(!this.root){
    this.root = newNode;
    return;
  }


  this.root.insert(key,obj);


};





TwoThreeST.prototype.find = function(){

};


TwoThreeST.prototype.Delete = function(){

};
