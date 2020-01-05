import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import "normalize.css/normalize.css";

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
    margin: 0 auto;
  }
`;

const App = props => {
  return (
    <StyledBox>
      <StyledPaper elevation={24} variant="outlined">
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
        <StyledFormContainer>
          <Box maxWidth="40%" margin="0 auto">
            <Typography variant="body1">Form example with formik</Typography>
            <TextField label="firstName" fullWidth />
            <TextField label="lastName" fullWidth />
            <TextField label="email" fullWidth />
            <TextField label="password" fullWidth />
            <TextField label="passwordRepeat" fullWidth />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Box>
        </StyledFormContainer>
        </Grid>
      </StyledPaper>
    </StyledBox>
  );
};

App.propTypes = {};

export default App;
