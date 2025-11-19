const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
});

exports.handler = async (event) => {
  console.log("Raw event:", JSON.stringify(event));

  // Default payload = event itself
  let payload = event || {};

  // If API Gateway HTTP event, body will be a JSON string
  if (event && typeof event.body === "string") {
    try {
      payload = JSON.parse(event.body);
    } catch (err) {
      console.log("Failed to parse event.body:", err.message);
    }
  }

  const action =
    (payload && payload.action) ||
    event.action ||
    "health-check";

  if (action === "test-upload") {
    const bucketName =
      process.env.SCRIPTS_BUCKET || "prophecyforge-ai-scripts-183376096120";

    const key = `tests/test-upload-${Date.now()}.json`;

    const body = {
      status: "ok",
      service: "prophecyforge-backend",
      message: "Test upload from ProphecyForge backend",
      source: payload.source || event.source || "unknown",
      timestamp: new Date().toISOString(),
    };

    try {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: JSON.stringify(body, null, 2),
        ContentType: "application/json",
      });

      await s3.send(command);

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "ok",
          action,
          bucket: bucketName,
          key,
        }),
      };
    } catch (err) {
      console.error("Error uploading to S3:", err);

      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "error",
          action,
          error: err.message,
        }),
      };
    }
  }

  // default: simple health check
  const body = {
    status: "ok",
    service: "prophecyforge-backend",
    message: "ProphecyForge AI backend is alive",
  };

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
};
