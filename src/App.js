import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Pages from "./Pages/shirts";
import Shirts from "./Pages/shirts";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Shirts/> */}
      <Footer/>
    </div>
  );
}

export default App;
