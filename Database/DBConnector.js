//import {Database} from "react-native-database";
import Realm from 'realm';

// exemple
// https://github.com/realm/realm-js/tree/master/examples/ReactExample/components

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
        allergies: {type: 'list', objectType: 'string', default: []},
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

class Allergen extends Realm.Object {
}

Allergen.schema = {
    name: 'Allergen',
    properties: {
        id: 'string',
        name: 'string',
    },
};


// incrémenter schemaVersion à chaque modification des tables
export default new Realm({schema: [User, Product], schemaVersion: 13});