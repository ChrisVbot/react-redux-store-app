import React from 'react';
import styles from './reviews.css';


const Review = (props) => {
	const { reviewer, text } = props.review;
	return (
		<div className="pure-u-1 pure-u-md-1-4">
			<div className={styles.review}>
				<h1>{reviewer}</h1>
				<h3>{text}</h3>
			</div>
		</div>
	)
}

Review.propTypes = {
	review: React.PropTypes.shape({
		reviewer: React.PropTypes.string,
		text: React.PropTypes.string
	}).isRequired
}


export default Review;