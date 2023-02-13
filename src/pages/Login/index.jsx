import { LinkSubmit, Container } from "../../globalStyle.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Deve ser um e-mail")
      .required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  })
  .required();

export function Login({ submitsLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <main id="main-login">
      <figure className="logo">
        <img src="/logo.svg" alt="Logo, em rosa: Kenzie Hub" />
      </figure>
      <Container>
        <section id="login-section">
          <h3>Login</h3>
          <form onSubmit={handleSubmit(submitsLogin)}>
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

            <button>Entrar</button>
          </form>
          <p>Ainda não possui uma conta?</p>
          <LinkSubmit to="/cadastro">Cadastre-se</LinkSubmit>
        </section>
      </Container>
    </main>
  );
}
