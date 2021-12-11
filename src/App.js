import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./pages/container";
import Login from "./pages/login";

function App() {
  const user = true;
  return (
    <>
      <Router>{user ? <AppContainer /> : <Login />}</Router>
    </>
  );
}

export default App;
