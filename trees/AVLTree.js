///AVL TREE DATA STRUCTURE

var TreeNode = function(key, content, leaf){
  this.key = key;
  this.content = content;
  this.parent;

  if(leaf){
    this.leftChild = leaf;
    this.rightChild = leaf;
    this.degree = 0;
  }else{
    this.degree = -1;
  }
};


var AVLTree = function(){
  this.root;
  this.leaf = new TreeNode(null,"I am singleton");
};

AVLTree.prototype.insert = function(key, content){ //AVL tree class method to insert a node

  var newNode =  new TreeNode(key, content, this.leaf);
  if(!this.root){
    this.root = newNode;
    return;
  }

  TreeNode.insertNode(this.root, newNode);


};

TreeNode.insertNode = function(node, newNode){ // tree node helper method for inserting a node
    if(newNode.key < node.key){ //go left

      if(node.leftChild.key){

        TreeNode.insertNode(node.leftChild, newNode);
        this.checkBalance();

      }else{

        node.leftChild = newNode;
        node.parent = node;
        if(node.degree === 0){
          node.degree = 1;
        }
      }

    }else{ //go right

      if(node.rightChild.key){
        TreeNode.insertNode(node.rightChild, newNode);
        this.checkBalance();
      }else{

        node.rightChild = newNode;
        node.parent = node;
        if(node.degree === 0){
          node.degree = 1;
        }
      }
    }
};




TreeNode.prototype.checkBalance = function(){ // check if node is balanced to maintain AVL invariant
  if(Math.abs(this.leftChild.degree - this.rightChild.degree)>1){// subtree is unbalanced -- rebalance here

  }else{//update the height of the subroot

    if(this.leftChild.degree > this.rightChild.degree){
      this.degree = this.leftChild.degree + 1;
    }else{
      this.degree = this.rightChild.degree + 1;
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
for(var i = 0; i <= 10; i++){
  tree.insert(Math.floor(Math.random()*100),"I got put in order " + i );
}


tree.printTree();
