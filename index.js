const {Client}= require('pg');

const configs = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
}

const client = new Client(configs);


async function start() {
    await client.connect();

    const response = await client.query(`
          INSERT INTO users(first_name, last_name, biography, is_subscribe, gender) VALUES
          ('Maria', 'Semionova', 'lalala', true, 'female')
    `)

    await client.end();

    console.log(response);
}

start();