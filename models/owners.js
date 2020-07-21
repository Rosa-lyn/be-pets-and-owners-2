const {
  readFile,
  readdir
} = require("fs");

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
  //let parsedData = JSON.parse(data);
  //console.log(data)
  readFile(`./data/owners/${id}.json`, "utf8", (err, owner) => {
      if (err) cb(err);
      else if (owner.age !== data.age) {
        owner.age = data.age;
      } else if (owner.name !== data.name) {
        owner.name = data.name
      }
      cb(null, owner)
    }

  )
};



const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
};