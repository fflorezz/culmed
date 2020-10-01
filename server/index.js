const config = require("./config");
const app = require("./express");

app.listen(config.port, err => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
