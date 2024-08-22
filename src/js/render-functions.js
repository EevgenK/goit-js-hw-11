// import iziToast from 'izitoast';
const render = (element, obj) => {
  const markup = obj
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        
        <ul class="info-list">
          <li class="info-item"><b>Likes</b>
          <span>${likes}</span></li>
          <li class="info-item"><b>Views</b>
          <span>${views}</span></li>
          <li class="info-item"><b>Comments</b>
          <span>${comments}</span></li>
          <li class="info-item"><b>Downloads
          <span></b>${downloads}</span></li>
        </ul>
        </a>
      </li>`
    )
    .join('');
  element.innerHTML = markup;
};
const renderLoader = element => {
  const markup = `<span class="loader visible"></span>`;
  element.insertAdjacentHTML('afterend', markup);
};
const clearMarkup = element => (element.innerHTML = '');

export { render, clearMarkup, renderLoader };
