/* Amplify Params - DO NOT EDIT
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

    let indexToUpdate = null;
    res.Item.invitations.forEach((item, id) => {
      if (item.email === event.arguments.invitationEmail) {
        indexToUpdate = id;
      }
    });

    await docClient
      .update({
        TableName: process.env.API_CONCERTTICKET_CONCERTTABLE_NAME,
        Key: {
          id: event.arguments.concertID,
        },
        UpdateExpression: `set #invitations[${indexToUpdate}].#status = :rejected`,
        ExpressionAttributeNames: {
          "#invitations": `invitations`,
          "#status": "status",
        },
        ExpressionAttributeValues: {
          ":rejected": "rejected",
        },
      })
      .promise();
  } catch (error) {
    return error;
  }
}

exports.handler = async (event) => {
  try {
    await updateConcert(event);

    await deleteInvitation(event);

    return {
      body: "SUCCESS",
    };
  } catch (error) {
    return error;
  }
};
