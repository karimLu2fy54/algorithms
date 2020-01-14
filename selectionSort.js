
function selectionSort(array) {
  
  var longueur = array.length;

  for(var i=0;i<longueur;i++){

    var lePlusPetit = array[i];
    var indiceLePlusPetit = i;

    for(var j=i;j<longueur;j++){
     

        if(array[j] < lePlusPetit){

          lePlusPetit = array[j];
          indiceLePlusPetit = j;

        }
    }

    var tmp = array[i];
    array[i] = lePlusPetit;
    array[indiceLePlusPetit] = tmp;


    

  }

return array;

}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
