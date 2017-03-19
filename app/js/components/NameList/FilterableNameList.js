import React from 'react';
import styles from './namelist.css';
import NameRow from './NameRow';

import faker from 'faker';

export default class FilterableNameList extends React.Component {
	
	static propTypes = {
		canAddName: React.PropTypes.func.isRequired,
		deleteName: React.PropTypes.func.isRequired,
		filterNames: React.PropTypes.func.isRequired,
		filterText: React.PropTypes.string,
		isAdding: React.PropTypes.bool,
		names: React.PropTypes.array.isRequired,
	}

	constructor() {
		super();
		this.filterNames = this.filterNames.bind(this);
		this.addName = this.addName.bind(this);
	}
	
	filterNames(event) {
		const { value } = event.target;
		this.props.filterNames(value);
	}

	addName() {
		const newName = {
			"first_name": faker.name.firstName(),
			"last_name": faker.name.lastName(),
			"email": faker.internet.email(),
			"city": faker.address.city(),
			"catch_phrase": faker.hacker.phrase(),
		}
		this.props.canAddName(newName);
	}

	render() {

		const {names, filterText, isAdding } = this.props;
		return (
			<div className={styles.namelist}>
				<input className={styles.nameFilter} onChange={this.filterNames} type="text" placeholder="Filter by name" value={filterText} />
				<div className="pure-g">
				{names.map((name) => 
					<div className="pure-u-1-2 pure-u-md-1-4" key={name.id}>
						<NameRow name={name} />
						<i className={`fa fa-2x fa-trash ${styles.trash}`} aria-hidden="false" onClick={() => this.props.deleteName(name.id)}></i>
					</div>
				)}		
					{ isAdding ? <div className="pure-u-1-2 pure-u-md-1-4">Adding new name!</div> : null}			
				</div>
				<div>
					<button className="pure-button" onClick={this.addName}>Add random name</button>
				</div>
			</div>
		)
	}
}
