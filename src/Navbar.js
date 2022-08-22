const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>khov</h3>
      <div className="links">
        <a href="/">home</a>
        <a href="/">about</a>           
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#d61b28",
            textDecoration: "none", 
          }}
        >
          contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
