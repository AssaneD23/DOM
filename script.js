document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const minusBtn = article.querySelector('.minus');
        const plusBtn = article.querySelector('.plus');
        const quantityElement = article.querySelector('.quantity');
        const deleteBtn = article.querySelector('.delete');

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
        });

        deleteBtn.addEventListener('click', () => {
            article.remove();
        });
    });
});
