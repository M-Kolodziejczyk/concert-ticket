const validate = (values) => {
  const errors = {};

  if (!values.artistId) {
    errors.artistId = "ArtistId is required!";
  }

  if (!values.bandId) {
    errors.bandId = "BandId is required!";
  }

  return errors;
};

export default validate;
