window.calculator = window.calculator || {};

(function() {
  var calculator = function() {
    var sx = document.getElementById('x').value;
    var sy = document.getElementById('y').value;
    var x = parseInt(sx)
    var y = parseInt(sy)
    document.getElementById('result').innerHTML = String(x + y)
  };
  window.calculator.init = function() {
    document.getElementById('add').addEventListener('click', calculator);
  };
})()