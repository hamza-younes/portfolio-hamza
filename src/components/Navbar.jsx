import logo from "../assets/hamzalogo.png"
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-between gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/hamza-younes-bb0b71272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/hamza-younes" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/hamza_yns/profilecard/?igsh=dHkzd2FxNWdzdDNl" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/hamza.younes.313?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
    </div>
  </nav>
};

export default Navbar;