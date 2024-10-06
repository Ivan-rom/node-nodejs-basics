import fs from "node:fs";
import { EOL } from "os";

const write = async () => {
  const path = "./src/streams/files/fileToWrite.txt";
  const stream = fs.createWriteStream(path);

  process.stdout.write("Type something to save it in fileToWrite.txt" + EOL);
  process.stdout.write("To stop press CTRL + C" + EOL);

  process.stdin.on("data", (data) => {
    stream.write(data);
  });
};

await write();
