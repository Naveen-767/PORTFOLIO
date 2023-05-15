// import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


// import './App.css';

// import Navbar from './Portfolio/Assets/Navbar/Navbar';
// import Home from './Portfolio/Assets/Home/Home';
// import About from './Portfolio/Assets/About/About';
// import Services from './Portfolio/Assets/Services/Services';
// import Portfolio from './Portfolio/Assets/Portfolio in/Portfolio in';
// import Contact from './Portfolio/Assets/Contact/Contact';
import Flipcard from './new/flipcard';


function App() {
  return (
    <div className="App">
    
{/* <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'element={  <Home/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/Services'element={<Services/>}/>
        <Route path='/Portfolio'element={<Portfolio />}/>
        <Route path='/Contact'element={<Contact/>}/>
        </Routes>
        </BrowserRouter> */}

        <Flipcard/>
    </div>
  );
}

export default App;
