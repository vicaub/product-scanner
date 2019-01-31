// file never reached


import DBConnector from "./DBConnector";


let user = DBConnector.objects('User');
let product = DBConnector.objects('Product');


if (user.length === 0) {
    DBConnector.write(() => {
        DBConnector.create('User', {
            username: "hellou",
            name: "Bob Test",
            gender: 'M',
        });
    });


    DBConnector.write(() => {
        DBConnector.create('Product', {
            barCode: "1001010101",
            name: "Kinder Bueno",
            scanDate: new Date(),
            imageUrl: "123.com",
        })
    });

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
    DBConnector.write(() => {
        DBConnector.delete(user);
    });
}