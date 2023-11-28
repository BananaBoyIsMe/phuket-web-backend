const dash = require("../models/dashboard.model");

// const getHighRatingPre = (result) => {
//   sql.query("SELECT merch_id, name, price, img FROM `merchandise`", (err, res) => {
//   if (err) {
//     console.log("Query error:", err);
//     result(err, null);
//     return;
//   }
//     result(null, res);
//   });
// }

// const getTopMerch1 = (req, res) => {
//   dash.topMerch(5, (err, data) => {
//     if (err) {
//       res.status(500).send({
//         message: err.message || "Some error occured while getting",
//       });
//     } else {
//       res.send(data);
//     }
//   })
// }

const getDash1 = (req, res) => {
  dash.numUser((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while getting",
      });
    } else {
      res.send(data)
    }
  })
}

const getDash2 = (req, res) => {
  if (req.params.mORp == 1)
  dash.topOne(req.params.limit, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while getting",
      });
    } else {
      res.send(data);
    }
  })
  if (req.params.mORp == 2)
  dash.topTwo(req.params.limit, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while getting",
      });
    } else {
      res.send(data);
    }
  })
}

module.exports = {
  // createNewMerch,
  getDash1,
  getDash2,
  // updateMerchCtrl,
};
