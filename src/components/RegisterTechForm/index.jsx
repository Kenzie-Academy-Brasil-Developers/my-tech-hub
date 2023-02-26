import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext.jsx";
import { InputItem } from "../Input/styled.js";
import { ModalWrapper } from "./styled.js";

export function RegisterTechForm() {
  const { register, handleSubmit } = useForm();

  const { registerTech, addTechModal, setAddTechModal } =
    useContext(TechContext);

  function submit(formData) {
    registerTech(formData);
    setAddTechModal(false);
  }

  return (
    <ModalWrapper>
      <section>
        <div id="modal-header">
          <p>Cadastrar Tecnologia</p>
          <img
            className="closeBtn"
            src="/close.svg"
            onClick={() => setAddTechModal(!addTechModal)}
          />
        </div>

        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="title">Nome</label>
          <InputItem
            type="text"
            placeholder="Ex.: Typescript"
            {...register("title")}
          />
          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </section>
    </ModalWrapper>
  );
}
