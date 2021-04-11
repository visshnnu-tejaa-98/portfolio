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
			<a
				href='#home'
				className='btn-floating btn-large waves-effect waves-light brown lighten-2 gototop pulse'
			>
				<i class='material-icons'>arrow_upward</i>
			</a>
		</div>
	);
};

export default Navbar;
