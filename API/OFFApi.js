
export function getProductFromBarcode (barcode) {
    const url = 'https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
