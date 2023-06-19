import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropDownOptions = [
    { key: "select an option", value: "" },
    { key: " option 1", value: "option 1" },
    { key: " option 2", value: "option 2" },
    { key: " option 3", value: "option 3" }
  ];
  const radioOptions = [
    { key: " option 1", value: "roption 1" },
    { key: " option 2", value: "roption 2" },
    { key: " option 3", value: "roption 3" }
  ];
  const checkOptions = [
    { key: " option 1", value: "coption 1" },
    { key: " option 2", value: "coption 2" },
    { key: " option 3", value: "coption 3" }
  ];

  const initialValues = {
    email: "",
    discription: "",
    selectOption: "",
    radioOption: "",
    checkOptions: "",
    birthdate: ""
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Format").required("Email is Required"),
    discription: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkOptions: Yup.array().required("Required"),
    birthdate: Yup.date().required("Require").nullable()
  });

  const onSubmit = (values) => {
    console.log("formvalues", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl
              control="textarea"
              type="textarea"
              name="discription"
              label="Discription"
            />
            <FormikControl
              control="select"
              type="select"
              name="selectOption"
              label="Select a topic"
              options={dropDownOptions}
            />
            <FormikControl
              control="radio"
              type="radio"
              name="radioOption"
              label="Radio topic"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              type="checkbox"
              name="checkOptions"
              label="Check Options"
              options={checkOptions}
            />
            <FormikControl
              control="date"
              label="Pick a date"
              name="birthdate"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormikContainer;
