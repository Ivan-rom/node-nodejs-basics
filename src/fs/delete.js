import fs from "node:fs";

const FILE_PATH = `${import.meta.dirname}/files/fileToRemove.txt`;

const remove = async () => {
  fs.access(FILE_PATH, fs.constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");

    fs.rm(FILE_PATH, (error) => {
      if (error) throw new Error("FS operation failed");
    });
  });
};

await remove();
