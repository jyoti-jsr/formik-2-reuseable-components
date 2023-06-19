import FormikContainer from "./components/FormikContainer";
import "./styles.css";

export default function App() {
  // Formik Container Components
  // Formik Control Components - this component is going to decide
  //        which of the different form fields have to be rendered
  //        based on one perticular prop(control)
  // 1. Input
  // 2. TextArea
  // 3. Select
  // 4. Radio Button
  // 5. CheckBoxes
  // 6. Date Picker
  // Registration Form
  // Login Form
  // Course Enrollment Form
  return (
    <div className="App">
      <FormikContainer />
    </div>
  );
}
