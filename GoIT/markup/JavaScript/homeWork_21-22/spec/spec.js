var obj = require('../js/script.js');


describe("script", function() {
  it("call messege", function() {
  	var result;

  	result = obj.messege('vasya');

    expect(result).toBe('Hello, vasya');
  });
});