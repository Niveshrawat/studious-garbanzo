import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Mid from './components/Mid';
import About from './components/About';
import { Work } from './components/Work';
import Projects from './components/Projects';
import Other from './components/Other';
import Hire from './components/Hire';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mid/>
      <About/>
      <Work/>
      <Projects/>
      <Other/>
      <Hire/>
    </div>
  );
}

export default App;
