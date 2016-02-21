var obj = require('../js/script.js');

describe("obj", function() {
  it("call sayHello method", function() {
  	var result;
  	result = obj.sayHello('Vasya');

    expect(result).toBe('Hello, Vasya');
  });
});