const {
  readFile,
  readdir
} = require("fs");

const createOwner = (data, cb) => {};

const fetchAllOwners = (cb) => {
  readdir("./data/owners", (err, ownerFiles) => {
    const ownersArr = [];
    // console.log(ownerFiles);
    ownerFiles.forEach((ownerFile) => {
      readFile(`./data/owners/${ownerFile}`, "utf8", (err, owner) => {
        console.log(owner);
        ownersArr.push(JSON.parse(owner))
        console.log(ownersArr);
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