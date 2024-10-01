import fs from "node:fs";

const remove = async () => {
  const path = "./src/fs/files";
  const file = `${path}/fileToRemove.txt`;

  await fs.access(file, fs.constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");
  });

  await fs.unlink(file, (error) => {
    if (error) console.log(error);
  });
};

await remove();
