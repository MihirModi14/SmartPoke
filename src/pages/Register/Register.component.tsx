import { Link, useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

import { RegisterCredModel, UserModel } from "../../models";
import { Button, FormControl } from "../../stories";
import {
  VALIDATION_MESSAGES,
  ROUTES,
  email,
  registrationPassword,
  confirmPassword,
  name,
  getCredentials,
  setCredentials,
} from "../../util";

export const Register = () => {
  // React Router Hooks
  const navigate = useNavigate();

  // Constant Variables
  const InitialCred: RegisterCredModel = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Page Events
  const handleSubmit = async (credential: RegisterCredModel) => {
    const DbCredList: UserModel[] | null = getCredentials();

    const activeUser: UserModel = {
      email: credential.email,
      name: credential.name,
      password: credential.password,
    };

    if (DbCredList) {
      const isEmailExists: boolean = DbCredList.some(
        (DbCred: UserModel) =>
          DbCred.email === credential.email &&
          DbCred.password === credential.password
      );

      if (isEmailExists) return { email: VALIDATION_MESSAGES.EMAIL_EXISTS };
      setCredentials([...DbCredList, activeUser]);
    } else {
      setCredentials([activeUser]);
    }
    navigate(ROUTES.LOGIN);
  };

  // Helper Methods
  const formValidate = (values: RegisterCredModel) => {
    const errors = {
      name: name(values.name),
      email: email(values.email),
      password: registrationPassword(values.password),
      confirmPassword: confirmPassword(values.password, values.confirmPassword),
    };

    return errors;
  };

  return (
    <section className="authContainer">
      <main className="auth-box">
        <div className="header">Sign Up</div>
        <Form
          onSubmit={handleSubmit}
          validate={formValidate}
          initialValues={InitialCred}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="name">
                {({ input, meta }) => (
                  <FormControl
                    {...input}
                    label="name"
                    type="text"
                    placeholder="enter your name"
                    error={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <FormControl
                    {...input}
                    label="email"
                    type="text"
                    placeholder="enter your email"
                    error={meta.touched && (meta.error || meta.submitError)}
                  />
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <FormControl
                    {...input}
                    type="password"
                    label="password"
                    placeholder="enter new password"
                    error={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="confirmPassword">
                {({ input, meta }) => (
                  <FormControl
                    {...input}
                    label="confirm password"
                    type="password"
                    placeholder="confirm your password"
                    error={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Button
                type="submit"
                label="Sign Up"
                width="stretch"
                size="small"
                primary={true}
              ></Button>
            </form>
          )}
        ></Form>

        <div className="toggle-link">
          I already have an account, <Link to={ROUTES.LOGIN}>Login</Link>
        </div>
      </main>
    </section>
  );
};
