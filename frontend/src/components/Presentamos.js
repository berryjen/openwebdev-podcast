import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


const Presentamos = () => {
  return (
    <div>
      <Container className="presentamos-container">
        <div className="presentamos-header">
          <div>
            <h2>NOS PRESENTAMOS</h2>
          </div>
          <div>
            <h1>SOMOS LOS ANFITRIONES</h1>
          </div>
        </div>
        <div className="presentamos-img1">
          <Image src="/images/alfredo.jpg" fluid alt="Alfredo" />
        </div>
        <h1 className="presentamos-alfredo-header">ALFREDO</h1>
        <div className="presentamos-alfredo-text">
          <p>
            Vengo del seno de una familia que emigró de Andalucía a Cataluña, en busca de
            una vida digna y huyendo del hambre de la posguerra. Tuve una infancia
            envidiable en todos los sentidos, me dieron la mejor educación escolar qué
            creían, en colegios de pago.
          </p>
          <p>
            He vivido en la calle un par de veces por culpa de mis adicciones y por eso me
            gusta compartir mi vida turbulenta para sensibilizar el impacto de last
            drogas.
          </p>
        </div>
        <div className="presentamos-img2">
          <Image src="/images/fran.jpg" fluid alt="Fran" />
        </div>
        <h1 className="presentamos-fran-header">FRAN</h1>
        <div className="presentamos-fran-text">
          <p>
            Soy nativo de Sevilla. Me considero una persona divertida y puedo decir que
            soy el relaciones públicas del Raval en Barcelona.
          </p>
          <p>
            Me gusta pasar el tiempo leyendo poesía, cantando flamenco y paseando por el
            barrio.
          </p>
        </div>
          <Button variant="dark" size="lg" className="black-button">CONOCE EL PROYECTO</Button>
      </Container>
    </div>
  );
};

export default Presentamos;