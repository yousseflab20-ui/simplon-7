
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashbord from './components/dashbord';
import Commend from './components/commend';
import Prodacte from './components/prodacte';
import Status from './components/status'
import Layout from "./layout/layout";

function App() {
  return (
    <>
    <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashbord />} />
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="/prodacte" element={<Prodacte />} />
      <Route path="/commend" element={<Commend />} />
      <Route path="/status" element={<Status />} />
    </Route>
  </Routes>
</Router>
</>
  );
}
export default App;
