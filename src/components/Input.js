import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = (props) => {
  const { label, name, type, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field type={type} id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Input;
