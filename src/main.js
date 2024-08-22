import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPixabayApi } from './js/pixabay-api';
import { render, clearMarkup, renderLoader } from './js/render-functions';

const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
};

// const isLocal =
//   window.location.hostname === '127.0.0.1' && window.location.port === '5173';
// console.log(isLocal);
// const iconUrl = isLocal
//   ? './img/error.svg'
//   : 'https://eevgenk.github.io/goit-js-hw-11/src/img/error.svg';

const errorMessege = str =>
  iziToast.warning({
    message: str,
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#FAFAFB',
    iconUrl: './img/error.png',
    messageSize: '16px',
    messageLineHeight: '24px',
    maxWidth: '432px',
    theme: 'dark',
  });
const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});

const onSearch = e => {
  e.preventDefault();
  const targetForm = e.currentTarget;
  const searchedEl = targetForm.input.value;
  if (!searchedEl) {
    return errorMessege(
      `There's nothing to search. Please, type the query target first!`
    );
  }
  renderLoader(refs.form);
  const loader = document.querySelector('.loader');
  clearMarkup(refs.gallery);
  getPixabayApi(searchedEl)
    .then(({ hits }) => {
      if (hits.length > 0) {
        render(refs.gallery, hits);
        lightbox.refresh();
      } else {
        errorMessege(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
    })
    .catch(err =>
      errorMessege('Ooops... Something go wrong. Please, try again later')
    )
    .finally(() => {
      loader.classList.remove('visible');
      targetForm.reset();
    });
};

refs.form.addEventListener('submit', onSearch);
