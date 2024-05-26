import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "9T&rPq8Z#uJ3@xK6", {
    expiresIn: "30d",
  });
};

export default generateToken;
