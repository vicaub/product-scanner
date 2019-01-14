import DBConnector from '../Database/DBConnector';

let productDB = DBConnector.objects('Product');

let ProductService = {
    findAll: () => {
        return Array.from( (productDB.sorted('nbScans')))
    },

    findProduct: (data, barcode) => {
        if (productDB.filtered("barCode = '" + barcode + "'").length){
            return Array.from(productDB.filtered("barCode = '" + barcode + "'"))[0]
        }
        else {
            const productinfo = {
                barCode: data._id,
                name: data.product_name,
                categories: data.categories.split(","),
                scanDate: new Date(),
                nbScans: 1,
                imageUrl: data.image_url,
                ingredients: [data.ingredients],
                allergens: data.allergens.split(","),
            };
            return productinfo;
        }
    },


    scan : (product) => {
        if (productDB.filtered("barCode = '" + product.barCode + "'").length) {

            ProductService.update(product);

           //TODO delete logs
           let products = DBConnector.objects('Product');
           for (let p of products) {
               console.log(`  ${p.name}`);
               console.log(`  ${p.barCode}`);
               console.log(`  ${p.nbScans}`);
               console.log(`  ${p.scanDate}`);
               console.log(`  ${p.ingredients[0]}`);
               console.log(`  ${p.allergens[0]}`);
               console.log(`  ${p.categories[0]}`);
               console.log(`  ${p.categories[1]}`);

         }
            return
        }
        else {
            ProductService.add(product);
        }

    },

    update : (product, callback) => {
//TODO delete logs
     //   console.log("begin update");
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
