import React from "react";
import "./styles/WelcomeSection.scss";
import welcomeImage from "../assets/images/welcome-image.png";
import ActionButton from "./ActionButton";

const WelcomeSection = () => {
  return (
    <section id="home" className="welcome-section">
      <div className="welcome-section_content">
        <span className="welcome-section_welcomeTxt">
          Seja bem-vindo(a) a{" "}
          <span className="welcomeTxt-burguer">Burguer</span>Beer 👋
        </span>
        <h1>O MELHOR HAMBURGUER DO MUNDO</h1>
        <p>
          Em busca da combinação perfeita de sabores? Estamos aqui para criar um
          hambúrguer que você vai adorar. Conte-nos o que tem em mente!
        </p>
        <ActionButton className="action-button" />
      </div>

      <img src={welcomeImage} alt="Hamburguer" className="welcomeImage" />
    </section>
  );
};

export default WelcomeSection;
