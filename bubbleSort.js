

function bubbleSort(array) {
  
  var longueur = array.length;

  for(var i=0;i<longueur;i++){
    
    for(var j=0;j<longueur-1-i;j++){

      if(array[j]>array[j+1]){
        var tmp = array[j];
        array[j]= array[j+1];
        array[j+1]=tmp;
      }

    }
  }

  return array;
  
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);