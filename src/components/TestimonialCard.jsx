import React from "react";
import "./styles/TestimonialCard.scss"

const TestimonialCard = ({ name, text, image }) => {

    return(
        <section id="testimonial-card">
            <p className="testimonial-card__text">"{text}"</p>

            <div className="testimonial-card__profile">
                <img src={image} alt="Foto do Usuário" className="testimonial-card_profileImg"/>
                <span className="testimonial-card__name">{name}</span> 
            </div>

        </section>
    );
}
export default TestimonialCard;
