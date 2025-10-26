import zlib from "node:zlib";
import fs from "node:fs";

const decompress = async () => {
  const dirname = import.meta.dirname;
  const srcPath = `${dirname}/files/archive.gz`;
  const distPath = `${dirname}/files/fileToCompress.txt`;

  const gunzip = zlib.createGunzip();
  const readStream = fs.createReadStream(srcPath);
  const writeStream = fs.createWriteStream(distPath);

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
