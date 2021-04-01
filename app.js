const express = require('express');
const ExpressError = require("./expressError");
const app = express();
const userRoutes = require("./routes");

app.use(express.json());

app.use(userRoutes);


app.use(function(req, res) {
    return new ExpressError("Not Found", 404);
  });

app.use(function(err, req, res, next) {
// the default status is 500 Internal Server Error
    let status = err.status || 500;
    // set the status and alert the user
    return res.status(status).json({
      error: {
        message: err.message,
        status: status
      }
    });
  });

app.listen(3000, function() {
    console.log("Server is listening on port 3000");
  });

