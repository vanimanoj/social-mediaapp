import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addpost from './component/Addpost';
import Searchpost from './component/Searchpost';
import Viewallpost from './component/Viewallpost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    <div>
     <BrowserRouter>
     <Routes>
<Route path="/" exact element={<Addpost/>}/>
<Route path="/search" exact element={<Searchpost/>}/>
<Route path="/view" exact element={<Viewallpost/>}/>
     </Routes> 
     </BrowserRouter>


    </div>
  );
}

export default App;
