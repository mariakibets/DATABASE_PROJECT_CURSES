const {mapUsers} = require('../utils');


class User {
    static _client;
    static _tableName;

    static async findAll() {
        await this._client.query(`
        SELECT *FROM ${this._tableName} 
        
        `)
    }

    static async bulkCreate(userArray){
       return await this._client.query(`
        INSERT INTO 
        ${this._tableName}
        (first_name, last_name, email, is_subscribe, gender, birthday) VALUES
       ${mapUsers(userArray)}
       RETURNING id
  `)
    }
}


module.exports = User;