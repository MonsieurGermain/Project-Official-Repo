import bcrypt from "bcrypt";
import { copyFile } from "fs";

import { UserModel } from "../../models";

import { generateRandomName } from "../../middlewares/filesUploads";

function createProfilePicture(name) {
  const randomImgName = generateRandomName(name, 17);
  const imgPath = `/userImg/${randomImgName}`;

  copyFile(
    './src/public/default/default-profile-pic.png',
    `./uploads${imgPath}`,
    (err) => {
      if (err) throw err;
    },
  );
  return imgPath;
}

const registerController = {
  get: (req, res) => {
    res.render("pages/authPages/register");
  },
  post: async (req, res) => {
    try {
        const { username, password } = req.body;
    
        if (await UserModel.findOne({ username })) throw new Error('This Username is Already Taken');
    
        const user = new UserModel({
          username,
          password: bcrypt.hashSync(password, 12),
          image: createProfilePicture('default-profile-pic.png'),
        });
    
        await user.save();
    
        req.flash('success', 'Account Successfully Created');
        res.redirect('/login');
      } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
      }
  }
};

export { registerController };
