exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Api con CRUD de usuarios usando DynamoDB.",
    }),
  };
};
