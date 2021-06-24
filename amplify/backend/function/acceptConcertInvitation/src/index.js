/* Amplify Params - DO NOT EDIT
	API_CONCERTTICKET_CONCERTBANDJOINTABLE_ARN
	API_CONCERTTICKET_CONCERTBANDJOINTABLE_NAME
	API_CONCERTTICKET_CONCERTTABLE_ARN
	API_CONCERTTICKET_CONCERTTABLE_NAME
	API_CONCERTTICKET_GRAPHQLAPIIDOUTPUT
	API_CONCERTTICKET_INVITATIONTABLE_ARN
	API_CONCERTTICKET_INVITATIONTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

async function createConcertBandJoin(event, context) {
  const date = new Date().toISOString();
  try {
    await docClient
      .put({
        TableName: process.env.API_CONCERTTICKET_CONCERTBANDJOINTABLE_NAME,
        Item: {
          id: context.awsRequestId,
          bandID: event.arguments.bandID,
          concertID: event.arguments.concertID,
          createdAt: date,
        },
      })
      .promise();
  } catch (error) {
    return error;
  }
}

async function updateConcert(event) {
  try {
    const res = await docClient
      .get({
        TableName: process.env.API_CONCERTTICKET_CONCERTTABLE_NAME,
        Key: {
          id: event.arguments.concertID,
        },
      })
      .promise();

    let indexToRemove = null;
    res.Item.invitations.forEach((item, id) => {
      if (item.email === event.arguments.invitationEmail) {
        indexToRemove = id;
      }
    });

    await docClient
      .update({
        TableName: process.env.API_CONCERTTICKET_CONCERTTABLE_NAME,
        Key: {
          id: event.arguments.concertID,
        },
        UpdateExpression: `REMOVE invitations[${indexToRemove}]`,
        ConditionExpression: `invitations[${indexToRemove}] = :valueToRemove`,
        ExpressionAttributeValues: {
          ":valueToRemove": res.Item.invitations[indexToRemove],
        },
      })
      .promise();

    return {
      body: "SUCCESS",
    };
  } catch (error) {
    return error;
  }
}

async function deleteInvitation(event) {
  try {
    await docClient
      .delete({
        TableName: process.env.API_CONCERTTICKET_INVITATIONTABLE_NAME,
        Key: {
          email: event.arguments.invitationEmail,
          createdAt: event.arguments.invitationCreatedAt,
        },
      })
      .promise();
  } catch (error) {
    return error;
  }
}

exports.handler = async (event, context) => {
  try {
    await createConcertBandJoin(event, context);

    await updateConcert(event);

    await deleteInvitation(event);

    return JSON.stringify({
      body: "SUCCESS",
      email: event.arguments.invitationEmail,
      createdAt: event.arguments.invitationCreatedAt,
    });
  } catch (error) {
    return error;
  }
};
