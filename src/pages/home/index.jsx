import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersTable from "../../components/userstable";
import { fetchUser } from "../../redux/actions/users";

const Home = () => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser());
    // setLoader(false);
  }, []);

  useEffect(() => {
      console.log(users);
  }, [users]);

  return <>{loader ? <div>Loading...</div> : <UsersTable data={users} />}</>;
};

export default Home;
