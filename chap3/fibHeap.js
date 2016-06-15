var FibHeapNode = function(key, content, previous, next, parent, child){
  this.key = key;
  this.content = content;
  this.previous = previous;
  this.next = next;
  this.parent = parent;
  this.child = child;
  this.mark = false;
  this.degree = 0;
};


var FibonacciHeap = function(){
  this.min = undefined;
  this.n = 0;
};

FibonacciHeap.prototype.potiental = function(){
  //the number of trees in the root list of T the number of marked nodes M
  //P = T + 2*M
};


FibonacciHeap.prototype.insert = function(key, content){
  var newNode = new FibHeapNode(key, content);
  if(!this.min){ //initialiize root
    this.min = newNode;
    newNode.next = newNode;
    newNode.previous = newNode;

  }else{
    newNode.previous = this.min.previous; //insert new node to the left of old min
    newNode.next = this.min;
    this.min.previous.next = newNode;
    this.min.previous = newNode;

    if(newNode.key<this.min.key){//replace old min
      this.min = newNode;
    }
  }
  this.n+=1;//increment number of node in heap

};


FibonacciHeap.union = function(heap1, heap2){

  if(!heap1.min && !heap2.min){//if both heaps are empty return one of them
    return heap1;
  }else if(!heap1.min){// if heap 1 is empty then return heap 2
    return heap2;
  }else if(!heap2.min){// if heap 2 is empty then return heap 1
    return heap1;
  }else{ //if both have roots then we union
    var newHeap = new FibonacciHeap();

    newHeap.min = heap1.min;//set min as the heap1 min

    heap2.min.next.previous = newHeap.min.previous; //union linked list of heap 1 and 2
    newHeap.min.previous.next = heap2.min.next.previous;
    heap2.min.next = newHeap;
    newHeap.min.previous =heap2.min;

    if(heap2.min.key < newHeap.min.key){// update the new min if nessessary
      newHeap.min = heap2.min;
    }

    newHeap.n = heap1.n + heap2.n;

    delete heap1;
    delete heap2;

    return newHeap;

  }
};


FibonacciHeap.prototype.takeMin = function(){
  if(this.min){
    var min = this.min; //hold it since we are gonna remove it from the root;

    min.child.next.previous = min.previous;//join min children to root
    min.previous.next = min.child.next;
    min.child.next = min;
    min.previous = min.child;

    min.previous.next = min.next; //remove min;
    min.next.previous = min.previous;

    while(min.child.parent){ //remove parent property from child
      min.child.parent = undefined;
      min.child = min.child.next;
    }


    if(min === min.next){
      this.min = undefined;
    }else{
      this.min = min.next;
      this.consolidate();
    }
    this.n-=1;
    return min;
  }else{
    console.log("empty heap!!!!");
  }
};


FibonacciHeap.prototype.consolidate = function(){
  var degreeCheck = new Array(Math.pow(2, Math.round(Math.log2(10)))); // allocate array size D(H.n)
  var current = this.min.next;
  var ending = this.min;
  degreeCheck[ending.degree] = ending; // set first element into the degree aray
  //and set while loop until the root loops back
  while(current!==ending){
    if(degreeCheck[current.degree]){

      var pastRoot = degreeCheck[current.degree];
      degreeCheck[current.degree] = undefined;
      if(pastRoot.key < current.key){

        pastRoot.appendChild(current);

      }else{
        current.appendChild(pastRoot);
        pastRoot.next.previous = pastRoot.previous;//severe root from root list
        pastRoot.previous.next = pastRoot.next;
      }

    }else{
      degreeCheck[current.degree] = current;
      current = current.next;
    }
  }

};


FibonacciHeap.prototype.appendChild = function(child){
  if(this.child){

    child.next = this.child;//join onto child of the new parent
    child.previous = this.child.previous;
    this.child.previous.next = child;
    this.child.previous = child;
    child.parent = this;

  }else{ // if parent has no child then add the new child
    this.child = child;
  }
  this.degree += child.degree+1;//increment parent degree
  child.mark = false;//mark all added node false;
};
