import fs from "node:fs";

const DIRNAME = import.meta.dirname;
const DIST_NAME = "properFilename.md";
const SRC_NAME = "wrongFilename.txt";

const rename = async () => {
  fs.access(`${DIRNAME}/files/${DIST_NAME}`, fs.constants.F_OK, (errDist) => {
    // if DIST_NAME already exists
    if (!errDist) throw new Error("FS operation failed");

    fs.access(`${DIRNAME}/files/${SRC_NAME}`, fs.constants.F_OK, (errSrc) => {
      // if SRC_NAME doesn't exist
      if (errSrc) throw new Error("FS operation failed");

      fs.rename(
        `${DIRNAME}/files/${SRC_NAME}`,
        `${DIRNAME}/files/${DIST_NAME}`,
        (err) => {
          // if something went wrong
          if (err) throw new Error("FS operation failed");
        }
      );
    });
  });
};

await rename();
