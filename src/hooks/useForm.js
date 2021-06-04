import { useState } from "react";
import { useDispatch } from "react-redux";

const useForm = (initialState, validate, callback) => {
  const dispatch = useDispatch();
  const [values = initialState, setValues] = useState();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (initialState.id && !values.id) {
      setValues({
        ...values,
        id: initialState.id,
        [name]: value,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
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

  const handleChangeDate = (e, name) => {
    setValues({
      ...values,
      [name]: e,
    });
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleChangeDate,
  };
};

export default useForm;
