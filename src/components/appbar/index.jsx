import LogoutIcon from "@mui/icons-material/Logout";
import {
  AppBar as MuiAppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/login";

const AppBar = () => {
  const dispatch = useDispatch();
  const logoutHnadler = () => {
    dispatch(logoutUser());
  };
  return (
    <MuiAppBar position="static">
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              WR Users
            </Typography>
          </Toolbar>
          <IconButton sx={{ color: "white" }} onClick={logoutHnadler}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
