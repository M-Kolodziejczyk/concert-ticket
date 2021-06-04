import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import {
  uploadConcertImageStart,
  getConcertImageStart,
} from "../../../../redux/concert/concert.actions";

import useFileForm from "../../../../hooks/useFileForm";
import CustomInputButton from "../../../../components/custom-input-button/custom-input-button.component";
import CustomButton from "../../../../components/custom-button/custom-button.component";

import "./concert.styles.scss";

const Concert = (concert) => {
  const dispatch = useDispatch();
  const concertsImage = useSelector((state) => state.concert.concertsImage);
  const date = new Date(concert.date);
  const { handleChangeImage, handleSubmitImage, imageUrl, imageErrors } =
    useFileForm(concert.id, ["image/jpeg"], uploadConcertImageStart);

  useEffect(() => {
    if (!concertsImage[concert.id] && concert.keyImage) {
      dispatch(getConcertImageStart(concert.id));
    }

    // eslint-disable-next-line
  }, [dispatch, concert.id]);

  console.log("img", concertsImage);

  console.log("CONCERT------", concertsImage);
  return (
    <div className="concert">
      <div className="details">
        <p>Name: {concert.name}</p>
        <p>Date: {format(date, "MMMM dd yyyy")}</p>
        <p>Time: {format(date, "hh:mm a")}</p>
        <p>Venue: {concert.venue}</p>
        <p> Genres: {concert.genres}</p>
        <div className="img-wrapper">
          {concertsImage[concert.id] && (
            <img src={concertsImage[concert.id]} alt="concert" />
          )}
        </div>
      </div>
      <form className="upload-image" onSubmit={handleSubmitImage}>
        <CustomInputButton
          onChange={handleChangeImage}
          label="Select image"
          name={concert.id}
          id={concert.id}
        />
        {imageUrl && (
          <div className="image">
            <img src={imageUrl} alt="band" />
          </div>
        )}
        <div className="form-button">
          <CustomButton type="submit" name="submit">
            Upload Image
          </CustomButton>
          {imageErrors && <div className="imageErrors">{imageErrors}</div>}
        </div>
      </form>
    </div>
  );
};

export default Concert;
