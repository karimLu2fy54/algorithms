function specialPythagoreanTriplet(n) {
 
for(var c=0;c<n;c++){
    for(var b=0;b<c;b++){
        for(var a=0;a<b;a++){
            if(
                
                (Math.pow(a,2)+Math.pow(b,2))==(Math.pow(c,2)) & (a+b+c == n)
                ){
                     return (a*b*c);

            }
        }
    }
}

}

specialPythagoreanTriplet(24);
