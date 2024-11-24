import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PathName } from './config/pathname';
import { MainPage } from './pages/MainPage';
import { RecoilRoot } from 'recoil';

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route
						path={PathName.main}
						element={<MainPage />}
					/>
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
