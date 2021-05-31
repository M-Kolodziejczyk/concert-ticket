/* Amplify Params - DO NOT EDIT
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

    let indexToUpdate = null;
    res.Item.invitations.forEach((item, id) => {
      if (item.email === event.arguments.invitationEmail) {
        indexToUpdate = id;
      }
    });

    const res2 = await docClient
      .update({
        TableName: process.env.API_CONCERTTICKET_BANDTABLE_NAME,
        Key: {
          id: event.arguments.bandID,
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
    console.log("RESSSSSSSS2: ", res2);
  } catch (error) {
    console.log("ERRRRRRRRRRR", error);
    return error;
  }
}

exports.handler = async (event) => {
  try {
    await updateBand(event);

    await deleteInvitation(event);

    return {
      body: "SUCCESS",
    };
  } catch (error) {
    return error;
  }
};
