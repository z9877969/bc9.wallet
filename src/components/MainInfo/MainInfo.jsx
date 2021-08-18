import s from "./MainInfo.module.css";

const MainInfo = ({ title, periodsOpts }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.currency}>USD</p>
      <button className={s.button}>Add</button>
      <ul className={s.list}>
        {periodsOpts.map(({ title, sum, name }) => (
          <li key={name} className={s.item}>
            <span className={s.period}>{title}</span>
            <span className={s.sum}>{sum}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainInfo;
