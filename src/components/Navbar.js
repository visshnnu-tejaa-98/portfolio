import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	return (
		<div className='navbar' is='navbar'>
			<nav className='brown z-depth-0'>
				<div className='nav-wrapper container '>
					<a href='#!' className='brand-logo bold'>
						My Portfolio
					</a>
					<Link to='#' data-target='mobile-demo' className='sidenav-trigger'>
						<i className='material-icons '>menu</i>
					</Link>
					<ul className='right hide-on-med-and-down'>
						<li>
							<a href='#navbar'>Home</a>
						</li>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#skills'>Skills</a>
						</li>
						<li>
							<a href='#projects'>Projects</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/'>About</Link>
				</li>
				<li>
					<Link to='/'>Skills</Link>
				</li>
				<li>
					<Link to='/'>Projects</Link>
				</li>
				<li>
					<Link to='/'>Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
