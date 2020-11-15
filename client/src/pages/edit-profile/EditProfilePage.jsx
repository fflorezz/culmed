import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import StyledEditProfile from "./EditProfile-styles";
import Button from "./../../components/shared/button/Button";

const EditProfilePage = () => {
  const { register, handleSubmit, errors } = useForm();
  const session = useSelector(state => state.session);

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <StyledEditProfile>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="file"
          style={{ display: "none" }}
          accept=".jpg,.png,jpeg"
          // ref={mergeRefs(filePickeRef, register)}
          name="image"
          // onChange={pickedHandler}
        />
        <label htmlFor="name">Nombre</label>
        <input
          defaultValue={session.userName}
          type="text"
          name="userName"
          ref={register({ required: true, minLength: 5 })}
          className={errors.name && "error"}
        />
        {errors.name && (
          <p className="alert-text">
            Es necesario un nombre de mínimo 5 caracteres
          </p>
        )}

        <label htmlFor="password">Bio</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="3"
          ref={register({ required: true, minLength: 15, maxLength: 300 })}
          className={errors.description && "error"}
        ></textarea>
        {errors.description && (
          <p className="alert-text">
            Es necesaria una descripción entre 15 y 120 caracteres
          </p>
        )}
        <Button size="sm" text="Guardar" color="complementary" />
      </form>
    </StyledEditProfile>
  );
};

export default EditProfilePage;
