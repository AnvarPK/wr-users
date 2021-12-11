import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APP_CONSTANTS } from "../../appconsts";
import UserForm from "../../components/userform";
import { addUser } from "../../redux/actions/users";

const NewUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveHandler = (data) => {
    dispatch(addUser(data));
    navigate(APP_CONSTANTS.ROUTES.HOME);
  };
  return (
    <>
      <UserForm saveHandler={saveHandler} />
    </>
  );
};

export default NewUser;
