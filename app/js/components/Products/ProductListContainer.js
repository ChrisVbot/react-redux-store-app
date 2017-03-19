import React from 'react';
import { connect } from 'react-redux';
import { fetchProductListIfNeeded } from '../../actions/products';
import ProductList from './ProductList';
import Spinner from '../Spinner/Spinner';
import ErrorComponent from '../ErrorComponent/ErrorComponent';


class ProductListContainer extends React.Component {
	
	static propTypes = {
		error: React.PropTypes.string,
		getProducts: React.PropTypes.func.isRequired,
		isFetching: React.PropTypes.bool,
		products: React.PropTypes.array
	}

	componentDidMount() {
		this.props.getProducts()
	}

	render() {
		const { error, isFetching } = this.props;
		if (error) {
			return <ErrorComponent errorMessage={error} handleError={this.props.getProducts} />
		}
		if (isFetching) {
			return <Spinner />
		}
		return <ProductList {...this.props} />
	}
}

const mapStateToProps = (store) => {
	const { products, isFetching } = store.product.products;
	const { error } = store;
	return {
		products: products,
		isFetching: isFetching,
		error: error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProducts: () => {
			dispatch(fetchProductListIfNeeded())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductListContainer)

