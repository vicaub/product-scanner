

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
        values.push(categories[category] / total * 100);
    });
    return {
        'keys': keys,
        'values': values
    };
}