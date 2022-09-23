import { galleryItems } from "./gallery-items.js";
// Change code below this line
const basicLightbox = window.basicLightbox;
const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML(
  "beforeend",
  getGalleryListTemplate(galleryItems)
);
galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const gallaryItem = event.target.closest(".gallery__item");
  if (!gallaryItem) return;

  const img = gallaryItem.querySelector(".gallery__image");
  const src = img.dataset.source;
  showModal(src);
}

function getGalleryListTemplate(array) {
  return array.map((it) => getGalleryItemTemplate(it)).join("");
}

function getGalleryItemTemplate(img) {
  const { description, original, preview } = img;

  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
}

function showModal(src) {
  const instance = basicLightbox.create(getBigImgTemplate(src));
  instance.show();

  window.addEventListener("keydown", onKeyDown);

  function onKeyDown(event) {
    if (event.key !== "Escape") return;

    instance.close();
    window.removeEventListener("keydown", onKeyDown);
  }
}

function getBigImgTemplate(src) {
  return `
  <img src="${src}" width="800" height="600">
  `;
}

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();
// return arr.map((it) => getBoxItemTemplate(it)).join("");

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
//  Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
//  Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
