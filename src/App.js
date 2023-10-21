import "./App.css";
import HeaderNav from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Carousel } from "./components/Carousel/Carousel";
import BasicTable from "./components/ReactTable/ReactTable";
import EmptyPage from "./components/EmptyPage/Empty";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNav />
        <div className="main_part">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/cards" element={<Carousel />}></Route>
            <Route path="/table" element={<BasicTable />}></Route>
            <Route path="*" element={<EmptyPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
