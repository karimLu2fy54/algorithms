function fiboEvenSum(n) {
  
   var Fmoins1 = 2;
   var Fmoins2 = 1;

   var SumEven = 2;

   for(var i=2;i<n;i++){
     var F = Fmoins1 + Fmoins2;

     if(F%2 == 0){
       SumEven = SumEven + F;
     }

     Fmoins2 = Fmoins1;
     Fmoins1 = F;
     console.log(F);
   }

    return SumEven;

}

fiboEvenSum(23);
