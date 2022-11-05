import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryNode = document.querySelector('.gallery');

function buildImageCard({ description, preview, original } = {}) {
  const imageLink = document.createElement('a');
  imageLink.href = original;
  imageLink.classList.add('gallery__item');

  const image = document.createElement('img');
  image.src = preview;
  image.alt = description;
  image.classList.add('gallery__image');

  imageLink.append(image);
  return imageLink;
}

const images = galleryItems.map(item => buildImageCard(item));

galleryNode.append(...images);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
