// Note: 'callback' is just another name for a function
const processCallback = (callback) => {
  callback("Hello");
  callback("Goodbye");
}

module.exports = processCallback;