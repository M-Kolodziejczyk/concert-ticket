/* Amplify Params - DO NOT EDIT
	API_CONCERTTICKET_GRAPHQLAPIIDOUTPUT
	API_CONCERTTICKET_ORDERTABLE_ARN
	API_CONCERTTICKET_ORDERTABLE_NAME
	API_CONCERTTICKET_TICKETORDERTABLE_ARN
	API_CONCERTTICKET_TICKETORDERTABLE_NAME
	API_CONCERTTICKET_TICKETTABLE_ARN
	API_CONCERTTICKET_TICKETTABLE_NAME
	API_CONCERTTICKET_USERTABLE_ARN
	API_CONCERTTICKET_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const stripe = require("stripe")(process.env.SK_TEST);
const uuid = require("uuid");

async function createPaymentIntent(id, total) {
  try {
    const stripeIntentID = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: "usd",
    });

    await docClient
      .update({
        TableName: process.env.API_CONCERTTICKET_ORDERTABLE_NAME,
        Key: {
          id,
        },
        UpdateExpression: "set #s = :val",
        ExpressionAttributeNames: { "#s": "stripeIntentID" },
        ExpressionAttributeValues: {
          ":val": stripeIntentID.client_secret,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return stripeIntentID.client_secret;
  } catch (error) {
    console.log("Intent Error: ", error);
    return error;
  }
}

async function createOrder(event, date) {
  const id = uuid.v4();

  try {
    await docClient
      .put({
        TableName: process.env.API_CONCERTTICKET_ORDERTABLE_NAME,
        Item: {
          __typename: "Order",
          id,
          customer: event.arguments.input.fullName,
          username: event.arguments.input.userName,
          status: "NEW",
          createdAt: date,
        },
      })
      .promise();

    return id;
  } catch (error) {
    console.log("CREATE ORDER ERROR: ", error);
    return error;
  }
}

async function createTicketOrder(event, date, orderID) {
  let total = 0;

  try {
    for (const ticket of event.arguments.input.tickets) {
      const res = await updateTicketIfAvailable(ticket.id);
      console.log("Ticket order: ---", res);

      if (res.ConditionalCheckFailedException === false) {
        total = total + res.price;

        await docClient
          .put({
            TableName: process.env.API_CONCERTTICKET_TICKETORDERTABLE_NAME,
            Item: {
              __typename: "TicketOrder",
              id: uuid.v4(),
              ticketID: res.ticketID,
              orderID: orderID,
              userID: event.arguments.input.userName,
              price: res.price,
              fullName: event.arguments.input.fullName,
              createdAt: date,
              updatedAt: date,
            },
          })
          .promise();
      }
    }

    return total;
  } catch (error) {
    console.log("Create ticket Order: ", error);
    return error;
  }
}

async function updateTicketIfAvailable(id) {
  try {
    const res = await docClient
      .update({
        TableName: process.env.API_CONCERTTICKET_TICKETTABLE_NAME,
        Key: {
          id,
        },
        UpdateExpression: "set #q = #q - :val",
        ConditionExpression: "#q > :MIN",
        ExpressionAttributeNames: { "#q": "quantity" },
        ExpressionAttributeValues: {
          ":val": 1,
          ":MIN": 0,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      ConditionalCheckFailedException: false,
      ticketID: res.Attributes.id,
      price: res.Attributes.price,
    };
  } catch (error) {
    if (error.code === "ConditionalCheckFailedException") {
      return { ConditionalCheckFailedException: true };
    } else {
      return error;
    }
  }
}

exports.handler = async (event) => {
  const date = new Date().toISOString();
  const resBody = {};

  try {
    const id = await createOrder(event, date);
    const total = await createTicketOrder(event, date, id);
    const intentSecret = await createPaymentIntent(id, total);
    resBody.orderID = id;
    resBody.total = total;
    resBody.intentSecret = intentSecret;
  } catch (error) {
    console.log("ERROR: ", error);
    return error;
  }
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: { ...resBody },
  };
  return response;
};
