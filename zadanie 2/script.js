// Tablica składników
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

// Znajdz elements ul#ingredients
const ingredientsList = document.getElementById('ingredients');

// Tworzyć fragment dokumentu aby wstawic wszystkie elementy <li> naraz 
const fragment = document.createDocumentFragment();

// Iterować przez tablice składników
ingredients.forEach(ingredient => {
// Tworzyć nowy element <li>
  const li = document.createElement('li');
  // Ustawić text jako nazwę składnika
  li.textContent = ingredient;
  // Dodać klasę item
  li.classList.add('item');
  // Dodać element <li> do fragmentu 
  fragment.appendChild(li);
});

// Wstawić fragment do listy ul#ingredients w jednej operacji
ingredientsList.appendChild(fragment);