var check = document.getElementById('submit');
check.addEventListener('click', calcul);
function calcul() {
  var numberOne = document.getElementById('numberOne').value;
  var numberTwo = document.getElementById('numberTwo').value;
  var result = numberOne % numberTwo;
  alert(result);
};
