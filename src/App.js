import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './pages/Index';

function App() {
	return (
		<div className="App">
			<Router>
				<Index />
			</Router>
		</div>
	);
}

export default App;
