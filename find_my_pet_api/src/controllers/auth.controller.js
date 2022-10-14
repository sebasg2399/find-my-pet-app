import {
  comparePassword,
  encryptPassword,
} from "../helpers/password.helper.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { email, password, phone, first_name, last_name, identification } =
    req.body;
  try {
    if (
      !email ||
      !password ||
      !phone ||
      !first_name ||
      !last_name ||
      !identification
    ) {
      return res.send({
        message: "All fields are required to register a new user",
      });
    }

    User.build({
      email,
      password: await encryptPassword(password),
      phone,
      first_name,
      last_name,
      identification,
    })
      .save()
      .then((user) => {
        const token = jwt.sign({ id: user.id }, "another_secret", {
          expiresIn: 86400,
        });
        res.send({
          message: "User created successfully",
          user: {
            token,
            email,
            phone,
            first_name,
            last_name,
            identification,
          },
        });
      })
      .catch((e) => {
        return res.send({ message: e.message });
      });
  } catch (e) {
    res.send(e.message);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const userFound = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!userFound) {
    res.status(400).send({ message: "User not found" });
  } else {
    const match_passwords = await comparePassword(password, userFound.password);
    if (!match_passwords) {
      res.status(401).send({
        message: "passwords did not match!",
        user: null,
      });
    } else {
      const token = jwt.sign({ id: userFound.id }, "another_secret", {
        expiresIn: 86400,
      });
      res.status(200).send({
        message: "Logged in successfully",
        user: { token, ...userFound.toJSON() },
      });
    }
  }
};
