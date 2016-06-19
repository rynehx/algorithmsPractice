

var TreeNode = function(key, content){
  this.key = key;
  this.content = content;
  this.parent;
  this.leftChild = this.leaf;
  this.rightChild = this.leaf;
  this.degree = 0;
};


var AVLTree = function(){
  this.root;
  this.leaf = new TreeNode(-1,"I am singleton");
};

AVLTree.prototype.insert = function(key, content){
  var newNode =  new TreeNode(key, content);

  if(!this.root){
    this.root = newNode;
    return;
  }

  TreeNode.insertNode(this.root, newNode);


};

TreeNode.insertNode = function(node, newNode){
    if(newNode.key < node.key){ //go left
      if(node.leftChild){
        TreeNode.insertNode(node.leftChild, newNode);
        if(node.degree <= node.leftChild.degree){
          node.degree = node.leftChild.degree + 1;
        }
      }else{

        node.leftChild = newNode;
        node.parent = node;
        if(node.degree <= node.leftChild.degree){
          node.degree = 1;
        }
      }
    }else{ //go right
      if(node.rightChild){
        TreeNode.insertNode(node.rightChild, newNode);
        if(node.degree <= node.rightChild.degree){
          node.degree = node.rightChild.degree + 1;
        }
      }else{

        node.rightChild = newNode;
        node.parent = node;
        if(node.degree <= node.rightChild.degree){
          node.degree = 1;
        }
      }
    }
};


AVLTree.prototype.printTree = function(){
    var tree= [];

    function print(node,level){

      if(tree[level]){
        tree[level].push(node.key);
      }else{
        tree[level]=[node.key];
      }

      if(node.leftChild){
        print(node.leftChild,level - 1);
      }

      if(node.rightChild){
        print(node.rightChild, level - 1);
      }
    }

    print(this.root,this.root.degree);

    for(var i = tree.length - 1; i>=0; i--){
      console.log(tree[i].join(" "));
    }
    return tree;
};




//
// AVLTree.prototype.delete = function(){
//
// };
//
// AVLTree.prototype.find = function(){
//
// };


var tree = new AVLTree();
for(var i = 0; i <= 300; i++){
  tree.insert(Math.floor(Math.random()*100),"I got put in order " + i );
}


tree.printTree();
