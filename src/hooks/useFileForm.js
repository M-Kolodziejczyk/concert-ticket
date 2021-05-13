import { useState } from "react";
import { useDispatch } from "react-redux";

// PARAMETERS
// id - String - element of dynamodb table, where we want to store user.identityID
// format - Array - allow type format of file
// callback - function - action function that we will use with redux to dispatch action

const useFileForm = (id, format, callback) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [imageErrors, setImageErrors] = useState("");
  const [validate, setValidate] = useState(false);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (format.includes(file.type)) {
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
      dispatch(callback(id, image));
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
