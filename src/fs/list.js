import fs from "node:fs";

const list = async () => {
  fs.readdir(`${import.meta.dirname}/files`, (error, files) => {
    if (error) throw new Error("FS operation failed");

    console.log(files);
  });
};

await list();
