import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api.js";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  async function submitsLogin(data) {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@kenzie-hub-token", response.data.token);
      localStorage.setItem("@kenzie-hub-id", response.data.user.id);
      setUser(response.data.user);
      setTechs(response.data.user.techs);
      toast.success("Login feito!");
      navigate("/home");
    } catch (err) {
      console.error(err);
      toast.error("Dados (e-mail ou senha) incorretos");
    }
  }

  async function submitsRegister(data) {
    delete data.passwordConfirmation;
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Ops! Algo deu errado");
    }
  }

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("@kenzie-hub-token");
      if (!token) {
        setLoading(false);
        setUser(undefined);
        navigate("/");
        return;
      }
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.get("/profile");
        setUser(response.data);
        setTechs(response.data.techs);
      } catch (err) {
        console.log(err);
        localStorage.removeItem("@kenzie-hub-token");
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, [techs]);

  return (
    <UserContext.Provider
      value={{
        submitsLogin,
        submitsRegister,
        user,
        setUser,
        techs,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
