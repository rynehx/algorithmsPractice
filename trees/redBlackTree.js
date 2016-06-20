//1. root and leaves are black nodes
//2. every node is either red or black
//3. every red node has a black parent node
//4. all simple path from node x to descendent leaves has the same number of black nodes
//4. cont. does not count itself;


//NOTE - using key of 0 and a comparison using just the truthy value of  key may lead to bad results
//use either use a different truthy comparator or don't use 0 as key
// in js : !!0 = false

var TreeNode = function(key, content, leaf){

if(leaf){ // is not set as a leaf element
  this.leftChild = leaf;
  this.rightChild = leaf;
  //this.degree = 0; // default degree as 0
  this.red = true; // insertion create red node
}else{
//  this.degree = -1;
  this.red = false; // leaves are always black
}

this.key = key;
this.content = content;
this.parent = undefined;

};

var RBTree = function(){
  this.root;
  this.leaf = new TreeNode(null, "leaf element");
};


RBTree.prototype.insert = function(key, content){
  var newNode = new TreeNode(key, content, this.leaf);
  if(!this.root){
    newNode.parent = this.leaf;//give the root a black node parent to make proceeding methods work
    this.root = newNode;
    this.root.red = false;

    return;
  }

  TreeNode.insertNode(this.root, newNode, this);

};


TreeNode.insertNode = function(node, newNode, tree){

  var current = node;
  var Bottomed = false;
  while(!Bottomed){
    if(newNode.key < current.key){ //go left

      if(current.leftChild.key){
        current = current.leftChild;
        continue;
      }else{
        current.leftChild = newNode;
        newNode.parent = current;

        Bottomed = true;
      }
    }else{ //go right

      if(current.rightChild.key){
        current = current.rightChild;
        continue;
      }else{
        current.rightChild = newNode;
        newNode.parent = current;

        Bottomed = true;
      }
    }
  }
  current = newNode;
  TreeNode.checkColor(current, tree);

};


TreeNode.checkColor = function(node, tree){

  while(node.parent.red){// root will always be black
    if(node.parent.parent.leftChild === node.parent){ // left branch from GP

      var uncle = node.parent.parent.rightChild;

      if(uncle.red){ // color change
        node.parent.red = false;
        uncle.red = false;
        node.parent.parent.red = true;
        node = node.parent.parent;
      }else{ //rotate

        if(node === node.parent.rightChild){
          node = node.parent;
          TreeNode.leftRotate(node, tree);
        }

        node.parent.red = false;
        node.parent.parent.red = true;
        TreeNode.rightRotate(node.parent.parent, tree);

      }
    }else{ // right branch from GP
      var uncle = node.parent.parent.leftChild;

      if(uncle.red){ // color change
        node.parent.red = false;
        uncle.red = false;
        node.parent.parent.red = true;
        node = node.parent.parent;
      }else{ //rotate

        if(node === node.parent.leftChild){
          node = node.parent;
          TreeNode.rightRotate(node, tree);
        }

        node.parent.red = false;
        node.parent.parent.red = true;
        TreeNode.leftRotate(node.parent.parent, tree);
      }
    }
  }
  tree.root.red = false;

};




TreeNode.leftRotate = function(A, tree){ //A is original top node, B is original bottom node

var B = A.rightChild;
  if(A.parent.key){
    if(A.parent.leftChild === A){//assign B as child of the parent of A// Assign A parent to B parent
      A.parent.leftChild = B;
    }else{
      A.parent.rightChild = B;
    }
    B.parent = A.parent;
  }else{
    B.parent = tree.leaf; // if A was root then B is now a root;
    tree.root = B;
  }

A.parent = B; //A parent becomes B
A.rightChild = B.leftChild; // B left child is now A right child
B.leftChild.parent = A;//B left child parent is pointed to A
B.leftChild = A; //finally B left child is A

// TreeNode.updateDegree(A);//update the new degree of both nodes
// TreeNode.updateDegree(B);//B updates last because A is lower in tree
};




TreeNode.rightRotate = function(A, tree){ //A is original top node, B is original bottom node

  var B = A.leftChild;

  if(A.parent.key){
    if(A.parent.leftChild === A){//assign B as child of the parent of A// Assign A parent to B parent
      A.parent.leftChild = B;
    }else{
      A.parent.rightChild = B;
    }
    B.parent = A.parent;
  }else{
    B.parent = tree.leaf; // if A was root then B is now a root;
    tree.root = B;
  }

A.parent = B; //A parent becomes B
A.leftChild = B.rightChild;
B.rightChild.parent = A;
B.rightChild = A;

// TreeNode.updateDegree(A);//update the new degree of both nodes
// TreeNode.updateDegree(B);//B updates last because A is lower in tree

};

// TreeNode.updateDegree = function(node){
//   if(node.leftChild.degree > node.rightChild.degree){
//     node.degree = node.leftChild.degree + 1;
//   }else{
//     node.degree = node.rightChild.degree + 1;
//   }
// };

RBTree.prototype.printTree = function(){
    var tree= {};
    var height=0;


    function search(node, degree){
      console.log(node.key)
      if(degree > height){
        height = degree;
      }
      if(tree[degree]){
        var b = node.red ? "r" : "b";
        tree[degree].push(node.key + "  " + b);
      }else{
          var b = node.red ? "r" : "b";
        tree[degree] = [node.key + "  " + b];
      }

      if(Number.isInteger(node.leftChild.key)){
        search(node.leftChild, degree+1);
      }

      if(Number.isInteger(node.rightChild.key)){
        search(node.rightChild, degree+1);
      }

    }

    search(this.root, 0);

    for(var i = 0; i<=height; i++){
    //  console.log(tree[i].join(" "));
      console.log(i,tree[i]);
    }
    return tree;
};


RBTree.prototype.scout = function(){
  var branch = [];

  function search(node, blkcount){
    if(node.red === false){
      blkcount+=1;
    }

    if(node.leftChild.key){
      search(node.leftChild, blkcount);
    }else{
      branch.push(blkcount+1);
    }

    if(node.rightChild.key){
      search(node.rightChild, blkcount);
    }else{
      branch.push(blkcount+1);
    }
  }
  search(this.root.leftChild, 0);
  search(this.root.rightChild, 0);
  // branch.forEach(function(el){
  //   console.log(el);
  // });

  console.log(branch.slice(0,20));

};


var tree = new RBTree();

for(var i = 0; i < 10000; i++){
  //tree.insert(Math.floor(Math.random()*20),"I got inserted in order  " + i );

  tree.insert(i+1, "order " + i);
}

//tree.printTree();
tree.scout();

//console.log(tree.root)
//console.log(tree.root.key + " <--- key~");
