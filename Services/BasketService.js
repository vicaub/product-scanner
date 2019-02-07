import DBConnector from '../Database/DBConnector';

let basketDB = DBConnector.objects('Basket');

function todayTimeStamp() {
    const todayDate = new Date();
    const todayTimstamp = Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
    return todayTimstamp
}

let BasketService = {

    /**
     * Get and return all baskets in DB
     */
    findAll: () => {
        return Array.from((basketDB.sorted('dayTimestamp', true)))
    },

    /**
     * Search for the basket of the day. Create one if it doesn't exist
     * Return it
     */
    findTodaysBasket: () => {
        return BasketService.findBasketByTimestamp(todayTimeStamp());
    },

    findBasketByTimestamp : (dayTimeStamp) => {
        const dbresult = basketDB.filtered("dayTimestamp = '" + dayTimeStamp + "'");
        if (dbresult.length) {
            return Array.from(dbresult)[0]
        } else {
            const basketInfo = {
                dayTimestamp: todayTimeStamp(),
                date: new Date(),
                content: [],
            };
            try {
                DBConnector.write(() => {
                    try {
                        DBConnector.create('Basket', basketInfo);
                    } catch (e) {
                        console.error(e);
                    }

                });
                return basketInfo;
            } catch (e) {
                console.error(e);
            }
        }
    },


    findQuantity: (barcode) => {
        const basket = BasketService.findTodaysBasket();
        for (let i = 0; i < basket.content.length; i++) {
            if (basket.content[i].barcode === barcode) {
                return basket.content[i].quantity;
            }
        }
        return 0;
    },

    addProductToBasket: (product, quantity) => {
        // Check if basket exists
        const basket = BasketService.findTodaysBasket();

        DBConnector.write(() => {
            // Check if product in basket ---- TODO: can we update the quantity of a product without deleting it?
            let found = false;
            for (let i = 0; i < basket.content.length; i++) {
                if (basket.content[i].barcode === product._id) {
                    found = true;
                    basket.content[i].quantity = quantity;
                    break;
                }
            }
            if (!found) {
                let savedProduct = {
                    barcode: product._id,
                    categories: product.categories !== undefined ? product.categories.split(",") : [],
                    score: product.nutrition_grades !== undefined ? product.nutrition_grades : '',
                    quantity,
                };
                basket.content.push(savedProduct);
            }
            try {

                try {
                    DBConnector.create('Basket', basket, true);
                } catch (e) {
                    console.error(e);
                }

            } catch (e) {
                console.error(e);
            }
        })
    },

    deleteProduct: (barcode) => {
        const basket = BasketService.findTodaysBasket();
        DBConnector.write(() => {
            for (let i = 0; i < basket.content.length; i++) {
                if (basket.content[i].barcode === barcode) {
                    basket.content.splice(i, 1);
                    break;
                }
            }
            try {

                try {
                    DBConnector.create('Basket', basket, true);
                } catch (e) {
                    console.error(e);
                }

            } catch (e) {
                console.error(e);
            }
        })
    }
};

export default BasketService;
