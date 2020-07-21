const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
} = require("../models/owners.js");

const getAllOwners = (req, res) => {
  fetchAllOwners((err, owners) => {
    if (err) cb(err);
    else {
      res.send({
        owners,
      });
    }
  });
};

const getOwnerById = (req, res, next) => {
  const { ownerId } = req.params;
  // console.log(ownerId);
  fetchOwnerById(ownerId, (err, owner) => {
    if (err) next(err);
    else {
      res.send({
        owner,
      });
    }
  });
};

const patchOwner = (req, res) => {
  const { ownerId } = req.params;
  updateOwner(ownerId, ownerData, (err, updatedOwner) => {
    if (err) console.log(err);
    else {
      res.send({
        updatedOwner,
      });
    }
  });
};

module.exports = {
  getAllOwners,
  getOwnerById,
  patchOwner,
};
