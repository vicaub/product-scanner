
export function getProductInfoFromApi(barcode) {
    const url = 'https://fr.openfoodfacts.org/api/v0/product/' + barcode + '.json';
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            if (json.status !== 0 && json.code && json.code.length > 0) {
                let jsonProduct = json.product;
                return {
                    "_id": json.code,
                    "product_name": jsonProduct.product_name_fr,
                    "image_url": jsonProduct.image_url,
                    "quantity": jsonProduct.quantity,
                    "packaging": jsonProduct.packaging,
                    "brands": jsonProduct.brands
                };
            } else {
                return undefined;
            }
        })
        .catch((error) => console.error(error))
}
