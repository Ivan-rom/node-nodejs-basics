import { writeFile, access, constants } from "node:fs";

const create = async () => {
  const __dirname = import.meta.dirname;
  const fileDist = `${__dirname}/files/fresh.txt`;
  const fileContent = "I am fresh and young";

  access(fileDist, constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }

    writeFile(fileDist, fileContent, (error) => {
      if (error) {
        console.log(error);
      }
    });
  });
};

await create();
