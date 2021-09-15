import axios from "axios";

axios
  .get("/transactions")
  .then(console.log)
  .catch((err) => {
    console.log("err :>> ", err.name);
    console.log("err :>> ", err.message);
    err.status = +err.message.split(" ").slice(-1);
    console.log("err.status :>> ", err.status);
    console.log('err :>> ', err);
  });
