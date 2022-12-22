import ProductItem from './ProductItem';
import classes from './Products.module.css';
import products from '../../fake_data.json';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(item => <ProductItem item={item} key={item.id} />
        )}
      </ul>
    </section>
  );
};

export default Products;
