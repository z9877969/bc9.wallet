import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/LabelInput/LabelInput";
import Section from "../_share/Section/Section";

const dataCatList = [
  {
    name: "drinks",
    title: "Напитки",
    sum: "2000",
  },
  {
    name: "food",
    title: "Еда",
    sum: "1000",
  },
  {
    name: "other",
    title: "Разное",
    sum: "500",
  },
];

const TransactionsHistoryPage = () => {
  const allSum = dataCatList.reduce((acc, { sum }) => acc + Number(sum), 0);
  return (
    <Section>
      <GoBackHeader>
        <LabelInput type="button" name="selectPeriod" value={"День"} />
        <button type="button">diagram icon</button>
      </GoBackHeader>
      <button type="button">prev</button>
      <LabelInput type="date" title="17 августа 2021" />
      <button type="button">next</button>
      <table>
        <thead>
          <tr>
            <th>Всего:</th>
            <th>{allSum}</th>
          </tr>
        </thead>
        <tbody>
          {dataCatList.map(({ name, title, sum }) => (
            <tr key={name}>
              <td>{title}</td>
              <td>
                <span>{sum}</span>
                <button name={name} type="button">
                  {"=>"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

export default TransactionsHistoryPage;
