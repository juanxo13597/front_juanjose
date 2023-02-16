/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
const app = express();
const port = process.env.PORT || 4200;

app.use("/", express.static(__dirname + "/dist/front_juanjose"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
