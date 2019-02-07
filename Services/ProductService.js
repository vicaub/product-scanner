import DBConnector from '../Database/DBConnector';
// Service to fetch, add, update the products in the Database


let productDB = DBConnector.objects('Product');

let ProductService = {
    findAll: () => {
        return Array.from( (productDB.sorted('scanDate', true)))
    },

    findProduct: (data, barcode) => {
        if (productDB.filtered("barCode = '" + barcode + "'").length){
            return Array.from(productDB.filtered("barCode = '" + barcode + "'"))[0]
        }
        else {
            const productinfo = {
                barCode: data._id,
                name: data.product_name,
                categories: data.categories !== undefined ? data.categories.split(","): [],
                scanDate: new Date(),
                nbScans: 1,
                imageUrl: data.image_url,
                ingredients: data.ingredients ? [data.ingredients] : [],
                allergens: data.allergens !== undefined ? data.allergens.split(","): []
            };
            return productinfo;
        }
    },

//With a barcode, the product is either updated in the database or added if not registered yet
    scan : (product) => {
        if (productDB.filtered("barCode = '" + product.barCode + "'").length) {

            ProductService.update(product);


            return
        }
        else {
            ProductService.add(product);
        }

    },

    update : (product, callback) => {
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
                    console.error(e);
                }

            })
        } catch (e) {
            console.error(e);
        }

    },
// Retrieve a specific product in the database from the barcode (Used from the basket screen)
    fetchProduct : (barcode) => {
        return Array.from(productDB.filtered("barCode = '" + barcode + "'"))[0]
    }


}
export default ProductService;
