const AWS = require("aws-sdk");

const deleteUser = async (event) => {
  try {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    console.log("Id del usuario a borrar", id);

    await dynamoDb
      .delete({
        TableName: process.env.TABLE_NAME,
        Key: {
          id,
        },
      })
      .promise();

    console.log("Usuario eliminado");
    return {
      status: 200,
      body: JSON.stringify({ status: 200, message: "Usuario eliminado" }),
    };
  } catch (error) {
    console.log("Error al eliminar usuario", error);
    return {
      status: 500,
      body: JSON.stringify({ status: 500, message: error.message }),
    };
  }
};

module.exports = {
  deleteUser,
};
