import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './layout.css';


const Layout = (props) => {
	return (
		<div className={styles.wrapper}>	

			<Header />

			<div className={styles.content}>
				{props.children}
			</div>
		
			<Footer />

		</div>
	)
}

Layout.propTypes = {
	children: React.PropTypes.node
}

export default Layout;