

 

function largestPalindromeProduct(n) {
  
  var NombreMax = Math.pow(10,n) - 1;
  var QuitterLaBoucle = false;

  var LePlusGrandPalindrome = 0;


  var res = i*j;

  for(var i=NombreMax;i>0;i--){
    for(var j=NombreMax;j>0;j--){
      res = i*j;
      
      //console.log(i,j,res);

      let str = res.toString();
      let reverse = str.split("").reverse().join("");

      if(str==reverse & res>LePlusGrandPalindrome){
        console.log(res);
        LePlusGrandPalindrome = res;
      }

      
   
    }

  
 
    
  }


return LePlusGrandPalindrome;

largestPalindromeProduct(2);
largestPalindromeProduct(3);