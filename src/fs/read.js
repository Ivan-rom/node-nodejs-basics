import fs from "node:fs";

const read = async () => {
  fs.readFile(
    `${import.meta.dirname}/files/fileToRead.txt`,
    "utf8",
    (err, data) => {
      if (err) throw new Error("FS operation failed");

      console.log(data);
    }
  );
};

await read();
