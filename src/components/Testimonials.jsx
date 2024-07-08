import React from "react";
import './styles/Testimonials.scss'
import TestimonialCard from "./TestimonialCard";
import avatar from "../assets/icons/Avatar.png"

function Testimonial(){
    return(
        <section id="testimonial">
            <h2 className="testimonial-title">Depoimentos</h2>
            <p className="testimonial-subtitle">Ouça o que nossos clientes têm a dizer</p>
            <section className="testimonialContainer">
                <TestimonialCard text="A combinação de sabores é simplesmente perfeita. Estou apaixonado!" name="João Pereira" image={avatar}/>
                <TestimonialCard text="Melhor hambúrguer que já comi!" name="Camila Santos" image={avatar}/>
                <TestimonialCard text="Ambiente acolhedor e hambúrgueres deliciosos. Recomendo a todos!" name="Fernanda Oliveira" image={avatar}/>
                <TestimonialCard text="Experiência única! Desde o atendimento até o último pedaço do hambúrguer." name="Ricardo Lima" image={avatar}/>
                <TestimonialCard text="Cada mordida é uma explosão de sabor. Incrível!" name="Ana Costa" image={avatar}/>
                <TestimonialCard text="Não troco a Burguer Beer por nada. Qualidade e sabor incomparáveis." name="Marcelo Silva" image={avatar}/>
            </section>
        </section>
    );
}
export default Testimonial;