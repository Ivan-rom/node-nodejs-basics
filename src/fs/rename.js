import fs from "node:fs";

const rename = async () => {
  const path = "./src/fs/files";
  const source = `${path}/wrongFilename.txt`;
  const dist = `${path}/properFilename.md`;

  fs.access(source, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });

  fs.access(dist, fs.constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }

    fs.rename(source, dist, (error) => {
      if (error) console.log(error);
    });
  });
};

await rename();
