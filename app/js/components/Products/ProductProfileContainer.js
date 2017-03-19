import React from 'react';
import { connect } from 'react-redux';
import { fetchProductProfileIfNeeded } from '../../actions/products';
import ProductProfile from './ProductProfile';
import Spinner from '../Spinner/Spinner';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import ReviewContainer from '../Reviews/ReviewContainer';


class ProductProfileContainer extends React.Component {
	
	static propTypes = {
		error: React.PropTypes.string,
		getProduct: React.PropTypes.func.isRequired,
		isFetching: React.PropTypes.bool,
		product: React.PropTypes.object
	}

	componentDidMount() {
		this.props.getProduct()
	}

	render() {
		const { isFetching, error } = this.props;
		const { id } = this.props.product;
		if (error) {
			return <ErrorComponent errorMessage={error} handleError={this.props.getProduct}/>
		}
		if (isFetching) {
			return <Spinner />
		}
		return (
			<div>
				<ProductProfile product={this.props.product} />
				<ReviewContainer productId={id}/>
			</div>
		)
	}
}
const mapStateToProps = (store, ownProps) => {
	const { product, isFetching } = store.product.productProfile;
	const { error } = store;
	return {
		product: product,
		isFetching: isFetching,
		error: error
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const id = ownProps.id || +ownProps.params.id
	return {
		getProduct: () => {
			dispatch(fetchProductProfileIfNeeded(id))
		}
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductProfileContainer);