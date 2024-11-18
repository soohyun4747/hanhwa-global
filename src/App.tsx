import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PathName } from './config/pathname';
import { SettingPage } from './pages/SettingPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={PathName.setting}
					element={<SettingPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
