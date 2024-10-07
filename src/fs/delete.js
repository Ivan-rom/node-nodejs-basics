import fs from "node:fs";

const remove = async () => {
  const __dirname = import.meta.dirname;
  const file = `${__dirname}/files/fileToRemove.txt`;

  await fs.access(file, fs.constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");
  });

  await fs.unlink(file, (error) => {
    if (error) console.log(error);
  });
};

await remove();
