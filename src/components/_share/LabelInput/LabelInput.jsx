import s from "./LabelInput.module.scss";

const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder,
  className,
  cbOnChange,
  cbOnClick,
}) => {
  return (
    <label className={`${s.label} ${className && className}`}>
      {/* {title && <p className={s.title}>{title}</p>} */}
      {title}
      {cbOnChange ? (
        <input
          className={s.input}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={cbOnChange}
        />
      ) : (
        <input
          className={s.input}
          type={type}
          name={name}
          value={value}
          onClick={cbOnClick}
        />
      )}
    </label>
  );
};

export default LabelInput;
