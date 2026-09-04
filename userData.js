const fetchFromApi = require('./fetchFromApi');

const userData = (userId) => {
  if (!userId) {
    return Promise.reject(new Error("No user ID supplied"));
  }
  return fetchFromApi(userId);
}

module.exports = userData;