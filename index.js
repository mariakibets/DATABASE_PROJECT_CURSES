const {Client}= require('pg');
const {mapUsers} = require('./utils');

const configs = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
}

const client = new Client(configs);

const usersArray = [
    {
        firstName: 'Test1',
        lastName: 'Test12',
        biography: 'lalala',
        isSubscribe: false,
        gender: 'female'
    },
    {
        firstName: 'Test2',
        lastName: 'Test123',
        biography: 'lalala',
        isSubscribe: false,
        gender: 'female'
    },
    {
        firstName: 'Test3',
        lastName: 'Test12',
        biography: 'lalala',
        isSubscribe: false,
        gender: 'female'
    },
    {
        firstName: 'Test4',
        lastName: 'Test12',
        biography: 'lalala',
        isSubscribe: false,
        gender: 'female'
    },
    {
        firstName: 'Test5',
        lastName: 'Test12',
        biography: 'lalala',
        isSubscribe: false,
        gender: 'female'
    }

]
    


async function start() {
    await client.connect();

    const response = await client.query(`
          INSERT INTO users(first_name, last_name, biography, is_subscribe, gender) VALUES
         ${mapUsers(usersArray)}
    `)

    await client.end();

    console.log(response);
}

start();