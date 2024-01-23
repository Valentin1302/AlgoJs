// document.addEventListener('DOMContentLoaded', () => {
//     document.writeln("Hello here !");
//     document.writeln('<form id="MyForm">');
//     document.writeln("<div>");
//     document.writeln('<label for="myField">Champ&nbsp;:</label>');
// document.writeln('<input type="text" id="myField" size="60">');
// document.writeln('</div>');
// document.writeln('</form>');
// document.getElementById('myField').value="Vous avez réussi votre exercice";
// });
    
    
// function validateForm() {
//     if(document.getElementById('myField').value == '') {
//       document.getElementById('myFieldError').innerHTML = 'Le champ ne peut être vide';
//       return false;
//     } else {
//       document.getElementById('myFieldError').innerHTML = '';
//       alert('Le formulaire peut être envoyé');
//       return true;
//     }
//   }

// EXERCICE 1
// Écrire une fonction qui prend un tableau de nombres en paramètre
// et renvoie la somme de tous les éléments du tableau.
// function calcul(tableau){
//   let number = 0
//   for(somme of tableau){
//    number += somme
//   }
//   return number;
// }
// console.log(calcul([1,2,3,4]))
// Exemple d'utilisation


// EXERCICE 2
// Écrire une fonction qui prend un nombre en paramètre
// et renvoie sa factorielle (n!).

function factorielle(nombre){
   if(nombre === 0 || nombre === 1){
      return 1;
   }
   else{
      return nombre * factorielle(nombre -1);
   }
}
// Exemple d'utilisation
 console.log(factorielle(5)); 




// EXERCICE 3

// Écrire une fonction qui prend une chaîne de caractères en paramètre
// et renvoie une nouvelle chaîne avec les caractères inversés.

// function inverserChaine(chaine) {
//     return chaine.split('').reverse().join('');
// }

// Exemple d'utilisation
// console.log(inverserChaine("Hello")); 
// Devrait afficher "olleH"



// EXERCICE 4 

// Écrire une fonction qui prend un tableau de nombres en paramètre
// et renvoie le plus grand élément du tableau.

// function plusGrandElement(tableau) {
//     return Math.min(...tableau);
// }

// Exemple d'utilisation
// console.log(plusGrandElement([10, 5, 8, 25])); 
// Devrait afficher 20



// EXERCICE 5   
// Écrire une fonction qui prend un nombre en paramètre
// et renvoie true s'il est premier, false sinon.

// function estPremier(nombre) {
//     if (nombre <= 1){
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(nombre); i++){
//         if(nombre % i === 0){
//            return false;
//         }
//     }

// }

// Exemple d'utilisation
// console.log(estPremier(13)); 
// Devrait afficher true
// console.log(estPremier(4));  
// Devrait afficher false
