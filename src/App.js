import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Recommendation from './components/Recommendation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing />
      <Projects />
      <Blog />
      <Recommendation />
      <Footer />
    </div>
  );
}

export default App;
