export default function getTotalQuantityInBasket(basket) {
    let totalQuantity = 0;
    basket.content.forEach((product) => {
        totalQuantity += product.quantity;
    });
    return totalQuantity
}