

export function groupByCategories(basket) {
    let categories = {};
    let total = 0;
    basket.items.forEach((product) => {
        if (product.category in categories) {
            categories[product.category] += product.quantity;
        } else {
            categories[product.category] = product.quantity;
        }
        total += product.quantity;
    });
    return buildCategoriesStats(categories, total)
}

export function groupAllByCategories(baskets) {
    let categories = {};
    let total = 0;
    baskets.forEach((basket) => {
        basket.items.forEach((product) => {
            if (product.category in categories) {
                categories[product.category] += product.quantity;
            } else {
                categories[product.category] = product.quantity;
            }
            total += product.quantity;
        });
    });
    return buildCategoriesStats(categories, total);
}

function buildCategoriesStats(categories, total) {
    let keys = [];
    let values = [];
    Object.keys(categories).forEach((category) => {
        keys.push(category);
        values.push(Math.round(categories[category] / total * 100));
    });
    return {
        'keys': keys,
        'values': values
    };
}

export function quantityInCategory(baskets, category) {
    let quantities = [];
    baskets.forEach((basket) => {
        let quantity = 0;
        basket.items.forEach((product) => {
            if (product.category === category) {
                quantity += product.quantity;
            }
        });
        quantities.push({
            date: basket.id,
           value: quantity,
        });
    });
    return quantities;
}

export function buildDataArray(data) {
    return data.map((elt) => elt.value);
}

export function getAllCategoriesFromBaskets(baskets) {
    /* List of all the different categories in the user's basket */
    let categories = [];
    baskets.forEach((basket) => {
        basket.items.forEach((item) => {
            categories.push(item.category);
        });
    });
    return [...new Set(categories)];
}

export function categoriesByBasket(baskets) {
    /* For each basket, compute the quantities for each category of the basket */
    let data = [];
    let categories = getAllCategoriesFromBaskets(baskets);
    baskets.forEach((basket) => {
        let basketData = {};
        basket.items.forEach((product) => {
            if (product.category in categories) {
                basketData[product.category] += product.quantity;
            } else {
                basketData[product.category] = product.quantity;
            }
        });
        categories.forEach((category) => {
           if (!(category in basketData)) {
               basketData[category] = 0;
           }
        });
        basketData.date = basket.id;
        data.push(basketData);
    });
    return {
        data,
        categories
    };
}