import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './components/layout/css/global.css'
import Container from './components/layout/js/Container';
import NavBar from './components/layout/js/NavBar';
import Footer from './components/layout/js/Footer';
import Home from './components/pages/js/Home';
import Edible from './components/pages/js/Edible';
import Cool from './components/pages/js/Cool';
import Toxic from './components/pages/js/Toxic';
import Mushroom from './components/pages/js/Mushroom';
import Login from './components/pages/js/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edible' element={<Edible />} />
          <Route path='/cool' element={<Cool />} />
          <Route path='/toxic' element={<Toxic />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mushroom' element={<Mushroom />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
