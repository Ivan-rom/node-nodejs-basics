import fs from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
  const __dirname = import.meta.dirname;

  const sourceFile = `${__dirname}/files/fileToCompress.txt`;
  const distPath = `${__dirname}/files/archive.gz`;

  const gzip = createGzip();
  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(distPath);

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
