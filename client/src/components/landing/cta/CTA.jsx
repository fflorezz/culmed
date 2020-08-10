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
        <Button size="lg" color="gray" text="Explorar" outline />
        <Button size="lg" color="complementary" text="Registrarse" />
      </div>
    </StyledCTA>
  );
};

export default CTA;
