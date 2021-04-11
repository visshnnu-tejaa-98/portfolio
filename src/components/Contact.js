import './styles/Contact.css';
import React, { useEffect } from 'react';

const Contact = () => {
	useEffect(() => {
		const AOS = window.AOS;
		AOS.init({
			duration: 1000,
		});
	});
	return (
		<div className='contact container mb-5' id='contact'>
			<h1 className='cursive-1 center brown-text ' data-aos='fade-in'>
				Contact
			</h1>
			<div className='row mt-5'>
				<div className='col s12 m6 l6' data-aos='slide-left'>
					<div className='col s12 l6 center'>
						<div className='mapouter'>
							<div className='gmap_canvas'>
								<iframe
									title='map'
									className='gmap_iframe'
									frameBorder='0'
									scrolling='no'
									marginHeight='0'
									marginWidth='0'
									src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=banglore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<div className='col s12 m6 l6 ' data-aos='slide-right'>
					<form action='https://formspree.io/f/xbjqjqqg' method='POST'>
						<div className='input-field'>
							<input
								id='name'
								type='text'
								name='name'
								className='validate brown-text input-color'
								required
							/>
							<label htmlFor='name ' className='brown-text'>
								Name
							</label>
						</div>
						<div className='input-field'>
							<input
								id='email'
								type='text'
								name='email'
								className='validate brown-text input-color'
								required
							/>
							<label htmlFor='email ' className='brown-text'>
								Email
							</label>
						</div>
						<div className='input-field '>
							<textarea
								id='message'
								name='message'
								className='materialize-textarea brown-text input-color'
								required
							></textarea>
							<label htmlFor='message' className='brown-text'>
								Your Message
							</label>
						</div>
						<button type='submit' className='waves-effect waves-light btn brown'>
							<i className='material-icons right'>mail</i>Email me
						</button>
					</form>
				</div>
			</div>
			<div className='center mt-3 contact-details'>
				<div>
					<i class='material-icons'>phone</i>
					<span>7619352192</span>
				</div>
				<div>
					<i class='material-icons'>email</i>
					<span>chilamakurvishnu@gmail.com</span>
				</div>
			</div>
		</div>
	);
};

export default Contact;
