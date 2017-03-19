import { fetchProducts } from '../fake-backend';
import {
	REQUEST_PRODUCTS,
	RECEIVE_PRODUCTS,
	RECEIVE_PRODUCTS_ERROR,
	REQUEST_PRODUCT_PROFILE,
	RECEIVE_PRODUCT_PROFILE,
	RECEIVE_PRODUCT_ERROR,
	CLEAR_ERROR
	} from './actionTypes';

//Action Creators
const requestProducts = () => {
	return {
		type: REQUEST_PRODUCTS
	}
}

const receiveProducts = (products) => {
	return {
		type: RECEIVE_PRODUCTS,
		products: products
	}
}

const receiveProductsError = (error) => {
	return {
		type: RECEIVE_PRODUCTS_ERROR,
		error: error
	}
}

const clearError = () => {
	return {
		type: CLEAR_ERROR
	}
}

const fetchProductList = () => {
	return (dispatch, getState) => {
		dispatch(requestProducts())
		if (getState().error) {
			dispatch(clearError())
		}
		return fetchProducts({method: 'GET'})
			.then(
				data => {
					dispatch(receiveProducts(data))
				},
				error => {
					dispatch(receiveProductsError(error.message))
				}

		)
	}
}

const shouldFetchProductList = (state) => {
	const { products } = state.product.products;
	if (!products.length) {
		return true;
	} else {
		return false;
	}
}

export const fetchProductListIfNeeded = () => {
	return (dispatch, getState) => {
		if (shouldFetchProductList(getState())) {
			dispatch(fetchProductList())
		} else {
			return Promise.resolve()
		}
	}
}

const requestProductProfile = () => {
	return {
		type: REQUEST_PRODUCT_PROFILE
	}
}

const receiveProductProfile = (product) => {
	return {
		type: RECEIVE_PRODUCT_PROFILE,
		product: product
	}
}

const receiveProductError = (error) => {
	return {
		type: RECEIVE_PRODUCT_ERROR,
		error: error
	}
}

const fetchProductProfile = (id) => {
	return (dispatch, getState) => {
		dispatch(requestProductProfile())
		if (getState().error) {
			dispatch(clearError())
		}
		return fetchProducts({method: 'FIND', id: id})
			.then(
				prod => {
					dispatch(receiveProductProfile(prod))

				},
				error => {
					dispatch(receiveProductError(error.message))
				}
			)
	}
}

const shouldFetchProductProfile = (state, id) => {
	const { product } = state.product.productProfile;
	if (product.id !== id) {
		return true;
	} else {
		return false;
	}
}

export const fetchProductProfileIfNeeded = (id) => {
	return (dispatch, getState) => {
		if (shouldFetchProductProfile(getState(), id)) {
			dispatch(fetchProductProfile(id))
		} else {
			return Promise.resolve()
		}
	}
}




