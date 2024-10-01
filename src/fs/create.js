import { writeFile, access, constants } from "node:fs";

const create = async () => {
  const folderPath = "./src/fs";
  const fileContent = "I am fresh and young";

  access(`${folderPath}/files/fresh.txt`, constants.F_OK, (err) => {
    if (err) {
      writeFile(`${folderPath}/files/fresh.txt`, fileContent, (error) => {
        if (error) {
          console.log(error);
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
