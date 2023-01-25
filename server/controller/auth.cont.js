const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user.model");

const signup = async (req, res) => {
  // validating with joi
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().min(8),
  });
  const validateSchema = schema.validate(req.body);
  var validateData;
  if (validateSchema.error) {
    res.status(400).send({ message: validateSchema.error.details[0].message });
  } else {
    validateData = validateSchema.value;
  }
  try {
    // check user exist or not
    const query = await User.findOne({ email: validateData.email });

    if (query) {
      res.send({
        massage: "user allready exist",
        status: 201,
      });
    } else {
      // hashing password
      const hashPassword = await bcrypt.hash(validateData.password, 10);
      validateData = { ...validateData, password: hashPassword };

      const result = await User.create(validateData);

      // creating jwt Token
      const data = {
        id: result.id,
      };
      const jwtToken = jwt.sign(data, process.env.SECRETE_KEY);

      // res.json({jwtToken})
      res.status(200).send({
        message: "signup successful",
        status: 200,
        jwtToken,
        name: result?.name,
        email: result?.email,
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Internal Server Error!",
      code: 500,
    });
  }
};

const login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().min(8),
  });
  const validateSchema = schema.validate(req.body);
  var validateData;
  if (validateSchema.error) {
    return res
      .status(400)
      .send({ message: validateSchema.error.details[0].message });
  }
  validateData = validateSchema.value;

  try {
    let user = await User.findOne({ email: validateData.email });
    if (!user) {
      return res.status(400).send({
        massage:
          "password or email is incorrect.pls.. enter correct password and email ",
      });
    }
    const comparePassword = bcrypt.compare(
      validateData.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(400).send({
        massage:
          "password or email is incorrect.pls.. enter correct password and email ",
      });
    }
    const payload = {
      id: user.id,
    };

    const jwtToken = jwt.sign(payload, process.env.SECRETE_KEY);

    res.json({
      jwtToken,
      name: user?.name,
      email: user?.email,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message || "Internal Server Error!",
      code: 500,
    });
  }
};

module.exports = {
  signup,
  login,
};
