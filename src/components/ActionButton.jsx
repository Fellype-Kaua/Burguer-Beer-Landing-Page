import React from 'react';
import './styles/actionButton.scss';
import whatsappIcon from '../assets/icons/whatsapp.svg'

const ActionButton = ({ className }) => {
  const handleClick = () => {
    window.location.href = `https://wa.me/5574999999999`;
  };

  return (
    <button className={`action-button ${className}`} onClick={handleClick}>
      <img src={whatsappIcon} alt="WhatsApp" /> FAZER PEDIDO
    </button>
  );
}

export default ActionButton;
