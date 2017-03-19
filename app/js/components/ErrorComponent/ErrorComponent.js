import React from 'react';
import { error } from './errorcomponent.css';

const ErrorComponent = (props) => {
	const { errorMessage } = props;
	return (
		<div className={error}>
			<h2>{errorMessage}</h2>
			<button className="pure-button" onClick={props.handleError}>Try again</button>
		</div>
	)
}

ErrorComponent.propTypes = {
	errorMessage: React.PropTypes.string.isRequired,
	handleError: React.PropTypes.func.isRequired
}

export default ErrorComponent;