
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes }  from 'react-router-dom';

import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Cardpage from './components/Cardpage';
import News from './components/News';

function App() {
  return (
    
  <Router>

    <div className="App">

      <Navbar></Navbar>

    <Routes>

    {/* <Route path='/' element={<Navbar />}> */}

     <Route path="/aboutus" element={<Aboutus/>}/>

     {/* <Route path="/cardpage" element={<Cardpage title="title" discription= "hello" />}></Route> */}

     <Route path="/news" element={<News/>}/>

     
  

      
     
    {/* </Route> */}

    </Routes>

   

    </div>

    </Router>
  );
}

export default App;

