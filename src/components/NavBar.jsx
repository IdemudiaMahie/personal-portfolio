import logo from "../assets/img/logo.PNG";

function NavBar() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <span>
                        <img src={logo} alt="logo" />
                    </span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About Me</a>
                    </li>
                    <li>
                        <a href="projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="services.html">Services</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
