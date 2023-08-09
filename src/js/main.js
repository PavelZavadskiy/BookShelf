import './main-categories';
import { getTopBooks } from './api-books';
import { makeTopBlocks } from './main-blocks';
import './main-support';
// import './main-blocks';

import { makeTopBlocks } from './main-blocks';
const initMainBlock = () => {
  getTopBooks().then(result => {
    makeTopBlocks(result);
  });
};

initMainBlock();
