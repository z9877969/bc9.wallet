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
    );
}

export default HistoryTable;