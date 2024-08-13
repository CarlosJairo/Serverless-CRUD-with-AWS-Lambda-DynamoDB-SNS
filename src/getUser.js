const AWS = require("aws-sdk");

const getUser = async (event) => {
  try {
    const dynamo = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    console.log("Id del usuario a Obtener ", id);

    const result = await dynamo
      .get({
        TableName: process.env.TABLE_NAME,
        Key: {
          id,
        },
      })
      .promise();

    const user = result.Item;
    console.log("Usuario encontrado", user);
    return {
      status: 200,
      body: user,
    };
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    return {
      status: 500,
      body: { error: error.message },
    };
  }
};

module.exports = {
  getUser,
};
