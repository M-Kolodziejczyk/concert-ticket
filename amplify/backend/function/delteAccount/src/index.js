/* Amplify Params - DO NOT EDIT
	API_CONCERTTICKET_GRAPHQLAPIIDOUTPUT
	API_CONCERTTICKET_USERTABLE_ARN
	API_CONCERTTICKET_USERTABLE_NAME
	AUTH_CONCERTTICKET08F3B569_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

async function deleteAccount(userName) {
  const params = {
    UserPoolId: process.env.AUTH_CONCERTTICKET08F3B569_USERPOOLID,
    Username: userName,
  };

  try {
    await cognitoidentityserviceprovider.adminDeleteUser(params).promise();
    return "SUCCESS";
  } catch (e) {
    return e;
  }
}

async function deleteUserItem(email) {
  try {
    await docClient
      .delete({
        TableName: process.env.API_CONCERTTICKET_USERTABLE_NAME,
        Key: {
          email: email,
        },
      })
      .promise();

    return "SUCCESS";
  } catch (error) {
    return error;
  }
}

exports.handler = async (event) => {
  const email = event.arguments.email;
  const userName = event.arguments.userName;
  let response = {};

  try {
    await deleteAccount(userName);
    await deleteUserItem(email);

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "User deleted successfuly",
        isUserDelete: true,
      }),
    };
  } catch (e) {
    response = {
      statusCode: 404,
      body: JSON.stringify(e),
    };
  }

  return response;
};
