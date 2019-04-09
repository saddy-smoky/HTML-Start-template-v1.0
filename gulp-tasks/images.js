// packages
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sharp = require("sharp");

// specify transforms
const transforms = [
  {
    src: "./src/assets/img/stubs/*",
    dist: "./dist/img/stubs/_optimized/",
    options: {
      width: 1920,
      quality: 70
    }
  },
  {
    src: "./src/assets/img/stubs/*",
    dist: "./dist/img/stubs/_1440/",
    options: {
      width: 1440
    }
  },
  {
    src: "./src/assets/img/stubs/*",
    dist: "./dist/img/stubs/_600/",
    options: {
        width: 600
    }
  }
];

// resize images
function resizeImages(done) {
  transforms.forEach(function(transform) {
    let distDir = transform.dist;

    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    let files = glob.sync(transform.src);

    files.forEach(function(file) {
      let filename = path.basename(file);
      sharp(file)
        .resize(transform.options)
        .toFile(`${distDir}/${filename}`)
        .catch(err => {
          console.log(err);
        });
    });
  });
  done();
}

// exports (Common JS)
module.exports = {
  resize: resizeImages
};
