exports.handler = async (event) => {
  const responseBody = {
    status: "ok",
    service: "prophecyforge-backend",
    message: "ProphecyForge AI backend is alive",
  };

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(responseBody),
  };
};

