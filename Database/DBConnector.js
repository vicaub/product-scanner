import Realm from 'realm';

// exemple
// https://github.com/realm/realm-js/tree/master/examples/ReactExample/components


class Allergen extends Realm.Object {
}

Allergen.schema = {
    name: 'Allergen',
    properties: {
        id: 'string',
        name: 'string',
    },
};

class User extends Realm.Object {
}

User.schema = {
    name: 'User',
    primaryKey: 'username',
    properties: {
        username: 'string',
        name: 'string',
        birthDate: 'date?',
        gender: 'string?',
        allergies: 'Allergen[]',
        updatedAt: 'date?',
    },
};

class Product extends Realm.Object {
}

Product.schema = {
    name: 'Product',
    primaryKey: 'barCode',
    properties: {
        barCode: 'string',
        name: 'string',
        categories: {type : 'list', objectType: 'string', default: []},
        scanDate: 'date',
        nbScans: 'int',
        imageUrl: 'string',
        ingredients: {type: 'list', objectType: 'string', default: []},
        allergens: {type: 'list', objectType: 'string', default: []}
    },
};

class ProductBasket extends Realm.Object {
}

ProductBasket.schema = {
    name: 'ProductBasket',
    properties: {
        barcode: 'string',
        quantity: 'int',
    },
};


class Basket extends Realm.Object {
}

Basket.schema = {
    name: 'Basket',
    primaryKey: 'dayTimestamp',
    properties: {
        dayTimestamp: 'int',
        date: 'date',
        content: {type: 'list', objectType: 'ProductBasket', default: []},
    },
};




// incrémenter schemaVersion à chaque modification des tables

export default new Realm({schema: [Allergen, User, Product, ProductBasket, Basket], schemaVersion: 19});
