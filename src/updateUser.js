const AWS = require("aws-sdk");

const updateUser = async (event) => {
  try {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;
    const { nombre, cedula } = JSON.parse(event.body);

    console.log("Id a actualizar: ", id);
    console.log("Datos a actualizar: ", nombre, cedula);
    await dynamoDb
      .update({
        TableName: process.env.TABLE_NAME,
        Key: { id },
        UpdateExpression: "set nombre = :nombre, cedula = :cedula",
        ExpressionAttributeValues: {
          ":nombre": nombre,
          ":cedula": cedula,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      status: 200,
      body: JSON.stringify({ status: 200, message: "Usuario actualizado" }),
    };
  } catch (error) {
    console.error("Error al actualizar usuario: ", error);
    return {
      status: 500,
      body: JSON.stringify({ status: 500, message: error.message }),
    };
  }
};

module.exports = {
  updateUser,
};
