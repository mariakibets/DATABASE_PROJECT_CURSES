const _ = require ('lodash')


module.exports.mapUsers = (usersArray) => {
    return usersArray.map(({
        name: {first, last},
        email,
        gender,
        dob: {date}
    }
    ) =>  `('${first}', '${last}', '${email}', ${Boolean (Math.random() >  0.5)}, '${gender}', '${date}')`)
    .join(',');
}


const PHONS_BRANDS = [
    'Samsung',
    'Huaewi',
    'Apple',
    'Xiaomy',
    'Nokia'
]
   
const generatePhones = key => ({
    brand: PHONS_BRANDS [_.random(0, PHONS_BRANDS.length -1, false)],
    model: `model ${key}`,
    quantity: _.random(10, 100, false),
    price: _.random(500,100000, false),
})


module.exports.generatePhones = (length = 50) => new Array(length).fill(null).map((el, i,) => generatePhones(i));
