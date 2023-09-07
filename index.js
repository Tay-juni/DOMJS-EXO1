// 1.
let premierFils = document.body;
let accede = premierFils.firstElementChild;

accede.innerHTML = 'Rick Astley - Never Gonna Give You Up'


2.
// selectionne & parcourire toute les element ayant comment nom de class = "couplet" 
// et suppet supprimer la première ligne qui est en double.  sans oubliez  le `br` qui cause le retour a la ligne
let selection = document.querySelectorAll(".couplet")
for( let i =0 ;i < selection.length ; i++){

selection[i].firstChild.remove();

selection[i].firstChild.remove('<br>');
};

//p.style.color ="orange";
// 3.
// Suppression des occurrences en doubles dans le refrain


let refrain = document.getElementsByClassName('refrain');

for (let i = 0; i < refrain.length; i++) { 
    const element = [... new Set(refrain[i].textContent.split('\n'))];
    refrain[i].innerHTML ='';
    for (let j = 0; j < element.length; j++) {
        refrain[i].innerHTML += `${element[j]} <br>`;     
    }
    
 }

// 4. 
// Suppression de l'element ayant comme Id = erreur
let suppElement = document.getElementById("erreur");
suppElement.remove();





// 5.
// Ajout d'un footer en pied de page
 let footerPage = "© Copyright 2023 - Votre Nom"
 let footer = document.createElement("footer");
 footer.innerText = footerPage;

 let body = document.querySelector("body");
 body.appendChild(footer);
