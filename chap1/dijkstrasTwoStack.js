var calculator = function(string){
  var num=[];
  var op=[];
  var holder= "";
  for(var i =0; i<string.length;i++){
    var current = string[i];


    if(parseInt(string[i])){
      holder+=string[i];
    }else{
      if(holder){
        num.push(parseInt(holder));
        holder="";
      }
      if(string[i]===")"){
        num.push(calculate(num.pop(),num.pop(),op.pop()));
      }else if(string[i]==="*" || string[i]==="/"||
      string[i]==="+"||string[i]==="-"){
        op.push(current);
      }
    }
  }
  return num[0];
};

var calculate = function(num1,num2,op){
  if(op==="/"){
    return num2 / num1;
  }else if(op==="*"){
    return num2 * num1;
  }else if(op==="-"){
    return num2 - num1;
  }else if(op==="+"){
    return num2 + num1;
  }
};


console.log(calculator("(( ( 4 * 5 ) + ( 66 - 2 )   ) / 28 )"));
