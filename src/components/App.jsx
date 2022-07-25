import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout';
import Home from './Home/Home';

export default function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Router>;
}
