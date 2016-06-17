var rotate = function(matrix){//array of arrays
  var top;
  for(var j =0; j<= Math.floor((matrix.length)/2); j++){//does swap for first line
    for(var i = j; i < matrix.length-j-1; i++){ // iterates through the line - line is strunk to reduce already rotated units
      top = matrix[j][i];//top
      matrix[j][i] = matrix[matrix.length-1-i][j]; // top becomes left
      matrix[matrix.length-1-i][j] = matrix[matrix.length-1-j][matrix.length-1-i]; //left becomes bottom
      matrix[matrix.length-1-j][matrix.length-1-i] = matrix[i][matrix.length-1-j]; //bottom become right
      matrix[i][matrix.length-1-j] = top; //right becomes top
    }
  }
return matrix; //return original matrix;

};


console.log(rotate([[1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3,3,3],[4,4,4,4,4,4],[5,5,5,5,5,5],[6,6,6,6,6,6] ]));
