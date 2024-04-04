import AWS from "aws-sdk";

// Configuring the region for AWS account
AWS.config.update({ region: "ap-southeast-2" });

// Creating an Amazon Rekognition service client object
const rekognition = new AWS.Rekognition();

export default rekognition;
