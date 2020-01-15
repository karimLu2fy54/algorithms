function largestPalindromeProduct(n) {
  
  var NombreMax = Math.pow(10,n) - 1;

  for(var i=0;i<NombreMax;i++){
    for(var j=0;j<NombreMax;j++){
      var result = i*j;
      var PuissMax = n*2 - 1;
      
      if(n%2 == 0){

        var mil = n%2;
        for(var k=0;k<mil;k++){
          for(var k=PuissMax;k>mil;k--){
            if(){

            }
          }
        }

      }else{

      }
      


    }
  }


}

largestPalindromeProduct(2);