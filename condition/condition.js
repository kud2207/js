document.write('<h1>Condition "iF"</h1>')

    var personne = {
        nom : 'kageu', prenom : 'ulrich' , notes : 15
    }

        if(personne.notes>=10){
            document.write('passer')
        }
        else{
            document.write('plus effort')
        }

document.write('<h1>Condition "SWITCH"</h1>')
    var ulrich = 21
        switch(ulrich){
            case 20 :
            document.write(`tu n'as plus 20ans`)
            break;
            case 21 :
                document.write(`tu as 21ans`)
                break;
            case 22 :
                document.write(`tu n'as pas encore 22ans`)
                break;

            default :
            document.write('rien a dire')      
        }
        
document.write('<h1>Condition "TERMAIRE"</h1>')
    var kud = 21
    console.log(kud >= 21  ? 'tu as 21' : 'ta pas 21 ans')
