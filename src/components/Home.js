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
					Check My Projects and Resume <i className='material-icons down'>keyboard_arrow_down</i>
				</p>
				<a className='waves-effect waves-light btn brown mb-5' href='#projects'>
					<i className='material-icons right'>code</i>My Projects
				</a>
				<a
					className='waves-effect waves-light btn brown mb-5 ml-3'
					href='https://drive.google.com/file/d/11zQGtpBOjesZZqFsFmAuhLLVJCj3HFaq/view?usp=sharing'
				>
					<i className='material-icons right'>code</i>Resume
				</a>
			</div>
		</div>
	);
};

export default Home;
