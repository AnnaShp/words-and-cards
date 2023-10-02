import "./App.css";
import Header from "./components/Header/Header";
import { Carousel } from "./components/Carousel/Carousel";
import BasicTable from "./components/ReactTable/ReactTable";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BasicTable />
    </div>
  );
}

export default App;
