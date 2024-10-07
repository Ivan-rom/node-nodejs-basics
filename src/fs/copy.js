import { cp, access, constants } from "node:fs";

const copy = async () => {
  const __dirname = import.meta.dirname;
  const source = `${__dirname}/files/`;
  const dist = `${__dirname}/files_copy/`;

  await access(dist, constants.F_OK, async (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }

    await cp(source, dist, { recursive: true }, (error) => {
      console.log(error);
    });
  });
};

await copy();
