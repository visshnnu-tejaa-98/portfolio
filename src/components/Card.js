import React, { useEffect } from 'react';
const Card = ({ project, image, index }) => {
	useEffect(() => {
		const AOS = window.AOS;
		AOS.init({
			duration: 1000,
		});
	});
	return (
		<div className='' data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} key={project._id}>
			<div className={index % 2 === 0 ? 'row' : 'row  ml-5'}>
				<div
					className={index % 2 === 0 ? ' col s12 m12 l6 center' : ' col s12 m12 l6 center push-l6 '}
				>
					<img src={image} className='image mb-3' alt='' />
				</div>
				<div
					className={
						index % 2 === 0 ? ' col s12 m12 l6  brown-text' : ' col s12 m12 l6 brown-text pull-l6'
					}
				>
					<h4 className='project-title  bold'>{project.title}</h4>
					<p className='project-description '>{project.descripyion}</p>
					<p>
						<strong>Stack Used:</strong>
						{project.stack.map((stack) => {
							if (stack === 'html') {
								return <i className='devicon-html5-plain colored project-devicon '></i>;
							} else if (stack === 'css') {
								return <i className='devicon-css3-plain colored project-devicon'></i>;
							} else if (stack === 'javascript') {
								return <i className='devicon-javascript-plain colored project-devicon'></i>;
							} else if (stack === 'bootstrap') {
								return <i className='devicon-bootstrap-plain colored project-devicon'></i>;
							} else if (stack === 'react') {
								return <i className='devicon-react-original colored project-devicon'></i>;
							} else if (stack === 'node') {
								return <i className='devicon-nodejs-plain colored project-devicon'></i>;
							} else if (stack === 'express') {
								return <i className='devicon-express-original colored project-devicon'></i>;
							} else if (stack === 'mongodb') {
								return <i className='devicon-mongodb-plain colored project-devicon'></i>;
							} else if (stack === 'npm') {
								return <i class='devicon-npm-original-wordmark colored project-devicon'></i>;
							} else {
								return 0;
							}
						})}
					</p>

					<div className='center'>
						<a href={project.frontendURL} className='waves-effect waves-light btn m-3 brown'>
							<i className='material-icons left'>code</i>
							{project.category === 'npm' ? 'Code' : 'Frontend'}
						</a>

						<a
							href={project.backendURL}
							className={
								project.backendURL
									? 'waves-effect waves-light btn m-3 brown'
									: 'waves-effect waves-light btn m-3 brown hide'
							}
						>
							<i className='material-icons left'>code </i>
							{project.category === 'npm' ? 'Demo' : 'Backend'}
						</a>
						<a href={project.hostedURL} className='waves-effect waves-light btn m-3 brown'>
							<i className='material-icons left'>live_tv </i>Preview
						</a>
					</div>
				</div>
			</div>
			<br />
			<hr data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} />
			<br />
		</div>
	);
};

export default Card;
