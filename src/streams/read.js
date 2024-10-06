import { createReadStream } from "node:fs";
import { EOL } from "os";

const read = async () => {
  const stream = createReadStream(
    "./src/streams/files/fileToRead.txt",
    "utf-8"
  );

  stream.on("readable", () => {
    const data = stream.read();
    process.stdout.write(data + EOL);
  });
};

await read();
