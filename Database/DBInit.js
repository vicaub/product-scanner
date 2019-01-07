// file never reached


import DBConnector from "./DBConnector";


let user = DBConnector.objects('User');
let product = DBConnector.objects('Product');

console.log(user.length);

if (user.length === 0) {
    console.log("creating new user");
    DBConnector.write(() => {
        DBConnector.create('User', {
            username: "hellou",
            name: "Bob Test",
            gender: 'M',
        });
    });


    console.log("creating new product");
    DBConnector.write(() => {
        DBConnector.create('Product', {
            barCode: "1001010101",
            name: "Kinder Bueno",
            scanDate: new Date(),
            imageUrl: "123.com",
        })
    });

    console.log("creating new product 2");
    DBConnector.write(() => {
        DBConnector.create('Product', {
            barCode: "1001000001",
            name: "Kinder Maxi",
            scanDate: new Date(),
            imageUrl: "456.com",
            ingredients: [],
            allergens: []
        })
    });

    console.log("creating new product 3");
    DBConnector.write(() => {
        DBConnector.create('Product', {
            barCode: "10000100101",
            name: "Kinder Surprise",
            scanDate: new Date(),
            imageUrl: "789.com",
            ingredients: [],
            allergens: []
        })
    });
}
else {
    console.log("delete user");
    DBConnector.write(() => {
        DBConnector.delete(user);
    });
}