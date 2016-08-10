var BigNum = function(input){
	this.num = input;
};


BigNum.prototype.add = function(bignum2){
	var num1 = this.num;
	var num2 = bignum2.num;

	return add(num1, num2);

};


function add(num1, num2){
	var res = "";


	var i = num1.length-1;
	var j = num2.length-1;
	var carry = 0;
	while(i >= 0 || j >= 0 ){
		if(num1[i]){
			var dig1 = parseInt(num1[i]);
		}else{
			var dig1 = 0;
		}
		if(num2[j]){
			var dig2 = parseInt(num2[j]);
		}else{
			var dig2 = 0;
		}


		var sum = dig1 + dig2 + carry;
		carry = 0;
		if(Math.floor(sum/10) > 0){
			carry = 1;
		}

		res = (sum%10) + res;
		j--;
		i--;
	}

	if(carry){
		res = carry + res;
	}


	return res;

}





BigNum.prototype.multiply = function(bignum2){
	var num1 = this.num;
	var num2 = bignum2.num;
	var products = [];
	var i = num1.length-1;
	var j = num2.length-1;




	for(var j = num2.length-1; j>=0; j--){

		var product = "";
		for(var k = 0; k < (num2.length - 1 - j); k++){
			product +=" 0";
		}

		var n = num2[j];
		var carry = 0;
		for(var i = num1.length-1; i >=0; i--){
			var iproduct = parseInt(num1[i])*n + carry;
			var carry = Math.floor(iproduct/10);
			product = iproduct%10 + product;
		}

		if(carry > 0){
			product = carry + product;
		}


		products.push(product);
	}




	return products.reduce(function(a, b){
		return add(a, b);
	});

};






var n1 = new BigNum("111");
var n2 = new BigNum("111");

n1.multiply(n2)
