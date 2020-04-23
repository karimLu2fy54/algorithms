function insertionSort(array) {
  

var longueur = array.length;

for(var i=1;i<longueur;i++){

  var nombreAranger = array[i];
  var positionNombreARanger = i;

  var j=positionNombreARanger;

  while(j>=0 & nombreAranger < array[j-1]){
    array[j] = array[j-1];
    j=j-1;
    console.log(array);
  }
  array[j] = nombreAranger;

}


  console.log('resultat final');
  console.log(array);
  return array;
  

  

  
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
