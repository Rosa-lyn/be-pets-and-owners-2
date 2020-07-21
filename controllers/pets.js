const {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById,
} = require("../models/pets.js");

const getPetsByOwnerId = (req, res) => {
  const { ownerId } = req.params;
  fetchPetsByOwnerId(ownerId, (err, pets) => {
    if (err) console.log(err);
    else {
      res.send({ pets });
    }
  });
};

const getPetById = (req, res) => {
  const { petId } = req.params;
  fetchPetById(petId, (err, pet) => {
    if (err) console.log(err);
    else {
      res.send({ pet });
    }
  });
};

module.exports = { getPetsByOwnerId, getPetById };
