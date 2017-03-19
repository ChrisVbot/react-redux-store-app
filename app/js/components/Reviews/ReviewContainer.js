import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews, addNewReview } from '../../actions/reviews';
import Spinner from '../Spinner/Spinner';
import Review from './Review';
import AddReview from './AddReview';
import ReviewList from './ReviewList';

class ReviewContainer extends React.Component {
	
	static propTypes = {
		addNewReview: React.PropTypes.func,
		getReviews: React.PropTypes.func.isRequired,
		isFetching: React.PropTypes.bool.isRequired,
		productId: React.PropTypes.number.isRequired,
		reviews: React.PropTypes.object
	}

	componentDidMount(){
		this.props.getReviews(this.props.productId)
	}

	render() {
		const { isFetching, reviews, productId } = this.props;
		if (isFetching) {
			return <Spinner />
		}
		
		let reviewList;
		if (reviews.items.length) {
			reviewList = reviews.items.map((review) => 
				<Review key={review.id} review={review}/>
			)
		} else {
				reviewList = (
					<div className="pure-u-1 pure-u-md-1-4">
						<h2>No reviews yet</h2>
					</div>
				)
		}

		return (
			<div>
				<ReviewList>
					{reviewList}	
					<AddReview productId={productId} addReview={this.props.addNewReview} />
				</ReviewList>
			</div>
		)
	}
} 

const mapStateToProps = (store, ownProps) => {
	const { reviewsByProductID } = store;
	const { productId } = ownProps;
	const reviews = reviewsByProductID[productId]
	const isFetching = () => {
		if (!reviews || reviews.isFetching) {
			return true;
		} else {
			return false;
		}
	}

	return {
		reviews: reviews,
		isFetching: isFetching()
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getReviews: (id) => {
			dispatch(fetchReviews(id))
		},
		addNewReview: (productId, review) => {
			dispatch(addNewReview(productId, review))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReviewContainer)


