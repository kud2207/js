function sommepaire (){
    
    var mesnombre= [9 , 7 , 6 , 4 , 8 , 6 , 7 , 3 , 9 , 10 ]
    var s = 0

        for (var i =0 ; i<= (mesnombre.length -1); i++){
            if (mesnombre[i] % 2 == 0 ) { 
                s += mesnombre[i];
                  
                }
        }
 
        return s ;
}

document.write(sommepaire())
