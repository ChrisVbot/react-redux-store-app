import React from 'react';
import { Link } from 'react-router';
import styles from './namelist.css';

const NameRow = (props) => {
	const {first_name, last_name, id} = props.name;
	return (
		<div>
			<h3 className={styles.name}><Link to={`/names/${id}`}>{first_name} {last_name}</Link></h3>
			<p>{props.children}</p>
		</div>
	)	
}

NameRow.propTypes = {
	name: React.PropTypes.shape({
		first_name: React.PropTypes.string,
		last_name: React.PropTypes.string,
		id: React.PropTypes.number
	}).isRequired
}

export default NameRow;

