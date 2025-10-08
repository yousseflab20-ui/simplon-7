import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Dashbord from './components/dashbord';
import Prodacte from './components/prodacte';


function App() {
  return (
    // <div className="App">
    //   <Dashbord/>
    //   <Prodacte/>
    // </div>
    <Router>
      <Routes>
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/prodacte" element={<Prodacte />} />
      </Routes>
    </Router>
  );
}

export default App;