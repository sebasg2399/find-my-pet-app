import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].replace("Bearer ", "");
    if (!token) return res.status(401).send({ message: "No token provided" });
    const decoded = jwt.verify(token, "another_secret");
    req.user_id = decoded.id;
    const user = await User.findOne({
      where: {
        id: req.user_id,
      },
    });
    if (!user) return res.status(404).json({ message: "No user found" });
    next();
  } catch (err) {
    res.status(400).send({ message: "invalid token" });
  }
};
