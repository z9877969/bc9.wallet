import LabelInput from "../_share/LabelInput/LabelInput";

const DatePaginator = () => {
    return (
        <>
            <button type="button">prev</button>
            <LabelInput type="date" title="17 августа 2021" />
            <button type="button">next</button>
        </>
    );
}

export default DatePaginator;