import { FC } from "react";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/Index";

const App: FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
