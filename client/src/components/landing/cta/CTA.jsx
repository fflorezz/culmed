import React from "react";
import StyledCTA from "./CTA-styles";
import Button from "./../../shared/button/Button";

const CTA = () => {
  return (
    <StyledCTA>
      <h1>Descubre los mejores eventos en tu ciudad </h1>
      <h5>
        Mantente al día con noticias de los eventos más nuevos, como conciertos,
        exposiciones y festivales.
      </h5>
      <div className="buttons">
        <Button size="md" color="gray" text="Explorar" outline link="/events" />
        <Button
          size="md"
          color="complementary"
          text="Registrarse"
          link="/signup"
        />
      </div>
    </StyledCTA>
  );
};

export default CTA;
