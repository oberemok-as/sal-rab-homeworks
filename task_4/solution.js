// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON

    let data = JSON.parse(json);
    return data.products;
}

function renderProductsCards(json) {
    // Аргументом функции является JSON
    clearProducts();
    products = parseProducts(json);
    let length = products.length;
    for (let i = 0; i < length; i++) {
        addProduct(products[i]);
    }
}