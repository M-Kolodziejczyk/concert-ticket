import { useState } from "react";
import { useDispatch } from "react-redux";

const useFileForm = (bucketInfo, format, callback) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(bucketInfo);
  const [image, setImage] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [imageErrors, setImageErrors] = useState("");
  const [validate, setValidate] = useState(false);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (format.includes(file.type)) {
      setValues({
        ...values,
        key: values.key + file.name,
        name: file.name,
      });
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
      setValidate(true);
      setImageErrors("");
    } else {
      setValidate(false);
      setImageErrors("Invalid file type.");
    }
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    if (!imageErrors && validate) {
      callback();
      dispatch(callback(values, image));
    }
  };

  return {
    handleChangeImage,
    handleSubmitImage,
    imageUrl,
    imageErrors,
  };
};

export default useFileForm;
