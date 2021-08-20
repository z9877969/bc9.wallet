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
                {dataCatList.map(({ name, category, sum }) => (
                    <tr key={name}>
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