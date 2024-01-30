import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SinglePage from "./pages/singlePage/SinglePage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <Navbar />
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      <Register />
    </>
  );
}

export default App;
