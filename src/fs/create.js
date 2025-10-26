import fs from "node:fs";

const FILE_NAME = "fresh.txt";
const DIRNAME = import.meta.dirname;

const create = async () => {
  fs.access(`${DIRNAME}/files/${FILE_NAME}`, fs.constants.F_OK, (err) => {
    if (!err) throw new Error("FS operation failed");

    fs.writeFile(
      `${DIRNAME}/files/${FILE_NAME}`,
      "I am fresh and young",
      (error) => {
        if (error) throw new Error("FS operation failed");
      }
    );
  });
};

await create();
