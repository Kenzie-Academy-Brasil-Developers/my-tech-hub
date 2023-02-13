import { LinkToLogin, Container } from "../../globalStyle.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../routes/services/api.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    console.log(data);
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
      <nav>
        <figure>
          <img src="/logo.svg" alt="Logo, em rosa: Kenzie Hub" />
        </figure>
        <LinkToLogin to="/">Voltar</LinkToLogin>
      </nav>

      <Container>
        <section id="register-section">
          <div>
            <h3>Crie sua conta</h3>
            <span id="description-register">Rápido e grátis, vamos nessa!</span>
          </div>

          <form id="register-form" onSubmit={handleSubmit(submitsRegister)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <span>{errors.name?.message}</span>

            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              placeholder="Digite aqui seu e-mail"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>

            <label htmlFor="passwordConfirmation">Confirmar senha</label>
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Digite novamente sua senha"
              {...register("passwordConfirmation")}
            />
            <span>{errors.passwordConfirmation?.message}</span>

            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              name="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <span>{errors.bio?.message}</span>

            <label htmlFor="contact">Telefone de contato</label>
            <input
              type="text"
              name="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <span>{errors.contact?.message}</span>

            <label htmlFor="course_module">Tipo de valor</label>
            <select name="course_module" {...register("course_module")}>
              <option value="m1">M1</option>
              <option value="m2">M2</option>
              <option value="m3">M3</option>
              <option value="m4">M4</option>
              <option value="m5">M5</option>
              <option value="m6">M6</option>
            </select>
            <button id="submit" type="submit" /* disabled={true} */>
              Cadastrar
            </button>
          </form>
        </section>
      </Container>
    </main>
  );
}
