import fs from "node:fs";

const DIRNAME = import.meta.dirname;
const DIST_NAME = "files_copy";
const SRC_NAME = "files";

const copy = async () => {
  fs.access(`${DIRNAME}/${DIST_NAME}`, fs.constants.F_OK, (errDist) => {
    // if DIST_NAME already exists
    if (!errDist) throw new Error("FS operation failed");

    fs.access(`${DIRNAME}/${SRC_NAME}`, fs.constants.F_OK, (errSrc) => {
      // if SRC_NAME doesn't exists
      if (errSrc) throw new Error("FS operation failed");

      fs.cp(
        `${DIRNAME}/${SRC_NAME}`,
        `${DIRNAME}/${DIST_NAME}`,
        { recursive: true },
        (err) => {
          // if something went wrong
          if (err) throw new Error("FS operation failed");
        }
      );
    });
  });
};

await copy();
