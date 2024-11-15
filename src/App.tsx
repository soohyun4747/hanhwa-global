import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SettingPage } from './pages/SettingPage';
import { PathName } from './config/pathname';

function App() {
  return (
    <Routes>
      <Route path={PathName.setting} element={<SettingPage/>}/>
    </Routes>
  );
}

export default App;
