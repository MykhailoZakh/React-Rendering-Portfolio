import {Outlet} from "react-router-dom";
import Nav from "./components/Nav-Bar";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
