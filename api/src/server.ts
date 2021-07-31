import express from "express";
import bodyParser  from "body-parser";

import apiRouter from './routes/api';

const port = process.env.NODE_PORT || 4848;

export function run () {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
  });
  
  app.use(apiRouter);

  app.get("/", function(_, res) {
    res.type('text/plain').send("Food can be served");
  });

  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  })
}

if(process.env.NODE_ENV !== 'testing') {
  run();
}
