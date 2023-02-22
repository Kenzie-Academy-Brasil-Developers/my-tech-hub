import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext.jsx";
import { UserContext } from "../../providers/UserContext.jsx";
import { ModalWrapper } from "../RegisterTechForm/styled.js";
import { InputItem } from "../Input/styled.js";
import { EditBtns } from "./styled.js";

export function EditTechForm() {
  const { techs, setTechs } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const {
    editStatusTech,
    editTechModal,
    setEditTechModal,
    techId,
    setTechId,
    removeTech,
  } = useContext(TechContext);

  function submit(formData) {
    editStatusTech(formData, techId);
    setEditTechModal(false);
  }

  return (
    <ModalWrapper>
      <section>
        <div id="modal-header">
          <p>Tecnologia Detalhes</p>
          <img
            src="/close.svg"
            onClick={() => setEditTechModal(!editTechModal)}
          />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="title">Nome</label>
          <InputItem type="text" placeholder="Ex.: Typescript" disabled />

          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <EditBtns>
            <button id="save" type="submit">
              Salvar Alterações
            </button>
            <button id="delete" onClick={() => removeTech(techId)}>
              Excluir
            </button>
          </EditBtns>
        </form>
      </section>
    </ModalWrapper>
  );
}
