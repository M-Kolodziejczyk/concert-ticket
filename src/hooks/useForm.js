import { useState } from "react";
import { useDispatch } from "react-redux";

const useForm = (initialState, validate, callback) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate(values);
    setErrors(validateErrors);
    if (Object.keys(validateErrors).length === 0) {
      dispatch(callback(values));
      setValues(initialState);
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
