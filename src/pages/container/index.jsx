import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppBar from "../../components/appbar";
import { fetchUser } from "../../redux/actions/users";
import Routes from "../../routes";

const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <AppBar />
      <Container maxWidth="xl">
        <Box mt={2}>
          <Routes />
        </Box>
      </Container>
    </>
  );
};

export default AppContainer;
