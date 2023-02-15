import { Container } from "../../globalStyle.js";
import { LinkToLogin } from "../../components/Link/styled.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../routes/services/api.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Nav } from "../../components/Nav/styled.js";
import { Input } from "../../components/Input/index.jsx";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Deve ser um e-mail")
      .required("E-mail é obrigatório"),

    password: yup
      .string()
      .required("Senha é obrigatória")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[a-z]/, "Deve conter ao menos 1 letra mínuscula")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "Deve conter de 8 a 18 caracteres"),

    passwordConfirmation: yup
      .string()
      .required("Confirmação de senha é obrigatória")
      .oneOf([yup.ref("password")], "As senhas devem ser idênticas"),

    bio: yup.string().required("Você deve inserir uma bio"),
    contact: yup
      .string()
      .typeError("Deve ser numérico")
      .required("Contato é obrigatório"),
  })
  .required();

export function Register({ toast }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
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
  return (
    <main>
      <Nav>
        <figure>
          <img src="/logo.svg" alt="Logo, em rosa: Kenzie Hub" />
        </figure>
        <LinkToLogin to="/">Voltar</LinkToLogin>
      </Nav>

      <Container>
        <section id="register-section">
          <div>
            <h3>Crie sua conta</h3>
            <span id="description-register">Rápido e grátis, vamos nessa!</span>
          </div>

          <form id="register-form" onSubmit={handleSubmit(submitsRegister)}>
            <Input
              label="Nome"
              id="name"
              type="text"
              error={errors.name?.message}
              register={register}
              placeholder="Digite aqui seu nome"
            />

            <Input
              label="E-mail"
              id="email"
              type="text"
              error={errors.email?.message}
              register={register}
              placeholder="Digite aqui seu e-mail"
            />

            <Input
              label="Senha"
              id="password"
              type="password"
              error={errors.password?.message}
              register={register}
              placeholder="Digite aqui sua senha"
            />

            <Input
              label="Confirmar senha"
              id="passwordConfirmation"
              type="password"
              error={errors.passwordConfirmation?.message}
              register={register}
              placeholder="Digite novamente sua senha"
            />

            <Input
              label="Bio"
              id="bio"
              type="text"
              error={errors.bio?.message}
              register={register}
              placeholder="Fale sobre você"
            />

            <Input
              label="Contato"
              id="contact"
              type="text"
              error={errors.contact?.message}
              register={register}
              placeholder="Opção de contato"
            />

            <label htmlFor="course_module">Tipo de valor</label>
            <select name="course_module" {...register("course_module")}>
              <option value="m1">M1</option>
              <option value="m2">M2</option>
              <option value="m3">M3</option>
              <option value="m4">M4</option>
              <option value="m5">M5</option>
              <option value="m6">M6</option>
            </select>
            <button id="submit" type="submit">
              Cadastrar
            </button>
          </form>
        </section>
      </Container>
    </main>
  );
}
