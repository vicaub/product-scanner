export default function getTotalQuantityInBasket(basket) {
    let totalQuantity = 0;
    basket.content.forEach((product) => {
        totalQuantity += product.quantity;
    });
    return totalQuantity
}

export function todayTimeStamp() {
    const todayDate = new Date();
    const todayTimestamp = Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
    return todayTimestamp
}