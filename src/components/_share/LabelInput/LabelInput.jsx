const LabelInput = ({ title, type = "text", name, value, placeholder }) => {
  return (
    <label>
      {title && <p>{title}</p>}
      <input type={type} name={name} placeholder={placeholder} value={value} />
    </label>
  );
};

export default LabelInput;
