import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submitting:", values);
        fetch("https://mockapi.io/register", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => console.log("Success:", data))
          .catch((err) => console.error("Error:", err))
          .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="username" placeholder="Username" />
          <ErrorMessage
            name="username"
            component="div"
            style={{ color: "red" }}
          />

          <Field name="email" placeholder="Email" />
          <ErrorMessage
            name="email"
            component="div"
            style={{ color: "red" }}
          />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
