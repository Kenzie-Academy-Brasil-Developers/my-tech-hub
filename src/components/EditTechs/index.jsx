import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext.jsx";
import { UserContext } from "../../providers/UserContext.jsx";
import { ModalWrapper } from "../RegisterTechForm/styled.js";
import { InputItem } from "../Input/styled.js";
import { EditBtns } from "./styled.js";

export function EditTechForm() {
  const { techName } = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const {
    editStatusTech,
    editTechModal,
    setEditTechModal,
    techId,
    removeTech,
    setTechName,
  } = useContext(TechContext);

  function submit(formData) {
    editStatusTech(formData, techId);
    setEditTechModal(false);
  }

  function openModal() {
    setEditTechModal(!editTechModal);
    setTechName(techName);
  }

  return (
    <ModalWrapper>
      <section>
        <div id="modal-header">
          <p>Tecnologia Detalhes</p>
          <img src="/close.svg" className="closeBtn" onClick={openModal} />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="title">Nome</label>
          <InputItem
            type="text"
            placeholder="Não editável, apenas o status"
            disabled
            bg={"#292e33fd"}
          />

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
