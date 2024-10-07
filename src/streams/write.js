import fs from "node:fs";
import { EOL } from "os";

const write = async () => {
  const __dirname = import.meta.dirname;

  const path = `${__dirname}/files/fileToWrite.txt`;
  const stream = fs.createWriteStream(path);

  process.stdout.write("Type something to save it in fileToWrite.txt" + EOL);
  process.stdout.write("To stop press CTRL + C" + EOL);

  process.stdin.on("data", (data) => {
    stream.write(data);
  });
};

await write();
