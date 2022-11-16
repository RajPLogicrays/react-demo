import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Lock from "@material-ui/icons/Lock";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from 'axios';

function Login() {

  const LoginForm = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });

  const [error, setError] = useState(null);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="login_form" >
            <h1>Login</h1>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginForm}
              onSubmit={(values) => {
                console.log(values);

                setError(null);
                axios.post("http://143.110.254.46:8999/user/login/", values)
                .then((data)=> {
                  if (data) {
                    // alert(JSON.stringify(data));
                    alert("Welcome Dofa! :)");
                    localStorage.setItem('data', JSON.stringify(data));
                    window.location.href = "/";
                  }
                })
                .catch((err) => {
                  if (err && err.response){
                    setError(err.response.data.message);
                    localStorage.removeItem('data');
                  }
                })
              }}  
              
            >
              {({ errors, touched, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div style={{color: "red"}}>{error ? error : ""}</div>
                  <MailOutlineIcon />
                  <Field placeholder="Email" name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div style={{color: "red"}} >{errors.email}</div>
                  ) : null}

                  <br />
                  <br />
                  <Lock />
                  <Field placeholder="Password" name="password" type="password" />
                  {errors.password && touched.password ? (
                    <div style={{color: "red"}}>{errors.password}</div>
                  ) : null}
                  <br />
                  <br />
                  <Button color="primary" variant="outlined" type="submit">
                    Log in
                  </Button>
                </Form>
              )}
            </Formik>
            <div>
              <h4>
                <Link to="/registration">Create an Account</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
