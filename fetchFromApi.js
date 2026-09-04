const fetchFromApi = async (userId) => {
  return (await fetch(`www.auth.com/${userId}`)).json();
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({ id: userId, name: `User${userId}`});
  //   }, 1000);
  // })
};

module.exports = fetchFromApi;