import fs from "node:fs";

const list = async () => {
  const path = "./src/fs/files";

  await fs.access(path, fs.constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");

    fs.readdir(path, { recursive: true }, (error, files) => {
      if (error) console.log(error);

      files.forEach((file) => {
        console.log(file);
      });
    });
  });
};

await list();
