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

  TreeNode.insertNode(this.root, newNode, this);


};

TreeNode.insertNode = function(node, newNode, tree){ // tree node helper method for inserting a node

    if(newNode.key < node.key){ //go left

      if(node.leftChild.key){
        TreeNode.insertNode(node.leftChild, newNode, tree);

        node.checkBalance(tree);
      }else{
        node.leftChild = newNode;
        newNode.parent = node;
        if(node.degree === 0){
          node.degree = 1;
        }
      }

    }else{ //go right

      if(node.rightChild.key){
        TreeNode.insertNode(node.rightChild, newNode, tree);

        node.checkBalance(tree);
      }else{

        node.rightChild = newNode;
        newNode.parent = node;
        if(node.degree === 0){
          node.degree = 1;
        }
      }
    }
};




TreeNode.prototype.checkBalance = function(tree){ // check if node is balanced to maintain AVL invariant

  if(Math.abs(this.leftChild.degree - this.rightChild.degree)>1){// subtree is unbalanced -- rebalance here
    if(this.leftChild.degree>this.rightChild.degree){ // left child heavier

      if(this.leftChild.leftChild.degree > this.leftChild.rightChild.degree ){ //left left heavy -- 1 right rotate;
        TreeNode.rightRotate(this, tree);
      }else{ // zig zag left-right heavy -- left rotate on sub node then right rotate

        // tree.printTree();
        // console.log("____________________");
        TreeNode.leftRotate(this.leftChild, tree);
        // tree.printTree();
        TreeNode.rightRotate(this, tree);
      }

    }else{

      if(this.rightChild.rightChild.degree > this.rightChild.leftChild.degree ){ //right - right heavy - one left rotate
        TreeNode.leftRotate(this, tree);
      }else{ // zig zag right - left heavy. right rotate on sub node and left rotate on main.
        TreeNode.rightRotate(this.rightChild, tree);
        TreeNode.leftRotate(this, tree);
      }

    }
  }else{//update the height of the subroot

    TreeNode.updateDegree(this);

  }
};



TreeNode.updateDegree = function(node){
  if(node.leftChild.degree > node.rightChild.degree){
    node.degree = node.leftChild.degree + 1;
  }else{
    node.degree = node.rightChild.degree + 1;
  }
};


TreeNode.leftRotate = function(A, tree){ //A is original top node, B is original bottom node

var B = A.rightChild;
  if(A.parent){
    if(A.parent.leftChild === A){//assign B as child of the parent of A// Assign A parent to B parent
      A.parent.leftChild = B;
    }else{
      A.parent.rightChild = B;
    }
    B.parent = A.parent;
  }else{
    B.parent = undefined; // if A was root then B is now a root;
    tree.root = B;
  }

A.parent = B; //A parent becomes B
A.rightChild = B.leftChild; // B left child is now A right child
B.leftChild.parent = A;//B left child parent is pointed to A
B.leftChild = A; //finally B left child is A

TreeNode.updateDegree(A);//update the new degree of both nodes
TreeNode.updateDegree(B);//B updates last because A is lower in tree
};

TreeNode.rightRotate = function(A, tree){ //A is original top node, B is original bottom node

  var B = A.leftChild;

  if(A.parent){
    if(A.parent.leftChild === A){//assign B as child of the parent of A// Assign A parent to B parent
      A.parent.leftChild = B;
    }else{
      A.parent.rightChild = B;
    }
    B.parent = A.parent;
  }else{
    B.parent = undefined; // if A was root then B is now a root;
    tree.root = B;
  }

A.parent = B; //A parent becomes B
A.leftChild = B.rightChild;
B.rightChild.parent = A;
B.rightChild = A;

TreeNode.updateDegree(A);//update the new degree of both nodes
TreeNode.updateDegree(B);//B updates last because A is lower in tree

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
    //  console.log(tree[i].join(" "));
      console.log(i,tree[i].length);
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
for(var i = 0; i <= 1000000; i++){
  tree.insert(Math.floor(Math.random()*100),"I got put in order " + i );
  //tree.insert(i,"I got put in order " + i );
}




tree.printTree();

console.log(tree.root.leftChild.degree);
console.log(tree.root.rightChild.degree);
console.log(tree.root.degree);
