import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Textarea(props) {
  const { label, name, type, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as={type} id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Textarea;
