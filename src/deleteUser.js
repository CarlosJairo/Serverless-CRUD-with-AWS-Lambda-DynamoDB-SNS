const AWS = require("aws-sdk");

const deleteUser = async (event) => {
  try {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamoDb
      .delete({
        TableName: process.env.TABLE_NAME,
        Key: {
          id,
        },
      })
      .promise();

    return {
      status: 200,
      body: JSON.stringify({ status: 200, message: "Usuario eliminado" }),
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify({ status: 500, message: error.message }),
    };
  }
};

module.exports = {
  deleteUser,
};
