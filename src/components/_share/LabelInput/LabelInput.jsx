import s from "./LabelInput.module.scss";

const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder,
  className,
}) => {
  return (
    <label className={`${s.label} ${className && className}`}>
      {/* {title && <p className={s.title}>{title}</p>} */}
      {title}
      <input
        className={s.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={() => {}}
      />
    </label>
  );
};

export default LabelInput;
