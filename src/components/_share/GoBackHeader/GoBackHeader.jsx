const GoBackHeader = ({ title, children }) => {
  return (
    <header>
      <button type="button">GoBack</button>
      {!children ? <h1>{title}</h1> : children}
    </header>
  );
};

export default GoBackHeader;
