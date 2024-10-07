import fs from "node:fs";

const read = async () => {
  const __dirname = import.meta.dirname;
  const file = `${__dirname}/files/fileToRead.txt`;

  await fs.access(file, fs.constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");
  });

  await fs.readFile(file, "utf8", (err, data) => {
    if (err) console.log(err);

    console.log(data);
  });
};

await read();
