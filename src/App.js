import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./pages/container";
import Login from "./pages/login";
import configStore from './redux/confStore';

const store = configStore();

function App() {
  const user = true;
  return (
    <>
      <Router>
        {user ? (
          <>
            <Provider store={store}>
              <AppContainer />
            </Provider>
          </>
        ) : (
          <Login />
        )}
      </Router>
    </>
  );
}

export default App;
