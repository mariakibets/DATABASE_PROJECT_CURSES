module.exports.getUsers = async () => {
   const response = await fetch ('https://randomuser.me/api/?results=100&seed=ONL-JS-AHHDAJ-1&page=3');
   const data = await response.json();
   return data.results;
}