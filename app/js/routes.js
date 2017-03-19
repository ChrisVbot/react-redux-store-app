import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Layout from './components/Layout';
import Main from './components/Main/Main';
import NameListContainer from './components/NameList/NameListContainer';
import NameProfileContainer from './components/NameList/NameProfileContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ProductListContainer from './components/Products/ProductListContainer';
import ProductProfileContainer from './components/Products/ProductProfileContainer';

// import store from './store';
// import { getNames } from './actions/names';
// import { getProducts } from './actions/products';
// import names from '../../mock-data';
// import PRODUCTS from '../../mock-products';

// const grabNames = () => {
// 	store.dispatch(getNames(names))
// }

// const grabProducts = () => {
// 	store.dispatch(getProducts(PRODUCTS))
// }

export const routes = (
	<Route path="/" component={Layout} >
		<IndexRoute component={Main} />
		<Route path="products">
			<IndexRoute component={ProductListContainer} />
			<Route path=":id" component={ProductProfileContainer}/> 
		</Route>
		<Route path="names" >
			<IndexRoute component={NameListContainer} />
			<Route path=":id" component={NameProfileContainer} />
		</Route>
		<Redirect from="users(/:id)" to="names(/:id)" />
		<Route path="*" component={PageNotFound} />
	</Route>
);