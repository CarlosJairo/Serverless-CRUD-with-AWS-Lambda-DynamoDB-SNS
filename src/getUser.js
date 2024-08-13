const AWS = require("aws-sdk");

const getUser = async (event) => {
  try {
    const dynamo = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const result = await dynamo
      .get({
        TableName: process.env.TABLE_NAME,
        Key: {
          id,
        },
      })
      .promise();

    const user = result.Item;
    return {
      status: 200,
      body: user,
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    };
  }
};

module.exports = {
  getUser,
};
