import { Transform } from "node:stream";

const transform = async () => {
  const stream = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();
