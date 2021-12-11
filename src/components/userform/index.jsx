import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import BasicDatePicker from "../basicdatepicker";

const UserForm = (props) => {
  const { saveHandler } = props;
  const [dob, setDOB] = React.useState({});

  const dobChangeHandler = (val) => {
    setDOB(val);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      name: {
        title: data.get("title"),
        first: data.get("first"),
        last: data.get("last"),
      },
      username: data.get("username"),
      gender: data.get("gender"),
      email: data.get("email"),
      password: data.get("password"),
      dob: dob.getTime(),
      phone: data.get("phone"),
    };
    saveHandler(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          New User
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                name="title"
                fullWidth
                id="title"
                label="Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="first"
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="last"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="username"
                label="Username"
                name="username"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row aria-label="gender" name="gender">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <BasicDatePicker dobChange={dobChangeHandler} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="phone"
                label="Phone"
                type="number"
                id="phone"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create User
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserForm;
