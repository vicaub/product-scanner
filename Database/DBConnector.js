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
        scanDate: 'date',
        imageUrl: 'string',
        ingredients: {type: 'list', objectType: 'string', default: []},
        allergens: {type: 'list', objectType: 'string', default: []}
    },
};

class Ingredient extends Realm.Object {
}

Ingredient.schema = {
    name: 'Ingredient',
    properties: {
        name: 'string',
        allergen: {type: 'bool', default: false},
        imageUrl: 'string',
        ingredients: {type: 'list', objectType: 'string'},
    },
};

// incrémenter schemaVersion à chaque modification des tables
export default new Realm({schema: [User, Product], schemaVersion: 8});