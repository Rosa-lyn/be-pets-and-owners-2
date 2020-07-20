const { readFile, readdir } = require("fs");

const createOwner = (data, cb) => {};

const fetchAllOwners = (cb) => {
  readdir("./data/owners", (err, ownerFiles) => {
    if (err) console.log(err);
    else {
      const ownersArr = [];
      // console.log(ownerFiles); -> ['o1.json', 'o2.json', ...]
      ownerFiles.forEach((ownerFile) => {
        readFile(`./data/owners/${ownerFile}`, "utf8", (err, owner) => {
          // console.log(owner);
          ownersArr.push(JSON.parse(owner));
          if (ownersArr.length === ownerFiles.length) {
            cb(null, ownersArr);
          }
        });
      });
    }
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
