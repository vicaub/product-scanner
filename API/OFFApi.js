import ProductService from "../Services/ProductService";

const lang = 'fr';
//TODO switch back to https
const apiUrl = 'http://' + lang + '.openfoodfacts.org';

export function getProductInfoFromApi(barcode) {
    const url = apiUrl + '/api/v0/product/' + barcode + '.json';
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            if (json.status !== 0 && json.code && json.code.length > 0) {
//TODO delete logs
                let jsonProduct = json.product;
        //        let product = ProductService.findProduct(jsonProduct, barcode);
         //       ProductService.scan(product);

                return {
                    _id: json.code,
                    product_name: jsonProduct.product_name_fr,
                    image_url: jsonProduct.image_url,
                    quantity: jsonProduct.quantity,
                    packaging: jsonProduct.packaging,
                    brands: jsonProduct.brands,
                    manufacturing_places: jsonProduct.manufacturing_places,
                    categories: jsonProduct.categories,
                    ingredients: jsonProduct.ingredients_text_with_allergens,
                    allergens: jsonProduct.allergens_from_ingredients,
                    nutrition_grades: jsonProduct.nutrition_grades,
                    nova_group: jsonProduct.nova_group
                };
            } else {
                return undefined;
            }
        })
        .catch((error) => console.error(error))
}

export function getAllergensFromApi() {
    const url = apiUrl + '/allergens.json';
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            let allergens = [];
            if (json.tags) {
                allergens = json.tags
                    .filter((obj => (obj.id !== obj.name) && obj.products > 50))
                    .map((obj) => {
                        return {
                            id: obj.id,
                            name: obj.name,
                        }
                    });
            }
            return allergens;
        })
        .catch((error) => console.error(error))
}
