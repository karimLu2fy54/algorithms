

//fusion de 2 tableaux triés
function merge(left, right){
  
    //tableau fusioné, position tableau gauche, position tableau droit
    var tab = [], l = 0, r = 0;

    //tant que l'on a pas atteint la fin de l'un des 2 tableaux
    while (l < left.length && r < right.length){

        //on compare les éléments du tableau de droite
        //et celui du tableau de gauche avec leur position
        if (left[l] < right[r]){

            //on ajoute l'élement du tableau de gauche 
            //au tableau fusioné et on incrémente le compteur du
            //tableau de gauche
            tab.push(left[l++]);
        } else {

            //on ajoute l'élement du tableau de droite 
            //au tableau fusioné et on incrémente le compteur du
            //tableau de droite
            tab.push(right[r++]);
        }
    }

    //on fusionne les elements restants du tableau de gauche en premier
    // puis celui du tableau de droite au tableau fusioné

   // console.log('fusion de');
    //console.log(left+'  '+right);
    return tab.concat(left.slice(l)).concat(right.slice(r));
}


function sort(tab){

    //si la longueur du tableau est infèrieure à 2
    if (tab.length < 2) {
        return tab;
    }

    //on recherche le milieu du tableau à diviser
    var mid = Math.floor(tab.length / 2),
        right = tab.slice(mid),
        left = tab.slice(0, mid),
        //p est un tableau temporaire
        //on fusionne les 2 tableaux crées
        //de façon récursive
        p = merge(sort(left), sort(right));

        //console.log('resultat intermediaire');
        //console.log(p);
    
    //transformation de tab en p
    //le tableau devient trié
    p.unshift(0, tab.length);
    //console.log(p);
    //console.log(tab);
    tab.splice.apply(tab, p);
    //console.log(tab);
    return tab;
}
var tab = [5, 8, 11, 6, 1, 9, 3];
sort(tab);
console.log(tab);