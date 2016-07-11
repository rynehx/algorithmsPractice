var Trie = function(){
  this.root = new Node(null);
};

var Node = function(letter,term){
  this.letter = letter;
  this.children= {};
  this.term = term;
};

Trie.prototype.inject = function(word){
  var current = this.root;
  for(var i =0; i< word.length;i++){

    if(i===word.length-1){
      if(current.children[word[i]]){
        current.children[word[i]].term = true;
      }else{
        current.children[word[i]]= new Node(word[i],true);
      }
    }


    if(!current.children[word[i]]){
      current.children[word[i]]= new Node(word[i]);
    }

    current = current.children[word[i]];

  }
};


Trie.prototype.searches = function(word){
  // var current = this.root;
  // for(var i =0; i< word.length;i++){
  //
  //   if(i===word.length-1){
  //     if(!current.children[word[i]].term){
  //       return false;
  //     }
  //   }
  //
  //
  //   if(current.children[word[i]]){
  //     current = current.children[word[i]];
  //   }else{
  //     return false;
  //   }
  // }
  // return true;
  var node = this.navigates(word);

  if(node.term){
    console.log(word + " exists");
  }else{
    console.log(word + " doesn't exist");
  }

};


Trie.prototype.delete = function(word){

  // var current = this.root;
  // for(var i =0; i< word.length;i++){
  //
  //   if(i===word.length-1){
  //     if(current.children[word[i]].term){
  //       current.children[word[i]].term = false;
  //     }
  //   }
  //
  //
  //   if(current.children[word[i]]){
  //     current = current.children[word[i]];
  //   }else{
  //     return false;
  //   }
  // }
  var node = this.navigates(word);

  if(node.term){
    node.term = false;
    console.log(word + " deleted");
  }else{
    console.log(word + " doesn't exist");
  }

};


Trie.prototype.navigates = function(word){
  var current = this.root;
  for(var i =0; i< word.length;i++){

    if(current.children[word[i]]){
      current = current.children[word[i]];
    }else{
      return false;
    }

  }

  return current;
};

Trie.prototype.isPrefix = function(word){
  if(this.navigates(word)){
    return true;
  }else{
    return false;
  }
};



var dictionary = new Trie();
dictionary.inject("brooms");
dictionary.inject("broom");

dictionary.inject("broomses");
dictionary.inject("broomseewrwe");
dictionary.searches("brooms");
dictionary.delete("brooms");

dictionary.searches("brooms");
dictionary.delete("brooms");
dictionary.searches("broom");
dictionary.searches("broomses");
dictionary.delete("bro");
dictionary.searches("bro");
dictionary.delete("broomses");
dictionary.searches("broomses");



dictionary.isPrefix("broom");
//
