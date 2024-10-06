import fs from "node:fs";
import { createUnzip } from "node:zlib";

const decompress = async () => {
  const sourceFile = "./src/zip/files/archive.gz";
  const distFile = "./src/zip/files/fileToCompress.txt";

  const unzip = createUnzip();
  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(distFile);

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
