import React, { useEffect } from 'react';
const Skills = () => {
	useEffect(() => {
		const AOS = window.AOS;
		AOS.init({
			duration: 1000,
		});
	});
	return (
		<div className='container' id='skills'>
			<div className='skills cursive-1 my-3  ' data-aos='fade-in'>
				<h1 className='brown-text center'>My Skill Set</h1>
			</div>

			<div className='row center '>
				<div className='col s4 m4 l2  center my-3' data-aos='zoom-in' data-aos-offset='0'>
					<i className='devicon-html5-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3'
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i className='devicon-css3-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3'
					data-aos='zoom-in'
					data-aos-offset='150'
					data-aos-duration='100'
				>
					<i className='devicon-javascript-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3'
					data-aos='zoom-in'
					data-aos-offset='100'
					data-aos-duration='100'
				>
					<i className='devicon-bootstrap-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3'
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i className='devicon-react-original colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3'
					data-aos='zoom-in'
					data-aos-offset='200'
					data-aos-duration='100'
				>
					<i className='devicon-nodejs-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3'
					data-aos='zoom-in'
					data-aos-offset='150'
					data-aos-duration='100'
				>
					<i className='devicon-express-original colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3'
					data-aos='zoom-in'
					data-aos-offset='100'
					data-aos-duration='100'
				>
					<i className='devicon-mongodb-plain-wordmark colored devicon '></i>
				</div>
				<div
					className='col s4 l2 center my-3'
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i className='devicon-github-original colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3'
					data-aos='zoom-in'
					data-aos-offset='200'
					data-aos-duration='100'
				>
					<i className='devicon-materialui-plain colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3'
					data-aos='zoom-in'
					data-aos-offset='150'
					data-aos-duration='100'
				>
					<i className='devicon-mysql-plain colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3'
					data-aos='zoom-in'
					data-aos-offset='100'
					data-aos-duration='100'
				>
					<i className='devicon-c-plain colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3 offset-l4'
					data-aos='zoom-in'
					data-aos-offset='0'
					data-aos-duration='100'
				>
					<i class='devicon-npm-original-wordmark colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3 '
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i class='devicon-redux-original colored devicon'></i>
				</div>
			</div>
		</div>
	);
};

export default Skills;
