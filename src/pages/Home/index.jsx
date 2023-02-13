import { LinkToLogin } from "../../globalStyle.js";
import { Header } from "./styled.js";

export function Home({ user }) {
  function logOut() {
    localStorage.clear();
  }

  return (
    <Header>
      <nav id="nav-home">
        <figure>
          <img src="/logo.svg" alt="Logo, em rosa: Kenzie Hub" />
        </figure>
        <LinkToLogin to="/" onClick={logOut}>
          Sair
        </LinkToLogin>
      </nav>
      <section id="user-info">
        <h3>Olá, {user.name.toUpperCase()}</h3>
        <p> {user.course_module.toUpperCase()} </p>
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
