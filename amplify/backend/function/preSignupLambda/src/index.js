const AWS = require("aws-sdk");
const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = (event, context, callback) => {
  function checkForExistingUsers(event, linkToExistingUser) {
    console.log("Executing checkForExistingUsers");

    var params = {
      UserPoolId: event.userPoolId,
      AttributesToGet: ["sub", "email"],
      Filter: 'email = "' + event.request.userAttributes.email + '"',
    };

    return new Promise((resolve, reject) =>
      cognito.listUsers(params, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        if (
          result &&
          result.Users &&
          result.Users[0] &&
          result.Users[0].Username &&
          linkToExistingUser
        ) {
          console.log("Found existing users: ", result.Users);
          if (result.Users.length > 1) {
            result.Users.sort((a, b) =>
              a.UserCreateDate > b.UserCreateDate ? 1 : -1
            );
            console.log(
              "Found more than one existing users. Ordered by createdDate: ",
              result.Users
            );
          }
          linkUser(result.Users[0].Username, event)
            .then((result) => {
              resolve(result);
            })
            .catch((error) => {
              reject(err);
              return;
            });
        } else {
          resolve(result);
        }
      })
    );
  }

  function linkUser(sub, event) {
    console.log(
      "Linking user accounts with target sub: " + sub + "and event: ",
      event
    );

    //By default, assume the existing account is a Cognito username/password
    var destinationProvider = "Cognito";
    var destinationSub = sub;
    //If the existing user is in fact an external user (Xero etc), override the the provider
    if (sub.includes("_")) {
      destinationProvider = sub.split("_")[0];
      destinationSub = sub.split("_")[1];
    }
    var params = {
      DestinationUser: {
        ProviderAttributeValue: destinationSub,
        ProviderName: destinationProvider,
      },
      SourceUser: {
        ProviderAttributeName: "Cognito_Subject",
        ProviderAttributeValue: event.userName.split("_")[1],
        ProviderName: "Google",
      },
      UserPoolId: event.userPoolId,
    };
    console.log("Parameters for adminLinkProviderForUser: ", params);
    return new Promise((resolve, reject) =>
      cognito.adminLinkProviderForUser(params, (err, result) => {
        if (err) {
          console.log("Error encountered whilst linking users: ", err);
          reject(err);
          return;
        }
        console.log("Successfully linked users.");
        resolve(result);
      })
    );
  }

  console.log(JSON.stringify(event));

  if (
    event.triggerSource === "PreSignUp_SignUp" ||
    event.triggerSource === "PreSignUp_AdminCreateUser"
  ) {
    checkForExistingUsers(event, false)
      .then((result) => {
        if (result != null && result.Users != null && result.Users[0] != null) {
          console.log(
            "Found at least one existing account with that email address: ",
            result
          );
          console.log("Rejecting sign-up");
          //prevent sign-up
          callback(
            "An external provider account alreadys exists for that email address",
            null
          );
        } else {
          //proceed with sign-up
          callback(null, event);
        }
      })
      .catch((error) => {
        console.log("Error checking for existing users: ", error);
        //proceed with sign-up
        callback(null, event);
      });
  }

  if (event.triggerSource === "PreSignUp_ExternalProvider") {
    checkForExistingUsers(event, true)
      .then((result) => {
        console.log("Completed looking up users and linking them: ", result);
        callback(null, event);
      })
      .catch((error) => {
        console.log("Error checking for existing users: ", error);
        //proceed with sign-up
        callback(null, event);
      });
  }
};
