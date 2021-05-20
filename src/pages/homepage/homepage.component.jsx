import React from "react";
import { useDispatch } from "react-redux";
import { createInviteNotificationStart } from "../../redux/notification/notification.actions";
import { Storage, Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../api/mutations";
import * as queries from "../../api/queries";
import * as subscriptions from "../../api/subscriptions";

const HomePage = () => {
  // const dispatch = useDispatch();
  const createLink = async (e) => {
    e.preventDefault();
    try {
      const res = await API.graphql({
        query: queries.listInvitations,
        variables: {
          email: "mkolodziejczyk269@gmail.com",
          sortDirection: "DESC",
        },
      });
      console.log("RES", res);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // // graphqlOperation(subscriptions.onCreateInvitation)
  // useEffect(() => {
  //   const subs = API.graphql({
  //     query: subscriptions.onCreateInvitationByEmail,
  //     variables: {
  //       email: "mkolodziejczyk269@gmail.com",
  //     },
  //   }).subscribe({
  //     next: ({ provider, value }) =>
  //       dispatch(createInviteNotificationStart(value)),
  //     error: (error) => console.warn(error),
  //   });

  //   return () => subs.unsubscribe();
  // }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={createLink}>Create</button>
    </div>
  );
};

export default HomePage;
