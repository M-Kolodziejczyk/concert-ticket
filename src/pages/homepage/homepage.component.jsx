import React from "react";
// import { Storage, Auth, API } from "aws-amplify";
// import * as mutations from "../../api/mutations";
// import * as queries from "../../api/queries";

const HomePage = () => {
  const createLink = async (e) => {
    e.preventDefault();
    // try {
    // const user = await Auth.currentUserCredentials();
    // console.log("USER", user);
    // const signedUrl = await Storage.get(
    //   "69c5f8cb-c485-4293-906d-59b2ca733c60-artist-image",
    //   {
    //     level: "protected",
    //     // identityId: "eu-central-1:883b478d-d4c5-41e7-965f-a2aa85d89010",
    //   }
    // );

    // console.log("a", signedUrl);

    //   const res = await API.graphql({
    //     query: queries.getUser,
    //     variables: {
    //       email: "kolodziejczykmichal269@gmail.com",
    //     },
    //   });
    //   console.log("RES", res);
    // } catch (error) {
    //   console.log("ERROR", error);
    // }
    // setLink(signedUrl);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={createLink}>Create</button>
    </div>
  );
};

export default HomePage;
