

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
    let stats = [];
    Object.keys(categories).forEach((category) => {
        stats.push({
            "category": category,
            "number": categories[category] / total * 100
        })
    });
    return stats;
}