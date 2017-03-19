import React from 'react';
import { active } from './header.css'

import { Link, IndexLink } from 'react-router';

const NavList = (props) => {
	const { to } = props;
	if (to === '/') {
		return <IndexLink {...props} activeClassName={active}/>
	} else {
		return <Link {...props} activeClassName={active} />
	}
}

NavList.propTypes = {
	to: React.PropTypes.string.isRequired
}

export default NavList;

