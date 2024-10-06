import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { EOL } from "os";

const calculateHash = async () => {
  const hash = createHash("sha256");

  const stream = createReadStream(
    "./src/hash/files/fileToCalculateHashFor.txt"
  );

  stream
    .pipe(hash)
    .setEncoding("hex")
    .on("data", (data) => {
      process.stdout.write(data + EOL);
    });
};

await calculateHash();
