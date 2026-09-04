function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({ id: userId, name: "Jason Object" });
      } else {
        reject(new Error("User ID not provided"));
      }
    }, 1000);
  });
}

module.exports = fetchUserData
