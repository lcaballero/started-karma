describe('Calculator', function() {
  beforeEach(function() {
    var fixture = [
      '<div id="fixture">',
	  '<input name="x" type="text" value="" id="x"/>',
	  '<input name="y" type="text" value="" id="y"/>',
	  '<input name="add" type="button" value="Add Numbers" id="add"/>',
      'Result: <span id="result" />',
      '</div>'
    ].join("");

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  })

  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  })

  beforeEach(function() {
    window.calculator.init();
  })

  it('should add numbers', function() {
    document.getElementById("x").value = 1;
    document.getElementById("y").value = 2;
    document.getElementById("add").click();
    expect(document.getElementById('result').innerHTML).toBe('3')
  })
})