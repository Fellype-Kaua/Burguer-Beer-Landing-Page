import React from 'react';
import './styles/MenuCard.scss'

const MenuCard = ({ title, description, image }) => {
  return (
    <div className="menu-card">
      <img src={image} alt={title} className="menu-card__image" />
      <div className="menu-card__content">
        <h3 className="menu-card__title">{title}</h3>
        <p className="menu-card__description">{description}</p>
      </div>
    </div>
  );
}

export default MenuCard;
