//var obj = require('../js/scripts/functions-es2015.js');


/*
describe("script", function() {
  it("call messege", function() {
  	var result;

  	result = obj.messege('vasya');

    expect(result).toBe('Hello, vasya');
  });
});*/


var func = require('../js/scripts/functions-es2015.js');
describe("script", function() {
  it("call messege", function() {
  	var result;

  	result = func();

    expect(result).toBe('hello');
  });
});
