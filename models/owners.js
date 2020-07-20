const { readFile, readdir } = require("fs");

const createOwner = (data, cb) => {};

const fetchAllOwners = (cb) => {
  readdir("./data/owners", (err, ownerFiles) => {
    // console.log(ownerFiles);
    ownerFiles.forEach((ownerFile) => {
      readFile(`./data/owners/${ownerFile}`, "utf8", (err, owner) => {
        console.log(owner);
      });
    });
  });
};

const fetchOwnerById = (id, cb) => {};

const updateOwner = (id, data, cb) => {};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
};
