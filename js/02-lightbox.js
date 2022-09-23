import { galleryItems } from "./gallery-items.js";
// Change code below this line
const SimpleLightbox = window.SimpleLightbox;

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", getGalleryListMarkup(galleryItems));
const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(lightbox);

function getGalleryItemMarkup({ preview, original, description }) {
  return `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>
  `;
}

function getGalleryListMarkup(array) {
  return array.map((it) => getGalleryItemMarkup(it)).join("");
}

// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
//  Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
//  Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
