const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addUser = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { nombre, cedula } = JSON.parse(event.body);
  const id = v4();

  console.log("Datos de entrada:", nombre, cedula);

  const newUser = {
    id,
    nombre,
    cedula,
  };

  try {
    await dynamoDb
      .put({
        TableName: process.env.TABLE_NAME,
        Item: newUser,
      })
      .promise();

    console.log("Usuario agregado correctamente", newUser);
    return {
      status: 201,
      body: JSON.stringify({
        message: "Usuario agregado correctamente",
        user: newUser,
      }),
    };
  } catch (error) {
    console.log("Error al registrar usuario.", error);
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
