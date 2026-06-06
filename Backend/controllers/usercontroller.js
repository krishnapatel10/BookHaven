import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

let usercontroller = {
  async getalluser(req, res) {
    try {
      let data = await User.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  async getuserbyid(req, res) {
    try {
      let data = await User.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "user not found.." });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  // async createuser(req, res) {
  //   try {
  //     let data = new User({
  //       name: req.body.name,
  //       email: req.body.email.toLowerCase(),
  //       password: await bcrypt.hash(req.body.password, 10),
  //     });
  //     let newdata = await data.save();
  //     res.status(201).json(newdata);
  //   }catch (error) {
  //   console.log("Signup Error:", error);

  //   res.status(500).json({
  //     message: error.message,
  //   });
  // }
  // }
  async createuser(req, res) {
    try {
      console.log("BODY:", req.body);

      if (!req.body) {
        return res.status(400).json({
          message: "Request body missing",
        });
      }

      let data = new User({
        name: req.body.name,
        email: req.body.email.toLowerCase(),
        password: await bcrypt.hash(req.body.password, 10),
      });

      let newdata = await data.save();

      res.status(201).json(newdata);
    } catch (error) {
      console.log("Signup Error:", error);

      res.status(500).json({
        message: error.message,
      });
    }
  },
  async loginuser(req, res) {
    try {
      let { email, password } = req.body;

      // Check Email
      let user = await User.findOne({ email: email.toLowerCase() });

      if (!user) {
        return res.status(404).json({ message: "email not found.." });
      }

      // Check Password
      let checkpassword = await bcrypt.compare(password, user.password);
      console.log(req.body);

      if (!checkpassword) {
        return res.status(404).json({ message: "wrong password.." });
      }

      res.status(200).json({ message: "login successfully..", user });
    } catch (error) {
      // console.log(error);

      res.status(500).json({
        message: "internal server error",
        error: error.message,
      });
    }
  },
  async updateuser(req, res) {
    try {
      let data = await User.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "user not found.." });
      }

      data.name = req.body.name || data.name;
      data.email = req.body.email || data.email;
      data.password =
        (await bcrypt.hash(req.body.password, 10)) || data.password;

      // Update Password
      // if(req.body.password){
      //     data.password = await bcrypt.hash(req.body.password,10)
      // }

      let newuser = await data.save();
      res.status(200).json(newuser);
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
  async deleteuser(req, res) {
    try {
      let data = await User.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "user not found.." });
      }

      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "user deleted successfully.." });
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
    }
  },
};
export default usercontroller;
