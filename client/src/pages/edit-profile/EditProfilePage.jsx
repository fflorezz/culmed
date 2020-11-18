import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import StyledEditProfile from "./EditProfile-styles";
import Button from "./../../components/shared/button/Button";
import { mergeRefs } from "./../../utilities/mergeRefs";
import Avatar from "./../../components/user/avatar/Avatar";
import { clearStatus, editProfile } from "../../redux/slices/session";

const EditProfilePage = () => {
  const { register, handleSubmit, errors } = useForm();
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickeRef = useRef(null);

  const pickImageHandler = e => {
    e.preventDefault();
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

  function onSubmit(data) {
    if (session.loading) {
      return;
    }
    const formData = new FormData();
    formData.append("userName", data.userName);
    formData.append("bio", data.bio);
    formData.append("avatarImg", data.avatarImg[0]);
    dispatch(editProfile(formData));
  }

  useEffect(() => {
    if (session.status === "OK") {
      return () => {
        dispatch(clearStatus());
      };
    }
    // eslint-disable-next-line
  }, [session.status]);

  return (
    <StyledEditProfile>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar Perfíl</h2>
        <div className="imgPicker">
          <input
            type="file"
            style={{ display: "none" }}
            accept=".jpg,.png,jpeg"
            ref={mergeRefs(filePickeRef, register)}
            name="avatarImg"
            onChange={pickedHandler}
          />
          <Avatar src={previewUrl || session.avatarImg} size="lg" />
          <Button
            color="gray"
            size="sm"
            text="Cambiar"
            handleClick={e => pickImageHandler(e)}
          />
        </div>
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
          name="bio"
          id="bio"
          cols="30"
          rows="3"
          ref={register({ maxLength: 300 })}
          className={errors.description && "error"}
        ></textarea>
        {errors.description && (
          <p className="alert-text">
            Tu Bio no puede exceder los 300 caracteres
          </p>
        )}
        <Button
          size="sm"
          text="Guardar"
          color={session.loading ? "gray" : "complementary"}
        />
      </form>
    </StyledEditProfile>
  );
};

export default EditProfilePage;
