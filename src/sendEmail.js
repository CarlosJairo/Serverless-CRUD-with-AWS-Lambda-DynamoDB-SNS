const AWS = require("aws-sdk");
const sns = new AWS.SNS();

const sendEmail = async (event) => {
  const { subject, message } = JSON.parse(event.body);

  const params = {
    Message: message,
    Subject: subject,
    TopicArn: process.env.SNS_TOPIC_ARN,
  };

  try {
    await sns.publish(params).promise();

    return {
      status: 200,
      body: JSON.stringify({ message: "Correo enviado satisfactorimente" }),
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

module.exports = {
  sendEmail,
};
