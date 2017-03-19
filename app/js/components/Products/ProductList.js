import React from 'react';
import styles from './products.css'
import ProductRow from './ProductRow';


const ProductList = (props) => {
	const { products } = props;
	return (
		<div className={`pure-g ${styles.products}`}>
			{products.map((product) => 
				<ProductRow key={product.id} product={product} />
			)}
		</div>
	)
}

ProductList.propTypes = {
	products: React.PropTypes.array.isRequired
}

export default ProductList;
