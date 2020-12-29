import './style.css';
import catalogList from './catalog.hbs';
import result from './result.json';

const root = document.querySelector('#root');
const title = document.querySelector('.title');

title.insertAdjacentHTML('beforeend', result.collection);

const elementsOnPage = 10;
const products = [...result.products];

const max = products.length;

for (let i = 0; i < max; i += elementsOnPage) {
  const finish = i + elementsOnPage;

  const part = result.products.slice(i, finish);

  const newCatalog = { products: [...part] };

  const list = catalogList(newCatalog);
  root.insertAdjacentHTML('beforeend', list);
}
