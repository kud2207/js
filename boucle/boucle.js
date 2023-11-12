/*var s = 1

while (s<10) {
    document.write('bonjour')
   
}*/
 var index = 0
for (let index = 0; index < 5; index++) {
    document.write('bonjour '+ index + '<br>')
    
}

document.write('<br> parcourir un Tableau a ' )

    var eleves = ['jean' , 'paul' , 'pierre' , 'matthieu' , 'jackop']
    var c =eleves.length
    document.write(c +'valeur <br>')

    for (var i = 0 ; i < eleves.length ; i++){
        document.write (eleves[i] + '<br>')
    }


    document.write('<br> parcourir un objet a ' )