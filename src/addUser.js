const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addUser = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { nombre, cedula } = JSON.parse(event.body);
  const id = v4();

  const newUser = {
    id,
    nombre,
    cedula,
  };

  try {
    await dynamoDb
      .put({
        TableName: "UserTable",
        Item: newUser,
      })
      .promise();
    return {
      status: 201,
      body: JSON.stringify({
        message: "Usuario agregado correctamente",
        user: newUser,
      }),
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify({
        message: "Error al agregar usuario",
        error: error.message,
      }),
    };
  }
};

module.exports = {
  addUser,
};
