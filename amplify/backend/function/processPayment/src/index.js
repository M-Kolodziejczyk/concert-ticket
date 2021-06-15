/* Amplify Params - DO NOT EDIT
	API_CONCERTTICKET_GRAPHQLAPIIDOUTPUT
	API_CONCERTTICKET_ORDERTABLE_ARN
	API_CONCERTTICKET_ORDERTABLE_NAME
	API_CONCERTTICKET_TICKETORDERTABLE_ARN
	API_CONCERTTICKET_TICKETORDERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const stripe = require("stripe")(process.env.SK_TEST);

async function updateOrder(id) {
  try {
    await docClient
      .update({
        TableName: process.env.API_CONCERTTICKET_ORDERTABLE_NAME,
        Key: {
          id,
        },
        UpdateExpression: "set #s = :val ",
        ExpressionAttributeNames: { "#s": "status" },
        ExpressionAttributeValues: {
          ":val": "PAID",
        },
      })
      .promise();

    return "SUCCESS";
  } catch (e) {
    return e;
  }
}

async function confirmCardPayment(clientSecret, id) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(clientSecret);
    if (paymentIntent.status === "succeeded") {
      const res = await updateOrder(id);
      return res;
    }
  } catch (e) {
    return e;
  }
}

exports.handler = async (event) => {
  const response = {};

  try {
    const res = await confirmCardPayment(
      event.arguments.input.paymentIntentID,
      event.arguments.input.orderID
    );
    if (res === "SUCCESS") {
      response.statusCode = 200;
      response.status = "SUCCESS";
      response.completePayment = true;
    }
  } catch (e) {
    console.log(e);
    response.statusCode = 500;
    response.message = "Server problems";
    return e;
  }

  return JSON.stringify(response);
};
