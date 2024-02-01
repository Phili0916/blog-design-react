import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SinglePage from "./pages/singlePage/SinglePage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path='/' 
          element={<Home/>}
        />
        <Route 
          path='/login' 
          element={user ? (<Home />) : (<Login/>)}
        />  
        <Route 
          path='/register' 
          element={user ? (<Home/>) : (<Register/>)}
        />
        <Route 
          path='/settings' 
          element={user ? (<Settings/>) : (<Register/>)}
        />  
        <Route 
          path='/write' 
          element={user ? (<Write/>) : (<Register/>)}
        />   
        <Route 
          path='/post/:postId' 
          element={<SinglePage/>}
        /> 
      </Routes>
    </Router>
  );
}

export default App;
