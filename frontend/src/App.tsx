import { FC } from "react";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/Index";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Provider>
  );
};

export default App;
