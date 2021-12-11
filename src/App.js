import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./pages/container";
import Login from "./pages/login";
import configStore from "./redux/confStore";

const store = configStore();

function App() {
  const user = false;
  return (
    <>
      <Router>
        <Provider store={store}>{user ? <AppContainer /> : <Login />}</Provider>
      </Router>
    </>
  );
}

export default App;
