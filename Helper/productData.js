// Helpers/filmsData.js

import ProductService from "../Services/ProductService";

var data;
export default data =
    [
    {
        id:3103220025338,
        nutritional_score:"D",
        title:"Dragibus",
        brand:"Haribo",
        image:"https://static.openfoodfacts.org/images/products/310/322/002/5338/front_fr.29.400.jpg"
    },
    {
        id:7622210888082,
        nutritional_score:"C",
        title:"Encore !",
        brand:"Cote d'Or",
        image:"https://static.openfoodfacts.org/images/products/762/221/088/8082/front_fr.14.400.jpg"
    }
]

var bdData;
export default bdData = ProductService.findAll();