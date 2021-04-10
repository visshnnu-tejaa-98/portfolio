import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Navbar />
					<Home />
					<About />
					<Skills />
					<Projects />
					<Contact />
					<Footer />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
