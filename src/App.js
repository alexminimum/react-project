import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const h1 = "lolo manolo";
  const num = 10;
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>{h1}</h1>
        <p>{Math.random() * num}</p>
        <a href={link}>google</a>
        <Home />
      </div>
    </div>
  );
}

export default App;
