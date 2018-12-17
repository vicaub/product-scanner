import DBConnector from "./DBConnector";


let user = DBConnector.objects('User');
let product = DBConnector.objects('Product');

if (user.length === 0) {
    console.log("creating new user");
    DBConnector.write(() => {
        DBConnector.create('User', {text: 'nom prenom', allergenes: []});
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
            allergenes: []
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
            allergenes: []
        })
    });
}
else {
    DBConnector.write(() => {
        DBConnector.delete(user);
    });
}