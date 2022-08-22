import { useState } from "react";

const Home = () => {

  const [name, setName] = useState('Lolo');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('Lele')
    setAge(33)
  };



  return (
    <div className="home">
      <h1>Homepage</h1>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>

    </div>
  );
};

export default Home;
