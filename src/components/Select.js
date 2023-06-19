import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = (prop) => {
  const { name, label, type, options, ...rest } = prop;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as={type} id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default Select;
