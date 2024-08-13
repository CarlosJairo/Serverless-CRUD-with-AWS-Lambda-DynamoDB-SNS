const AWS = require("aws-sdk");
const cognito = new AWS.CognitoIdentityServiceProvider();

exports.getToken = async (event) => {
  const { username, password } = JSON.parse(event.body);

  console.log(`Datos del usuario: ${username} ${password}`);

  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: "625bq36ubnoros3mpfabp9tn79",
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };

  try {
    // Primer intento de autenticación
    let response = await cognito.initiateAuth(params).promise();

    if (response.ChallengeName === "NEW_PASSWORD_REQUIRED") {
      const newPassword = password;

      const newPasswordParams = {
        ClientId: "625bq36ubnoros3mpfabp9tn79",
        ChallengeName: "NEW_PASSWORD_REQUIRED",
        Session: response.Session,
        ChallengeResponses: {
          NEW_PASSWORD: newPassword,
          USERNAME: username,
        },
      };

      // Establece la nueva contraseña
      response = await cognito
        .respondToAuthChallenge(newPasswordParams)
        .promise();
    }

    // Devuelve el token
    console.log("Token JWT:", response.AuthenticationResult.IdToken);
    return {
      statusCode: 200,
      body: JSON.stringify({
        token: response.AuthenticationResult.IdToken,
      }),
    };
  } catch (error) {
    console.error("Error al obtener el token:", error.message);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
