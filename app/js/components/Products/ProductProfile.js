import React from 'react';
import styles from './products.css';

const ProductProfile = (props) => {
	const { 
		productName, 
		productAdjective, 
		price, 
		productMaterial, 
		color, 
		text, 
		image
		 } = props.product;
	return (
		<div className={styles.profile}>
			<div className={`pure-g ${styles.centred}`}>
				<div className="pure-u-1 pure-u-md-18-24">
					<div className={styles.profileDescription}>
						The <strong>{productName}</strong> has a wonderful {color} color, with 
						inspired {productAdjective} {productMaterial} properties. 
					</div>
					<p>{text}</p>
					<h4>Price: ${price}</h4>
				</div>
				{/*<div className="pure-u-1 pure-u-md-1-24"/>*/}
				<div className="pure-u-1 pure-u-md-6-24">
					<div className={styles.imageWrapper}>
						<img className={styles.profileImage} src={image} />
					</div>
				</div>
			</div>
		</div>
	)
}

ProductProfile.propTypes = {
	product: React.PropTypes.shape({
		productName: React.PropTypes.string,
		productAdjective: React.PropTypes.string,
		price: React.PropTypes.string,
		productMaterial: React.PropTypes.string,
		color: React.PropTypes.string,
		text: React.PropTypes.string,
		image: React.PropTypes.string
	}).isRequired
}

export default ProductProfile;