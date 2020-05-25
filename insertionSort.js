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


function estTrie(array){

  var tableauTrie = true;

  for(var i=0;i<array.length-1;i++){
      if(array[i] > array[i+1]){
        tableauTrie = false;
        break;

      }

  }

  console.log(tableauTrie);
  return tableauTrie;
  

}

//return true
estTrie(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

//return false
estTrie([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);