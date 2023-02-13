import { AppRoutes } from "./routes";
import { useEffect } from "react";
import { api } from "./routes/services/api.js";

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
      <AppRoutes />
    </div>
  );
}

export default App;
