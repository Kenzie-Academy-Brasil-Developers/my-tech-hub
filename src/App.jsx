import { AppRoutes } from "./routes/PublicRoutes/index.jsx";
import { useEffect } from "react";
import { api } from "./services/api.js";
import { UserProvider } from "./providers/UserContext.jsx";

function App() {
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get("/users");
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);

  return (
    <div>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
