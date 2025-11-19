const { handler } = require("./index");

(async () => {
  const fakeEvent = {
    source: "local-test",
    action: "test-upload",
  };

  const response = await handler(fakeEvent);
  console.log("Lambda response:");
  console.log(response);
})();
