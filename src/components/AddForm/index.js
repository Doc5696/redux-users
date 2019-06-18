import React from "react";
import CreateUserForm from "./styles/CreateUserForm";
import { Formik, Form, Field, withFormik } from "formik";
import validateUserName from "../../services/consts/validateUserName";

const AddForm = ({ ...props }) => {
  const handleAddUser = props.handleAddUser;
  const userName = props.user.name;
  return (
    <CreateUserForm>
      <Formik
        initialValues={{
          name: userName
        }}
        validateOnChange={false}
        onSubmit={handleAddUser}>
        {({ errors, touched, isValid }) => (
          <Form>
            <Field
              name="name"
              className={`${isValid}`}
              validate={validateUserName}
              placeholder="Type name here"
            />
            <button type="submit" disabled={!isValid}>
              Submit
            </button>
            {errors.name && touched.name && (
              <div className="error">{errors.name}</div>
            )}
          </Form>
        )}
      </Formik>
    </CreateUserForm>
  );
};

export default withFormik({})(AddForm);
