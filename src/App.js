import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Hidden from "./components/HiddenData";
import List from "./components/List";
import Dropdown from "./components/DropdownSelect"
import GantiNavbar from "./components/GantiNavbar";
import Navbar from "./components/Navbar";
import WithRedux from "./components/WithRedux";
// import Search from "./components/searchAutoComplete";
import Video from './components/Video'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/hidden" element={<Hidden />}/>
        <Route path="/dropdown" element={<Dropdown />}/>
        <Route path="/gantinavbar" element={<GantiNavbar />}/>
        <Route path="/navbar" element={<Navbar />}/>
        <Route path="/withredux" element={<WithRedux />}/>
        {/* <Route path="/search" element={<Search />}/> */}
        <Route path="/video" element={<Video />}/>
    </Routes>
  </BrowserRouter>
  );
}


export default App;