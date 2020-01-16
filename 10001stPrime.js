function nthPrime(n) {
  
var Prime = [2,3,5,7,11,13];
var Numbertest = 2;

var NumberofDiviseurs = 0;

while(Numbertest < n){
  var NumberofDiviseurs = 0;
  for(var i=0;i<Prime.length;i++){
    if(Numbertest%Prime[i]==0){
      NumberofDiviseurs ++;
    }
  }

if(NumberofDiviseurs == 0){
  Prime.push(n);
}

Numbertest = Numbertest + 1;

}

console.log(NumberofDiviseurs);
console.log(Prime);





}

nthPrime();
