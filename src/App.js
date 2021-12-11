import {  useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./pages/container";
import Login from "./pages/login";

function App() {
  const user = useSelector((state) => state.login);

  return (
    <>
      <Router>{user.isAuthenticated ? <AppContainer /> : <Login />}</Router>
    </>
  );
}

export default App;
