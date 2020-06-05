function nthPrime(n) {
  // Good luck!

var tabNbpremiers = [2];
var NombreAtester = 3; 

while(tabNbpremiers.length < n){

  var NombreDeDiviseurs = 0;

  var LimiteDeDivision = Math.sqrt(NombreAtester) + 1;

    for(var i = 0; i<tabNbpremiers.length; i++){

      if(tabNbpremiers[i] < LimiteDeDivision){

        if(NombreAtester%tabNbpremiers[i] == 0){
          NombreDeDiviseurs = NombreDeDiviseurs + 1;
        }

    }

    }

    if(NombreDeDiviseurs == 0){
      tabNbpremiers.push(NombreAtester);
    }

    /*Pour optimiser, nous testons que les nombres impaires, puisque les paires ne sont pas premiers évidemment */
    NombreAtester = NombreAtester + 2;
    
  
  } 

  return tabNbpremiers[n-1];
}

nthPrime(6);