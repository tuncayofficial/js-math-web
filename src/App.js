// Pages
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";

// Modules
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
} from 'react-router-dom';

function App() {
   return(
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element = { <Main /> } />
      <Route exact path="/about" element = { <About /> } />
      </Routes>
    </Router>
   )
}

export default App;
