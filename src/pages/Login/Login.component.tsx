import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

import { GlobalContext } from "../../contexts";
import { GlobalContextType, LoginCredModel, UserModel } from "../../models";
import { Button, FormControl } from "../../stories";
import {
  getCredentials,
  setActiveUser,
  email,
  loginPassword,
  ROUTES,
  VALIDATION_MESSAGES,
} from "../../util";

import "./Login.module.scss";

export const Login = () => {
  // Constant Variables
  const InitialCred: LoginCredModel = {
    email: "",
    password: "",
  };

  // React Router Hook
  const navigate = useNavigate();

  // Context API
  const { updateUserDetails } = useContext<GlobalContextType>(GlobalContext);

  // Page Events
  const handleSubmit = async (credential: LoginCredModel) => {
    const DbCredList: UserModel[] | null = getCredentials();

    if (DbCredList) {
      const currentUser: UserModel[] = DbCredList.filter(
        (DbCred: UserModel) =>
          DbCred.email === credential.email &&
          DbCred.password === credential.password
      );
      if (currentUser.length > 0) {
        updateUserDetails(currentUser[0].name, currentUser[0].email);

        setActiveUser(currentUser[0]);
        navigate(ROUTES.POKEMONLIST);
      }
    }
    return { password: VALIDATION_MESSAGES.INVALID_CREDENTIALS };
  };

  // Helper Methods
  const formValidate = (values: LoginCredModel) => {
    const errors = {
      email: email(values.email),
      password: loginPassword(values.password),
    };
    return errors;
  };

  return (
    <section className="authContainer">
      <main className="auth-box">
        <div className="header">Login</div>
        <Form
          onSubmit={handleSubmit}
          initialValues={InitialCred}
          validate={formValidate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email">
                {({ input, meta }) => (
                  <FormControl
                    {...input}
                    label="email"
                    type="text"
                    placeholder="enter your email"
                    error={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <FormControl
                    {...input}
                    label="password"
                    type="password"
                    placeholder="enter your password"
                    error={meta.touched && (meta.error || meta.submitError)}
                  />
                )}
              </Field>
              <Button
                type="submit"
                label="Login"
                width="stretch"
                size="small"
                primary={true}
              ></Button>
            </form>
          )}
        ></Form>

        <div className="toggle-link">
          I don't have an account, <Link to={ROUTES.REGISTER}>Register</Link>
        </div>
      </main>
    </section>
  );
};
