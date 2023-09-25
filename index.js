
// const {loadUsers} = require ('./api');
const { log } = require('console');
const {getUsers} = require('./api/fetch');
const { client, User} = require('./models');
const {generatePhones} = require('./utils');
const Product = require('./models/Product');


async function start() {
    await client.connect();
       
    // const userArray = await getUsers();
    // const response = await User.bulkCreate(userArray)
    // console.log(response);

    // const phones = generatePhones(100);
    // const response = await Product.bulkCreate(phones)
    // console.log(response);
    

  const usersResult = await User.findAll();
 const usersArray = usersResult.rows;
 // Order.bulkCreate();
  await client.end();
}

start();
