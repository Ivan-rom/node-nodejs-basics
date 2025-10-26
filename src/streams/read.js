import fs from "node:fs";

const read = async () => {
  const stream = fs.createReadStream(
    `${import.meta.dirname}/files/fileToRead.txt`
  );
  stream.on("data", (chunk) => {
    process.stdout.write(`${chunk}\n`);
  });
};

await read();
