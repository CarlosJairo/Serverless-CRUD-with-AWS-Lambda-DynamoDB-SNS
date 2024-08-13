const AWS = require("aws-sdk");

const getUsers = async (event) => {
  try {
    const dinamoDb = new AWS.DynamoDB.DocumentClient();

    const result = await dinamoDb
      .scan({
        TableName: process.env.TABLE_NAME,
      })
      .promise();

    const users = result.Items;

    console.log("Usuarios: ", users);

    return {
      status: 200,
      body: { users },
    };
  } catch (error) {
    console.log("Error al obtener usuarios", error);

    return {
      status: 500,
      body: { error: error.message },
    };
  }
};

module.exports = {
  getUsers,
};
