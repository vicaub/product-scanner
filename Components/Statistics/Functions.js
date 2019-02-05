
function getCategory(product) {
    if (product.categories.length > 0 && product.categories[0].length > 0) {
        return product.categories[product.categories.length - 1];
    } else {
        return ' Autre';
    }
}

export function groupByCategories(basket, categoriesList) {
    /* Compute quantities bought in each category for a specific basket */
    let categories = {};
    let total = 0;
    Array.from(basket.content).forEach((product) => {
        let productCategory = getCategory(product);
        if (productCategory in categories) {
            categories[productCategory] += product.quantity;
        } else {
            categories[productCategory] = product.quantity;
        }
        total += product.quantity;
    });
    categoriesList.forEach((category) => {
        if (!(category in categories)) {
            categories[category] = 0;
        }
    });
    return buildCategoriesStats(categories, total)
}

export function groupAllByCategories(baskets) {
    let categories = {};
    let total = 0;
    baskets.forEach((basket) => {
        Array.from(basket.content).forEach((product) => {
            let productCategory = getCategory(product);
            if (productCategory in categories) {
                categories[productCategory] += product.quantity;
            } else {
                categories[productCategory] = product.quantity;
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
    baskets.reverse().forEach((basket) => {
        let quantity = 0;
        Array.from(basket.content).forEach((product) => {
            if (getCategory(product) === category) {
                quantity += product.quantity;
            }
        });
        quantities.push({
            date: basket.dayTimestamp,
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
        Array.from(basket.content).forEach((item) => {
            categories.push(getCategory(item));
        });
    });
    return [...new Set(categories)];
}

export function categoriesByBasket(baskets, categories) {
    /* For each basket, compute the quantities for each category of the basket */
    let data = [];
    baskets.forEach((basket) => {
        let basketData = {};
        Array.from(basket.content).forEach((product) => {
            let productCategory = getCategory(product);
            if (productCategory in basketData) {
                basketData[productCategory] += product.quantity;
            } else {
                basketData[productCategory] = product.quantity;
            }
        });
        categories.forEach((category) => {
           if (!(category in basketData)) {
               basketData[category] = 0;
           }
        });
        basketData.date = basket.dayTimestamp;
        data.push(basketData);
    });
    return data;
}