import { useEffect, useState } from "react";

export const useForm = ({ initialState, handleClickCb, onSubmit }) => {
  const [data, setForm] = useState(initialState);

  console.log("data :>> ", data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSetDataByClick = ([name, value]) => {
    console.log("[name, value] :>> ", [name, value]);
    setForm((prev) => ({ ...prev, [name]: value }));
    handleClickCb();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  useEffect(() => {
    setForm(initialState);
  }, [initialState]);

  return { data, handleChange, handleSetDataByClick, handleSubmit };
};
