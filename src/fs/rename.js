import fs from "node:fs";

const rename = async () => {
  const __dirname = import.meta.dirname;
  const source = `${__dirname}/files/wrongFilename.txt`;
  const dist = `${__dirname}/files/properFilename.md`;

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
