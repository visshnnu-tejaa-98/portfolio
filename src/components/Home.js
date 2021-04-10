import { Link } from 'react-router-dom';
import Profile from '../images/profile.png';
const Home = () => {
	return (
		<div className='home center my-3' id='home'>
			<img src={Profile} alt='profile-img' className='profile-img z-depth-2 slide-bottom' />
			<div className='scale-up-center'>
				<p className='wish '>
					Hello 👋<span className='emoji' aria-label='Wave'></span>
				</p>
				<p className='name'>
					I'm
					<strong className='brown-text'>
						&nbsp; Visshnnu Tejaa <br />
					</strong>
					<span className='profession'>--a Web Developer</span>
				</p>
				<p className='projects-tagline'>
					Check My Projects Here <i className='material-icons down'>keyboard_arrow_down</i>
				</p>
				<a className='waves-effect waves-light btn brown mb-5' href='#projects'>
					<i className='material-icons right'>code</i>button
				</a>
			</div>
		</div>
	);
};

export default Home;
