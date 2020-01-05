import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import "normalize.css/normalize.css";
import { Formik, Form } from "./Formik";

const StyledBox = styled(Box)`
  padding: 1rem;
`;

const StyledPaper = styled(Paper)`
  min-height: calc(100vh - 2rem);
`;

const StyledFormContainer = styled.div`
  background: ${props => props.theme.palette.grey[50]};
  margin-top: ${props => props.theme.spacing(4)}px;
  padding: 2rem 5rem;
  & > .MuiBox-root > *:not(:first-child) {
    margin-top: 1rem;
  }
  & button[type="submit"] {
    display: block;
    margin: 1rem auto 0rem;
  }
`;

const StyledPreTag = styled.pre`
  font-size: 1.6rem;
`;

const App = props => {
  return (
    <StyledBox>
      <StyledPaper elevation={24} variant="outlined">
        <Grid container direction="column" alignItems="center" justify="center">
          <StyledFormContainer>
            <Box maxWidth="40%" margin="0 auto">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  passwordRepeat: ""
                }}
                onSubmit={values => {
                  console.log(values);
                }}
                validate={(values) => {
                  if(values.email !== "coolboy@gmail.com") {
                    return {
                      email: 'Wrong email'
                    };
                  }
                  return {};
                }}
              >
                {formikProps => {
                  return (
                    <>
                      <Form>
                        <Typography variant="body1">
                          Form example with formik
                        </Typography>
                        <TextField { ...formikProps.getFieldProps('firstName') } fullWidth />
                        <TextField { ...formikProps.getFieldProps('lastName') } fullWidth />
                        <TextField { ...formikProps.getFieldProps('email') } fullWidth />
                        <TextField { ...formikProps.getFieldProps('password') } type="password" fullWidth />
                        <TextField { ...formikProps.getFieldProps('passwordRepeat') } type="password" fullWidth />
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Submit
                        </Button>
                        <Typography variant="body1">
                          Formik state
                        </Typography>
                        <StyledPreTag>
                          { JSON.stringify(formikProps, null, 2) }
                        </StyledPreTag>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </Box>
          </StyledFormContainer>
        </Grid>
      </StyledPaper>
    </StyledBox>
  );
};

App.propTypes = {};

export default App;
