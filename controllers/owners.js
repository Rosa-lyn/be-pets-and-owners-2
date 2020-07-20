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
      res.send({
        owners
      });
    }
  });
};

const getOwnerById = (req, res) => {
  fetchOwnerById((err, owners) => {
    if (err) console.log(err);
    else {
      console.log(req.params);
    }
  })
}

module.exports = {
  getAllOwners,
  getOwnerById
};