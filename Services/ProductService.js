import DBConnector from '../Database/DBConnector';

let productDB = DBConnector.objects('Product');

let ProductService = {
    findAll: () =>{
        return Array.from(productDB)
    },


    addToDB:() =>{

    }

}

export default ProductService;