// src/components/Menu.jsx
import React from 'react';
import MenuCard from './MenuCard';
import './styles/menu.scss'
import cardImg1 from '../assets/images/HamburguerCard.webp'
import cardImg2 from '../assets/images/Gourmet.jpg'
import cardImg3 from '../assets/images/BatataFrita.jpg'



const menuItems = [
  {
    title: 'Hamburguer Simples',
    description: 'Um clássico irresistível com carne suculenta, queijo cheddar derretido, alface crocante, tomate fresco e molho especial, tudo em um pão artesanal',
    image: cardImg1
  },
  {
    title: 'Hamburguer Gourmet',
    description: 'Uma explosão de sabores com carne Angus, queijo brie cremoso, rúcula fresca, cebola caramelizada e um toque de molho de trufas, servidos em pão brioche.',
    image: cardImg2
  },
  {
    title: 'Batata Frita',
    description: 'Batatas crocantes temperadas com sal grosso e ervas finas, acompanhadas de um delicioso molho aioli caseiro.',
    image: cardImg3
  }
];

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <h2>Nosso Cardápio</h2>
      <p className='menu__subtitle'>Cada hambúrguer é uma história de sabor única. Qual é a sua versão dos sonhos?</p>
      <div className="menu__cards">
        {menuItems.map((item, index) => (
          <MenuCard 
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
