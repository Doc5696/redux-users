import React from "react";
import CreateUserForm from "./styles/CreateUserForm";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function validateUserName(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (/_/i.test(value)) {
    error = "Name of user сannot contain \"_\"";
  }
  return error;
}

const FormikAddForm = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        username: ""
      }}
      onSubmit={values => {
        console.log(values);
      }}>
      {({ errors, touched }) => (
        <Form>
          <Field name="username" validate={validateUserName} />
          {errors.username && touched.username && <div>{errors.username}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

function AddForm(props) {
  const handleNameChange = props.handleNameChange;
  const handleAddUser = props.handleAddUser;
  const nameOfNewUser = props.user.name;

  return (
    <div>
      <CreateUserForm>
        <input
          type="text"
          name="userName"
          id="name"
          value={nameOfNewUser}
          onChange={e => handleNameChange(e)}
        />
        <button type="submit" onClick={e => handleAddUser(e)}>
          Submit
        </button>
      </CreateUserForm>
      <FormikAddForm />
    </div>
  );
}

export default AddForm;
