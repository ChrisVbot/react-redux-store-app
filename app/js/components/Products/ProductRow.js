import React from 'react';
import { Link } from 'react-router';
import styles from './products.css';

const ProductRow = (props) => {
	const { id, productName, productAdjective, price, image } = props.product;
	const backgroundImage = {
		backgroundImage: `
			linear-gradient(
				rgba(0,0,0,0.5),
				rgba(0,0,0,0.5)
			), url(${image})
		`
	}
	return (
		<div className="pure-u-1 pure-u-md-1-3">
			<div style={backgroundImage} className={styles.product}>
				<h3><Link to={`/products/${id}`}>{productName}</Link></h3>
				<ul>
					<li>{productAdjective}</li>
					<li>${price}</li>
				</ul>
			</div>
		</div>
	)
}

ProductRow.propTypes = {
	product: React.PropTypes.shape({
		id: React.PropTypes.number,
		produtName: React.PropTypes.string,
		productAdjective: React.PropTypes.string,
		price: React.PropTypes.string,
		image: React.PropTypes.string
	}).isRequired
}

export default ProductRow;