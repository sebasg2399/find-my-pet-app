import { Comment } from "../models/comment.js";
import { Pet } from "../models/pet.js";
import { Photo } from "../models/photos.js";
import { Report } from "../models/report.js";
import { User } from "../models/user.js";

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
