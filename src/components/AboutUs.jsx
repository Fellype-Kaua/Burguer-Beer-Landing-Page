// src/components/AboutUs.jsx
import React from "react";
import AboutUsImg from "../assets/images/aboutUsImg.jpg";
import "./styles/AboutUs.scss";

const AboutUs = () => {
  return (
    <section id="about" className="my-5">
      <img src={AboutUsImg} alt="Foto da Hamburgueria" id="aboutUsImg" />
      <section className="aboutUs-container">
        <h2>SOBRE NÓS</h2>
        <p className="menu__subtitle">Entenda quem somos e por que existimos</p>
        <div className="aboutUs_content">
          <p>
            Na Burguer Beer, criamos hambúrgueres perfeitos com ingredientes de
            alta qualidade e receitas inovadoras. Cada mordida oferece uma
            explosão de sabores, em um ambiente acolhedor com atendimento
            impecável.
          </p>

          <p>
            Somos mais do que uma hamburgueria; somos o ponto de encontro para
            amigos e familiares. Nosso compromisso é com a qualidade, inovação e
            satisfação.
          </p>

          <p>
            Venha nos visitar e descubra por que a Burguer Beer é a escolha dos
            amantes de hambúrgueres.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
