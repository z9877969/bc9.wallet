const HistoryTable = ({ allSum, dataCatList }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Всего:</th>
                    <th>{allSum}</th>
                </tr>
            </thead>
            <tbody>
                {dataCatList.map(({ name, category, sum, id }) => (
                    <tr key={id}>
                        <td>{category}</td>
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
    );
}

export default HistoryTable;