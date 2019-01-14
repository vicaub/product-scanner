
const lang = 'fr';
const apiUrl = 'https://' + lang + '.openfoodfacts.org';

export function getProductInfoFromApi(barcode) {
    const url = apiUrl + '/api/v0/product/' + barcode + '.json';
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function parseProductInfo(rawJson) {
        console.log(rawJson);
        if (rawJson.status !== 0 && rawJson.code && rawJson.code.length > 0) {
            let jsonProduct = rawJson.product;
            return {
                "_id": rawJson.code,
                "product_name": jsonProduct.product_name_fr,
                "image_url": jsonProduct.image_url,
                "quantity": jsonProduct.quantity,
                "packaging": jsonProduct.packaging,
                "brands": jsonProduct.brands
            };
        } else {
            return undefined;
        }
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
