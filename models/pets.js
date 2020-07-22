const {
  readFile,
  readdir
} = require("fs");

const createPet = (ownerId, data, cb) => {};

const fetchPetById = (id, cb) => {
  readFile(`./data/pets/${id}.json`, "utf8", (err, pet) => {
    if (err) console.log(err);
    else {
      const finalPet = JSON.parse(pet)
      cb(null, finalPet)
    }

  });
};

const fetchPetsByOwnerId = (ownerId, cb) => {
  // Get all pets and filter only pets belonging to owner
  readdir("./data/pets", (err, petFiles) => {
    if (err) console.log(err);
    else {
      const petsArr = [];
      petFiles.forEach((petFile) => {
        readFile(`./data/pets/${petFile}`, "utf8", (err, pet) => {
          petsArr.push(JSON.parse(pet));
          if (petsArr.length === petFiles.length) {
            const correctPets = petsArr.filter(
              (desiredPet) => desiredPet.owner === ownerId
            );
            cb(null, correctPets);
          }
        });
      });
    }
  });
};

const deletePetById = (id, cb) => {};

module.exports = {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById,
};