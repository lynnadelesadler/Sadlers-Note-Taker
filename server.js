const express = require("express");
const apiRoutes = require("./Routes/apiRoutes");
const htmlRoutes = require("./Routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({extended: true,}));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listen for connections
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
