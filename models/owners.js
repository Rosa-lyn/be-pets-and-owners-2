const { readFile, readdir, writeFile } = require("fs");

const createOwner = (data, cb) => {};

const fetchAllOwners = (cb) => {
  readdir("./data/owners", (err, ownerFiles) => {
    if (err) cb(err);
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

const fetchOwnerById = (id, cb) => {
  readFile(`./data/owners/${id}.json`, "utf8", (err, ownerId) => {
    if (err) cb(err);
    else {
      const owner = JSON.parse(ownerId);
      cb(null, owner);
    }
  });
};

const updateOwner = (id, data, cb) => {
  writeFile(
    `./data/owners/${id}.json`,
    JSON.stringify(data, null, "\t"),
    "utf8",
    (err) => {
      if (err) cb(err);
      else {
        readFile(`./data/owners/${id}.json`, "utf8", (err, owner) => {
          if (err) cb(err);
          else {
            const updatedOwner = JSON.parse(owner);
            cb(null, updatedOwner);
            console.log(`${id}.json updated: \n ${owner}`);
          }
        });
      }
    }
  );
};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
};
