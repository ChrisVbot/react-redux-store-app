import React from 'react';
import { browserHistory, Link } from 'react-router';
import { namelist, profileName } from './namelist.css';



const NameProfile = (props) => {
	let { profile } = props;
	if (profile) { 
		profile = 
			<div>
				<h1 className={profileName}>{profile.first_name} {profile.last_name}</h1>
				<p>{profile.first_name} lives in {profile.city} and can be reached by <a href={`mailto:${profile.email}`}>email</a>.</p>
				<p>As {profile.first_name} loves to say: "{profile.catch_phrase}"</p>
			</div>
	} else {
		profile = <h2>Sorry, this profile was not found :( </h2>
	}
	return (
		<div className={namelist}>
			{profile}
			<Link to="/names"><button className="pure-button">Go to all names</button></Link>
		</div>
	)
}

NameProfile.propTypes = {
	profile: React.PropTypes.shape({
		first_name: React.PropTypes.string,
		last_name: React.PropTypes.string,
		city: React.PropTypes.string,
		catch_phrase: React.PropTypes.string
	})
}

export default NameProfile;

