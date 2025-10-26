import zlib from "node:zlib";
import fs from "node:fs";

const compress = async () => {
  const dirname = import.meta.dirname;
  const srcPath = `${dirname}/files/fileToCompress.txt`;
  const distPath = `${dirname}/files/archive.gz`;

  const gzip = zlib.createGzip();
  const readStream = fs.createReadStream(srcPath);
  const writeStream = fs.createWriteStream(distPath);

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
