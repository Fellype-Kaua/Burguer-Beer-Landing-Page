import React from 'react';
import './styles/Footer.scss';
import facebookIcon from '../assets/icons/facebookIcon.svg';
import instagramIcon from '../assets/icons/instagramIcon.svg';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <h2 className="footer__title">BurguerBeer</h2>
        <p className="footer__text">©2022 - BurguerBeer.</p>
        <p className="footer__text">Todos os direitos reservados.</p>
        <p className="footer__credits">Criado por: <a href="https://www.linkedin.com/in/fellype-kau%C3%A3-64a135226/">Fellype Kauã</a></p>
      </div>
      <div className="footer__social-media">
        <a className="footer__social-link" href="#"><img className="footer__social-icon" src={instagramIcon} alt="Instagram Icon" /></a>
        <a className="footer__social-link" href="#"><img className="footer__social-icon" src={facebookIcon} alt="Facebook Icon" /></a>
      </div>
    </footer>
  );
}

export default Footer;
