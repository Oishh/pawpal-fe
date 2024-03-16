import {React} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './components/Main';
import NotFound from './components/pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pawpal" element={<Main />} />
        <Route path="/pawpal/home" element={<Main />} />
        <Route path="/pawpal/donate" element={<Main />} />
        <Route path="/pawpal/adopt" element={<Main />} />
        <Route path="/pawpal/about" element={<Main />} />
        <Route path="/pawpal/missing" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
