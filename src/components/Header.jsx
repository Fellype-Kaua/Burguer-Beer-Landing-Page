// src/components/Header.jsx
import React, {useState} from "react";
import ".//styles/Header.scss";


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    const offset = 60; // Altura do header ou o valor que você quiser

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const whatsappClick = () => {
    window.location.href = `https://wa.me/5574999999999`;
  };


  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <nav className="header">
      <span className="header_logo">
        Burguer<span className="header_logo-Beer">Beer</span>
      </span>
      
      <div className={`header_nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="header_nav-list" >
          <li className="header_nav-item">
            <a
              className="header_nav-link"
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
            >
              Início
            </a>
          </li>
          <li className="header_nav-item">
            <a
              className="header_nav-link"
              href="#menu"
              onClick={(e) => handleNavClick(e, "menu")}
            >
              Cardápio
            </a>
          </li>
          <li className="header_nav-item">
            <a
              className="header_nav-link"
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
            >
              Sobre
            </a>
          </li>
          <li className="header_nav-item">
            <a
              className="header_nav-link"
              href="#testimonial"
              onClick={(e) => handleNavClick(e, "testimonial")}
            >
              Depoimentos
            </a>
          </li>
        </ul>

        <button className="header_btn" onClick={whatsappClick}>
          FAZER PEDIDO
        </button>
      </div>

      <button
        id="header_btn-Mobile"
        className={isOpen ? "open" : ""}
        onClick={toggleMenu}
      ></button>
      
    </nav>
  );
};

export default Header;
