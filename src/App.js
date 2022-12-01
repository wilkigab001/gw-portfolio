import logo from './logo.svg';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
