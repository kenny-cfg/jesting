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
  const callbackFunction = jest.fn();
  
  processCallback(callbackFunction);

  expect(callbackFunction).toHaveBeenCalled();
  expect(callbackFunction).toHaveBeenCalledWith("Hello");
  expect(callbackFunction).toHaveBeenCalledWith("Goodbye");
})