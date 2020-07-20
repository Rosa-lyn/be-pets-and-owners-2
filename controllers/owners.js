const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
} = require('../models/owners.js');

const getAllOwners = (req, res) => {
  fetchAllOwners()
}

module.exports = {
  getAllOwners
};