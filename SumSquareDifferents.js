function sumSquareDifference(n) {
  
  var SumSquaresNumbers = 0;
  var SumOfFirsts = 0;

  for(var i=0;i<n+1;i++){
    SumSquaresNumbers = SumSquaresNumbers + Math.pow(i,2);
    SumOfFirsts = SumOfFirsts + i;
  }

  var squareOfSumOfFirts = Math.pow(SumOfFirsts,2);



  console.log(SumSquaresNumbers);
  console.log(squareOfSumOfFirts);

  var res = squareOfSumOfFirts - SumSquaresNumbers;

  return res;

}

sumSquareDifference(10);