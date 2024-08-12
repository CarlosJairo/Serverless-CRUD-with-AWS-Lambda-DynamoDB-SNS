const AWS = require("aws-sdk");

const getUsers = async (event) => {
  try {
    const dinamoDb = new AWS.DynamoDB.DocumentClient();

    const result = await dinamoDb
      .scan({
        TableName: "UserTable",
      })
      .promise();

    const users = result.Items;

    return {
      status: 200,
      body: { users },
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    };
  }
};

module.exports = {
  getUsers,
};
