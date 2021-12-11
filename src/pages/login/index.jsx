import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/login";
import { userServices } from "../../services/users";
import { styles } from "./style";

const Login = () => {
  const [useName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const usernameChange = (e) => {
    setUserName(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (useName && password) {
      const user = await userServices.authenticateUser(useName, password);
      console.log(user);
      dispatch(loginUser(user.isAuthenticated));
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={styles.wrapper}>
        <Avatar sx={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="useername"
            label="username"
            name="username"
            autoFocus
            value={useName}
            onChange={usernameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={passwordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
