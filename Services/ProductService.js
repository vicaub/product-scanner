import DBConnector from '../Database/DBConnector';

let productDB = DBConnector.objects('Product');

let ProductService = {
    findAll: () => {
        return Array.from(productDB)
    },


    scan : (product) => {
        if (productDB.filtered("barCode = '" + product.barCode + "'").length) return;
        try {
            DBConnector.write(() => {
                try {
                    DBConnector.create('Product', product);
                } catch (e) {
                    console.log(e);
                }

            });
        } catch (e) {
            console.log(e);
        }

    },

    update : (product, callback) => {
        if(!callback) return;
        DBConnector.write(() => {
            product.scanDate = new Date();
            product.nbScans += 1;
            DBConnector.create('Product', product, true);
            callback();
        })
    }


}
export default ProductService;