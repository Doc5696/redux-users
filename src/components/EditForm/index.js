import React from "react";
import EditUserForm from "./styles/EditUserForm";
import { Formik, Form, Field, withFormik } from "formik";
import validateUserName from "../../services/consts/validateUserName";

const EditForm = ({ ...props }) => {
  const handleChangeUser = props.handleChangeUser;
  let currentName = props.currentName;
  let userId = props.userId;
  let toggleActive = props.toggleActive;
  return (
    <EditUserForm>
      <Formik
        initialValues={{
          newUserName: currentName,
          idOfUser: userId
        }}
        onSubmit={handleChangeUser}>
        {({ errors, touched, isValid, handleReset }) => (
          <Form>
            <Field
              name="newUserName"
              className={`${isValid}`}
              validate={validateUserName}
            />
            <span>
              <button type="submit" disabled={!isValid}>
                Save
              </button>
              <button
                type="reset"
                onClick={e => {
                  handleReset(e);
                  toggleActive();
                }}>
                Cancel
              </button>
            </span>

            {errors.newUserName && touched.newUserName && (
              <div className="error">{errors.newUserName}</div>
            )}
          </Form>
        )}
      </Formik>
    </EditUserForm>
  );
};

export default withFormik({})(EditForm);
