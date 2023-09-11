let express = require('express');
require('dotenv').config();
let app = express();
// console.log("Hello World");

// app.get("/", (req, res) => {
//     res.send("Hello Express");
//   });


  // app.get("/", (req, res) => {
  //   absolutePath = __dirname + '/views/index.html'
  //   res.sendFile(absolutePath);
  // });

  //serve-json-on-a-specific-route
  // app.get("/json", (req, res) => {
  //   res.json({
  //     message: "Hello json"
  //   });
  // });

  // Normal usage
// app.use(express.static(__dirname + "/public"));

// Assets at the /public route
// app.use("/public", express.static(__dirname + "/public"));

    //serve-json-on-a-specific-route
    // console.log(process.env.MESSAGE_STYLE)
    // app.get("/json", (req, res) => {
    //   if (process.env.MESSAGE_STYLE === "uppercase") {
    //     response = "Hello json".toUpperCase();
    //   } else {
    //     response = "Hello json";
    //   }
    //   res.json({
    //     message: response
    //   });
    // });



// implement-a-root-level-request-logger-middleware
// app.use(function middleware(req, res, next) {
//   // Do something
//   var string = req.method + " " + req.path + " - " + req.ip + " ";
//   console.log(string);
//   next();
// });

// chain-middleware-to-create-a-time-server
// const middleware = (req, res, next) => {
//   req.time = new Date().toString();
//   next();
// };

// app.get("/now", middleware, (req, res) => {
//   res.send({
//     time: req.time
//   });
// });


app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});
























 module.exports = app;
