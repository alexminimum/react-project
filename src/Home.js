const Home = () => {
  const handleClick = (name, event) => {
    console.log("Hi " + name, event.target);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={(ev) => handleClick("Manolo", ev)}>Click me</button>
    </div>
  );
};

export default Home;
