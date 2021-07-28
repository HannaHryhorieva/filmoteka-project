import 'basiclightbox/dist/basicLightbox.min.css';
import '../sass/main.scss';
import * as footerModal from './components/footer-modal';
import { pageState, setIsWatched, setIsQueue} from './components/pageState';
import { initSearch } from './components/search';
import { renderApp } from './components/renderer';
import { initNavigation } from './components/navigation';

//example of using api functions
// import * as moviesDBApi from './api/moviesdb-api';
// moviesDBApi.getTrendingMovies().then(console.log);
// moviesDBApi.getMoviesByQuery('cat', 2).then(console.log);
// moviesDBApi.getMovieById(400).then(console.log);

import { makeMoviesArrayForRendering, renderGallery } from './components/rendering-movies';

renderApp();
initNavigation();

footerModal.createFooterModal();
initSearch();
// example of using makeMoviesArrayForRendering, renderGallery functions
// moviesDBApi.getTrendingMovies().then(makeMoviesArrayForRendering).then(arr => renderGallery(arr, filmList));
