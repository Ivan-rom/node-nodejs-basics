import fs from "node:fs";
import { createUnzip } from "node:zlib";

const decompress = async () => {
  const __dirname = import.meta.dirname;

  const sourceFile = `${__dirname}/files/archive.gz`;
  const distFile = `${__dirname}/files/fileToCompress.txt`;

  const unzip = createUnzip();
  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(distFile);

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
