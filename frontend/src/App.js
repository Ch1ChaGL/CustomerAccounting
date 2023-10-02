import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='appWrapper'>
      <BrowserRouter>
        <Header />
        <div className='contentWrapper'>
          <AppRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
