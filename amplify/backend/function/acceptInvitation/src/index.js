/* Amplify Params - DO NOT EDIT
	API_CONCERTTICKET_ARTISTBANDJOINTABLE_ARN
	API_CONCERTTICKET_ARTISTBANDJOINTABLE_NAME
	API_CONCERTTICKET_BANDTABLE_ARN
	API_CONCERTTICKET_BANDTABLE_NAME
	API_CONCERTTICKET_GRAPHQLAPIIDOUTPUT
	API_CONCERTTICKET_INVITATIONTABLE_ARN
	API_CONCERTTICKET_INVITATIONTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

async function createArtistBandJoin(event, context) {
  const date = new Date().toISOString();
  try {
    await docClient
      .put({
        TableName: process.env.API_CONCERTTICKET_ARTISTBANDJOINTABLE_NAME,
        Item: {
          id: context.awsRequestId,
          bandID: event.arguments.bandID,
          artistID: event.arguments.artistID,
          createdAt: date,
        },
      })
      .promise();
  } catch (error) {
    return error;
  }
}

async function updateBand(event) {
  try {
    const res = await docClient
      .get({
        TableName: process.env.API_CONCERTTICKET_BANDTABLE_NAME,
        Key: {
          id: event.arguments.bandID,
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
        TableName: process.env.API_CONCERTTICKET_BANDTABLE_NAME,
        Key: {
          id: event.arguments.bandID,
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
    await createArtistBandJoin(event, context);

    await updateBand(event);

    await deleteInvitation(event);

    return {
      body: "SUCCESS",
    };
  } catch (error) {
    return error;
  }
};
