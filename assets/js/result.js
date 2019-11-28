var check = document.getElementById('submit');
check.addEventListener('click', calcul);
function calcul() {
  //déclaration des fonctions
  var numberOne = document.getElementById('numberOne').value;
  var numberTwo = document.getElementById('numberTwo').value;
  /*ajout de conditions pour empêcher l'utilisateur d'entrer n'importe quel caractère avec les fonctions 'if/else'
  isNaN = Si la saisie dans 'numberOne' et/ou 'numberTwo' n'est pas égale à un nombre, l'alerte 'calcul' impossible se déclenche
  '== true' n'est pas obligatoire car toutes les fonctions sont 'true' par défaut
  */
  if (isNaN(numberOne) == true || isNaN(numberTwo)){
    alert('Calcul impossible... Veuillez entrer un caractère valide.');
  } else{
    // != signifie 'n'est pas égale à'
    if(numberTwo != 0) {
      var result = numberOne % numberTwo;
      // Math.round() permet d'arrondir au plus proche
      alert(Math.round(result));
    } else{
      alert('La division par 0 est impossible banane !');
    }
  }
};
