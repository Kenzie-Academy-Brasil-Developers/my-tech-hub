import { UserContext } from "../../providers/UserContext.jsx";
import { useContext } from "react";
import { HomeSection, Header, Nav } from "./styled.js";
import { TechContext } from "../../providers/TechContext.jsx";
import { RegisterTechForm } from "../../components/RegisterTechForm/index.jsx";
import { EditTechForm } from "../../components/EditTechs/index.jsx";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    techs,
    addTechModal,
    setAddTechModal,
    editTechModal,
    setEditTechModal,
    techId,
    setTechId,
    setTechName,
  } = useContext(TechContext);

  function logOut() {
    setUser(null);
    localStorage.clear();
    navigate("/");
  }

  function testing(key, title) {
    setEditTechModal(!editTechModal);
    setTechId(key);
    setTechName(title);
  }

  return (
    <>
      <Header>
        <Nav id="nav-home">
          <figure>
            <img src="/logo.svg" alt="Logo, em rosa: Kenzie Hub" />
          </figure>
          <button id="logOut" onClick={logOut}>
            Sair
          </button>
        </Nav>
        <section id="user-info">
          <h3>Olá, {user.name.toUpperCase()}</h3>
          <p> {user.course_module.toUpperCase()} </p>
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
                  <li
                    key={element.id}
                    onClick={() => testing(element.id, element.title)}
                  >
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
