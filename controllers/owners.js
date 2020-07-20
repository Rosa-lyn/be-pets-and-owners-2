const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
} = require("../models/owners.js");

const getAllOwners = (req, res) => {
  fetchAllOwners((err, owners) => {
    res.send(owners);
  });
};

module.exports = {
  getAllOwners,
};
