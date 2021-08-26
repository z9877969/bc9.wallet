const HistoryTable = ({ transactions, onOpenCategoryDetails }) => {
  const transCatList = Object.entries(transactions);
  const allSum = transCatList.reduce((acc, [_, { total }]) => acc + total, 0);
  return (
    <table>
      <thead>
        <tr>
          <th>Всего:</th>
          <th>{allSum}</th>
        </tr>
      </thead>
      <tbody>
        {transCatList.map(([category, { total, data }]) => {
          const onCategoryList = () => onOpenCategoryDetails(category)
          return (
            <tr key={category}>
              <td>{category}</td>
              <td>
                <span>{total}</span>
                <button onClick={onCategoryList} type="button">
                  {'=>'}
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default HistoryTable;
