import React from "react";
import StyledImageUpload from "./ImageUpload-styles";
import Icon from "./../../shared/icon/Icon";

const ImageUpload = () => {
  return (
    <StyledImageUpload>
      <Icon type="file" />
      <p>Agregar una imagen</p>
    </StyledImageUpload>
  );
};

export default ImageUpload;
