const _ = require('lodash')

class Order {
    static _client;

     static async bulkCreate(usersArray, productsArray) {
        const ordersValueString =  usersArray.map(user =>
            new Array(_.random(1, 3, false))
            .fill(null)
            .map(() => `${user.id}`)
            .join(',')
            
            ).join(',');

            console.log(ordersValueString);

        //    const {rows: orders} = await this._client.query(
        //         `INSERT INTO orders (customer_id) VALUES ${ordersValueString} RETURN`
        //     )
     }   

}

module.exports = Order;