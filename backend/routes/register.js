import userModel from "../modals/User.js";
import md5 from "md5";

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      const result = await userModel.create({
        email: email,
        password: md5(password),
      });
      res.status(200).json(result);
    } else {
      res.status(208).json({ message: "User with this email already exists." });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user." });
  }
};
export default register;
