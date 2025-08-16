const products = [
    {
        id: 1,
        name: "کفش ورزشی",
        price: 120000,
        img: "images/shoe1.jpg",
        description: "کفش راحت و سبک برای ورزش و پیاده‌روی."
    },
    {
        id: 2,
        name: "هدفون بی‌سیم",
        price: 250000,
        img: "images/headphone1.jpg",
        description: "هدفون با کیفیت بالا و بدون سیم."
    },
    {
        id: 3,
        name: "ساعت هوشمند",
        price: 500000,
        img: "images/watch1.jpg",
        description: "ساعت هوشمند با قابلیت‌های متعدد."
    }
];

function showProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>قیمت: ${product.price.toLocaleString()} تومان</p>
            <a href="product.html?id=${product.id}">جزئیات</a>
        `;
        productList.appendChild(card);
    });
}

window.onload = showProducts;
