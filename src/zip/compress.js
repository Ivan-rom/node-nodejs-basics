import fs from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
  const sourceFile = "./src/zip/files/fileToCompress.txt";
  const distPath = "./src/zip/files/archive.gz";

  const gzip = createGzip();
  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(distPath);

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
