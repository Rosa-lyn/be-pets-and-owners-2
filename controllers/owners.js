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
        owners,
      });
    }
  });
};

const getOwnerById = (req, res) => {
  const { ownerId } = req.params;
  // console.log(ownerId);
  fetchOwnerById(ownerId, (err, owner) => {
    if (err) console.log(err);
    else {
      res.send({ owner });
    }
  });
};

module.exports = {
  getAllOwners,
  getOwnerById,
};
