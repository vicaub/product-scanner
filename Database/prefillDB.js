
import DBConnector from "./DBConnector";

export function fillBasketDB() {

    let basket = DBConnector.objects('Basket');
    let product = DBConnector.objects('Product');

    if (basket.length > 0) {
        DBConnector.write(() => {
            DBConnector.delete(basket);
            DBConnector.delete(product);
        });
    }

    let date = new Date();

    DBConnector.write(() => {
        date.setDate(date.getDate() - 8);
        DBConnector.create('Product', {
            barCode: '3596710413829',
            name: 'Pause Snack Thon Oeuf',
            categories: [' Sandwichs', ' Sandwichs au poisson', ' Sandwichs au thon'],
            scanDate: date,
            nbScans: 2,
            imageUrl: 'https://static.openfoodfacts.org/images/products/359/671/041/3829/front_fr.5.400.jpg',
            // ingredients: {type: 'list', objectType: 'string', default: []},
            // allergens: {type: 'list', objectType: 'string', default: []}
        });
        DBConnector.create('Product', {
            barCode: '3257980252050',
            name: 'Oeufs bio nature x6',
            categories: [" Produits d'élevages", " Œufs d'oiseau", " Œufs", " Œufs de poules élevées en plein air"],
            scanDate: date,
            nbScans: 1,
            imageUrl: 'https://static.openfoodfacts.org/images/products/325/798/025/2050/front_fr.7.400.jpg',
            // ingredients: {type: 'list', objectType: 'string', default: []},
            // allergens: {type: 'list', objectType: 'string', default: []}
        });
        date.setDate(date.getDate() + 5);
        DBConnector.create('Product', {
            barCode: '3228881025258',
            name: 'Thé Vert Marrakech Mint',
            categories: [" Aliments et boissons à base de végétaux", " Boissons", " Boissons à base de végétaux", " Boissons chaudes", " Infusions", " Thés", " Boissons sans sucre ajouté"],
            scanDate: date,
            nbScans: 1,
            imageUrl: 'https://static.openfoodfacts.org/images/products/322/888/102/5258/front_fr.23.400.jpg',
            // ingredients: {type: 'list', objectType: 'string', default: []},
            // allergens: {type: 'list', objectType: 'string', default: []}
        });
        DBConnector.create('Product', {
            barCode: '3263852914117',
            name: 'Galettes Bretonnes - Pur Beurre',
            categories: [" Snacks", " Desserts", " Snacks sucrés", " Biscuits et gâteaux", " Biscuits", " Biscuits secs", " Biscuits sablés"],
            scanDate: date,
            nbScans: 4,
            imageUrl: 'https://static.openfoodfacts.org/images/products/326/385/291/4117/front_fr.17.400.jpg',
            // ingredients: {type: 'list', objectType: 'string', default: []},
            // allergens: {type: 'list', objectType: 'string', default: []}
        });
        date.setDate(date.getDate() + 3);
        DBConnector.create('Product', {
            barCode: '7613034232465',
            name: 'Le Bon Paris, À l\'Étouffée (6 Tranches)',
            categories: [" Viandes", " Charcuteries", " Frais", " Jambons", " Porc", " Charcuteries cuites", " Produits sans gluten", " Jambons blancs"],
            scanDate: date,
            nbScans: 1,
            imageUrl: 'https://static.openfoodfacts.org/images/products/761/303/423/2465/front_fr.6.400.jpg',
            // ingredients: {type: 'list', objectType: 'string', default: []},
            // allergens: {type: 'list', objectType: 'string', default: []}
        });
        DBConnector.create('Product', {
            barCode: '5410673730954',
            name: 'Riz Long Grain',
            categories: [" Aliments et boissons à base de végétaux", " Aliments d'origine végétale", " Céréales et pommes de terre", " Graines", " Céréales et dérivés", " Céréales en grains", " Riz", " Riz long grain"],
            scanDate: date,
            nbScans: 1,
            imageUrl: 'https://static.openfoodfacts.org/images/products/541/067/373/0954/front_fr.7.400.jpg',
            // ingredients: {type: 'list', objectType: 'string', default: []},
            // allergens: {type: 'list', objectType: 'string', default: []}
        });
        DBConnector.create('Product', {
            barCode: '3597620002066',
            name: 'Cruesli Chocolat',
            categories: [" Aliments et boissons à base de végétaux", " Aliments d'origine végétale", " Petit-déjeuners", " Céréales et pommes de terre", " Céréales et dérivés", " Céréales pour petit-déjeuner", " Flocons", " Flocons de céréales", " Mélanges de flocons de céréales", " Mueslis", " Mueslis au chocolat"],
            scanDate: date,
            nbScans: 2,
            imageUrl: 'https://static.openfoodfacts.org/images/products/359/762/000/2066/front_fr.43.400.jpg',
            // ingredients: {type: 'list', objectType: 'string', default: []},
            // allergens: {type: 'list', objectType: 'string', default: []}
        });
        DBConnector.create('Product', {
            barCode: '3103220025208',
            name: 'Dragibus',
            categories: [" Snacks", " Snacks sucrés", " Confiseries", " Bonbons"],
            scanDate: date,
            nbScans: 1,
            imageUrl: 'https://static.openfoodfacts.org/images/products/310/322/002/5208/front_fr.48.400.jpg',
            // ingredients: {type: 'list', objectType: 'string', default: []},
            // allergens: {type: 'list', objectType: 'string', default: []}
        });
    });

    date.setDate(date.getDate() - 13);

    DBConnector.write(() => {
        DBConnector.create('Basket', {
            dayTimestamp: date.getTime(),
            date: date.toISOString(),
            content: [
                {
                    barcode: '3596710413829',
                    quantity: 2,
                    categories: [' Sandwichs', ' Sandwichs au poisson', ' Sandwichs au thon'],
                    score: 'b'
                },
                {
                    barcode: '3257980252050',
                    quantity: 1,
                    categories: [" Produits d'élevages", " Œufs d'oiseau", " Œufs", " Œufs de poules élevées en plein air"],
                    score: 'a'
                },
            ],
        });

        date.setDate(date.getDate() + 5);
        DBConnector.create('Basket', {
            dayTimestamp: date.getTime(),
            date: date.toISOString(),
            content: [
                {
                    barcode: '3228881025258',
                    quantity: 1,
                    categories: [" Aliments et boissons à base de végétaux", " Boissons", " Boissons à base de végétaux", " Boissons chaudes", " Infusions", " Thés", " Boissons sans sucre ajouté"],
                    score: ''
                },
                {
                    barcode: '3263852914117',
                    quantity: 2,
                    categories: [" Snacks", " Desserts", " Snacks sucrés", " Biscuits et gâteaux", " Biscuits", " Biscuits secs", " Biscuits sablés"],
                    score: 'e'
                },
                {
                    barcode: '7613034232465',
                    quantity: 3,
                    categories: [" Viandes", " Charcuteries", " Frais", " Jambons", " Porc", " Charcuteries cuites", " Produits sans gluten", " Jambons blancs"],
                    score: 'c'
                },
            ],
        });

        date.setDate(date.getDate() + 3);
        DBConnector.create('Basket', {
            dayTimestamp: date.getTime(),
            date: date.toISOString(),
            content: [
                {
                    barcode: '5410673730954',
                    quantity: 1,
                    categories: [" Aliments et boissons à base de végétaux", " Aliments d'origine végétale", " Céréales et pommes de terre", " Graines", " Céréales et dérivés", " Céréales en grains", " Riz", " Riz long grain"],
                    score: 'a'
                },
                {
                    barcode: '3597620002066',
                    quantity: 1,
                    categories: [" Aliments et boissons à base de végétaux", " Aliments d'origine végétale", " Petit-déjeuners", " Céréales et pommes de terre", " Céréales et dérivés", " Céréales pour petit-déjeuner", " Flocons", " Flocons de céréales", " Mélanges de flocons de céréales", " Mueslis", " Mueslis au chocolat"],
                    score: 'c'
                },
            ],
        });

        date.setDate(date.getDate() + 5);
        DBConnector.create('Basket', {
            dayTimestamp: date.getTime(),
            date: date.toISOString(),
            content: [
                {
                    barcode: '3103220025208',
                    quantity: 4,
                    categories: [" Snacks", " Snacks sucrés", " Confiseries", " Bonbons"],
                    score: 'd'
                },
            ],
        });
    });
}