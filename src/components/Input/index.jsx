import { InputItem } from "./styled.js";

export function Input({ label, id, type, error, register, placeholder }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <InputItem
        type={type}
        name={id}
        {...register(id)}
        placeholder={placeholder}
      />
      {error ? <span>{error}</span> : null}
    </>
  );
}
