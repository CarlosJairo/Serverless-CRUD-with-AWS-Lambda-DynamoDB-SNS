exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Api con CRUD de usuarios usando DynamoDB.",
    }),
  };
};

// const AWS = require("aws-sdk");
// const cognito = new AWS.CognitoIdentityServiceProvider();

// exports.hello = async (event) => {
//   const username = "carlosjairo38@gmail.com"; // Coloca aquí tu nombre de usuario
//   const password = "12345678"; // Coloca aquí tu contraseña

//   const params = {
//     AuthFlow: "USER_PASSWORD_AUTH",
//     ClientId: "625bq36ubnoros3mpfabp9tn79", // Reemplaza con tu Client ID de Cognito
//     AuthParameters: {
//       USERNAME: username,
//       PASSWORD: password,
//     },
//   };

//   try {
//     // Primer intento de autenticación
//     let response = await cognito.initiateAuth(params).promise();

//     // Si el flujo requiere una nueva contraseña
//     if (response.ChallengeName === "NEW_PASSWORD_REQUIRED") {
//       const newPassword = "NuevaContraseña"; // Establece aquí la nueva contraseña

//       const newPasswordParams = {
//         ClientId: "625bq36ubnoros3mpfabp9tn79", // Reemplaza con tu Client ID de Cognito
//         ChallengeName: "NEW_PASSWORD_REQUIRED",
//         Session: response.Session,
//         ChallengeResponses: {
//           NEW_PASSWORD: newPassword,
//           USERNAME: "carlosjairo38@gmail.com", // Asegúrate de incluir el nombre de usuario aquí
//         },
//       };

//       // Establece la nueva contraseña
//       response = await cognito
//         .respondToAuthChallenge(newPasswordParams)
//         .promise();
//     }

//     // Devuelve el token
//     console.log("Token JWT:", response.AuthenticationResult.IdToken); // Imprime el token en la consola
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         token: response.AuthenticationResult.IdToken,
//       }),
//     };
//   } catch (error) {
//     console.error("Error al obtener el token:", error.message);
//     return {
//       statusCode: 400,
//       body: JSON.stringify({
//         error: error.message,
//       }),
//     };
//   }
// };
