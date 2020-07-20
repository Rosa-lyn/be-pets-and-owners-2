const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
} = require("../models/owners.js");

const getAllOwners = (req, res) => {
  fetchAllOwners((err, owners) => {
    if (err) console.log(err);
    else {
      res.send({ owners });
    }
  });
};

module.exports = {
  getAllOwners,
};
