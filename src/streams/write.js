import fs from "node:fs";

const write = async () => {
  const writeStream = fs.createWriteStream(
    `${import.meta.dirname}/files/fileToWrite.txt`
  );

  process.stdin.on("data", (chunk) => {
    writeStream.write(chunk);
  });
};

await write();
