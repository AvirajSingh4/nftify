import './App.css'
import Home from './components/Home'
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='done'>
      <Home/>
      <Home1/>
      <Home2/>
      <Home3/>
    </div>
    </>
  );
}

export default App;
