const Merch = require("../models/merchandise.model");

// const createNewMerch = (req, res) => {
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content cannot be empty.",
//     });
//   }
//   const merchObject = {
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     img: req.body.img
//   };
//   Merch.create(merchObject, (err, data) => {
//     if (err) {
//       res.status(500).send({
//         message: err.message || "Some error occured while creating"
//       });
//     } else {
//       res.send(data);
//     }
//   });
// };

const getAllMerch = (req, res) => {
  Merch.listing((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while getting",
      });
    } else {
      res.send(data);
    }
  });
};

const getMerchDetail = (req, res) => {
  Merch.listingDetail(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while getting",
      });
    } else {
      res.send(data);
    }
  });
}

const getSomeMerch = (req, res) => {
  Merch.listingSome(req.params.limit, req.params.offset, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while getting",
      });
    } else {
      res.send(data);
    }
  });
}

// const updateMerchCtrl = (req, res) => {
//   console.log("update");
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty",
//     });
//   }
//   const data = {
//     name: req.body.name,
//     price: req.body.price,
//     img: req.body.img,
//   };

//   Merch.updateMerch(req.params.id, data, (err, data) => {
//     if (err) {
//       if (err.kind == "not_found") {
//         res.status(401).send({ message: "Not found user: " + req.params.id });
//       } else {
//         res
//           .status(500)
//           .send({ message: "Error update user: " + req.params.id });
//       }
//     }
//     return res.status(200).send({
//       message: `User updated successfully ${data.name} ${data.price} ${data.img}`,
//     });
//   });
// };

module.exports = {
  // createNewMerch,
  getAllMerch,
  getMerchDetail,
  getSomeMerch
  // updateMerchCtrl,
};
