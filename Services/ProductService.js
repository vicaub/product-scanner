import DBConnector from '../Database/DBConnector';

let productDB = DBConnector.objects('Product');

let ProductService = {
    findAll: () => {
        return Array.from(productDB)
    },

    findProduct: (jsonProduct, barcode) => {
        if (productDB.filtered("barCode = '" + barcode + "'").length){
            return Array.from(productDB.filtered("barCode = '" + barcode + "'"))[0]
        }
        else {
            const productinfo = {
                barCode: barcode,
                name: jsonProduct.product_name_fr,
                scanDate: new Date(),
                nbScans: 1,
                imageUrl: jsonProduct.image_url,
                ingredients: [],
                allergens: []
            };
            return productinfo;
        }
    },


    scan : (product) => {
        if (productDB.filtered("barCode = '" + product.barCode + "'").length) {
            console.log("déja dans la db");
            ProductService.update(product);
            let products = DBConnector.objects('Product');
            for (let p of products) {
                console.log(`  ${p.name}`);
                console.log(`  ${p.nbScans}`);
            }
            return
        }
        else {
            ProductService.add(product);
            console.log("product created and added to db");
            let products = DBConnector.objects('Product');
            for (let p of products) {
                console.log(`  ${p.name}`);
                console.log(`  ${p.nbScans}`);
            }

        }

    },

    update : (product, callback) => {

        console.log("begin update");
        DBConnector.write(() => {
            product.scanDate = new Date();
            product.nbScans += 1;
            DBConnector.create('Product', product, true);

        })


    },

    add : (product) => {

        try {
            DBConnector.write(() => {
                try {
                    DBConnector.create('Product', product);
                } catch (e) {
                    console.log(e);
                }

            })
        } catch (e) {
            console.log(e);
        }

    }


}
export default ProductService;