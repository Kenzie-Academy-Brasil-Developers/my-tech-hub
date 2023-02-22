import { LinkToLogin } from "../../components/Link/styled.js";
import { Header } from "../../components/Header/styled.js";
import { Nav } from "../../components/Nav/styled.js";
import { UserContext } from "../../providers/UserContext.jsx";
import { useContext } from "react";
import { HomeSection } from "./styled.js";
import { TechContext } from "../../providers/TechContext.jsx";
import { RegisterTechForm } from "../../components/RegisterTechForm/index.jsx";
import { EditTechForm } from "../../components/EditTechs/index.jsx";

export function Home() {
  const { user } = useContext(UserContext);
  const {
    techs,
    addTechModal,
    setAddTechModal,
    editTechModal,
    setEditTechModal,
    techId,
    setTechId,
  } = useContext(TechContext);

  function logOut() {
    localStorage.clear();
  }

  function testing(key) {
    setEditTechModal(!editTechModal);
    setTechId(key);
  }

  return (
    <>
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
        {addTechModal && <RegisterTechForm />}
        {editTechModal && <EditTechForm />}
        <HomeSection>
          <div>
            <h3 id="title">Tecnologias</h3>
            <button onClick={() => setAddTechModal(!addTechModal)}>+</button>
          </div>
          {
            <ul>
              {techs.length > 0 ? (
                techs.map((element) => (
                  <li key={element.id} onClick={() => testing(element.id)}>
                    <h3>{element.title} </h3>
                    <p>{element.status} </p>
                  </li>
                ))
              ) : (
                <p id="no-tech">
                  Você ainda não têm tecnologias cadastradas! Aproveite para
                  adicioná-las :)
                </p>
              )}
            </ul>
          }
        </HomeSection>
      </Header>
    </>
  );
}
