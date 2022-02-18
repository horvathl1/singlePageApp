import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import {InstrumentListPage} from "./InstrumentListPage";
import { InstrumentSinglePage } from './InstrumentSinglePage';
import { InstrumentCreatePage } from './InstrumentCreatePage';

function App() {
  return (
  <BrowserRouter>
   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
     <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav">
         <li className="nav-item">
           <Link to="/">
              <span className="nav-link">Hangszerek</span>
           </Link>
         </li>
         <li className="nav-item">
          <Link to="/uj-hangszer/" >
              <span className="nav-link">Új hangszer</span>
          </Link>
         </li>
       </ul>
     </div>
   </nav>
   <Routes>
     
     <Route path="/" element={<InstrumentListPage/>} />
     <Route path="/hangszer/:id" element={<InstrumentSinglePage/>}/>
     <Route path="/uj-hangszer" element={<InstrumentCreatePage/>}/>

     <Route render={() => <Navigate to="/"/>} />   
     
   </Routes>
   </BrowserRouter>
  );
}

export default App;
