import { useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api.js";
import { UserContext } from "./UserContext.jsx";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { techs } = useContext(UserContext);

  const token = localStorage.getItem("@kenzie-hub-token");
  const [addTechModal, setAddTechModal] = useState(false);
  const [editTechModal, setEditTechModal] = useState(false);
  const [techId, setTechId] = useState("");
  const [techName, setTechName] = useState("");

  async function registerTech(formData) {
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          auth: token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function removeTech(id) {
    setEditTechModal(false);
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          auth: token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function editStatusTech(formData, techId) {
    try {
      const response = await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          auth: token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechContext.Provider
      value={{
        techs,
        registerTech,
        removeTech,
        addTechModal,
        setAddTechModal,
        editStatusTech,
        editTechModal,
        setEditTechModal,
        techId,
        setTechId,
        techName,
        setTechName,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
