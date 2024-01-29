import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SinglePage from "./pages/singlePage/SinglePage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <>
      <Navbar />
      {/* <Write /> */}
      <Settings />
    </>
  );
}

export default App;
