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
        const dbresult = basketDB.filtered("dayTimestamp = '" + todayTimeStamp() + "'");
        if (dbresult.length) {
            console.log("found basket in db");
            return Array.from(dbresult)[0]
        } else {
            console.log("create new basket");
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
                        console.log(e);
                    }

                });
                return basketInfo;
            } catch (e) {
                console.log(e);
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

    addProductToBasket: (barcode, quantity) => {
        // Check if basket exists
        const basket = BasketService.findTodaysBasket();

        DBConnector.write(() => {
            // Check if product in basket
            let found = false;
            for (let i = 0; i < basket.content.length; i++) {
                if (basket.content[i].barcode === barcode) {
                    found = true;
                    basket.content[i].quantity = quantity;
                    break;
                }
            }
            if (!found) {
                basket.content.push({
                    barcode,
                    quantity,
                });
            }
            try {

                try {
                    DBConnector.create('Basket', basket, true);
                } catch (e) {
                    console.log(e);
                }

            } catch (e) {
                console.log(e);
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
                    console.log(e);
                }

            } catch (e) {
                console.log(e);
            }
        })
    }


    //
    //
    // scan : (product) => {
    //     if (productDB.filtered("barCode = '" + product.barCode + "'").length) {
    //
    //         ProductService.update(product);
    //
    //
    //         return
    //     }
    //     else {
    //         ProductService.add(product);
    //     }
    //
    // },
    //
    // update : (product, callback) => {
    //     DBConnector.write(() => {
    //         product.scanDate = new Date();
    //         product.nbScans += 1;
    //         DBConnector.create('Product', product, true);
    //
    //     })
    //
    //
    // },
    //
    // add : (product) => {
    //
    //     try {
    //         DBConnector.write(() => {
    //             try {
    //                 DBConnector.create('Product', product);
    //
    //             } catch (e) {
    //                 console.log(e);
    //             }
    //
    //         })
    //     } catch (e) {
    //         console.log(e);
    //     }
    //
    // }


}
export default BasketService;