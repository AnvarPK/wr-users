import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APP_CONSTANTS } from "../../appconsts";
import { NavLink } from "../../components/navlink";
import UserForm from "../../components/userform";
import { addUser } from "../../redux/actions/users";
import { styles } from "./style";

const NewUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveHandler = (data) => {
    dispatch(addUser(data));
    navigate(APP_CONSTANTS.ROUTES.HOME);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end",}}>
        <NavLink to={APP_CONSTANTS.ROUTES.HOME} sx={styles.users}>
          <Button color="primary" variant="contained">
            Users
          </Button>
        </NavLink>
      </Box>
      <UserForm saveHandler={saveHandler} />
    </>
  );
};

export default NewUser;
