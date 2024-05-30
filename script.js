// Wszystkie elementy li z klasa item wewnatrz ul o id categories
const categories = document.querySelectorAll('#categories .item');

// liczymy liczbę kategorii
console.log(`Number of categories: ${categories.length}`);

// iterujemy elementy li.item
categories.forEach(category => {
    //znajdujemy tytuł element h2 i text w nim
    const title = category.querySelector('h2').textContent;
    // Wszystkie elementy li zagnieżdżone w bieżącej kategorii
    const elementsCount = category.querySelectorAll('ul li').length;

    // Wyświetlić tytuł kategorii i liczbę elementów
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
}); 
