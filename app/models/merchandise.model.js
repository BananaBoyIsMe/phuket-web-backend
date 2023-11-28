const sql = require("./db");

const Merch = (merch) => {
  this.name = merch.name;
  this.description = merch.description;
  this.price = merch.price;
  this.img = merch.img;
  this.rating = merch.rating;
  this.url = merch.url;
};

Merch.listing = (result) => {
  sql.query("SELECT merch_id, name, price, img, rating, url FROM `merchandise`", (err, res) => {
    if (err) {
      console.log("Query error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

Merch.listingDetail = (id, result) => {
  sql.query("SELECT * FROM `merchandise` WHERE merch_id=?", [id], (err, res) => {
    if (err) {
      console.log("Query error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

Merch.listingSome = (limit, id, result) => {
  sql.query("SELECT * FROM `merchandise` LIMIT " + limit + " OFFSET " + id + " " , (err, res) => {
    if (err) {
      console.log("Query error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

// Merch.create = (newMerch, result) => {
//   sql.query("INSERT INTO merchandise SET ?", newMerch, (err, res) => {
//     if (err) {
//       console.log("Query error:", err);
//       result(err, null);
//       return;
//     }
//     result(null, { merch_id: res.insertId, ...newMerch});
//     console.log("Created merchandise:", {
//       merch_id: res.insertId,
//       ...newMerch
//     });
//   });
// };

// const removeOldImage = (id, result) => {
//   sql.query("SELECT * FROM merchandise WHERE id = ?", [id], (err, res) => {
//     if (err) {
//       console.log("error: " + err);
//       result(err, null);
//       return;
//     }
//     if (res.length) {
//       let filePath = __basedir + "/assets/" + res[0].img;
//       try {
//         if (fs.existsSync(filePath)) {
//           fs.unlink(filePath, (e) => {
//             if (e) {
//               console.log("Error: " + e);
//               return;
//             } else {
//               console.log("File: " + res[0].img + " was removed");
//               return;
//             }
//           });
//         }
//       } catch (error) {
//         console.log("File: " + res[0].img + "not found.");
//         return;
//       }
//     }
//   });
// };

// Merch.updateMerch = (id, data, result) => {
//   removeOldImage(id);
//   sql.query(
//     "UPDATE merchandise SET name=?, price=?, img=? WHERE id=?",
//     [data.name, data.price, data.img, id],
//     (err, res) => {
//       if (err) {
//         console.log("Error: " + err);
//         result(err, null);
//         return;
//       }
//       if (res.affectedRows == 0) {
//         result({ kind: "not_found" });
//         return;
//       }
//       console.log(
//         "Update user: " +
//           {
//             id,
//             ...data,
//           }
//       );
//       result(null, {
//         id,
//         ...data,
//       });
//     }
//   );
// };

module.exports = Merch;
