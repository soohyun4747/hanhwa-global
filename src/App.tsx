import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PathName } from './config/pathname';
import { MainPage } from './pages/MainPage';
import { RecoilRoot } from 'recoil';
import { LoginPage } from 'pages/LoginPage';

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route
						path={PathName.main}
						element={<MainPage />}
					/>
					<Route
						path={PathName.login}
						element={<LoginPage />}
					/>
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
