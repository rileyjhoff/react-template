import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout';
import Home from './Home/Home';
import Pokedex from './Pokedex/Pokedex';
import About from './About/About';
import Families from './Families/Families';
import FamiliesProvider from '../state/context/FamiliesContext';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Router>
      <Toaster />
      <FamiliesProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="families" element={<Families />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </FamiliesProvider>
    </Router>
  );
}
