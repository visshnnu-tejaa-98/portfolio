import React, { useEffect } from 'react';
const Footer = () => {
	useEffect(() => {
		const AOS = window.AOS;
		AOS.init({
			duration: 1000,
		});
	});
	return (
		<div className='footer'>
			<footer className='page-footer brown '>
				<div className='container' data-aos='fade-up'>
					<div className='row'>
						<div className='col l6 s12'>
							<h5 className='white-text bold'>Visshnnu Tejaa</h5>
							<p className='grey-text text-lighten-4'>
								Seeking a job as to gain the more technical knowledge and give my best to the
								organization from my knowledge. Looking forwarding to gain an opportunity that will
								allow me to learn and master the latest technologies and eager to learn new
								technologies and deliver the goals in time.
							</p>
						</div>
						<div className='col l4 offset-l2 s12'>
							<h5 className='white-text'>You can catch me up in social media handles </h5>
							<ul>
								<li>
									<a
										className='grey-text text-lighten-3'
										href='https://github.com/visshnnu-tejaa-98'
									>
										Github
									</a>
								</li>
								<li>
									<a className='grey-text text-lighten-3' href='https://twitter.com/Venkattech2'>
										Twitter
									</a>
								</li>
								<li>
									<a
										className='grey-text text-lighten-3'
										href='https://www.instagram.com/chilamakurvishnu/'
									>
										Instagram
									</a>
								</li>
								<li>
									<a
										className='grey-text text-lighten-3'
										href='https://www.facebook.com/chilamakur.vishnu'
									>
										Facebook
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='footer-copyright brown darken-3'>
					<div className='container center'>
						Designed by Visshnnu Tejaa © {new Date().getFullYear()} All Rights Reserved
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
