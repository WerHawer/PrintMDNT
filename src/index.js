import './style.css';
import catalogList from './catalog.hbs';
import result from './result.json';

const root = document.querySelector('#root');

let finish = 10;
const products = [...result.products];
console.log('products', products);
const max = products.length + 10;
console.log('catalog', max);

for (let i = 0; i < max; i += 10) {
  const part = result.products.slice(i, finish);
  const newCatalog = { products: [...part] };

  const list = catalogList(newCatalog);
  root.insertAdjacentHTML('beforeend', list);

  finish += 10;
}

let num = [];

for (let i = 0; i <= 70; i++) {
  if (i % 2 !== 0) {
    num.push(i);
  }
}
console.log('num', num.join(','));
