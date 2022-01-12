import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <div style={{ height: "60px" }}></div>
      <Body />
      <div style={{ height: "60px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
