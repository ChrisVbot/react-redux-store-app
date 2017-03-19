import React from 'react';
import styles from './reviews.css';

export default class AddReview extends React.Component {
	
	static propTypes = {
		addReview: React.PropTypes.func.isRequired,
		productId: React.PropTypes.number.isRequired
	}

	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { productId } = this.props;
		const { name, review } = this.refs;
		const formattedReview = {
			reviewer: name.value,
			text: review.value
		}
		this.props.addReview(productId, formattedReview);
		name.value = '';
		review.value = '';
	}

	render() {
		return (
				<div className="pure-u-1 pure-u-md-1-4">
					<div className={styles.review}>
						<h2>Add new review</h2>
						<form className="pure-form" onSubmit={this.handleSubmit}>
							<fieldset className="pure-group">
								<input type="text" className="pure-input-3-4" placeholder="Your name" ref="name" required />
								<textarea className="pure-input-3-4" placeholder="Write your review here" ref="review" required />
								<button className="pure-button pure-input-3-4 pure-button-primary" type="submit">Submit</button>
							</fieldset>
						</form>
					</div>
				</div>
		)
	}
}

