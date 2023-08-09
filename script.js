let nom=document.getElementById("Nom");
let message=document.getElementById("message");
let Erreur =document.getElementsByClassName("message-erreur");
function invalid() {
    if (nom.value=="" || message.value=="") {
        Erreur[0].innerHTML= "ce champ est obligatoire" ;
        Erreur[1].innerHTML= "ce champ est obligatoire" ;

    }

   
}

