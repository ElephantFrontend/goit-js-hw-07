const getCategoriesItemsCount = () => {
    return document.querySelectorAll('#categories .item').length;
}

function getCategoriesItemsDetails() {
    const items = document.querySelectorAll('#categories .item');

    items.forEach(item => {
        const title = item.querySelector('h2').textContent;
        const elementsCount = item.querySelectorAll('li').length;

        console.log('Category: ', title);
        console.log('Elements: ', elementsCount);
    });
}

console.log('Number of categories:' , getCategoriesItemsCount());
getCategoriesItemsDetails();