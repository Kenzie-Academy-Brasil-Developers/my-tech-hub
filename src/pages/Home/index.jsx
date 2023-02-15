import { useEffect } from "react";
import { LinkToLogin } from "../../components/Link/styled.js";
import { api } from "../../routes/services/api.js";
import { Header } from "../../components/Header/styled.js";
import { Nav } from "../../components/Nav/styled.js";

export function Home({ user, setUser }) {
  function logOut() {
    localStorage.clear();
  }

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("@kenzie-hub-token");
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.get("/profile");
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, []);

  return (
    <Header>
      <Nav id="nav-home">
        <figure>
          <img src="/logo.svg" alt="Logo, em rosa: Kenzie Hub" />
        </figure>
        <LinkToLogin to="/" onClick={logOut}>
          Sair
        </LinkToLogin>
      </Nav>
      <section id="user-info">
        <h3>Olá, {user.name?.toUpperCase()}</h3>
        <p> {user.course_module?.toUpperCase()} </p>
      </section>
      <section id="intro">
        <h3>Que pena, estamos em desenvolvimento :/</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades!
        </p>
      </section>
    </Header>
  );
}
