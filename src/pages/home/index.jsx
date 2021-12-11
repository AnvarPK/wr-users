import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersTable from "../../components/userstable";
import { fetchUser } from "../../redux/actions/users";

const Home = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser);
    // setLoader(false);
  }, []);
  return <>{loader ? <div>Loading...</div> : <UsersTable data={[]} />}</>;
};

export default Home;
