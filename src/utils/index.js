import gm from "gm";

const resize = (image, width, height) => {
  return new Promise((resolve, reject) => {
    gm(image)
      .resize(width, height)
      .toBuffer((err, buffer) => {
        if (err) reject(err);
        resolve(buffer);
      });
  });
};

const noProfile = (image) => {
  return new Promise((resolve, reject) => {
    gm(image)
      .noProfile()
      .toBuffer((err, buffer) => {
        if (err) reject(err);
        resolve(buffer);
      });
  });
};

export {
  resize,
  noProfile
};
