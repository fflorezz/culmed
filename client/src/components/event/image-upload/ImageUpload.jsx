import React, { useEffect, useRef, useState } from "react";
import {
  StyledImagePlaceholder,
  StyledImagePreview,
} from "./ImageUpload-styles";
import Icon from "./../../shared/icon/Icon";
import { mergeRefs } from "./../../../utilities/mergeRefs";

const ImageUpload = ({ register }) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickeRef = useRef(null);

  const pickImageHandler = () => {
    filePickeRef.current.click();
  };

  const pickedHandler = ({ target: { files } }) => {
    if (files && files.length === 1) {
      const pickedFile = files[0];
      setFile(pickedFile);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }, [file, isValid]);

  return (
    <div>
      <input
        type="file"
        style={{ display: "none" }}
        accept=".jpg,.png,jpeg"
        ref={mergeRefs(filePickeRef, register)}
        name="image"
        onChange={pickedHandler}
      />
      {previewUrl ? (
        <StyledImagePreview>
          <div className="img-area">
            <img src={previewUrl} alt="preview" />
          </div>
          <div
            className="delete"
            onClick={() => {
              setPreviewUrl(null);
            }}
          >
            Eliminar
          </div>
        </StyledImagePreview>
      ) : (
        <StyledImagePlaceholder onClick={pickImageHandler}>
          <Icon type="file" />
          <p>Agregar una imagen</p>
        </StyledImagePlaceholder>
      )}
    </div>
  );
};

export default ImageUpload;
