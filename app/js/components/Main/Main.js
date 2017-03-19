import React from 'react';
import { Link } from 'react-router';
import styles from './main.css';

export default class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { background, header, social, content } = styles;
		return (
			<div>
				<div className={background}>
					<div className={header} >
						<h1>Lorem ipsum</h1>
						<ul className={content}>
							<li>Fusce rutrum nunc vitae</li>
							<li>Morbi a augue eu magna ornare tempus.</li>
							<li>Etiam vulputate mauris vitae commodo sagittis.</li>
							<li><i className="fa fa-2x fa-align-justify" aria-hidden="true"></i></li>
							<ul className={social}>
								<li>
									<a href="#">
										<i className="fa fa-3x fa-facebook" aria-hidden="false"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-3x fa-github" aria-hidden="false"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-3x fa-instagram" aria-hidden="false"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fa fa-3x fa-linkedin" aria-hidden="false"></i>
									</a>
								</li>						
							</ul>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}