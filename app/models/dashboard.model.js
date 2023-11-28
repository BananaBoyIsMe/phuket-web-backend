const sql = require("./db");

const topOne = (limit, result) => {
  sql.query("SELECT merch_id, name, rating, img, url FROM merchandise ORDER BY rating DESC LIMIT " + limit + "", (err, res) => {
    if (err) {
      console.log("Query error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

const topTwo = (limit, result) => {
  sql.query("SELECT at_id, name, image_url, rating, url FROM `attractions` ORDER BY rating DESC LIMIT " + limit + " ", (err, res) => {
    if (err) {
      console.log("Query error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

const numUser = (result) => {
  sql.query("SELECT COUNT(id) AS 'Total number of user' FROM `users` WHERE 1", (err, res) => {
    if (err) {
      console.log("Query error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

module.exports = {
  topOne,
  topTwo,
  numUser
};