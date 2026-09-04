const processCallback = require('./processCallback');

test("when supplied with a callback function then callback function is called twice (without mocks)", () => {
  const args = [];
  const callbackFunction = (argument) => {
    args.push(argument);
  }
  
  processCallback(callbackFunction);

  expect(args).toEqual(["Hello", "Goodbye"]);
})

test("when supplied with a callback function then callback function is called twice", () => {
  // GIVEN
  const callbackFunction = jest.fn();
  
  // WHEN
  processCallback(callbackFunction);

  // THEN
  expect(callbackFunction).toHaveBeenCalled();
  expect(callbackFunction).toHaveBeenCalledWith("Hello");
  expect(callbackFunction).toHaveBeenCalledWith("Goodbye");
})

/*
 * Given/when/then is equivalent to AAA
 * A - ARRANGE
 * A - ACTION
 * A - ASSERTION
*/