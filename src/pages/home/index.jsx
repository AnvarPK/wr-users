import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { APP_CONSTANTS } from "../../appconsts";
import { NavLink } from "../../components/navlink";
import UsersTable from "../../components/userstable";
import { styles } from "./style";

const Home = () => {
  const [loader, setLoader] = useState(true);

  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length > 0) {
      setLoader(false);
    }
  }, [users]);
  const body = () => {
    return (
      <>
        <Box display="flex" justifyContent="flex-end">
          <NavLink to={APP_CONSTANTS.ROUTES.NEW_USER} sx={styles.addUser}>
            <Button color="primary" variant="contained">
              New User
            </Button>
          </NavLink>
        </Box>
        <UsersTable data={users} />
      </>
    );
  };

  return <>{loader ? <div>Loading...</div> : body()}</>;
};

export default Home;
