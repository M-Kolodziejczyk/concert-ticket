import { put, takeLatest, all, call } from "redux-saga/effects";
import { Auth, API } from "aws-amplify";
import * as mutations from "../../api/mutations";
import * as queries from "../../api/queries";

import ArtistActionTypes from "./artist.types";

import {
  createArtistSuccess,
  createArtistFailure,
  uploadArttistImageSuccess,
  uploadArtistImageFailure,
  getArtistSuccess,
  getArtistFailure,
} from "./artist.actions";

export function* createArtist({ payload: artist }) {
  try {
    const authUser = yield Auth.currentAuthenticatedUser();
    console.log(authUser.attributes.sub);
    const res = yield API.graphql({
      query: mutations.createArtist,
      variables: { input: { ...artist } },
    });
    yield API.graphql({
      query: mutations.updateUser,
      variables: {
        input: {
          id: authUser.attributes.sub,
          artistID: res.data.createArtist.id,
        },
      },
    });
    yield put(createArtistSuccess(res.data.createArtist));
  } catch (error) {
    yield put(createArtistFailure(error));
  }
}

export function* onCreateArtistStart() {
  yield takeLatest(ArtistActionTypes.CREATE_ARTIST_START, createArtist);
}

export function* uploadArtistImage({ payload: { values, image } }) {
  try {
    const user = yield Auth.currentUserCredentials();
    console.log(user.identityId);
    // console.log(image);
    // console.log(values);
    // const res = yield Storage.put("artist-image", image, {
    //   level: "protected",
    //   contentType: image.type,
    // });
    // yield API.graphql({
    //   query: mutations.updateA
    // })
    // console.log(res);
    yield put(uploadArttistImageSuccess("success"));
  } catch (error) {
    yield put(uploadArtistImageFailure(error));
  }
}

export function* onUploadArtistImageStart() {
  yield takeLatest(
    ArtistActionTypes.UPLOAD_ARTIST_IMAGE_START,
    uploadArtistImage
  );
}

export function* getArtist({ payload: { id } }) {
  try {
    const artist = API.graphql({
      query: queries.getArtist,
      input: {
        id,
      },
    });
    yield put(getArtistSuccess(artist.data.getArtist));
  } catch (error) {
    yield put(getArtistFailure(error));
  }
}

export function* onGetArtistStart() {
  yield takeLatest(ArtistActionTypes.GET_ARTIST_START, getArtist);
}

export function* artistSagas() {
  yield all([
    call(onCreateArtistStart),
    call(onUploadArtistImageStart),
    call(onGetArtistStart),
  ]);
}
