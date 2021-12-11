import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { APP_CONSTANTS } from "../../appconsts";
import { NavLink } from "../../components/navlink";
import UsersTable from "../../components/userstable";
import { styles } from "./style";

const Home = () => {
  const [loader, setLoader] = useState(true);

  const users = useSelector((state) => state.users);
  const [filterTedUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (users.length > 0) {
      setFilteredUsers(users);
      setLoader(false);
    }
  }, [users]);

  const searchHandler = (e) => {
    const val = e.target.value;
    setSearch(val);
    if (val) {
      const filteredUsers = users.filter((user) => {
        const { title, first, last } = user.user.name;
        const name =  [title, first, last].join("")
        return name.toLowerCase().includes(val.toLowerCase());
      });
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers(users);
    }
  };

  const body = () => {
    return (
      <>
        <Box sx={styles.wrapper}>
          <TextField
            id="standard-search"
            label="Search User"
            type="search"
            variant="standard"
            value={search}
            onChange={searchHandler}
          />
          <NavLink to={APP_CONSTANTS.ROUTES.NEW_USER} sx={styles.addUser}>
            <Button color="primary" variant="contained">
              New User
            </Button>
          </NavLink>
        </Box>
        <UsersTable data={filterTedUsers} />
      </>
    );
  };

  return <>{loader ? <div>Loading...</div> : body()}</>;
};

export default Home;
