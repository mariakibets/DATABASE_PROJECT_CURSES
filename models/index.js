// з індексу моделей ми віддвємо вже налаштовані і готові до роботи моделі
const {Client}= require('pg');
const {configs} = require('../configs');
const User = require ('./Users');
const Product = require ('./Product');


const client = new Client(configs); 

User._client = client;
User._tableName = 'users';

Product._client = client;
Product._tableName = 'products'

module.exports = {
    client,
    User
}
