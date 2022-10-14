import { Comment } from "../models/comment.js";
import { Pet } from "../models/pet.js";
import { Photo } from "../models/photos.js";
import { Report } from "../models/report.js";
import { User } from "../models/user.js";

//all this methods should pass between auth middleware to use properly

export const registerPet = async (req, res) => {
  const user = await User.findByPk(req.user_id);
  const { name, breed, age, color, images } = req.body;
  if (!name || !breed || !age || !color || !images) {
    return res.send({ message: "Complete all the fields" });
  }
  console.log(images);
  Pet.build({
    name: name,
    breed: breed,
    age: age,
    color: color,
    user_id: user.id,
  })
    .save()
    .then((pet) => {
      images.forEach((image) => {
        Photo.create({
          description: image.description,
          img_url: image.img_url,
          pet_id: pet.id,
        });
      });
      return res.send({ message: "Pet registered successfully", pet });
    })
    .catch((e) => {
      return res.send({ message: e.message });
    });
};

export const removePet = async (req, res) => {
  const user = await User.findByPk(req.user_id);
  const pet_id = req.params.pet_id;
  const pet = await Pet.findOne({
    where: {
      id: pet_id,
    },
  });
  if (!pet) {
    return res.status(400).send({ message: "Pet not found" });
  }
  if (pet.user_id != user.id) {
    return res.send({
      message: "This user doesn't have permission to delete this pet",
    });
  } else {
    try {
      await pet.destroy();
      return res.send({
        message: "Pet removed successfully",
      });
    } catch (e) {
      return res.send({
        message: e.message,
      });
    }
  }
};

export const updatePet = async (req, res) => {
  const user = await User.findByPk(req.user_id);
  const pet_id = req.params.pet_id;
  const pet = await Pet.findOne({
    where: {
      id: pet_id,
    },
  });
  if (!pet) {
    return res.status(400).send({ message: "Pet not found" });
  }
  if (pet.user_id != user.id) {
    return res.send({
      message: "This user doesn't have permission to update this pet",
    });
  } else {
    try {
      await pet.update({
        ...req.body,
      });
      return res.send({
        message: "Pet updated successfully",
      });
    } catch (e) {
      return res.send({
        message: e.message,
      });
    }
  }
};

export const getPets = async (req, res) => {
  const user = await User.findByPk(req.user_id);
  const pets = await user.getPets({
    include: {
      model: Photo,
      as: "album",
    },
  });
  console.log(pets);
  if (pets.length === 0) {
    return res.send({ message: "This user has no pets", pets: [] });
  } else {
    return res.send({ message: "Pets fetched successfully", pets });
  }
};

export const getReports = async (req, res) => {
  const user = await User.findByPk(req.user_id);
  const reports = await user.getReports();
  if (reports.length === 0) {
    return res.send({ message: "This user has no reports", reports: [] });
  } else {
    return res.send({ message: "Reports fetched successfully", reports });
  }
};
