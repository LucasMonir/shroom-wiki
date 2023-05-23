import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Edible from './components/pages/Edible';
import Cool from './components/pages/Cool';
import Toxic from './components/pages/Toxic';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

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
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
