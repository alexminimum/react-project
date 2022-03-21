const Navbar = () => {
  return (
    <nav class="navigation">
      <h2>Lolo Manolo</h2>
      <ul>
        <li>
          <a href="/" className="link">
            Home
          </a>
        </li>

        <li>
          <a href="/create" className="link">
            Create
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
