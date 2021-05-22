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

async function createArtistBandJoin(params) {
  try {
    await docClient.put(params).promise();
  } catch (error) {
    return error;
  }
}

exports.handler = async (event, context) => {
  const date = new Date().toISOString();
  const params = {
    TableName: process.env.API_CONCERTTICKET_ARTISTBANDJOINTABLE_NAME,
    Item: {
      id: context.awsRequestId,
      bandID: event.arguments.bandID,
      artistID: event.arguments.artistID,
      createdAt: date,
    },
  };
  try {
    const res = await createArtistBandJoin(params);
    console.log("RES", res);
    return { body: "SUCCESS" };
  } catch (err) {
    return { error: err };
  }
};
