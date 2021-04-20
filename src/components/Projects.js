import React, { useState, useEffect } from 'react';
import Card from './Card';
import projectsList from '../projects';

import AirQuality from '../images/project-images/air quality.PNG';
import Calculator from '../images/project-images/calculator.PNG';
import Calendrifia from '../images/project-images/calendrifia.PNG';
import CountriesWeatherData from '../images/project-images/countries weather data.PNG';
import Covid from '../images/project-images/covid 19.PNG';
import DailyDairy from '../images/project-images/daily dairy.PNG';
import HangmanGame from '../images/project-images/hangman game.PNG';
import Kaprekar from '../images/project-images/kaprekar number.PNG';
import MovieDB from '../images/project-images/movie db.PNG';
import NewsApp from '../images/project-images/news app.PNG';
import NewsPaper from '../images/project-images/news paper.PNG';
import ObesityBannar from '../images/project-images/obesity bannar.PNG';
import OvenStarvyPizza from '../images/project-images/oven starvy pizza.PNG';
import Pancard from '../images/project-images/pancard.PNG';
import ReactPagination from '../images/project-images/react pagination.PNG';
import SecretMessageService from '../images/project-images/secret message service.PNG';
import SpiceyHut from '../images/project-images/spicey hut.PNG';
import SunriseSunset from '../images/project-images/sunrise sunset.PNG';
import TechBlogs from '../images/project-images/tech blogs.PNG';
import TodoApp from '../images/project-images/todo app.PNG';
import OTP from '../images/project-images/otp manager.PNG';
const Projects = () => {
	const [projects, setProjects] = useState(
		projectsList.filter((project) => project.category === 'fullstack')
	);

	useEffect(() => {
		const M = window.M;
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.dropdown-trigger');
			var instances = M.Dropdown.init(elems, {});
		});
	}, []);
	useEffect(() => {
		const AOS = window.AOS;
		AOS.init({
			duration: 1000,
		});
	});
	const fullstack = () => {
		let fullstackProjects = projectsList.filter((project) => project.category === 'fullstack');
		setProjects(fullstackProjects);
	};
	const frontend = () => {
		let frontedProjects = projectsList.filter((project) => project.category === 'frontend');
		setProjects(frontedProjects);
	};
	const npm = () => {
		let npmProjects = projectsList.filter((project) => project.category === 'npm');
		setProjects(npmProjects);
	};
	const vanellajs = () => {
		let vannelajsProjects = projectsList.filter((project) => project.category === 'vennila');
		setProjects(vannelajsProjects);
	};
	const html = () => {
		let htmlProjects = projectsList.filter((project) => project.category === 'html');
		setProjects(htmlProjects);
	};
	return (
		<div className='projects py-3  brown lighten-5' id='projects' data-aos='fade-up'>
			<div className=' container'>
				<h1 className='cursive-1 center brown-text my-5 '>Projects</h1>
				{/* <p className='center filter-msg'>You can filter the projects by selecting here</p> */}

				<div className='row center'>
					<div className='col s6 l2 center offset-l1'>
						<button
							className='waves-effect brown waves-light btn mb-5'
							data-aos='fade-in'
							onClick={fullstack}
						>
							fullstack
						</button>
					</div>
					<div className='col s6 l2 center'>
						<button
							className='waves-effect brown waves-light btn mb-5'
							data-aos='fade-in'
							onClick={frontend}
						>
							frontend
						</button>
					</div>
					<div className='col s6 l2 center'>
						<button
							className='waves-effect brown waves-light btn mb-5'
							data-aos='fade-in'
							onClick={vanellajs}
						>
							vanella js
						</button>
					</div>
					<div className='col s6 l2 center'>
						<button
							className='waves-effect brown waves-light btn mb-5'
							data-aos='fade-in'
							onClick={npm}
						>
							npm packages
						</button>
					</div>
					<div className='col s6 l2 center'>
						<button
							className='waves-effect brown waves-light btn mb-5'
							data-aos='fade-in'
							onClick={html}
						>
							html-css
						</button>
					</div>
				</div>

				{projects.map((project, idx) => {
					if (project.title === 'Daily Dairy') {
						return <Card project={project} image={DailyDairy} key={idx} index={idx} />;
					} else if (project.title === 'Oven Starvy Pizza') {
						return <Card project={project} image={OvenStarvyPizza} key={idx} index={idx} />;
					} else if (project.title === 'Tech Blogs') {
						return <Card project={project} image={TechBlogs} key={idx} index={idx} />;
					} else if (project.title === 'Secret Message Service') {
						return <Card project={project} image={SecretMessageService} key={idx} index={idx} />;
					} else if (project.title === 'Todo App') {
						return <Card project={project} image={TodoApp} key={idx} index={idx} />;
					} else if (project.title === 'News App') {
						return <Card project={project} image={NewsApp} key={idx} index={idx} />;
					} else if (project.title === 'Movie Database') {
						return <Card project={project} image={MovieDB} key={idx} index={idx} />;
					} else if (project.title === 'Pagination using react') {
						return <Card project={project} image={ReactPagination} key={idx} index={idx} />;
					} else if (project.title === 'Hangman Game') {
						return <Card project={project} image={HangmanGame} key={idx} index={idx} />;
					} else if (project.title === 'Spicy Hut') {
						return <Card project={project} image={SpiceyHut} key={idx} index={idx} />;
					} else if (project.title === 'Covid-19 Tracker') {
						return <Card project={project} image={Covid} key={idx} index={idx} />;
					} else if (project.title === 'Kaprekar Number') {
						return <Card project={project} image={Kaprekar} index={idx} />;
					} else if (project.title === 'calendrifia') {
						return <Card project={project} image={Calendrifia} index={idx} />;
					} else if (project.title === 'Calculator') {
						return <Card project={project} image={Calculator} index={idx} />;
					} else if (project.title === 'Air Quality Checker') {
						return <Card project={project} image={AirQuality} index={idx} />;
					} else if (project.title === 'All Countries weather Data') {
						return <Card project={project} image={CountriesWeatherData} index={idx} />;
					} else if (project.title === 'Sunrise - Sunset') {
						return <Card project={project} image={SunriseSunset} index={idx} />;
					} else if (project.title === 'NewsPaper Template') {
						return <Card project={project} image={NewsPaper} index={idx} />;
					} else if (project.title === 'Obesity Bannar') {
						return <Card project={project} image={ObesityBannar} index={idx} />;
					} else if (project.title === 'Pancard Updation Form') {
						return <Card project={project} image={Pancard} index={idx} />;
					} else if (project.title === 'OTP Manager') {
						return <Card project={project} image={OTP} index={idx} />;
					} else {
						return ' ';
					}
				})}
			</div>
		</div>
	);
};

export default Projects;
