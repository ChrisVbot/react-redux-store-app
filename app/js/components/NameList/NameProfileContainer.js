import React from 'react';
import { connect } from 'react-redux';
import { fetchProfileIfNeeded } from '../../actions/names';
import NameProfile from './NameProfile';
import Spinner from '../Spinner/Spinner';
import ErrorComponent from '../ErrorComponent/ErrorComponent';


class NameProfileContainer extends React.Component {
	
	static propTypes = {
		error: React.PropTypes.string,
		fetchProfile: React.PropTypes.func.isRequired,
		isFetching: React.PropTypes.bool,
		profile: React.PropTypes.object,
	}

	componentDidMount() {
		this.props.fetchProfile();
	}

	render() {
		const { error, isFetching } = this.props;
		if (error) {
			return <ErrorComponent errorMessage={error} handleError={this.props.fetchProfile} />
		}
	
		if (isFetching) {
			return <Spinner />
		}

		return <NameProfile {...this.props} />
	}
}

const mapStateToProps = (store) => {
	const { profile, isFetching } = store.profile;
	const { error } = store;
	return {
		profile: profile,
		isFetching: isFetching,
		error: error
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const id = +ownProps.params.id
	return {
		fetchProfile: () => {
			dispatch(fetchProfileIfNeeded(id))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NameProfileContainer)