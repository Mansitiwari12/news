import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import News from './Pages/News';
import Navbar from './Components/Navbar';
import { useState } from 'react';




function App() {
  const [navData, setnavData] = useState("");
  let transferData = (ans)=>{
    // console.log(ans)
    setnavData(ans) 
  }
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar transferData={transferData}/>

  <Routes>
    {/* <Route path='/' element={<Home />}/> */}
    <Route path='/' element={<News ans={navData}/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
