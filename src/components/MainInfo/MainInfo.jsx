const MainInfo = ({ title, periodsOpts }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>USD</p>
      <button>Add</button>
      <ul>
        {periodsOpts.map(({ title, sum, name }) => (
          <li key={name}>
            <span>{title}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainInfo;
