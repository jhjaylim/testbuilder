// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  /*
	
	Visa always has a prefix of 4 and a length of 13, 16, or 19.
	MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
	Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
	Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  */
  /*
    China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
    Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
*/
  var numLength=cardNumber.length;
  if (pFix(2)==="38"||pFix(2)==="39") {

  	if (numLength===14) {
  	  return "Diner's Club";
  	}

  } else if(pFix(2)==="34"||pFix(2)==="37") {
  	if (numLength===15) {
  	  return "American Express";
  	}
  } else if (pFix(4)==="4903"||pFix(4)==="4905"||pFix(4)==="4911"||pFix(4)==="4936"||pFix(6)==="564182"||pFix(6)==="633110"||pFix(4)==="6333"||pFix(4)==="6759"){
  	if (numLength===16||numLength===18||numLength===19) {
  		return "Switch";
  	}
  } else if(pFix(1)==="4") {
  	if (numLength===13||numLength===16||numLength===19) {
  	  
  	  return "Visa";
  	} 

  } else if(pFix(2)==="51"||pFix(2)==="52"||pFix(2)==="53"||pFix(2)==="54"||pFix(2)==="55") {
  	if (numLength===16) {
  	  return "MasterCard";
  	}
  } else if (pFix(4)==="6011"||inRange(pFix(3),644,649)||pFix(2)==="65") {
  	if (numLength===16||numLength===19) {
  		return "Discover";
  	}
  } else if (pFix(4)==="5018"||pFix(4)==="5020"||pFix(4)==="5038"||pFix(4)==="6304") {
  	if (inRange(numLength,12,19)) {
  		return "Maestro";
  	}

  } else if (inRange(pFix(6),622126,622925)||inRange(pFix(3),624,626)||inRange(pFix(4),6282,6288)) {
  	if (inRange(numLength,16,19)) {
  		return "China UnionPay";
  	}

  } 

  function pFix(length){ 
  	return cardNumber.substring(0,length);

  }
  function inRange(num, min, max) {
  	//console.log(num);
  	return min<=Number(num)&&Number(num)<=max;
  }


  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


