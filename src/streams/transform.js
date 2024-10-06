import { EOL } from "os";

const transform = async () => {
  process.stdout.write("Type something to reverse it in the console" + EOL);
  process.stdout.write("To stop press CTRL + C" + EOL);

  process.stdin.on("data", (data) => {
    const reversedData = data.toString().split("").reverse().join("");

    process.stdout.write(reversedData + EOL);
  });
};

await transform();
