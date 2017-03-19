import React from 'react';
import styles from './header.css';

import NavList from './NavList';


const Header = () => {
		return (
			<div className={`pure-menu pure-menu-horizontal ${styles.nav}`}>
				<NavList className="pure-menu-heading pure-menu-link" to="/" >
					<i className="fa fa-cubes" aria-hidden="true"></i>
				</NavList>
					<ul className="pure-menu-list">
						<li className="pure-menu-item">
							<NavList className="pure-menu-link" to="/products">Products</NavList>
						</li>
						<li className="pure-menu-item">
							<NavList className="pure-menu-link" to="/names">Name List</NavList>
						</li>
					</ul>
			</div>
		)
}

export default Header;



