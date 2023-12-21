import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import users from "../models/auth.js";
import json from "express";
import "dotenv/config";

// skaqkmahpgehsqng
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (existinguser) {
      // console.log(error)

      return res.status(404).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({
      email,
      name,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "13h" }
    );
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("Something went wrong.");
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      return res.status(404).json({ message: "User don't exists" });
    }

    const isPassword = await bcrypt.compare(password, existinguser.password);
    if (!isPassword) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json("Something went wrong.");
  }
};
