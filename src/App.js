import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import AllRoutes from "./Routers/AllRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
