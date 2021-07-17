import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getUserArtistStart } from "../../../redux/artist/artist.actions";
import { addArtistToBandStart } from "../../../redux/band/band.actions";

import useForm from "../../../hooks/useForm";
import validate from "../../../validators/add-artist-to-band";
import CustomButton from "../../../components/custom-button/custom-button.component";
import Spinner from "../../../components/spinner/spinner.component";

import "./add-artist.styles.scss";

const AddArtist = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const artistId = useSelector((state) => state.user.user.artistID);
  const artistLoading = useSelector((state) => state.artist.loading);
  const userArtist = useSelector((state) => state.artist.userArtist);
  const formLoading = useSelector((state) => state.band.formLoading);

  const { handleSubmit } = useForm(
    { bandId: params.id || "", artistId: artistId || "" },
    validate,
    addArtistToBandStart
  );

  useEffect(() => {
    if (
      userArtist !== null &&
      Object.keys(userArtist).length === 0 &&
      artistId
    ) {
      dispatch(getUserArtistStart(artistId));
    }
  }, [dispatch, userArtist, artistId]);

  return (
    <div className="add-artist">
      {(artistLoading || formLoading) && <Spinner />}
      <form onSubmit={handleSubmit} className="form-container">
        <p className="artist">
          <strong>Name: </strong>
          {userArtist.name}
        </p>
        <div className="form__button">
          <CustomButton type="submit" name="submit">
            Add Artist To Band
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default AddArtist;
