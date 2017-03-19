import React from 'react';
import styles from './reviews.css';

const ReviewList = (props) => {
	return (
		<div className={`pure-g ${styles.reviews}`}>
			{props.children}
		</div>
	)
}

ReviewList.propTypes = {
	children: React.PropTypes.node.isRequired
}

export default ReviewList;